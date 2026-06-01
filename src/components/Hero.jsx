function Hero() {
  return (
    <section className="section">
      <div className="container">
        <h1>Hi, I'm Teja Polnati</h1>

        <h2>
          Full Stack Developer | React.js | Node.js | Express.js | MySQL
        </h2>

        <p>
          I build scalable full-stack web applications with authentication,
          REST APIs, and database-driven backend systems.
          <br />
          <br />
          I specialize in turning real-world problems into functional,
          production-ready web applications using modern web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View Projects</a>

          <a
            href="/tejaspolnatiResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

          <a
            href="/tejaspolnatiResume.pdf"
            download
            className="resume-btn"
          >
            Download Resume
          </a>

          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;