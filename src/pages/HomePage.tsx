import { useState } from 'react';
import { projects, projectTypes } from '@/data/loadProjects';
import { ProjectCard } from '@/components/ProjectCard';
import { FilterBar } from '@/components/FilterBar';

export function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((p) => p.projectType.includes(selectedFilter));


  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="title">UMSI 211 Fall 2025</h1>
          <p className="subtitle">Final Project Showcase</p>
          <p className="description">
            Explore innovative projects from UMSI 211: Coding Without Coding, Fall 2025. 
            Students with limited prior coding experience used AI tools to build web apps, data visualizations, and simulations. 
            See what they created and their reflections on what they learned!
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
                <h4>AI First Approach</h4>
                <p>
                  This experimental class explored a new pathway to building student competence and comfort with building their own small-scale software. 
                  It bypassed the usual approach of first building fluency in a programming language.
                  Instead students relied on an AI assistant to generate and debug code.
                </p>
                <h4>Delegate, Delegate, Delegate</h4>
                <p>
                  I encouraged students to ask the AI assistant for help with everything. 
                  They were responsible for assessing results and redirecting. 
                  As they discovered limits, they learned to fill in gaps, gradually building up their own higher-level coding skills, but not the ability to write or even read code line by line.
                </p>
                <h4>Students</h4>
                <p>
                  Although the course was designed for students with no prior coding experience, all but three had some prior programming exposure, generally the equivalent of one college-level course.
                </p>
              </div>
              <div className="course-details-col">
                <h3>Course Timeline</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Weeks</th>
                      <th>Topic</th>
                      <th>Assignment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1-3</td>
                      <td>🎮 Programming environment basics</td>
                      <td>Extend a text-based adventure game</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>📊 Data analytics with jupyter notebooks and pandas</td>
                      <td>MovieLens dataset analysis</td>
                    </tr>
                    <tr>
                      <td>5-7</td>
                      <td>⚛️ React + SQL backend</td>
                      <td>Typing tutor or memorization aid</td>
                    </tr>
                    <tr>
                      <td>8-9</td>
                      <td>🎲 Simulation</td>
                      <td>Free choice of process to simulate</td>
                    </tr>
                    <tr>
                      <td>10-14</td>
                      <td>🚀 Individual projects</td>
                      <td>Deploy to public platforms with authentication</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* FilterBar removed as per new requirements */}

      <main className="main">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
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
          <p>UMSI 211: Data-Oriented Programming | Fall 2025</p>
          <p>University of Michigan School of Information</p>
        </div>
      </footer>
    </>
  );
}
