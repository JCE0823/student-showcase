# UMSI 211 Final Project Showcase

A React-based showcase website for displaying student final projects from UMSI 211 Fall 2025.

It should be deployed via GitHub Pages at https://umsi211f2025.github.io/student-showcase/

# How to Add Your Project

Students add their final projects to this showcase via pull requests.


1. Fork this repository to your own GitHub account.
2. Open the fork in a github codespace (or clone your fork locally).
3. Add your JSON file and screenshot(s).
  - Create a new JSON file in `src/data/projects/`. It should follow this format:
  ```json
{
  "studentName": "Your Name",
  "projectTitle": "Your Project Title",
  "description": "A brief 1-2 sentence description of your project.",
  "projectType": ["Web App", "Data Visualization"],
  "projectUrl": "https://your-project-url.com",
  "githubUrl": "https://github.com/yourusername/repo",
  "projectImage": "your-screenshot.jpg",
  "tags": ["React", "Python", "D3.js"],
  "reflections": "Optional: a quote about what you learned or are proud of.",
  "studentPhoto": "your-photo.jpg",
  "videoUrl": "https://youtube.com/watch?v=..."
}
```
  - Add images to `public/images/` and reference them in your JSON file.
4. Run local validation:
  - `npm install`
  - `npm run validate`
  - `npm run dev` and check that your project displays correctly in a browser.
5. Commit and push to your fork on GitHub.
6. On the GitHub website, open a Pull Request from your fork/branch to this repo's `main`. GitHub Actions will:
  - Validate your JSON against the schema
  - Check that your referenced image exists and is a reasonable size
  - Build the site to ensure it compiles
  - (If checks fail, please read the logs, fix issues, push the changes, and then check the pull request to see if the checks pass.)


## Project Structure

```
student-showcase/
├── src/
│   ├── components/            # Reusable React components
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectCard.module.css
│   │   ├── FilterBar.tsx
│   │   └── FilterBar.module.css
│   ├── pages/                 # Page components
│   │   └── HomePage.tsx
│   ├── types/                 # TypeScript type definitions
│   │   └── project.ts
│   ├── data/
│   │   ├── projects/          # Add project JSON files here
│   │   │   ├── SCHEMA.md      # Documentation for JSON format
│   │   │   ├── example-project-1.json
│   │   │   └── ...
│   │   └── loadProjects.ts    # Auto-imports all JSON files
│   ├── styles/
│   │   ├── tokens.css         # Design tokens (:root variables)
│   │   └── global.css         # Global layout and shared styles
│   ├── App.tsx                # Root component
│   └── main.tsx               # Entry point
├── public/
│   └── images/                # Place project screenshots here
└── package.json
```

## Getting Started (Running Locally or in Codespaces)

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
cd student-showcase
npm install
```

### Development

```bash
npm run dev
```


## Design System

The site uses a professional design system with:

- **Colors**: Michigan Blue (#00274C) and Maize (#FFCB05)
- **Typography**: System font stack for optimal performance
- **Spacing**: 8px base unit for consistent spacing
- **Responsive**: Mobile-first with breakpoints at 480px and 768px


## Technical Details

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Dynamic Imports**: Uses `import.meta.glob` for automatic JSON file discovery
- **No Runtime Dependencies**: All project data bundled at build time
- **CSS**: CSS Modules for component styles + design tokens (custom properties)
- **Path Aliases**: Uses `@/` prefix for absolute imports (configured via `vite-tsconfig-paths`)


## License

This project is open source and licensed under the [MIT License](https://opensource.org/licenses/MIT).
You are free to use, modify, and share the code and contents with attribution.

## Credits

Built with React and Vite for UMSI 211 Fall 2025.
