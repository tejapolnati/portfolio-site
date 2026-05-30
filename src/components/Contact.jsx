function Contact() {
  return (
    <section id="contact">
      <div className="container">

        <h2>Contact</h2>

        <p>
          Feel free to reach out for opportunities or collaborations.
        </p>

        <div style={{ marginTop: "15px", display: "flex", flexDirection: "column", gap: "10px" }}>

          <a href="mailto:yourmail@gmail.com">
            📧 yourmail@gmail.com
          </a>

          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            💻 GitHub
          </a>

          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            🔗 LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;