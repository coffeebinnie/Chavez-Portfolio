import React, { useState } from "react";
import profileImg from "../../assets/profile.png";

export default function AboutSection() {
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrbldjep", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <div className="portfolio-container">
      {/* HERO SECTION */}
      <section id="hero" className="pastel-card hero-card">
        <div style={{ flex: 1 }}>
          <span className="badge font-retro">DEVELOPER & CREATIVE</span>
          <h1 className="hero-title font-retro">SOPHIA KARYLLE CHAVEZ</h1>
          <p className="hero-subtitle font-pixel">Frontend Developer & Designer</p>
          <p className="hero-description">
            Crafting thoughtful, responsive web applications and clean digital interfaces with a touch of retro-inspired design.
          </p>
        </div>

        <div>
          <img src={profileImg} alt="Sophia Karylle Chavez" className="avatar-circle-glow" />
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="pastel-card">
        <h2 className="section-title font-retro">ABOUT ME</h2>
        <div style={{ fontSize: "21px", color: "#85374e", lineHeight: "1.6", display: "flex", flexDirection: "column", gap: "14px" }}>
          <p>
            Hi! I'm Sophia Karylle Chavez, a frontend developer and student passionate about creating engaging, pixel-perfect, and user-friendly digital experiences.
          </p>
          <p>
            Outside of code, I love exploring retro digital aesthetics, tinkering with visual UI designs in Figma, and diving into creative side projects. I enjoy turning complex ideas into clean, interactive websites that are as fun to use as they are visually pleasing.
          </p>
          <p>
            My goal is to continually sharpen my frontend development capabilities, master modern full-stack web technologies, and build impactful digital projects that seamlessly connect design and code.
          </p>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section id="skills" className="pastel-card">
        <h2 className="section-title font-retro">TECHNICAL SKILLS</h2>
        <div className="skills-wrapper">
          {["HTML", "CSS", "JAVASCRIPT", "TAILWINDCSS", "REACT", "FIGMA", "GIT"].map((skill) => (
            <span key={skill} className="skill-pill font-pixel">{skill}</span>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS (3-Column Layout) */}
      <section id="projects">
        <div style={{ borderLeft: "4px solid #e79bb5", paddingLeft: "14px", marginBottom: "20px" }}>
          <h2 className="section-title font-retro" style={{ marginBottom: "4px" }}>FEATURED PROJECTS</h2>
        </div>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="pastel-card project-card" style={{ padding: "20px" }}>
            <div>
              <span className="font-retro" style={{ fontSize: "10px", color: "#c46886" }}>01</span>
              <h3 className="font-pixel" style={{ fontSize: "22px", margin: "6px 0", color: "#5c1d30" }}>D & A Convenience Store</h3>
              <p style={{ fontSize: "18px", color: "#85374e", lineHeight: "1.4" }}>
                A responsive store platform built collaboratively showcasing real-time products and store information.
              </p>
            </div>
            <div className="project-tag font-pixel">HTML • CSS • JS</div>
          </div>

          {/* Project 2 */}
          <div className="pastel-card project-card" style={{ padding: "20px" }}>
            <div>
              <span className="font-retro" style={{ fontSize: "10px", color: "#c46886" }}>02</span>
              <h3 className="font-pixel" style={{ fontSize: "22px", margin: "6px 0", color: "#5c1d30" }}>Intuitive UI Research</h3>
              <p style={{ fontSize: "18px", color: "#85374e", lineHeight: "1.4" }}>
                A conceptual design project exploring future operating system UI interfaces and intelligent layouts.
              </p>
            </div>
            <div className="project-tag font-pixel">FIGMA • UI/UX</div>
          </div>

          {/* Project 3 */}
          <div className="pastel-card project-card" style={{ padding: "20px" }}>
            <div>
              <span className="font-retro" style={{ fontSize: "10px", color: "#c46886" }}>03</span>
              <h3 className="font-pixel" style={{ fontSize: "22px", margin: "6px 0", color: "#5c1d30" }}>Personal Portfolio V1</h3>
              <p style={{ fontSize: "18px", color: "#85374e", lineHeight: "1.4" }}>
                My initial personal showcase site created in 1st year to highlight early web design projects.
              </p>
            </div>
            <div className="project-tag font-pixel">HTML • CSS</div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="pastel-card">
        <h2 className="section-title font-retro" style={{ marginBottom: "16px" }}>EXPERIENCE & MILESTONES</h2>
        <div style={{ borderLeft: "3px solid #f0b8c8", paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* 2nd Year */}
          <div>
            <span className="font-retro" style={{ fontSize: "10px", color: "#c46886" }}>2ND YEAR</span>
            <h3 className="font-pixel" style={{ fontSize: "22px", color: "#5c1d30", marginTop: "2px" }}>Collaborative Web & Research Projects</h3>
            <p style={{ fontSize: "19px", color: "#85374e", marginTop: "4px", lineHeight: "1.5" }}>
              Worked on team projects including the D&A Convenience Store web development and academic research presentations, sharpening collaborative frontend development and interface styling skills.
            </p>
          </div>

          {/* 1st Year */}
          <div>
            <span className="font-retro" style={{ fontSize: "10px", color: "#c46886" }}>1ST YEAR</span>
            <h3 className="font-pixel" style={{ fontSize: "22px", color: "#5c1d30", marginTop: "2px" }}>First Personal Portfolio Project</h3>
            <p style={{ fontSize: "19px", color: "#85374e", marginTop: "4px", lineHeight: "1.5" }}>
              Built my very first personal portfolio website from scratch, establishing strong foundations in HTML, CSS layout structure, and design presentation.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <div className="pastel-card" style={{ maxWidth: "560px", margin: "0 auto", width: "100%" }}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h2 className="section-title font-retro">GET IN TOUCH</h2>
            <p style={{ fontSize: "19px", color: "#85374e" }}>
              Feel free to send a message below for collaborations or inquiries!
            </p>
          </div>

          {status === "SUCCESS" ? (
            <p className="font-retro" style={{ fontSize: "10px", color: "#c46886", textAlign: "center" }}>
              Message sent successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit} style={{ marginTop: "16px" }}>
              <div className="form-group">
                <label className="form-label font-retro">YOUR NAME</label>
                <input type="text" name="name" required placeholder="Your Name" className="form-input font-pixel" />
              </div>

              <div className="form-group">
                <label className="form-label font-retro">YOUR EMAIL</label>
                <input type="email" name="email" required placeholder="itsmebuwan69@gmail.com" className="form-input font-pixel" />
              </div>

              <div className="form-group">
                <label className="form-label font-retro">YOUR MESSAGE</label>
                <textarea name="message" required rows={4} placeholder="Write your message here..." className="form-textarea font-pixel" style={{ resize: "none" }}></textarea>
              </div>

              <button type="submit" disabled={status === "SENDING"} className="submit-btn font-retro">
                {status === "SENDING" ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          )}
        </div>

        {/* Horizontal Links Aligned Below the Box */}
        <div style={{ maxWidth: "560px", margin: "22px auto 0 auto", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", fontSize: "20px", flexWrap: "wrap" }}>
          <a href="mailto:itsmebuwan69@gmail.com" style={{ color: "#c46886", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#5c1d30"} onMouseLeave={(e) => e.currentTarget.style.color = "#c46886"}>
            Email
          </a>
          <span style={{ color: "#f0b8c8" }}>•</span>
          <a href="https://github.com/coffeebinnie" target="_blank" rel="noopener noreferrer" style={{ color: "#c46886", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#5c1d30"} onMouseLeave={(e) => e.currentTarget.style.color = "#c46886"}>
            GitHub
          </a>
          <span style={{ color: "#f0b8c8" }}>•</span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#c46886", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#5c1d30"} onMouseLeave={(e) => e.currentTarget.style.color = "#c46886"}>
            LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="portfolio-footer font-pixel">
        All rights reserved • Sophia Karylle Chavez • 2026
      </footer>
    </div>
  );
}