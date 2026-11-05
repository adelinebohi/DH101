# Week 9 – Make 7: Bots & Generators

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
