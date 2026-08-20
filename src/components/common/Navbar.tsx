

export default function Navbar() {
  return (
 <nav
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "12px 48px", /* para mo slim ang nav bar */
    backgroundColor: "var(--bg-card)",
    marginBottom: "24px",
  }}
>
      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        <a href="#hero" className="nav-link font-pixel">Home</a>
        <a href="#about" className="nav-link font-pixel">About</a>
        <a href="#skills" className="nav-link font-pixel">Skills</a>
        <a href="#projects" className="nav-link font-pixel">Projects</a>
        <a href="#experience" className="nav-link font-pixel">Experience</a>
        <a href="#contact" className="nav-link-btn font-pixel">Contact</a>
      </div>
    </nav>
  );
}