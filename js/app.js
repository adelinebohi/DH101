/**
 * DH101 - Critical Making & Digital Humanities Portfolio
 * Main Application Logic
 */

(function () {
  'use strict';

  // State
  const state = {
    currentTab: 'home',
    selectedMakeWeek: 1,
    selectedReflectWeek: 1,
    selectedPageId: 'about',
    theme: 'light',
    aiLogs: [...DH101_DATA.aiLogs]
  };

  /* --------------------------------------------------------------------------
     Minimal Lightweight Markdown Parser (Zero Dependencies)
     -------------------------------------------------------------------------- */
  function parseMarkdown(md) {
    if (!md) return '';
    let html = md;

    // Normalize newlines
    html = html.replace(/\r\n/g, '\n');

    // Code blocks with syntax fence
    html = html.replace(/```([a-z0-9]*)\n([\s\S]*?)```/g, function (_, lang, code) {
      const escaped = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      return `<pre><code class="language-${lang}">${escaped}</code></pre>`;
    });

    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

    // Headings
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Horizontal Rule
    html = html.replace(/^---$/gim, '<hr>');

    // Inline Code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Bold and Italic
    html = html.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    html = html.replace(/_([^_]+)_/g, '<em>$1</em>');

    // Images
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

    // Unordered lists
    html = html.replace(/^[-*] (.*$)/gim, '<ul><li>$1</li></ul>');
    html = html.replace(/<\/ul>\n<ul>/gim, '');

    // Ordered lists
    html = html.replace(/^\d+\.\s+(.*$)/gim, '<ol><li>$1</li></ol>');
    html = html.replace(/<\/ol>\n<ol>/gim, '');

    // Tables
    const tableRegex = /\|(.+)\|\n\|(?:[-:]+[-| :]*)\|\n((?:\|.*\|\n?)*)/g;
    html = html.replace(tableRegex, function (_, headerRow, bodyRows) {
      const headers = headerRow.split('|').filter(c => c.trim().length > 0).map(c => `<th>${c.trim()}</th>`).join('');
      const rows = bodyRows.trim().split('\n').map(row => {
        const cells = row.split('|').filter(c => c.trim().length > 0).map(c => `<td>${c.trim()}</td>`).join('');
        return `<tr>${cells}</tr>`;
      }).join('');
      return `<table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>`;
    });

    // Paragraphs (lines separated by double newlines that aren't wrapped in html tags)
    const blocks = html.split(/\n{2,}/);
    html = blocks.map(block => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (/^<(h[1-6]|ul|ol|pre|blockquote|table|hr)/i.test(trimmed)) {
        return trimmed;
      }
      return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
    }).join('\n\n');

    return html;
  }

  /* --------------------------------------------------------------------------
     Theme Management (Pastel Light / Dark Mode)
     -------------------------------------------------------------------------- */
  function initTheme() {
    const savedTheme = localStorage.getItem('dh101-theme');
    if (savedTheme) {
      state.theme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      state.theme = 'dark';
    } else {
      state.theme = 'light';
    }
    applyTheme(state.theme);

    // Watch for OS theme changes if user hasn't set explicit preference
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('dh101-theme')) {
          state.theme = e.matches ? 'dark' : 'light';
          applyTheme(state.theme);
        }
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      if (theme === 'dark') {
        themeBtn.innerHTML = '☀️';
        themeBtn.setAttribute('title', 'Switch to Pastel Light Mode');
        themeBtn.setAttribute('aria-label', 'Switch to Pastel Light Mode');
      } else {
        themeBtn.innerHTML = '🌙';
        themeBtn.setAttribute('title', 'Switch to Pastel Dark Mode');
        themeBtn.setAttribute('aria-label', 'Switch to Pastel Dark Mode');
      }
    }
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('dh101-theme', state.theme);
    applyTheme(state.theme);
  }

  /* --------------------------------------------------------------------------
     Navigation & Tab Routing
     -------------------------------------------------------------------------- */
  function handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    const [path, query] = hash.split('?');
    const params = new URLSearchParams(query || '');

    state.currentTab = path || 'home';

    if (params.has('week')) {
      const wk = parseInt(params.get('week'), 10);
      if (!isNaN(wk)) {
        state.selectedMakeWeek = wk;
        state.selectedReflectWeek = wk;
      }
    }

    if (params.has('page')) {
      state.selectedPageId = params.get('page');
    }

    renderCurrentView();
  }

  function switchTab(tabName, queryString = '') {
    window.location.hash = queryString ? `${tabName}?${queryString}` : tabName;
  }

  function renderCurrentView() {
    // Update active state in nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      const tab = link.getAttribute('data-tab');
      if (tab === state.currentTab) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile nav menu if open
    const navTabs = document.querySelector('.nav-tabs');
    if (navTabs) navTabs.classList.remove('open');

    // Hide all view sections
    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.remove('active');
    });

    // Activate the current view
    const targetSection = document.getElementById(`view-${state.currentTab}`);
    if (targetSection) {
      targetSection.classList.add('active');
    } else {
      const homeSection = document.getElementById('view-home');
      if (homeSection) homeSection.classList.add('active');
    }

    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Render specific tab contents
    if (state.currentTab === 'makes') {
      renderMakes();
    } else if (state.currentTab === 'reflections') {
      renderReflections();
    } else if (state.currentTab === 'pages') {
      renderCoursePages();
    } else if (state.currentTab === 'ai-log') {
      renderAiLogs();
    } else if (state.currentTab === 'cv') {
      renderCv();
    }
  }

  /* --------------------------------------------------------------------------
     Renderers
     -------------------------------------------------------------------------- */

  // 1. Home View Highlights
  function initHomeView() {
    const roadmapContainer = document.getElementById('home-weeks-grid');
    if (!roadmapContainer) return;

    roadmapContainer.innerHTML = DH101_DATA.weeks.map(w => `
      <div class="card-item">
        <div class="card-top">
          <span class="pastel-tag tag-${w.pastelColor}">Week ${w.num < 10 ? '0' + w.num : w.num}</span>
          <span class="pastel-tag" style="background:var(--bg-surface-subtle); color:var(--text-tertiary);">${w.tag}</span>
        </div>
        <h3 class="card-title">${w.title}</h3>
        <p class="card-desc">${w.prompt}</p>
        <div style="display:flex; gap:0.5rem; margin-top:auto;">
          <a href="#makes?week=${w.num}" class="card-footer-link">🛠️ Make &rarr;</a>
          <span style="color:var(--border-strong);">•</span>
          <a href="#reflections?week=${w.num}" class="card-footer-link">💭 Reflection &rarr;</a>
        </div>
      </div>
    `).join('');
  }

  // 2. Makes View
  function renderMakes() {
    const scroller = document.getElementById('makes-week-pills');
    const content = document.getElementById('make-detail-container');
    if (!scroller || !content) return;

    // Render pills
    scroller.innerHTML = DH101_DATA.weeks.map(w => `
      <button class="week-pill-btn ${w.num === state.selectedMakeWeek ? 'active' : ''}" data-week="${w.num}">
        <span class="week-pill-dot" style="background-color: var(--pastel-${w.pastelColor}-accent);"></span>
        <span>Week ${w.num}: ${w.title.split('–')[0]}</span>
      </button>
    `).join('');

    scroller.querySelectorAll('.week-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const wk = parseInt(btn.getAttribute('data-week'), 10);
        state.selectedMakeWeek = wk;
        switchTab('makes', `week=${wk}`);
      });
    });

    // Find active week
    const current = DH101_DATA.weeks.find(w => w.num === state.selectedMakeWeek) || DH101_DATA.weeks[0];

    content.innerHTML = `
      <div class="detail-card">
        <div class="detail-header">
          <div class="detail-title-group">
            <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
              <span class="pastel-tag tag-${current.pastelColor}">Week ${current.num} Make</span>
              <span class="pastel-tag" style="background: var(--bg-surface-subtle); color: var(--text-tertiary);">${current.tag}</span>
            </div>
            <h2>Week ${current.num} – ${current.title}</h2>
            <p style="color: var(--text-secondary); font-size: 0.96rem;">${current.artifactOverview}</p>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <a href="makes/week${current.num < 10 ? '0' + current.num : current.num}.md" class="btn-secondary" target="_blank">
              📄 View Markdown File
            </a>
            <a href="#reflections?week=${current.num}" class="btn-primary" style="padding: 0.55rem 1rem; font-size: 0.88rem;">
              💭 Week ${current.num} Reflection &rarr;
            </a>
          </div>
        </div>

        <div class="detail-prompt-box">
          <h4>Guiding Critical Inquiry</h4>
          <p>${current.prompt}</p>
        </div>

        <div class="subsections-grid">
          <div class="subsection-box">
            <h3>🎨 1. The Artifact</h3>
            <p>Physical or digital artifact produced for this week's exploration.</p>
            <ul>
              <li>Deconstructed media, code prototype, or visual remix.</li>
              <li>Includes screenshots, live links, or embedded visual documentation.</li>
              <li>Examines material properties and computational affordances.</li>
            </ul>
          </div>

          <div class="subsection-box">
            <h3>⚙️ 2. Process Notes</h3>
            <p>Methodological choices and technical implementation details.</p>
            <ul>
              <li><strong>Tools Deployed:</strong> Markdown, web tools, image editors, generative APIs.</li>
              <li><strong>Pivot Points:</strong> Unanticipated roadblocks and design adjustments.</li>
              <li><strong>Iterations:</strong> How the artifact developed from concept to finished state.</li>
            </ul>
          </div>

          <div class="subsection-box">
            <h3>💭 3. Critical Reflection</h3>
            <p>200–300 word critical synthesis contextualizing this make within DH discourse.</p>
            <ul>
              <li>Addresses the week's prompt directly.</li>
              <li>Connects hands-on making with broader cultural or ethical implications.</li>
            </ul>
          </div>

          <div class="subsection-box">
            <h3>🤖 4. Attribution & AI Use</h3>
            <p>Radical transparency log for this critical make.</p>
            <ul>
              <li><strong>AI Tools Used:</strong> Model, version, and prompting strategy.</li>
              <li><strong>Generated vs. Edited:</strong> Clear provenance of what machine generated vs. what human authored.</li>
              <li><strong>Critical Rationale:</strong> Why specific algorithmic options were accepted or discarded.</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  // 3. Reflections View
  function renderReflections() {
    const scroller = document.getElementById('reflections-week-pills');
    const content = document.getElementById('reflections-detail-container');
    if (!scroller || !content) return;

    scroller.innerHTML = DH101_DATA.weeks.map(w => `
      <button class="week-pill-btn ${w.num === state.selectedReflectWeek ? 'active' : ''}" data-week="${w.num}">
        <span class="week-pill-dot" style="background-color: var(--pastel-${w.pastelColor}-accent);"></span>
        <span>Week ${w.num}</span>
      </button>
    `).join('');

    scroller.querySelectorAll('.week-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const wk = parseInt(btn.getAttribute('data-week'), 10);
        state.selectedReflectWeek = wk;
        switchTab('reflections', `week=${wk}`);
      });
    });

    const current = DH101_DATA.weeks.find(w => w.num === state.selectedReflectWeek) || DH101_DATA.weeks[0];

    content.innerHTML = `
      <div class="detail-card">
        <div class="detail-header">
          <div class="detail-title-group">
            <span class="pastel-tag tag-${current.pastelColor}" style="margin-bottom: 0.5rem;">Week ${current.num} Reflection</span>
            <h2>Week ${current.num}: ${current.title}</h2>
            <p style="color: var(--text-secondary);">${current.tag} Inquiry</p>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <a href="reflections/week${current.num < 10 ? '0' + current.num : current.num}.md" class="btn-secondary" target="_blank">
              📄 View Markdown
            </a>
            <a href="#makes?week=${current.num}" class="btn-secondary">
              🛠️ View Week ${current.num} Make
            </a>
          </div>
        </div>

        <div class="detail-prompt-box">
          <h4>Reflect ${current.num} Prompt</h4>
          <p>${current.prompt}</p>
        </div>

        <div class="subsections-grid">
          <div class="subsection-box">
            <h3>💡 Prompt 1: Key Insight</h3>
            <p>What surprised you or challenged your preconceptions this week? How does this question redefine our relationship with computational artifacts?</p>
          </div>

          <div class="subsection-box">
            <h3>🔍 Prompt 2: Evidence & Artifact</h3>
            <p>Draw directly from your weekly make, a course reading, or class experiment. Contrast theoretical assumptions with empirical outcomes.</p>
          </div>

          <div class="subsection-box">
            <h3>🚀 Prompt 3: Next Steps & Inquiries</h3>
            <p>What technical skill or theoretical puzzle remains unresolved? Where should this critical inquiry lead as we advance through the syllabus?</p>
          </div>
        </div>

        <div style="margin-top: 2rem; padding: 1.25rem; background: var(--bg-surface-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.4rem;">📘 Reflection Writing Guidelines (from Markdown Guide)</h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
            Keep responses between 200–300 words. Prefer concise paragraphs and structured bullet points. When discussing AI contributions, be clear about authorship boundaries.
          </p>
        </div>
      </div>
    `;
  }

  // 4. Course Pages View
  function renderCoursePages() {
    const listContainer = document.getElementById('pages-cards-container');
    const articleContainer = document.getElementById('page-article-view');
    if (!listContainer || !articleContainer) return;

    // Render selector cards
    listContainer.innerHTML = DH101_DATA.pages.map(p => `
      <div class="card-item ${p.id === state.selectedPageId ? 'active-page' : ''}" style="cursor: pointer;" data-page-id="${p.id}">
        <div class="card-top">
          <span class="card-icon">${p.icon}</span>
          <span class="pastel-tag tag-lavender">${p.category}</span>
        </div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.subtitle}</p>
        <span class="card-footer-link">Read Page &rarr;</span>
      </div>
    `).join('');

    listContainer.querySelectorAll('.card-item').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-page-id');
        state.selectedPageId = id;
        switchTab('pages', `page=${id}`);
      });
    });

    // Render selected page article
    const activePage = DH101_DATA.pages.find(p => p.id === state.selectedPageId) || DH101_DATA.pages[0];
    articleContainer.innerHTML = `
      <div class="markdown-article">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <span class="pastel-tag tag-mint">${activePage.category}</span>
          <a href="${activePage.file}" class="btn-secondary" style="font-size: 0.82rem; padding: 0.35rem 0.75rem;" target="_blank">
            📄 Source: ${activePage.file}
          </a>
        </div>
        ${parseMarkdown(activePage.content)}
      </div>
    `;
  }

  // 5. AI Log View
  function renderAiLogs() {
    const timeline = document.getElementById('ai-logs-timeline');
    if (!timeline) return;

    timeline.innerHTML = state.aiLogs.map((log, index) => `
      <div class="log-card">
        <div class="log-meta">
          <span class="pastel-tag tag-lavender">${log.tool}</span>
          <span class="log-date">${log.date}</span>
        </div>
        <div class="log-row">
          <strong>Task / Prompt:</strong> <span>${log.task}</span>
        </div>
        <div class="log-row">
          <strong>What AI Suggested:</strong> <span>${log.suggested}</span>
        </div>
        <div class="log-row">
          <strong>Accepted / Changed:</strong> <span>${log.decided}</span>
        </div>
        <div class="log-row" style="margin-bottom: 0;">
          <strong>Scholarly Rationale:</strong> <span>${log.why}</span>
        </div>
      </div>
    `).join('');
  }

  function setupAiLogForm() {
    const form = document.getElementById('ai-log-form');
    const copyBtn = document.getElementById('copy-markdown-btn');
    const outputBox = document.getElementById('generated-markdown-box');
    const snippetPre = document.getElementById('markdown-snippet-code');

    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();

      const newLog = {
        date: document.getElementById('log-date').value || new Date().toISOString().slice(0, 10),
        tool: document.getElementById('log-tool').value.trim() || 'Generative Model',
        task: document.getElementById('log-task').value.trim() || 'Exploration',
        suggested: document.getElementById('log-suggested').value.trim() || 'N/A',
        decided: document.getElementById('log-decided').value.trim() || 'N/A',
        why: document.getElementById('log-why').value.trim() || 'N/A'
      };

      state.aiLogs.unshift(newLog);
      renderAiLogs();

      // Generate markdown formatted block
      const mdSnippet = `# AI Use Log\n\n**Date:** ${newLog.date}\n\n**Tool Used:** ${newLog.tool}\n\n**Task / Prompt:**\n${newLog.task}\n\n**What the AI Suggested:**\n${newLog.suggested}\n\n**What I Accepted, Changed, or Rejected:**\n${newLog.decided}\n\n**Why:**\n${newLog.why}\n`;

      if (outputBox && snippetPre) {
        snippetPre.textContent = mdSnippet;
        outputBox.style.display = 'block';
      }

      form.reset();
      document.getElementById('log-date').value = new Date().toISOString().slice(0, 10);
    });

    if (copyBtn && snippetPre) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(snippetPre.textContent).then(() => {
          copyBtn.textContent = '✓ Copied to Clipboard!';
          setTimeout(() => {
            copyBtn.textContent = '📋 Copy Markdown Snippet';
          }, 2000);
        });
      });
    }
  }

  // 6. CV / Resume View (User Requested)
  function renderCv() {
    const container = document.getElementById('cv-sheet-content');
    if (!container) return;

    const cv = DH101_DATA.cv;

    container.innerHTML = `
      <div class="cv-sheet">
        <!-- CV Header -->
        <header class="cv-header">
          <div>
            <h1 class="cv-name">${cv.name}</h1>
            <p class="cv-headline">${cv.title}</p>
            <ul class="cv-contacts">
              <li class="cv-contact-item">📍 ${cv.location}</li>
              <li class="cv-contact-item">•</li>
              <li class="cv-contact-item">📧 <a href="mailto:${cv.email}">${cv.email}</a></li>
              <li class="cv-contact-item">•</li>
              <li class="cv-contact-item">🐙 <a href="${cv.github}" target="_blank">GitHub Profile</a></li>
              <li class="cv-contact-item">•</li>
              <li class="cv-contact-item">🌐 <a href="${cv.portfolio}">DH101 Portfolio</a></li>
            </ul>
          </div>
          <div>
            <span class="pastel-tag tag-lavender" style="font-size: 0.85rem; padding: 0.35rem 0.85rem;">Digital Humanities Scholar</span>
          </div>
        </header>

        <!-- Summary -->
        <section class="cv-section">
          <h2 class="cv-section-title"><span>✨</span> Profile Summary</h2>
          <p class="cv-summary-text">${cv.summary}</p>
        </section>

        <!-- Education -->
        <section class="cv-section">
          <h2 class="cv-section-title"><span>🎓</span> Education</h2>
          ${cv.education.map(edu => `
            <div class="cv-entry">
              <div class="cv-entry-head">
                <span class="cv-entry-title">${edu.degree}</span>
                <span class="cv-entry-date">${edu.dates}</span>
              </div>
              <div class="cv-entry-subtitle">${edu.institution}</div>
              <ul class="cv-entry-bullets">
                ${edu.details.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </section>

        <!-- Academic & Research Interests -->
        <section class="cv-section">
          <h2 class="cv-section-title"><span>🔬</span> Academic & Research Interests</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
            ${cv.interests.map(intr => `
              <div style="background: var(--bg-surface-subtle); padding: 1.15rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
                <strong style="color: var(--color-primary); font-size: 0.95rem; display: block; margin-bottom: 0.35rem;">${intr.topic}</strong>
                <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">${intr.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Skills & Methods -->
        <section class="cv-section">
          <h2 class="cv-section-title"><span>🛠️</span> Skills, Tools & Methodologies</h2>
          <div class="cv-skills-grid">
            ${Object.entries(cv.skills).map(([category, skillList]) => `
              <div class="cv-skill-card">
                <div class="cv-skill-title">${category}</div>
                <div class="cv-skill-badges">
                  ${skillList.map(skill => `<span class="cv-skill-pill">${skill}</span>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Projects & Critical Making -->
        <section class="cv-section">
          <h2 class="cv-section-title"><span>📁</span> Selected Critical Making & Projects</h2>
          ${cv.projects.map(proj => `
            <div class="cv-entry">
              <div class="cv-entry-head">
                <span class="cv-entry-title">${proj.title}</span>
                <span class="cv-entry-date">${proj.date}</span>
              </div>
              <div class="cv-entry-subtitle">${proj.role}</div>
              <ul class="cv-entry-bullets">
                ${proj.highlights.map(hl => `<li>${hl}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </section>

        <!-- Affiliations & Engagement -->
        <section class="cv-section" style="margin-bottom: 0;">
          <h2 class="cv-section-title"><span>🌱</span> Scholarly Activities & Engagement</h2>
          <ul class="cv-entry-bullets">
            ${cv.affiliations.map(aff => `<li>${aff}</li>`).join('')}
          </ul>
        </section>
      </div>
    `;
  }

  /* --------------------------------------------------------------------------
     Initialization
     -------------------------------------------------------------------------- */
  function init() {
    initTheme();
    initHomeView();
    setupAiLogForm();

    // Theme toggle button click
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }

    // Mobile nav toggle
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const navTabs = document.querySelector('.nav-tabs');
    if (mobileBtn && navTabs) {
      mobileBtn.addEventListener('click', () => {
        navTabs.classList.toggle('open');
      });
    }

    // Print CV button
    const printCvBtn = document.getElementById('print-cv-btn');
    if (printCvBtn) {
      printCvBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleRoute);

    // Initial route handling
    handleRoute();

    // Today's date default in AI log form
    const dateInput = document.getElementById('log-date');
    if (dateInput) {
      dateInput.value = new Date().toISOString().slice(0, 10);
    }
  }

  // Run on DOM content loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
