# Project JSON fields

One file per student per assignment, named for your GitHub username in lowercase:
`<username>-ps3.json` for Problem Set 3, `<username>-project.json` for the final project.
`project.schema.json` beside this file is what `npm run validate` checks against.

## Required

- **assignment**: `"Problem Set 3"` or `"Final Project"`
- **studentName**: the name shown on your card. The page is public, so use whatever you are
  comfortable with.
- **projectTitle**: your app's name
- **description**: one or two sentences on what it does
- **projectType**: a list, from `"Web App"`, `"Data Visualization"`, `"Simulation"`,
  `"API/Backend"`, `"Mobile App"`, `"Other"`
- **projectUrl**: the live app, starting `https://`

## Optional

- **githubUrl**: your repository. A private one is fine; only people with access can follow it.
- **projectImage**: a screenshot's file name in `public/images/`, no path
- **tags**: technologies, such as `["React", "Express", "Postgres"]`
- **reflections**: a short quote about something you learned or are proud of
- **studentPhoto**: a photo's file name in `public/images/`, no path
- **videoUrl**: a demo video
