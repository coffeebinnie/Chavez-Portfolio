export default function Navbar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <span className="font-retro logo-text" onClick={() => scrollTo("hero")}>
          PORTFOLIO
        </span>
        <div className="nav-links">
          <button onClick={() => scrollTo("hero")} className="nav-btn">Home</button>
          <button onClick={() => scrollTo("about")} className="nav-btn">About</button>
          <button onClick={() => scrollTo("skills")} className="nav-btn">Skills</button>
          <button onClick={() => scrollTo("projects")} className="nav-btn">Projects</button>
          <button onClick={() => scrollTo("experience")} className="nav-btn">Experience</button>
          <button onClick={() => scrollTo("contact")} className="nav-btn contact-btn">Contact</button>
        </div>
      </div>
    </nav>
  );
}