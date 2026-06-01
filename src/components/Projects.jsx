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
              href="https://github.com/tejapolnati/job-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub →
            </a>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="card">
          <h3>Inventory & Sales System</h3>

          <p>
            Inventory management system with sales tracking and basic analytics
            for business insights and stock monitoring.
          </p>

          <p>
            <b>Tech:</b> React, Node.js, Express, MongoDB
          </p>

          <div className="project-buttons">
            <a
              href="https://github.com/tejapolnati/inventory-system"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;