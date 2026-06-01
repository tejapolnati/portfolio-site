function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">

        <h2>Projects</h2>

        {/* PROJECT 1 */}
        <div className="card">
          <h3>Smart Job Tracker Platform</h3>

          <p>
            Full-stack job tracking system with authentication, role-based dashboards,
            and CRUD operations for managing job applications.
          </p>

          <p>
            <b>Tech:</b> React, Node.js, Express, MySQL
          </p>

          <div className="project-buttons">
            <a
              href="https://github.com/tejapolnati/job-tracker-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub →
            </a>
          </div>
        </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;