function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <div className="card">
            <h3>Frontend</h3>
            <p>React.js, JavaScript, HTML, CSS</p>
          </div>

          <div className="card">
            <h3>Backend</h3>
            <p>Node.js, Express.js, REST APIs</p>
          </div>

          <div className="card">
            <h3>Database</h3>
            <p>MySQL, MongoDB</p>
          </div>

          <div className="card">
            <h3>Tools</h3>
            <p>Git, GitHub, Postman, VS Code</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;