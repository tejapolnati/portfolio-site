function Projects() {
  return (
    <section id="projects">
      <div className="container">

        <h2>Projects</h2>

        {/* PROJECT 1 */}
        <div style={{ marginBottom: "25px" }}>
          <h3>Smart Job Tracker Platform</h3>
          <p>
            A full-stack job tracking system with authentication, role-based dashboards,
            and CRUD operations for managing job applications and recruiters.
          </p>

          <p>
            <b>Tech Stack:</b> React, Node.js, Express, MySQL
          </p>

          <a href="https://github.com/your-github" target="_blank">
            GitHub Link
          </a>
        </div>

        <hr />

        {/* PROJECT 2 */}
        <div style={{ marginTop: "25px" }}>
          <h3>Inventory & Sales Management System</h3>
          <p>
            Developed a system to manage inventory, track sales, and generate basic analytics
            for stock monitoring and business insights.
          </p>

          <p>
            <b>Tech Stack:</b> React, Node.js, Express, MongoDB
          </p>

          <a href="https://github.com/your-github" target="_blank">
            GitHub Link
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;