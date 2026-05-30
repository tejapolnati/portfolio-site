function Hero() {
  return (
    <section className="section">
      <div className="container">

        <h1>Teja Polnati</h1>
        <h2>Full Stack Developer</h2>

        <p>
          Building responsive web applications using React.js, Node.js,
          Express.js, MySQL and MongoDB.
          <br /><br />
          Passionate about creating scalable backend systems, REST APIs,
          and full-stack solutions.
        </p>

        <br />

        {/* BUTTONS */}
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>

          <button className="btn">
            View Projects
          </button>

          <button
            style={{
              padding: "12px 24px",
              borderRadius: "8px",
              border: "1px solid #38bdf8",
              background: "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            Contact Me
          </button>

          {/* VIEW RESUME */}
          <a
            href="/TejasResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px 24px",
              borderRadius: "8px",
              border: "1px solid #38bdf8",
              color: "white",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            View Resume
          </a>

          {/* DOWNLOAD RESUME */}
          <a
            href="/TejasResume.pdf"
            download
            style={{
              padding: "12px 24px",
              borderRadius: "8px",
              border: "1px solid #38bdf8",
              color: "white",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;