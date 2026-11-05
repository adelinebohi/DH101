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
      makeNum: null,
      title: "Introduction & Reverse Engineering",
      tag: "Foundations",
      pastelColor: "lavender",
      prompt: "What counts as “making” in the age of AI? What might be gained/lost when machines participate in making?",
      artifactOverview: "Course orientation, foundational concepts of critical making, and digital deconstruction.",
      hasMakeFile: false,
      hasReflection: true
    },
    {
      num: 2,
      makeNum: null,
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
      makeNum: 1,
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
      makeNum: 2,
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
      makeNum: 3,
      title: "GIF & Remix Culture",
      tag: "Remix & Appropriation",
      pastelColor: "sky",
      prompt: "How does AI alter authorship and remix culture? Who owns AI-made art?",
      artifactOverview: "Micro-animation loop, remixing athletic motion and digital media into stylized repetition.",
      hasMakeFile: true,
      hasReflection: true
    },
    {
      num: 6,
      makeNum: 4,
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
      makeNum: 5,
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
      makeNum: 6,
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
      makeNum: 7,
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
      makeNum: 8,
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
      makeNum: 9,
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
      makeNum: 10,
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
      makeNum: 11,
      title: "Futures of AI & Humanity",
      tag: "Speculative Futures",
      pastelColor: "orchid",
      prompt: "Do we imagine AI futures as utopian, dystopian, or something in between? What do those visions reveal about us?",
      artifactOverview: "Speculative design scenario projecting algorithmic governance 20 years into the future.",
      hasMakeFile: true,
      hasReflection: true
    },
    {
      num: 14,
      makeNum: 12,
      title: "Final Showcase & Synthesis",
      tag: "Final Synthesis",
      pastelColor: "butter",
      prompt: "How has your understanding of critical making, digital humanities, and AI agency evolved over this semester? What responsibilities do critical makers hold?",
      artifactOverview: "Culminating semester portfolio synthesis and curated showcase of critical making artifacts.",
      hasMakeFile: true,
      hasReflection: true
    }
  ],

  reflections: {
    1: "",
    2: "",
    3: "When identity is being co-constructed with AI, the authenticity is not the same as just coming from yourself. When you are being authentic you are being true to yourself, and is coming from you. When AI is used to help portray your identity, you have to give the AI direction on what to know about your identity. This is where AI takes away the authenticity, because AI will create assumptions within where you may not be as specific. You are the one who can input the information you want AI to show your identity as, which can leave gaps for the AI to make assumptions. Although that doesn't mean you should tell AI to create a version of your identity you want to be perceived as, and not your true identity.",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: ""
  },

  makes: {
    9: `# Week 9 – Make 7: Bots & Generators

## The Artifact

For this week's Critical Make on **Bots & Generators**, I built **DH Title Bot**, a text generator that writes fake digital humanities paper titles from a 13-symbol Tracery-style grammar. Press Generate for a new title, Generate 10 for a batch, and Keep to save the ones you like. Keeping is the curation step.

<div style="text-align: center; margin: 2rem auto; max-width: 720px; background: var(--bg-surface-subtle); padding: 1.5rem; border-radius: 14px; border: 1px solid var(--border-subtle); box-shadow: var(--shadow-sm);">
  <div style="width: 100%; overflow: hidden; border-radius: 10px; border: 1px solid var(--border-subtle); background: #ffffff;">
    <iframe style="width: 100%; min-width: 320px; height: 620px; border: none; display: block;" src="makes/bot/index.html" title="DH Title Bot - live generator" loading="lazy"></iframe>
  </div>
  <p style="margin-top: 0.85rem; font-weight: 600; font-size: 0.95rem; color: var(--text-primary);">Figure 1: DH Title Bot (live)</p>
  <a href="makes/bot/index.html" target="_blank" rel="noopener" class="btn-secondary" style="font-size: 0.82rem; padding: 0.35rem 0.85rem; text-decoration: none; display: inline-block;">🤖 Open the bot full screen &rarr;</a>
</div>

Files: [grammar.json](makes/bot/grammar.json) · [Round 1 titles (60)](makes/bot/round-1-titles.txt) · [Round 2 titles (60)](makes/bot/round-2-titles.txt)

## Curated Outputs

I generated 120 titles in two rounds and curated 8 from Round 2.

| # | Title | Why I selected it |
|---|---|---|
| 1 | Can a corpus be haunted? | Short and believable. It sounds like a real DH conference question and came from pure randomness. |
| 2 | What do we lose when we generate shared playlists? | Reads as a real critique and carries a small emotional pull. |
| 3 | What do we lose when we visualize the humanities? | Passes as an actual paper title and points at a real tension in the field. |
| 4 | Toward a haunted meme: Lessons from digital labor in Granville | Surprising but coherent. The local reference makes it an inside joke for our class. |
| 5 | Feral memes and their algorithms: Notes on the college library and everyday language | Humor. The pairing of "feral" and "library" works. |
| 6 | An open-source chatbot of handwritten letters: Curating memory Across Small-Town Libraries | Sounds like a funded grant project. Best believability-versus-absurdity tension. |
| 7 | Curating authorship in the Age of Machine Creativity | Conceptual fit. The generator comments on its own assignment. |
| 8 | Remixing student data in the Age of Infinite Generation | Conceptual fit, with a slightly ominous tone. |

**Criteria:** believability (could it be real?), surprise that still makes sense, humor or emotional pull, and conceptual fit with the assignment.

**Rejected:** titles with broken grammar ("What A footnote Can Teach Us...", "corpuss"), subject-verb disagreement ("Why does group chats keep tracing?"), repeated phrases ("Rereading... Rereading", "the college library and the college library"), and flat pairings ("Algorithmic algorithms and their timelines"). The rejects show where the grammar breaks, which is as interesting as the picks.

## Process Notes

I built a Tracery-style grammar that generates fake digital humanities paper titles. I chose the genre because it is already formulaic (a catchy phrase, a colon, a subtitle), which makes it a good fit for rules. I used Claude (Anthropic) to draft the grammar and to write a short script that expands it the way Tracery does. The grammar is a JSON file with 13 symbols: origin, title, topic, subtitle, question, adj, noun, object, method, gerund, verb, place, and era. The first five are templates and the other eight are word lists. The origin symbol picks a title shape: "Topic: Subtitle," a question, a gerund phrase with a method, or "Gerund object in the Age of Era." I also used Tracery's built-in modifiers .a and .capitalize to handle "a" versus "an" and sentence casing.

Parameters I controlled: the word lists (DH vocabulary like distant reading, metadata, and the Internet Archive, plus local touches like Granville and the college library), the title templates, and a fixed random seed so each batch can be reproduced. I did not control which words land together. That is the randomness of the grammar.

I ran the generator in two rounds. Round 1 produced 60 titles and exposed two bugs: "a accidental" instead of "an accidental," and "A Distant Reading Reading." I fixed these by adding .a modifiers and changing "Reading of" to "Approach to," then generated Round 2, another 60 unique titles. In total I generated 120 titles (60 + 60) and curated 8 from Round 2. I left some quirks in on purpose, such as plural disagreement ("Why does group chats keep tracing?") and "corpuss," because they show how the system fails.

## Design Statement

The generator is designed around one idea: a believable title is mostly structure. Academic titles follow a few shapes, so I built the grammar around four of them: "Topic: Subtitle" (weighted double), a question, a gerund phrase with a method and subtitle, and an "in the Age of" title. Keeping the templates few and the word lists large means the outputs feel familiar but never repeat.

I split the grammar into two layers. The template symbols (origin, title, topic, subtitle, question) control shape, and the word-list symbols (adj, noun, object, method, gerund, verb, place, era) control content. This lets me change the vocabulary without touching the structure, and the reverse.

The word lists are the main design choice. I wrote them to sound like digital humanities and to include local references, such as Granville, Ohio and the college library, so that the results read as a joke from inside the class. I also included words that comment on the assignment itself, like "Infinite Generation" and "Machine Creativity."

I used Tracery's .a and .capitalize modifiers, and a fixed random seed so every batch can be reproduced. After Round 1 exposed bugs, I revised the grammar rather than hand-editing outputs, so every title in the final set comes straight from the rules.

## Reflection

*Prompt: What is creativity when AI can generate endlessly? Where is the human in generative work?*

When a machine can generate titles forever, creativity cannot mean making things. My grammar combines 14 adjectives, 14 nouns, and a pile of objects, methods, and places into more titles than I could ever read. What it cannot do is tell me which combination is funny, believable, or true. That is where I come in.

I used Claude to build the generator, so AI shaped the process twice: once in writing the rules, and again in producing the outputs. My decisions came at specific moments. I chose the genre (fake digital humanities paper titles) because it is already formulaic. I chose the vocabulary, including Granville, group chats, and shared playlists, so the titles feel like they belong to my campus. I decided two grammar bugs were worth fixing, and I decided that other quirks were worth keeping. Finally, I chose 8 titles out of 60.

I judged "good" with three criteria: believability (could this be a real conference paper?), surprise (does an odd pairing still make sense?), and fit with the assignment's question about infinite generation. "What do we lose when we generate shared playlists?" made the cut because it sounds like a real critique and a little sad. I rejected titles with broken grammar, repeated phrases, or flat pairings.

"Pure" AI creativity would be the whole unselected pile. "Pure" human creativity would be writing every title by hand. My work sits between them: the machine supplies volume, and I supply taste. [Add a moment you felt overwhelmed, and when you knew to stop.]

## Attribution & AI Use

- **Tools used:** Tracery grammar format ([tracery.io](http://tracery.io)); Claude (Anthropic).
- **AI prompts (summary):** I gave Claude the assignment sheet and asked it to build a generator, curate the results, write the documentation, and build this page.
- **What AI generated:** the grammar and its vocabulary, the script that expanded it, the live bot, the shortlist of 8 titles with criteria, and first drafts of the process notes, design statement, and reflection.
- **What I changed or decided:** [Add what you changed or decided here.]
`,
    3: `# Week 3 – Make 1: Selfie & Identity\n\n## The Artifact\n\nFor this week's Critical Make on **Selfie & Identity**, I explored how generative AI interprets, modifies, and co-constructs facial identity from a personal photographic reference.\n\n<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 2rem 0; text-align: center;">\n  <div style="background: var(--bg-surface-subtle); padding: 1.25rem; border-radius: 14px; border: 1px solid var(--border-subtle);">\n    <img src="assets/images/week03-selfie-2.png" alt="1st AI Co-Constructed Portrait" style="width: 100%; max-width: 400px; height: auto; border-radius: 10px; box-shadow: var(--shadow-sm);">\n    <p style="margin-top: 0.75rem; font-weight: 600; font-size: 0.92rem; color: var(--text-primary);">Figure 1: 1st AI Co-Constructed Portrait</p>\n    <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0;">Generated using text prompt specifying age, sport, eye color, hair, and facial features.</p>\n  </div>\n\n  <div style="background: var(--bg-surface-subtle); padding: 1.25rem; border-radius: 14px; border: 1px solid var(--border-subtle);">\n    <img src="assets/images/week03-selfie-1.jpg" alt="Edited AI Co-Constructed Portrait" style="width: 100%; max-width: 400px; height: auto; border-radius: 10px; box-shadow: var(--shadow-sm);">\n    <p style="margin-top: 0.75rem; font-weight: 600; font-size: 0.92rem; color: var(--text-primary);">Figure 2: Edited AI Co-Constructed Portrait</p>\n    <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0;">Refined iteration adjusting freckles, face shape, lips, eye hue, eyebrows, and lashes.</p>\n  </div>\n</div>\n\n## Process Notes\n\n1. **1st AI Co-Constructed Portrait (Figure 1)**:\n   - **Generation Prompt:**\n     > *"selfie of a 19 year old girl who is 125lbs and plays soccer at a D3 school has green/hazel eyes, blonde hair, blonde highlists, not much of a shape with eyebrows, a nose that fits her face size wise and is straight. with freckles on it"*\n   - Explored how descriptive tokens (age, collegiate sport division, hair color/highlights, eye color, eyebrow shape, nose proportions, and freckles) are synthesized into a cohesive visual representation of identity.\n2. **Edited AI Co-Constructed Portrait (Figure 2)**:\n   - **Iterative Edit Prompt:**\n     > *"make the freckles less prominent, a bit more of a round/oval shaped face, thinner lips and more greenish/blueish eyes,a bit bigger eyebrows, shorter eyelashes"*\n   - Applied targeted prompt corrections to steer the representation closer to authentic self-perception: softening freckle prominence, subtly rounding facial contours into an oval silhouette, adjusting lip thickness, shifting eye pigmentation to greenish/blueish, filling out eyebrows, and moderating eyelash length.\n3. **Critical Observations**: \n   - Examining the progression between the first generation and the edited version illustrates how user direction negotiates with algorithmic defaults to shape identity representation.\n\n## Reflection\n\n> **Reflect 3:** *What does “authenticity” mean when identity is co-constructed with AI?*\n\nWhen identity is being co-constructed with AI, the authenticity is not the same as just coming from yourself. When you are being authentic you are being true to yourself, and is coming from you. When AI is used to help portray your identity, you have to give the AI direction on what to know about your identity. This is where AI takes away the authenticity, because AI will create assumptions within where you may not be as specific. You are the one who can input the information you want AI to show your identity as, which can leave gaps for the AI to make assumptions. Although that doesn't mean you should tell AI to create a version of your identity you want to be perceived as, and not your true identity.\n\n## Attribution & AI Use\n\n- **Tools Deployed:** Generative AI Image Synthesis / Image-to-Image Diffusion.\n- **AI Prompt (Figure 1 – Initial Generation):** \`selfie of a 19 year old girl who is 125lbs and plays soccer at a D3 school has green/hazel eyes, blonde hair, blonde highlists, not much of a shape with eyebrows, a nose that fits her face size wise and is straight. with freckles on it\`\n- **AI Prompt (Figure 2 – Iterative Edit):** \`make the freckles less prominent, a bit more of a round/oval shaped face, thinner lips and more greenish/blueish eyes,a bit bigger eyebrows, shorter eyelashes\`\n- **What the Model Generated:** Initial synthetic portrait followed by re-rendered facial geometry, softened freckle distribution, adjusted eye hue, and revised eyebrow/lash morphology.\n- **Human Authorship & Critical Decision:** Formulating the initial descriptive attributes, identifying discrepancies between algorithmic assumptions and personal identity, and steering iterative prompt refinements toward authentic representation.`,
    4: `# Week 4 – Make 2: Comic & Storytelling

## The Artifact

For this week's Critical Make on **Comic & Storytelling**, I created a 6-panel sequential comic titled **"Before the Whistle"**, exploring collegiate athletic camaraderie, game-day anticipation, and narrative framing.

<div style="text-align: center; margin: 2rem auto; max-width: 640px; background: var(--bg-surface-subtle); padding: 1.5rem; border-radius: 14px; border: 1px solid var(--border-subtle); box-shadow: var(--shadow-sm);">
  <img src="assets/images/Before the Whistle.png" alt="Before the Whistle - 6-Panel Soccer Comic" style="width: 100%; height: auto; border-radius: 10px; box-shadow: var(--shadow-md);">
  <p style="margin-top: 0.85rem; font-weight: 600; font-size: 0.95rem; color: var(--text-primary);">Figure 1: "Before the Whistle" (6-Panel Sequential Comic)</p>
  <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0;">A sequential narrative capturing the emotional and tactical progression of a collegiate soccer team preparing to take the pitch.</p>
</div>

## Process Notes

1. **Concept & Narrative Structure**:
   - Drawing from my collegiate soccer experience, I designed a six-panel narrative arc tracing the journey from pre-game anxiety to team unity:
     - **Panel 1 (Game-day nerves):** Locker room solitude and self-doubt (*"What if I mess up today?"*).
     - **Panel 2 (Get ready together):** Shared preparation and gear check (*"Cleats? Water? Shin guards? Got them!"*).
     - **Panel 3 (One plan):** Coach's whiteboard tactical briefing (*"Talk. Support. Trust each other."*).
     - **Panel 4 (Find our rhythm):** Pre-match passing drills on the grass (*"Breathe. Try again. I've got you."*).
     - **Panel 5 (Ready together):** The hands-in team huddle (*"We don't have to be perfect. We have to be a team!"*).
     - **Panel 6 (Before the whistle):** Walking out into the stadium spotlight alongside the referee and teammates (*"Let's play for each other."*).
2. **Visual Pacing & Sequential Continuity**:
   - Focused on consistent character design across panels, coordinating team kits (teal jerseys with numbers 7, 10, 12, 4), lighting transitions (dim locker room to sunlit pitch), and expressive facial cues.
3. **Dialogue & Bubble Placement**:
   - Kept dialogue concise and emotionally resonant, balancing thought bubbles for internal anxiety with speech bubbles for team encouragement.

## Reflection

> **Reflect 4:** *Is AI a collaborator, tool, or plagiarist in storytelling?*

*(Add your reflection response to this prompt here or in reflections/week04.md)*

## Attribution & AI Use

- **Tools Deployed:** Generative AI sequential art synthesis & visual storytelling workflow.
- **Media Asset:** \`assets/images/Before the Whistle.png\` (1024x1536 PNG, 6-panel comic).
- **Creative Direction & Human Authorship:** Scripting panel dialogue, designing the narrative progression, establishing character roles, and curating athletic authenticity.
`,

    5: `# Week 5 – Make 3: GIF & Remix Culture\n\n## The Artifact\n\nFor this week's Critical Make on **GIF & Remix Culture**, I created and remixed an animated micro-loop exploring athletic motion, visual stylization, and repetition.\n\n<div style="text-align: center; margin: 2rem auto; max-width: 580px; background: var(--bg-surface-subtle); padding: 1.5rem; border-radius: 14px; border: 1px solid var(--border-subtle);">\n  <img src="assets/images/download.gif" alt="Animated GIF: Soccer players sprinting and dribbling across the field" style="width: 100%; height: auto; border-radius: 10px; box-shadow: var(--shadow-md);">\n  <p style="margin-top: 0.85rem; font-weight: 600; font-size: 0.95rem; color: var(--text-primary);">Figure 1: Animated Soccer Sprint Loop</p>\n  <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0;">A dynamic micro-animation loop translating athletic momentum and soccer gameplay into stylized animation.</p>\n</div>\n\n## Process Notes\n\n1. **Concept & Visual Theme**:\n   - Building upon my personal athletic background as a collegiate soccer player (explored in Week 3's Identity Make), I chose to translate the fast-paced energy of a match into a looping animated GIF.\n2. **Animation Mechanics & Loop Design**:\n   - Focused on the rhythm of the sprint cycle, the cadence of the ball dribble, and the parallax motion of teammates tracking back in the stadium environment.\n   - Tuned the loop transition so the running cycle seamlessly cycles without jarring frame breaks.\n3. **Remix & Cultural Context**:\n   - The GIF format occupies a unique position in digital culture—straddling the boundary between cinema, meme culture, and vernacular web art.\n\n## Reflection\n\n> **Reflect 5:** *How does AI alter authorship and remix culture? Who owns AI-made art?*\n\n*(Add your reflection response to this prompt here or in reflections/week05.md)*\n\n## Attribution & AI Use\n\n- **Tools Deployed:** Animation synthesis & digital media GIF loop creation.\n- **Media Asset:** \`assets/images/download.gif\` (480x310 animated GIF).\n- **Creative Direction:** Athletic soccer sprint theme, character design, and looping tempo.`
,
    6: `# Week 6 – Make 4: Text & Distant Reading

## The Artifact

For this week's Critical Make on **Text & Distant Reading**, I conducted a computational text analysis and interactive collocation link graph visualization of Don Freeman's *Corduroy* using Voyant Tools.

<div style="text-align: center; margin: 2rem auto; max-width: 580px; background: var(--bg-surface-subtle); padding: 1.5rem; border-radius: 14px; border: 1px solid var(--border-subtle); box-shadow: var(--shadow-sm);">
  <div style="width: 100%; display: flex; justify-content: center; overflow: hidden; border-radius: 10px; border: 1px solid var(--border-subtle); background: #ffffff;">
    <iframe style="width: 487px; max-width: 100%; height: 425px; border: none; display: block;" src="https://voyant-tools.org/tool/Links/?query=corduroy&query=said&query=i%27ve&corpus=3c7c20cb35ba214cdc96433c4b4324c5" title="Voyant Tools Links Visualization for Corduroy" loading="lazy"></iframe>
  </div>
  <p style="margin-top: 0.85rem; font-weight: 600; font-size: 0.95rem; color: var(--text-primary);">Figure 1: Voyant Tools Collocation Links Network</p>
  <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0 0 0.85rem 0;">Interactive link graph mapping collocation and keyword frequency relationships for <em>corduroy</em>, <em>said</em>, and <em>i've</em> across the text corpus.</p>
  <a href="https://voyant-tools.org/tool/Links/?query=corduroy&query=said&query=i%27ve&corpus=3c7c20cb35ba214cdc96433c4b4324c5" target="_blank" rel="noopener" class="btn-secondary" style="font-size: 0.82rem; padding: 0.35rem 0.85rem; text-decoration: none; display: inline-block;">🔗 Open Fullscreen in Voyant Tools &rarr;</a>
</div>

## Process Notes

1. **Corpus Selection & Ingestion**:
   - Ingested the text corpus into Voyant Tools (Corpus ID: \`3c7c20cb35ba214cdc96433c4b4324c5\`), processing the complete textual narrative of *Corduroy*.
2. **Interactive Collocation Link Tool**:
   - Queried key terms (\`corduroy\`, \`said\`, and \`i've\`) using the **Links** tool to map associative networks between dialogue attribution, character subject position, and first-person declarations.
3. **Distant vs. Close Reading Insights**:
   - Computational distant reading aggregates lexical frequencies and co-occurrences, surfacing narrative patterns that complement close humanistic textual analysis.

## Reflection

> **Reflect 6:** *What do we gain/lose when machines “read” literature for us?*

*(Add your reflection response to this prompt here or in reflections/week06.md)*

## Attribution & AI Use

- **Tools Deployed:** [Voyant Tools](https://voyant-tools.org/) (Corpus ID: \`3c7c20cb35ba214cdc96433c4b4324c5\`, Links tool).
- **Queries:** \`corduroy\`, \`said\`, \`i've\`.
- **Methodological Approach:** Algorithmic distant reading, corpus linguistics, and semantic network graphing.
`,

    7: `# Week 7 – Make 5: Mapping AI Worlds

## The Artifact

For this week's Critical Make on **Mapping AI Worlds**, I created an interactive spatial counter-map exploring the global supply chains, resource extraction zones, server infrastructures, and physical realities of artificial intelligence.

<div style="text-align: center; margin: 2rem auto; max-width: 680px; background: var(--bg-surface-subtle); padding: 1.5rem; border-radius: 14px; border: 1px solid var(--border-subtle); box-shadow: var(--shadow-sm);">
  <div style="width: 100%; display: flex; justify-content: center; overflow: hidden; border-radius: 10px; border: 1px solid var(--border-subtle); background: #ffffff;">
    <iframe style="width: 100%; min-width: 320px; height: 480px; border: none; display: block;" src="https://www.google.com/maps/d/embed?mid=10VlqxGq8tjQGY3zdKD02TIQY0DA6EFM&ehbc=2E312F" title="Mapping AI Worlds - Interactive Google My Map" loading="lazy"></iframe>
  </div>
  <p style="margin-top: 0.85rem; font-weight: 600; font-size: 0.95rem; color: var(--text-primary);">Figure 1: Critical Counter-Map of AI Infrastructure & Supply Chains</p>
  <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0 0 0.85rem 0;">Interactive Google My Map documenting the global spatial footprint of computational infrastructure, mineral extraction, data centers, and network cables.</p>
  <a href="https://www.google.com/maps/d/u/0/edit?mid=10VlqxGq8tjQGY3zdKD02TIQY0DA6EFM&ll=5.585036842030675%2C-0.7199999999999989&z=2" target="_blank" rel="noopener" class="btn-secondary" style="font-size: 0.82rem; padding: 0.35rem 0.85rem; text-decoration: none; display: inline-block;">🗺️ Open in Google My Maps &rarr;</a>
</div>

## Process Notes

1. **Spatial Data Collection & Counter-Mapping**:
   - Geocoded physical nodes of algorithmic infrastructure using Google My Maps, demystifying the corporate narrative of "the cloud" as immaterial and weightless.
   - Identified critical supply chain touchpoints, including raw mineral extraction (lithium, cobalt, rare earths), semiconductor fabrication corridors, and massive data center server farms.
2. **Global Geographies of Computation**:
   - Mapped the geographical distribution of planetary compute to expose unequal resource burdens—tracing how water cooling and megawatt consumption impact local ecosystems while benefits concentrate in global financial capitals.
3. **Interactive Cartography as Humanistic Inquiry**:
   - Deployed spatial visualization to bridge theoretical critiques of AI extraction with empirical, geographic evidence.

## Reflection

> **Reflect 7:** *How does AI reshape global geographies of power, labor, and environment?*

*(Add your reflection response to this prompt here or in reflections/week07.md)*

## Attribution & AI Use

- **Tools Deployed:** [Google My Maps](https://www.google.com/maps/d/) (Interactive Cartography & Counter-Mapping).
- **Map Link:** [Google My Maps – Mapping AI Worlds](https://www.google.com/maps/d/u/0/edit?mid=10VlqxGq8tjQGY3zdKD02TIQY0DA6EFM&ll=5.585036842030675%2C-0.7199999999999989&z=2)
- **Methodological Approach:** Critical counter-mapping, supply chain transparency, spatial political economy.
`
  },

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
