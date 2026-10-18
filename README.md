# Moonlit Stories

An English-only A2 reading game with 30 illustrated cards, 10 complete stories and 200 self-check activities. No build step, npm, application server or API keys are required.

## Quick start

Extract the ZIP and open `index.html` in a modern browser. Keep all JavaScript files, `styles.css` and the `assets` folder beside it. The game works offline.

## Publish on GitHub Pages

1. Create a repository, for example `moonlit-stories`.
2. Upload the **contents** of this folder. Put `index.html` at the repository root, alongside `app.js`, `core.js`, `stories.js`, `cards.js`, `styles.css` and `assets`. Uploading the ZIP alone does not publish a website.
3. Commit the files to your main branch, usually `main`.
4. Open **Settings → Pages → Build and deployment** and select **Deploy from a branch**.
5. Select your main branch and **/(root)**, then save.
6. When deployment finishes, GitHub displays the website address in Pages settings.

Official documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## How the game works

- The first card is selected with equal probability from all 30 cards and determines the story.
- The next two cards are drawn randomly, without repeats, from that same story set.
- The story title and text stay hidden while the learner predicts the plot. Writing a prediction is optional; learners can speak instead.
- A button reveals the original English text. Paragraph breaks have been adapted for reading on screen.
- A second button opens the activities. The text is available in a dialog throughout the exercises.
- Each story has four types of activities, with five questions each: multiple choice, True / False, fill the gaps and story order. Ordering tasks increase from three to five events.
- Each group is checked together. Feedback explains the answers, and learners can correct mistakes and check again.
- First-attempt scores and current scores are tracked separately. Repeated checks never add extra points.
- Learners can switch between activity types. Results become available after all 20 answers have been checked.
- A new random draw may select a previously completed story.

## Storage and privacy

Answers and predictions stay in the current tab's memory. Only completed story IDs are stored in `localStorage`. Refreshing starts a new round. If local storage is unavailable, the game still works.

The game is entirely client-side. Answer keys are visible in `stories.js`; this is a learning activity, not a secure examination system. There is no analytics, external font, network library or AI service.

## Files

- `index.html`: page structure and script loading.
- `styles.css`: responsive layout, animations and reduced-motion support.
- `app.js`: interface and activity flow.
- `core.js`: card selection and answer checking.
- `stories.js`: 10 texts and 200 activities with answer keys.
- `cards.js`: card IDs, image paths and English alternative text.
- `assets/`: all 30 illustrations, optimized as WebP images.
- `CONTENT-MAP.md`: story-to-card mapping.
- `.nojekyll`: disables Jekyll processing.

The original stories and illustrations were supplied by the user. No new license is assigned to them. The interface and exercises were created for this project. Illustrations are visual prompts; questions assess the written story, whose details may differ from the artwork.
