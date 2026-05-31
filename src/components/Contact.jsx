function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>

        <p>
          Feel free to reach out for opportunities or collaborations.
        </p>

        <div
          style={{
            marginTop: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <a href="mailto:tejapolnati5769@gmail.com">
            📧 tejapolnati5769@gmail.com
          </a>

          <a
            href="https://github.com/tejapolnati"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/teja-polnati-a1926026b"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;