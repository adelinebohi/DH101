# Week 6 – Make 4: Text & Distant Reading

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
   - Ingested the text corpus into Voyant Tools (Corpus ID: `3c7c20cb35ba214cdc96433c4b4324c5`), processing the complete textual narrative of *Corduroy*.
2. **Interactive Collocation Link Tool**:
   - Queried key terms (`corduroy`, `said`, and `i've`) using the **Links** tool to map associative networks between dialogue attribution, character subject position, and first-person declarations.
3. **Distant vs. Close Reading Insights**:
   - Computational distant reading aggregates lexical frequencies and co-occurrences, surfacing narrative patterns that complement close humanistic textual analysis.

## Reflection

> **Reflect 6:** *What do we gain/lose when machines “read” literature for us?*

*(Add your reflection response to this prompt here or in reflections/week06.md)*

## Attribution & AI Use

- **Tools Deployed:** [Voyant Tools](https://voyant-tools.org/) (Corpus ID: `3c7c20cb35ba214cdc96433c4b4324c5`, Links tool).
- **Queries:** `corduroy`, `said`, `i've`.
- **Methodological Approach:** Algorithmic distant reading, corpus linguistics, and semantic network graphing.
