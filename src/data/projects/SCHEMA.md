# Project JSON Schema

Each project should be a JSON file in this directory with the following structure:

```json
{
  "studentName": "First Last",
  "projectTitle": "Project Title",
  "description": "A brief 1-2 sentence description of what the project does and what technologies were used.",
  "projectType": ["Web App", "Data Visualization", "Simulation"],
  "projectUrl": "https://example.com",
  "githubUrl": "https://github.com/username/repo",
  "projectImage": "/images/project-screenshot.png",
  "tags": ["React", "Python", "D3.js"],
  "reflections": "I learned so much about API integration and handling real-time data.",
  "studentPhoto": "/images/student-photo.jpg",
  "videoUrl": "https://youtube.com/watch?v=..."
}
```

## Fields

- **studentName** (optional): Student's name; leave blank if you prefer to remain anonymous
- **projectTitle** (required): Title of the project
- **description** (required): Brief description (1-2 sentences)
- **projectType** (required): Array of project types. Options: "Web App", "Data Visualization", "Simulation", "API/Backend", "Mobile App", "Other"
- **projectUrl** (optional): Link to live/deployed project
- **githubUrl** (optional): Link to GitHub repository
- **projectImage** (optional): Path to screenshot/image (place images in public/images/)
- **tags** (optional): Array of technology tags used in the project
- **reflections** (optional): A quote about something you learned from doing the project or something you're particularly proud of
- **studentPhoto** (optional): Path to your photo (place in public/images/)
- **videoUrl** (optional): Link to a demo video (YouTube, Vimeo, etc.)

## Adding a New Project

1. Create a new JSON file in this directory (e.g., `student-name.json`)
2. Fill in the fields following the schema above
3. If you have a screenshot, add it to `public/images/`
4. Rebuild the app: `npm run dev` or `npm run build`
