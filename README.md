# Magic: The Gathering Vault

This repository is both an Obsidian vault and a static GitHub Pages site.

## Structure
- `Cards/Card Inventory.md`: master inventory note with quantities, color buckets, and tags.
- `Decks/`: deck lists built from the tracked pool.
- `Indexes/`: Obsidian navigation notes for colors, types, and creature types.
- `Photos/`: source images used while identifying and counting cards.
- `index.html` and `assets/`: the static site that reads the inventory note and renders a browser-friendly dashboard.

## Current site layout
- Root `index.html` loads the inventory note directly from `Cards/Card Inventory.md`.
- `assets/site.js` parses the markdown inventory into searchable sections.
- `assets/site.css` provides the GitHub Pages front end styling.
- `.nojekyll` keeps GitHub Pages from rewriting or filtering the static site.

## Workflow
1. Update `Cards/Card Inventory.md` when new photos are processed.
2. Add or adjust deck notes in `Decks/`.
3. Open `index.html` locally or publish the repo with GitHub Pages.
4. Push changes to the default branch after inventory and deck updates are verified.

## Deployment note
The repository root is already correct. Do not move the whole `Magic The Gathering` folder up one level before publishing.
