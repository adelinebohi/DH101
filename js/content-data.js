// DH101 Content Data Store
// Provides all structured content, reflections, weekly makes, course pages, and CV data.

const DH101_DATA = {
  course: {
    code: "DH 101",
    title: "Critical Making & Digital Humanities",
    author: "Adeline Bohi",
    githubRepo: "https://github.com/adelinebohi/DH101",
    authorGithub: "https://github.com/adelinebohi",
    subtitle: "A digital portfolio exploring critical making, generative algorithms, labor, ecology, and computational culture.",
    semester: "Fall 2026",
    intro: "Hello, DH! This digital portfolio documents my hands-on critical making, process notes, AI interaction logs, and weekly theoretical reflections throughout this semester in Digital Humanities 101. Through iterative fabrication, reverse engineering, distant reading, and counter-mapping, this site critically examines the intersections of technology, culture, and ethics."
  },

  weeks: [
    {
      num: 1,
      title: "Reverse Engineering",
      tag: "Deconstruction",
      pastelColor: "lavender",
      prompt: "What counts as “making” in the age of AI? What might be gained/lost when machines participate in making?",
      artifactOverview: "Deconstructing an everyday digital or algorithmic artifact into its component layers, examining black-boxed assumptions.",
      hasMakeFile: true,
      hasReflection: true
    },
    {
      num: 2,
      title: "Human vs. Pattern",
      tag: "Ontology",
      pastelColor: "mint",
      prompt: "Can AI help us define what it means to be human, or does it reduce us to patterns?",
      artifactOverview: "Examining pattern recognition versus lived human experience in digital humanities inquiry.",
      hasMakeFile: false,
      hasReflection: true
    },
    {
      num: 3,
      title: "Selfie & Identity",
      tag: "Identity & Vision",
      pastelColor: "rose",
      prompt: "What does “authenticity” mean when identity is co-constructed with AI?",
      artifactOverview: "Investigating facial recognition, generative self-portraits, and algorithmic self-presentation.",
      hasMakeFile: true,
      hasReflection: true
    },
    {
      num: 4,
      title: "Comic & Storytelling",
      tag: "Narrative",
      pastelColor: "butter",
      prompt: "Is AI a collaborator, tool, or plagiarist in storytelling?",
      artifactOverview: "Sequential narrative generation blending human scripting with algorithmic image framing.",
      hasMakeFile: true,
      hasReflection: true
    },
    {
      num: 5,
      title: "GIF & Remix Culture",
      tag: "Remix & Appropriation",
      pastelColor: "sky",
      prompt: "How does AI alter authorship and remix culture? Who owns AI-made art?",
      artifactOverview: "Micro-animation loop, remixing historical digital media with synthetic perturbations.",
      hasMakeFile: true,
      hasReflection: true
    },
    {
      num: 6,
      title: "Text & Distant Reading",
      tag: "Cultural Analytics",
      pastelColor: "orchid",
      prompt: "What do we gain/lose when machines “read” literature for us?",
      artifactOverview: "Corpus analysis and n-gram computational visualization of literary and historical archives.",
      hasMakeFile: true,
      hasReflection: true
    },
    {
      num: 7,
      title: "Mapping AI Worlds",
      tag: "Cartography & Supply Chains",
      pastelColor: "mint",
      prompt: "How does AI reshape global geographies of power, labor, and environment?",
      artifactOverview: "Critical counter-mapping of server hubs, subsea cables, and mineral extraction zones.",
      hasMakeFile: true,
      hasReflection: true
    },
    {
      num: 8,
      title: "Networks of Knowledge & Power",
      tag: "Network Analysis",
      pastelColor: "butter",
      prompt: "Who is visible/invisible in AI networks? How does visualization reveal or obscure power?",
      artifactOverview: "Graph topology mapping citation networks and institutional gatekeeping in AI datasets.",
      hasMakeFile: true,
      hasReflection: true
    },
    {
      num: 9,
      title: "Bots & Generators",
      tag: "Procedural Generation",
      pastelColor: "lavender",
      prompt: "What is creativity when AI can generate endlessly? Where is the human in generative work?",
      artifactOverview: "Autonomous or semi-autonomous generative text bots interrogating endless repetition.",
      hasMakeFile: true,
      hasReflection: true
    },
    {
      num: 10,
      title: "Games & Play",
      tag: "Interactive Systems",
      pastelColor: "rose",
      prompt: "How does AI change our relationship to play, rules, and narrative?",
      artifactOverview: "Twine or interactive procedural experience exploring algorithmic choices and agency.",
      hasMakeFile: true,
      hasReflection: true
    },
    {
      num: 11,
      title: "AI & Labor",
      tag: "Invisible Labor",
      pastelColor: "sky",
      prompt: "Who does the invisible work of AI, and who profits from it?",
      artifactOverview: "Data annotator tracking and investigation of global gig labor fueling foundation models.",
      hasMakeFile: true,
      hasReflection: true
    },
    {
      num: 12,
      title: "AI & Ecology",
      tag: "Ecological Footprint",
      pastelColor: "mint",
      prompt: "Is AI sustainable? What ecological trade-offs are we willing to accept?",
      artifactOverview: "Carbon, megawatt, and water consumption accounting for model inference cycles.",
      hasMakeFile: true,
      hasReflection: true
    },
    {
      num: 13,
      title: "Futures of AI & Humanity",
      tag: "Speculative Futures",
      pastelColor: "orchid",
      prompt: "Do we imagine AI futures as utopian, dystopian, or something in between? What do those visions reveal about us?",
      artifactOverview: "Speculative design scenario projecting algorithmic governance 20 years into the future.",
      hasMakeFile: true,
      hasReflection: true
    }
  ],

  pages: [
    {
      id: "about",
      title: "About Me",
      subtitle: "Scholar, Student, and Critical Maker in Digital Humanities",
      category: "Personal & Academic Bio",
      icon: "👤",
      file: "pages/about.md",
      content: `# About Me\n\nWelcome to my critical making portfolio for **DH 101: Critical Making & Digital Humanities**.\n\n### Who I Am\nI am **Adeline Bohi**, an undergraduate scholar passionate about exploring how digital technologies reshape culture, identity, and power relations. My work resides at the intersection of media theory, critical making, and digital humanities methods.\n\n### Scholarly Interests\n- **Critical AI Studies**: Scrutinizing the material supply chains, labor dynamics, and epistemic biases embedded in generative algorithms.\n- **Data Feminism & Ethics**: Interrogating who counts, who is seen, and whose labor is erased in computational datasets.\n- **Tactile & Critical Making**: Believing that we best understand technological systems when we take them apart, build them from scratch, or create intentional disruptions.\n- **Open Knowledge**: Building accessible, open-web digital resources that prioritize transparency and sustainability.`
    },
    {
      id: "how-i-use-ai",
      title: "How I Use AI",
      subtitle: "My Personal & Academic Framework for Algorithmic Collaboration",
      category: "Methodology & Provenance",
      icon: "🤖",
      file: "pages/how-i-use-ai.md",
      content: `# How I Use AI\n\n### Guiding Philosophy\nIn DH 101, I approach artificial intelligence not as an oracle or a substitute for critical thought, but as an **interlocutor, aesthetic catalyst, and object of inquiry**.\n\n### My Principles for AI Engagement\n\n1. **Radical Transparency & Provenance**\n   - Whenever generative AI is deployed in drafting code, conceptual brainstorming, or media creation, every prompt, response, and alteration is recorded in my **AI Use Log**.\n\n2. **Active Revision & Human Authorship**\n   - I never accept raw generative outputs uncritically. Every synthesized paragraph or asset is subjected to rigorous interrogation, structural revision, and aesthetic intent.\n\n3. **Labor & Environmental Consciousness**\n   - I remain conscious of the energy and water costs of intensive model prompting, selecting lightweight models and minimizing redundant generation cycles.\n\n4. **Critical Skepticism**\n   - I actively look for hallucinations, cultural biases, and homogenizing tropes produced by large models, treating these defects as revealing cultural data points rather than simple glitches.`
    },
    {
      id: "sustainability",
      title: "Sustainability & Ethics",
      subtitle: "Reflections on the Environmental & Human Cost of Computation",
      category: "Ethics & Ecology",
      icon: "🌱",
      file: "pages/sustainability.md",
      content: `# Sustainability & Ethics\n\n### Beyond the Cloud: Material Realities\nDigital technologies are frequently marketed as weightless, ethereal, and clean. In reality, the computational infrastructure supporting modern AI depends heavily on finite terrestrial resources:\n\n- **Freshwater Consumption**: Cooling data centers evaporates millions of gallons of potable water from stressed watersheds.\n- **Energy Footprint**: Training and continuous inference for multibillion-parameter models demand enormous megawatt outputs, often powered by fossil fuels.\n- **Mineral Extraction**: Rare earth minerals, lithium, and cobalt are extracted through hazardous labor conditions across the Global South.\n\n### Ethical Commitments in this Portfolio\n- **Low-Impact Web Architecture**: This website is built without heavy JavaScript frameworks or unnecessary background analytics, drastically lowering client and server energy consumption.\n- **Systemic Critique**: Throughout our weekly makes, we do not shy away from exposing the socio-ecological tradeoffs of algorithmic hype.`
    },
    {
      id: "accessibility",
      title: "Accessibility",
      subtitle: "Commitment to Inclusive & Accessible Digital Scholarship",
      category: "Design & Inclusion",
      icon: "♿",
      file: "pages/accessibility.md",
      content: `# Accessibility Statement\n\n### Core Commitment\nDigital humanities projects should be accessible to everyone regardless of physical ability, device constraints, or assistive technology needs.\n\n### Accessibility Features of this Portfolio\n- **High Contrast Pastel Modes**: Both Light and Dark color schemes are engineered to fulfill WCAG 2.1 AA contrast requirements for readable text.\n- **Semantic HTML5**: Native semantic milestones (\`<header>\`, \`<nav>\`, \`<main>\`, \`<article>\`, \`<footer>\`) provide clear navigation paths for screen readers.\n- **Keyboard Navigable**: All tabs, week switchers, and dark mode toggles are accessible via keyboard focus and \`Tab\` / \`Enter\` / \`Space\` strokes.\n- **Descriptive Image Alt Text**: Images and embedded artifacts include comprehensive alternative text capturing their analytical relevance.\n- **Reduced Motion**: Respects the user's operating system setting for \`prefers-reduced-motion\` to disable non-essential animations.`
    },
    {
      id: "markdown-guide",
      title: "Markdown Guide",
      subtitle: "Reference and Best Practices for Digital Humanities Writing",
      category: "Course Toolkit",
      icon: "📝",
      file: "pages/markdown-guide.md",
      content: `# Markdown Guide & Reflection Template\n\n### Formatting Reference\nMarkdown is the lingua franca of accessible, portable digital publishing. It separates clean structural markup from presentation.\n\n| Markdown Syntax | Output Purpose |\n|---|---|\n| \`# Heading 1\` | Document Title |\n| \`## Heading 2\` | Section Headers |\n| \`**bold**\` / \`*italic*\` | Emphasis & Cadence |\n| \`[Text](url)\` | Hyperlinks |\n| \`![Alt text](path)\` | Accessible Media Embedding |\n| \`\`\`code\`\`\` | Code & Command Fences |\n| \`> Blockquote\` | Scholarly Citations & Prompts |\n\n### Reflection Structure\nEach week's reflection should clearly address:\n1. **Key Insight**: What surprised you or shifted your perspective?\n2. **Evidence & Artifact**: Contextualize a making experiment or reading.\n3. **Future Trajectory**: What critical inquiries will you pursue next?`
    }
  ],

  aiLogs: [
    {
      date: "2026-09-18",
      tool: "Claude 3.5 Sonnet / Anthropic",
      task: "Brainstorming conceptual metaphors for Reverse Engineering week 1 artifact",
      suggested: "Suggested dissecting a mechanical watch vs. a neural network token prediction pipeline.",
      decided: "Selected the neural network token prediction comparison because it exposes how probabilistic text creates an illusion of agency.",
      why: "Provides a sharper critique of the myth of artificial consciousness for the DH101 critical reflection."
    },
    {
      date: "2026-09-21",
      tool: "Midjourney v6",
      task: "Generating contrasting imagery for 'Selfie & Identity' week 3 exploration",
      suggested: "Generated glossy, hyper-idealized digital avatar portraits with synthetic lighting.",
      decided: "Used the images alongside intentionally degraded, pixelated glitched versions to demonstrate the algorithmic smoothing of human imperfections.",
      why: "Illustrates the tension between computational homogenization and raw human identity."
    },
    {
      date: "2026-09-23",
      tool: "Google Gemini",
      task: "Refining responsive pastel CSS custom properties and dark mode color contrast ratios",
      suggested: "Recommended using HSL pastel tints with dark slate charcoal bases and WCAG AA compliant text colors.",
      decided: "Adopted the color tokens with custom soft lavender and sage mint highlights.",
      why: "Ensured the website achieved both a lovely aesthetic and verified accessibility compliance."
    }
  ],

  cv: {
    name: "Adeline Bohi",
    title: "Digital Humanities Scholar & Critical Maker",
    location: "United States",
    email: "adelinebohi@example.edu",
    github: "https://github.com/adelinebohi",
    portfolio: "https://adelinebohi.github.io/DH101/",
    summary: "Undergraduate researcher in Digital Humanities with a dedicated focus on critical making, AI ethics, cultural analytics, and accessible web experiences. Proven background combining digital media fabrication with rigorous theoretical analysis.",
    education: [
      {
        degree: "Bachelor of Arts in Digital Humanities & Media Studies",
        institution: "University Program",
        dates: "2023 – Expected May 2027",
        details: [
          "Core Studies: Critical Making & Digital Humanities (DH101), Cultural Analytics, Web Technologies, Data Feminism, History of Computation.",
          "Honors: Dean's Honor Roll; Undergraduate Research Grant Nominee."
        ]
      }
    ],
    interests: [
      {
        topic: "Critical AI & Algorithmic Studies",
        desc: "Investigating the political economy, training dataset bias, and resource extraction underlying large generative models."
      },
      {
        topic: "Critical Making & Physical Computing",
        desc: "Engaging in hands-on deconstruction, reverse engineering, and tactile interventions to demystify black-boxed digital systems."
      },
      {
        topic: "Distant Reading & Cultural Analytics",
        desc: "Applying computational text analysis, corpus linguistics, and network graphs to examine historical and literary discourse."
      },
      {
        topic: "Accessible & Sustainable Web Craft",
        desc: "Designing lightweight, open-access, carbon-conscious web architectures that adhere strictly to WCAG 2.1 AA standards."
      }
    ],
    skills: {
      "Scholarly Methods": ["Critical Making", "Distant Reading", "AI Provenance Tracking", "Counter-Mapping", "Discourse Analysis", "Speculative Design"],
      "Web & Development": ["HTML5 Semantic Markup", "CSS3 / Modern CSS (Variables, Grid, Flexbox)", "Vanilla JavaScript (ES6+)", "Git & GitHub Pages", "Markdown / Static Sites"],
      "Tools & Software": ["Visual Studio Code", "Voyant Tools", "Twine", "Figma", "Gephi", "Command Line / Shell"],
      "Design & Aesthetics": ["Accessible Color Theory", "Pastel Design Systems", "Typography & Layout", "Data Visualization", "Print & PDF Design"]
    },
    projects: [
      {
        title: "DH101 Critical Making Portfolio",
        role: "Lead Creator & Developer",
        date: "Fall 2026",
        highlights: [
          "Developed an interactive digital humanities portfolio housing 12 critical making projects and 13 weekly scholarly reflections.",
          "Engineered a dual-theme pastel design system featuring an accessible dark mode and offline zero-dependency architecture.",
          "Implemented an interactive AI Use Log tracking generative prompts, machine suggestions, and human scholarly agency."
        ]
      },
      {
        title: "Distant Reading & Corpus Analysis of Literary Archives",
        role: "Researcher",
        date: "2026",
        highlights: [
          "Performed n-gram frequency distribution and collocational analysis across a digital corpus to detect evolving gendered vocabularies.",
          "Contrasted computational algorithmic findings against close-reading humanistic critiques."
        ]
      },
      {
        title: "Supply Chain Counter-Mapping of Generative AI",
        role: "Researcher & Visualizer",
        date: "2026",
        highlights: [
          "Researched and mapped global data center water footprints and mineral extraction corridors supporting contemporary transformer models.",
          "Produced a visual essay advocating for sustainable compute policies in university research labs."
        ]
      }
    ],
    affiliations: [
      "Digital Humanities Undergraduate Collective — Active Member",
      "Critical AI Reading Group — Discussion Facilitator",
      "Sustainable Computing & Open Web Initiative — Student Participant"
    ]
  }
};
