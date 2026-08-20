import React, { useState, useEffect, useRef } from "react";
import profileImg from "../../assets/profile.png";

// Import your project preview images here
import dandaImg from "../../assets/danda.png";
import infographicImg from "../../assets/infographic.jpg";
import socialImg from "../../assets/social.jpg";

export default function AboutSection() {
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  // State for animated skill counts
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({
    HTML: 0,
    CSS: 0,
    JAVASCRIPT: 0,
    TAILWIND: 0,
    REACT: 0,
    FIGMA: 0,
    GIT: 0,
  });

  const skillsRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const targetSkills = [
    { name: "HTML", percent: 85 },
    { name: "CSS", percent: 90 },
    { name: "JAVASCRIPT", percent: 75 },
    { name: "TAILWIND", percent: 70 },
    { name: "REACT", percent: 70 },
    { name: "FIGMA", percent: 95 },
    { name: "GIT", percent: 90 },
  ];

  // me vs AI
  const projectsData = [
    {
      id: "01",
      title: "D & A Convenience Store",
      description:
        "A responsive store platform built collaboratively showcasing real-time products and store information.",
      tags: "HTML • CSS • JS",
      image: dandaImg,
    },
    {
      id: "02",
      title: "Intuitive UI Research",
      description:
        "A conceptual design project exploring future operating system UI interfaces and intelligent layouts.",
      tags: "FIGMA • UI/UX",
      image: infographicImg,
    },
    {
      id: "03",
      title: "Social Media Culture",
      description:
        "A comprehensive research presentation on social media and influencer culture's impact on local values.",
      tags: "RESEARCH • UI/UX",
      image: socialImg,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setAnimatedSkills(() => {
        const updated: { [key: string]: number } = {};
        targetSkills.forEach((skill) => {
          updated[skill.name] = Math.min(
            Math.floor(skill.percent * progress),
            skill.percent
          );
        });
        return updated;
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);
  };

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
      <section
        id="hero"
        className="pastel-card"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "40px",
          gap: "32px",
          minHeight: "auto",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 500px", textAlign: "left" }}>
          <span className="badge font-retro" style={{ marginBottom: "12px", display: "inline-block" }}>
            DEVELOPER & CREATIVE
          </span>

          <h1
            className="font-retro"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              color: "var(--rose-dark)",
              margin: "8px 0 12px 0",
              lineHeight: "1.1",
              letterSpacing: "1px",
            }}
          >
            SOPHIA KARYLLE CHAVEZ
          </h1>

          <h2
            className="font-pixel"
            style={{
              fontSize: "24px",
              color: "var(--text-dark)",
              marginBottom: "16px",
            }}
          >
            Frontend Developer & Designer
          </h2>

          <p
            className="font-pixel"
            style={{
              fontSize: "18px",
              color: "var(--text-muted)",
              lineHeight: "1.5",
              maxWidth: "600px",
              marginBottom: "20px",
            }}
          >
            I specialize in crafting thoughtful, responsive web applications and clean digital interfaces with a distinct touch of retro-inspired design. My focus is on blending technical functionality with engaging visual aesthetics to create intuitive digital experiences.
          </p>

          <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
            <a
              href="#contact"
              className="font-pixel"
              style={{
                display: "inline-block",
                backgroundColor: "var(--text-dark)",
                color: "#ffffff",
                padding: "10px 24px",
                borderRadius: "20px",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Let&apos;s collaborate ↗
            </a>

            <a
              href="https://github.com/coffeebinnie"
              target="_blank"
              rel="noopener noreferrer"
              className="font-pixel"
              style={{
                backgroundColor: "var(--bg-blush)",
                border: "1px solid var(--border-soft)",
                color: "var(--text-dark)",
                padding: "8px 18px",
                borderRadius: "20px",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #ffffff",
              boxShadow: "0px 0px 25px 8px rgba(231, 120, 160, 0.65), 0px 8px 30px rgba(231, 155, 181, 0.5)",
              backgroundColor: "var(--bg-blush)",
            }}
          >
            <img
              src={profileImg}
              alt="Sophia Karylle Chavez"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="pastel-card" style={{ marginTop: "24px" }}>
        <h2 className="section-title font-retro">ABOUT ME</h2>
        <div style={{ fontSize: "20px", color: "#85374e", lineHeight: "1.6", display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            Hi! I&apos;m Sophia Karylle Chavez, an aspiring frontend developer and computer science student who is deeply passionate about bridging the gap between web development and visual UI/UX design. I thrive on translating abstract ideas into functional, pixel-perfect code that feels natural and enjoyable for everyday users to navigate.
          </p>
          <p>
            Throughout my academic journey, I have actively collaborated on various technical projects, ranging from responsive store platforms to interactive interface explorations. Working alongside diverse teams has sharpened my problem-solving abilities, taught me effective version control practices, and fueled my drive to continuously adapt to evolving web standards.
          </p>
          <p>
            Outside of programming, I love immersing myself in retro digital aesthetics, tinkering with creative layouts in Figma, and exploring unique UI patterns. I am always eager to take on new design challenges, sharpen my frontend technical capabilities, and build meaningful digital solutions that leave a lasting impression.
          </p>
        </div>
      </section>

      {/* TECHNICAL SKILLS SECTION */}
      <section id="skills" className="pastel-card" ref={skillsRef} style={{ minHeight: "340px", marginTop: "24px" }}>
        <h2 className="section-title font-retro">TECHNICAL SKILLS</h2>
        <div className="skills-grid">
          {targetSkills.map((skill) => {
            const currentVal = animatedSkills[skill.name] || 0;
            const radius = 38;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (currentVal / 100) * circumference;

            return (
              <div key={skill.name} className="skill-circle-item">
                <div className="skill-circle-wrapper">
                  <svg className="skill-circle-svg" viewBox="0 0 100 100">
                    <circle className="skill-circle-bg" cx="50" cy="50" r={radius} />
                    <circle
                      className="skill-circle-progress"
                      cx="50"
                      cy="50"
                      r={radius}
                      style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: strokeDashoffset,
                      }}
                    />
                  </svg>
                  <span className="skill-percent-text font-pixel">{currentVal}%</span>
                </div>
                <span className="skill-name-text font-retro">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </section>

     {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="pastel-card" style={{ marginTop: "32px", padding: "40px" }}>
        <div style={{ borderLeft: "4px solid var(--accent)", paddingLeft: "16px", marginBottom: "28px" }}>
          <h2 className="section-title font-retro" style={{ fontSize: "28px", margin: 0 }}>
            FEATURED PROJECTS
          </h2>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="pastel-card project-card"
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "var(--bg-card)",
              }}
            >
              {/* Main Card */}
              <div 
                className="project-card-content"
                style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", transition: "opacity 0.2s ease" }}
              >
                <div>
                  <span className="font-retro" style={{ fontSize: "14px", color: "var(--text-muted)" }}>
                    {project.id}
                  </span>
                  <h3 className="font-pixel" style={{ fontSize: "26px", margin: "10px 0", color: "var(--text-primary)" }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: "1.5" }}>
                    {project.description}
                  </p>
                </div>
                <div className="project-tag font-pixel" style={{ marginTop: "20px", fontSize: "16px" }}>
                  {project.tags}
                </div>
              </div>

              {/* hover */}
              <div className="project-hover-overlay">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="pastel-card" style={{ marginTop: "24px" }}>
        <h2 className="section-title font-retro">EXPERIENCE & MILESTONES</h2>
        
        <div style={{ borderLeft: "3px solid #f0b8c8", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "28px" }}>
          
          {/* Milestone 1 */}
          <div>
            <span className="font-retro" style={{ fontSize: "11px", color: "#c46886", letterSpacing: "1px" }}>
              2ND YEAR • COLLABORATIVE DEVELOPMENT & UI RESEARCH
            </span>
            <h3 className="font-pixel" style={{ fontSize: "22px", color: "#5c1d30", margin: "6px 0" }}>
              Front-End Web Development & Collaborative Research
            </h3>
            <p style={{ fontSize: "17px", color: "#85374e", lineHeight: "1.6", marginBottom: "10px" }}>
              Collaborated in multi-member teams to design, develop, and present technical projects. Spearheaded frontend development, layout design, and presentation structuring across multiple key deliverables.
            </p>
            <ul style={{ margin: 0, paddingLeft: "18px", color: "#85374e", fontSize: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><strong>D & A Convenience Store Platform:</strong> Designed responsive HTML/CSS structures, organized product displays, and coordinated team integration.</li>
              <li><strong>UI/UX Research Presentation:</strong> Conceptualized futuristic operating system interface mockups in Figma, focusing on intuitive layouts and intelligent UI workflows.</li>
              <li><strong>Social Media Research:</strong> Conducted comprehensive research on digital culture and media impacts, designing cohesive slide assets for group presentations.</li>
            </ul>
          </div>

          {/* Milestone 2 */}
          <div>
            <span className="font-retro" style={{ fontSize: "11px", color: "#c46886", letterSpacing: "1px" }}>
              1ST YEAR • FOUNDATIONAL WEB DEVELOPMENT
            </span>
            <h3 className="font-pixel" style={{ fontSize: "22px", color: "#5c1d30", margin: "6px 0" }}>
              First Personal Portfolio & Core Web Foundations
            </h3>
            <p style={{ fontSize: "17px", color: "#85374e", lineHeight: "1.6", marginBottom: "10px" }}>
              Initiated my frontend journey by building custom portfolio websites from scratch, establishing core technical competencies in web design and component layout.
            </p>
            <ul style={{ margin: 0, paddingLeft: "18px", color: "#85374e", fontSize: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>Mastered foundational semantic HTML structure, CSS styling, and responsive layout techniques.</li>
              <li>Experimented with custom retro digital aesthetics, typography combinations, and pastel color schemes.</li>
              <li>Learned Git version control workflows for managing code repositories and web deployment platforms.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={{ marginTop: "24px" }}>
        <div className="pastel-card" style={{ maxWidth: "600px", margin: "0 auto", width: "100%" }}>
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
            <form onSubmit={handleSubmit}>
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

        <div style={{ marginTop: "28px", display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
          <a href="mailto:itsmebuwan69@gmail.com" title="Email" className="social-icon-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>

          <a href="https://github.com/coffeebinnie" target="_blank" rel="noopener noreferrer" title="GitHub" className="social-icon-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-icon-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="portfolio-footer font-pixel" style={{ marginTop: "40px" }}>
        All rights reserved • Sophia Karylle Chavez • 2026
      </footer>
    </div>
  );
}