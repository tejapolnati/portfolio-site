function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">

        <h2>Projects</h2>

        <div className="card">
          <h3>Smart Job Tracker Platform</h3>

          <p>
            Built a full-stack Job Tracker application with user authentication,
            job management, status tracking, and cloud database integration.
            Users can add, update, view, and delete job applications.
          </p>

          <p>
            <b>Tech:</b> React, Node.js, Express.js, MySQL, JWT, Railway, Render, Vercel
          </p>

          <div className="project-buttons">

            <a
              href="https://job-tracker-frontend-pi-steel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              Live Demo →
            </a>

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
    </section>
  );
}

export default Projects;