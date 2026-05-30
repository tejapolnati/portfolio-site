function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>

        <div
          style={{
            display: "grid",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div className="card">
            <h3>Smart Job Tracker Platform</h3>

            <p>
             A full-stack recruitment management platform that enables recruiters to manage job postings, track applicants, and streamline hiring workflows through secure role-based authentication.
Tech Stack:
React.js, Node.js, Express.js, MySQL, JWT Authentication
            </p>
          </div>
     GitHub:
https://github.com/tejapolnati/job-tracker-backend
          <div className="card">
            <h3>Inventory & Sales Management System</h3>

            <p>
              A web application for managing inventory, tracking sales, monitoring stock levels, and generating business insights through analytics dashboards.

Tech Stack:
React.js, Node.js, Express.js, MySQL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;