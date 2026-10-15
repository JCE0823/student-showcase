# SI 212 Student Showcase

The apps students built in SI 212, Fall 2026, at the University of Michigan School of
Information. It is live at https://umsi212f2026.github.io/student-showcase/ and redeploys itself
on every push to `main`.

**Everything on the live page is public.** Your card shows whatever you put in your JSON file, so
use whatever name you are comfortable having on the public internet. A first name, initials or
a nickname all work.

## How to add your app

You can't push to this repository. You get your change into it the way most open-source work
gets in: copy the repository into your own account, make the change there, and ask for it to be
pulled in.

1. **Fork** this repository to your own GitHub account.
2. Clone your fork, and make a branch for your change.
3. Add **one JSON file** in `src/data/projects/`, named for your GitHub username in lowercase:
   - `<username>-ps3.json` for Problem Set 3
   - `<username>-project.json` for the final project

   ```json
   {
     "assignment": "Problem Set 3",
     "studentName": "The name you want shown",
     "projectTitle": "Your App's Name",
     "description": "One or two sentences on what it does.",
     "projectType": ["Web App"],
     "projectUrl": "https://your-app.example.com",
     "githubUrl": "https://github.com/you/your-repo",
     "projectImage": "username-ps3.png",
     "tags": ["React", "Express", "Postgres"],
     "reflections": "Optional: something you learned, or are proud of.",
     "studentPhoto": "username.jpg",
     "videoUrl": "https://youtube.com/watch?v=..."
   }
   ```

   `src/data/projects/SCHEMA.md` says what each field is. Only the first six are required.
4. Put any images in `public/images/`, and refer to them in the JSON by **file name only**, as
   above.
5. Check it locally: `npm install`, `npm run validate`, then `npm run dev` to see your card.
6. Commit, push your branch to your fork, and open a **pull request** from that branch into this
   repository's `main`.

**The pull request runs three checks:** it adds only new files in those two folders (or changes
your own JSON file, to fix a card that is already up), your JSON
matches the schema and its images exist, and the site still builds. If one fails, read its log,
fix the problem, and **push to the same branch**. The pull request picks up the new commit and
reruns the checks on its own, so do not open a second one.

**Only give a `githubUrl` if the repository is public.** GitHub shows a private repository to
anyone without access as a 404, so on your card it looks like a broken link. You won't notice,
because you can see it. `npm run validate` warns you if the link is not public.

## Running it locally

```bash
npm install
npm run dev
```

## Technical details

- **Framework**: React 19 with TypeScript, built with Vite
- **Data**: every JSON file in `src/data/projects/` is bundled at build time through
  `import.meta.glob`, so adding a card needs no code change
- **CSS**: CSS Modules for components, design tokens in `src/styles/tokens.css`
- **Deploy**: `.github/workflows/deploy.yml` builds and publishes to GitHub Pages on each push to
  `main`
- **Path aliases**: `@/` imports, configured through `vite-tsconfig-paths`

## License

Open source under the [MIT License](https://opensource.org/licenses/MIT). Adapted from the
Fall 2025 UMSI 211 showcase.
