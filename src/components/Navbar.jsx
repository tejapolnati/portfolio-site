function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#0f172a",
        padding: "20px 0",
        borderBottom: "1px solid #1e293b",
        zIndex: 1000,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#38bdf8" }}>Teja.</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;