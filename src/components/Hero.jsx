function Hero() {
  return (
    <section className="section">
      <div className="container">

        <h1>Hi, I'm Teja Polnati</h1>

        <h2>
          Full Stack Developer | React.js | Node.js | Express | MySQL
        </h2>

        <p>
          I build scalable full-stack web applications with authentication,
          REST APIs, and database-driven backend systems.
          <br /><br />
          I specialize in turning real-world problems into functional,
          production-ready web applications using the MERN stack.
        </p>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "20px" }}>

          <a href="#projects">
            View Projects
          </a>

          <a href="/tejaspolnatiResume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>

          <a
  href="/tejasPolnatiResume.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="resume-btn"
>
  Download Resume
</a>

          <a href="#contact">
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;