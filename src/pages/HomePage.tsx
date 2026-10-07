import { useState } from 'react';
import { sortedProjects, assignments } from '@/data/loadProjects';
import { ProjectCard } from '@/components/ProjectCard';
import { FilterBar } from '@/components/FilterBar';

export function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filteredProjects =
    selectedFilter === 'All'
      ? sortedProjects
      : sortedProjects.filter((p) => p.assignment === selectedFilter);

  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="title">SI 212 Fall 2026</h1>
          <p className="subtitle">Student Showcase</p>
          <p className="description">
            Apps built by students in SI 212 at the University of Michigan School of Information,
            working with AI coding agents, and deployed by the students to public hosts.
          </p>
          <button
            className="expand-details-btn"
            onClick={() => setShowMore((v) => !v)}
            aria-expanded={showMore}
          >
            {showMore ? 'Hide details' : 'Read more about the course'}
          </button>
          {showMore && (
            <div className="course-details-columns">
              <div className="course-details-col">
                <h3>Course Timeline</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Due</th>
                      <th>Assignment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sep 16</td>
                      <td>📊 Data analysis and testing</td>
                    </tr>
                    <tr>
                      <td>Sep 30</td>
                      <td>⚛️ React app with a SQL backend</td>
                    </tr>
                    <tr>
                      <td>Oct 14</td>
                      <td>🚀 Deploying it to public infrastructure, with sign-in</td>
                    </tr>
                    <tr>
                      <td>Nov 4</td>
                      <td>🎲 Simulation</td>
                    </tr>
                    <tr>
                      <td>Nov 18</td>
                      <td>🤖 Putting an agent in a workflow</td>
                    </tr>
                    <tr>
                      <td>Dec 9</td>
                      <td>🏁 Final project</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </header>

      {assignments.length > 1 && (
        <FilterBar
          label="Show"
          options={assignments}
          selected={selectedFilter}
          onChange={setSelectedFilter}
        />
      )}

      <main className="main">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={`${project.assignment}:${project.projectUrl}`} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found for this filter.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>SI 212 | Fall 2026</p>
          <p>University of Michigan School of Information</p>
        </div>
      </footer>
    </>
  );
}
