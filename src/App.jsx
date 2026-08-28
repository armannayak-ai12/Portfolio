import React, { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Phone, Copy, Check, ArrowUpRight, Menu, X } from "lucide-react";

/* ---------------- DATA ---------------- */

const NAV = ["home", "about", "skills", "projects", "experience", "contact"];

const SKILLS = [
  { group: "Languages", items: ["Python", "C / C++", "SQL", "JavaScript"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL"] },
  { group: "Tools & Platforms", items: ["VS Code", "Git", "GitHub"] },
  { group: "Core Concepts", items: ["AI / ML", "OOP", "DBMS", "Computer Networks"] },
  { group: "Working Style", items: ["Problem Solving", "Teamwork", "Adaptability", "Communication"] },
];

const PROJECTS = [
  {
    name: "AI Trading Research Dashboard",
    period: "Mar 2026",
    status: "PROTOTYPE",
    desc: "An AI-powered dashboard for market analysis, trading signals, and strategy backtesting.",
    bullets: [
      "Random Forest models combined with technical indicators and Finnhub news-sentiment analysis",
      "Feature engineering, risk management, stop-loss analysis, and performance evaluation",
      "Interactive Streamlit interface with multi-timeframe charts and backtesting metrics",
    ],
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "Plotly", "yfinance", "Finnhub API"],
  },
  {
    name: "AI Fit Tracker",
    period: "Jul 2026",
    status: "PROTOTYPE",
    desc: "A fitness and nutrition tracking app that reads food photos to estimate calories and guide daily habits.",
    bullets: [
      "AI-based food image analysis integrated with Flutter to estimate nutrition and automate calorie tracking",
      "Goal-based diet management, protein tracking, water reminders, and personalized fitness guidance",
      "Built and tested in Android Studio as a working mobile prototype with notifications",
    ],
    tech: ["Flutter", "Dart", "Android Studio", "Gemini API"],
  },
  {
    name: "Predictive Multi-Zone Fire Detection System",
    period: "Apr 2026",
    status: "PROTOTYPE",
    desc: "A multi-zone fire detection system that monitors temperature across three zones and flags safe vs. high-risk areas in real time.",
    bullets: [
      "ESP32 with K-Type thermocouples and MAX6675 modules for zone-wise temperature capture",
      "Threshold-based alerts via LEDs, buzzer, and Bluetooth for real-time emergency warnings",
      "Prototyped and tested in Cirkit Designer across three monitored zones",
    ],
    tech: ["ESP32", "C / C++", "K-Type Thermocouple", "MAX6675", "Bluetooth", "Cirkit Designer"],
  },
];

const TRAINING = [
  { date: "Mar 2025 — Apr 2025", title: "Python Programming Training", detail: "Hands-on training covering core programming concepts, problem-solving, and application development." },
  { date: "2025", title: "Web Development Training", detail: "Built web applications using HTML, CSS, JavaScript, and AI-assisted development tools." },
  { date: "2025", title: "Introduction to Cloud Computing — Infosys", detail: "Foundational training covering cloud concepts, service models, and deployment models." },
  { date: "2025", title: "Hands-on Bootcamp on Artificial Intelligence — Blocks se Block", detail: "Applied, hands-on training in practical AI concepts." },
];

const CERTS = [
  { date: "Mar 2026", title: "Introduction to Cloud Computing — Infosys" },
  { date: "Feb 2026", title: "Introduction to Python — Infosys" },
];

const ACHIEVEMENTS = [
  { date: "2026", title: "Finalist — Hackathon at IIT Ropar", detail: "Advanced to the final round by developing and presenting a solution to the given problem statement." },
  { date: "—", title: "2nd Runner-Up — English Group Discussion", detail: "Secured third position in the competition." },
];

const EDUCATION = [
  { date: "Since Aug 2025", title: "Lovely Professional University — Phagwara, Punjab", detail: "B.Tech, Computer Science and Engineering · CGPA 8.6" },
  { date: "Apr 2024 — Mar 2025", title: "Vidya Jyoti School — Jagdalpur, Chhattisgarh", detail: "Intermediate · 75%" },
  { date: "Apr 2022 — Mar 2023", title: "Vidya Jyoti School — Jagdalpur, Chhattisgarh", detail: "Matriculation · 80%" },
];

const EMAIL = "nayakarman990@gmail.com";
const PHONE = "+91 9302725267";
const GITHUB = "https://github.com/armannayak-ai12";
const LINKEDIN = "https://www.linkedin.com/in/arman-nayak/";

/* ---------------- SMALL COMPONENTS ---------------- */

function StatusDot({ color = "var(--accent)" }) {
  return <span className="status-dot" style={{ "--dot-color": color }} />;
}

function Panel({ children, className = "" }) {
  return <div className={`panel ${className}`}>{children}</div>;
}

function LogEntry({ date, title, detail }) {
  return (
    <div className="log-entry">
      <div className="log-date">{date}</div>
      <div className="log-body">
        <div className="log-title">{title}</div>
        {detail && <div className="log-detail">{detail}</div>}
      </div>
    </div>
  );
}

/* ---------------- PAGES ---------------- */

function Home({ go }) {
  const lines = ["> whoami", "Arman Nayak", "> role", "CSE (AI/ML) undergraduate — Lovely Professional University"];
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= lines.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 420);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div className="page home">
      <div className="hero">
        <div className="terminal" aria-hidden="true">
          {lines.slice(0, shown).map((l, i) => (
            <div key={i} className={l.startsWith(">") ? "term-cmd" : "term-out"}>{l}</div>
          ))}
          <span className="cursor" />
        </div>

        <h1 className="hero-name">Arman Nayak</h1>
        <p className="hero-role">
          Building AI-powered systems across web, mobile, and embedded hardware —
          from trading-signal dashboards to fire-detection sensor networks.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => go("projects")}>
            View Projects <ArrowUpRight size={16} />
          </button>
          <button className="btn btn-ghost" onClick={() => go("contact")}>
            Contact Me
          </button>
        </div>

        <div className="stat-row">
          <div className="stat-card">
            <StatusDot />
            <div>
              <div className="stat-value">8.6</div>
              <div className="stat-label">CGPA · LPU</div>
            </div>
          </div>
          <div className="stat-card">
            <StatusDot />
            <div>
              <div className="stat-value">03</div>
              <div className="stat-label">Shipped Prototypes</div>
            </div>
          </div>
          <div className="stat-card">
            <StatusDot color="var(--alert)" />
            <div>
              <div className="stat-value">Finalist</div>
              <div className="stat-label">Hackathon @ IIT Ropar</div>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee">
          {[...SKILLS.flatMap((s) => s.items), ...SKILLS.flatMap((s) => s.items)].map((t, i) => (
            <span key={i} className="marquee-item">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h2 className="page-title">About</h2>
      <div className="about-grid">
        <Panel>
          <p className="bio">
            I'm a Computer Science undergraduate at Lovely Professional University, majoring in
            AI &amp; ML. I like building complete, working systems rather than just demos — a
            trading-research dashboard that backtests strategies, a mobile app that reads food
            photos to track nutrition, and an ESP32-based fire-detection network that watches
            three zones at once. I'm comfortable moving between languages and platforms — Python,
            C/C++, JavaScript, Flutter — and enjoy the part of a project where a rough idea turns
            into something that actually runs.
          </p>
          <p className="bio">
            Outside of coursework, I'm a finalist from a hackathon at IIT Ropar and placed as
            2nd runner-up in an English group discussion competition — both reps of the same
            habit: showing up to build and pitch under a clock.
          </p>
        </Panel>
        <Panel>
          <div className="panel-header"><StatusDot />EDUCATION LOG</div>
          <div className="log-list">
            {EDUCATION.map((e, i) => <LogEntry key={i} {...e} />)}
          </div>
        </Panel>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="page">
      <h2 className="page-title">Skills</h2>
      <div className="skills-grid">
        {SKILLS.map((s, i) => (
          <Panel key={i}>
            <div className="panel-header"><StatusDot />MODULE: {s.group.toUpperCase()}</div>
            <div className="tag-row">
              {s.items.map((it, j) => <span key={j} className="tag">{it}</span>)}
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="page">
      <h2 className="page-title">Projects</h2>
      <div className="project-list">
        {PROJECTS.map((p, i) => (
          <Panel key={i} className="project-panel">
            <div className="project-head">
              <div>
                <div className="project-name">{p.name}</div>
                <div className="project-period">{p.period}</div>
              </div>
              <span className="pill"><StatusDot color="var(--accent)" />{p.status}</span>
            </div>
            <p className="project-desc">{p.desc}</p>
            <ul className="project-bullets">
              {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            <div className="tag-row">
              {p.tech.map((t, j) => <span key={j} className="tag tag-sm">{t}</span>)}
            </div>
          </Panel>
        ))}
      </div>
      <a className="inline-link" href={GITHUB} target="_blank" rel="noreferrer">
        <Github size={16} /> More on GitHub <ArrowUpRight size={14} />
      </a>
    </div>
  );
}

function Experience() {
  return (
    <div className="page">
      <h2 className="page-title">Experience</h2>
      <div className="about-grid">
        <Panel>
          <div className="panel-header"><StatusDot />TRAINING LOG</div>
          <div className="log-list">
            {TRAINING.map((e, i) => <LogEntry key={i} {...e} />)}
          </div>
        </Panel>
        <div className="stack">
          <Panel>
            <div className="panel-header"><StatusDot color="var(--alert)" />ACHIEVEMENTS</div>
            <div className="log-list">
              {ACHIEVEMENTS.map((e, i) => <LogEntry key={i} {...e} />)}
            </div>
          </Panel>
          <Panel>
            <div className="panel-header"><StatusDot />CERTIFICATES</div>
            <div className="log-list">
              {CERTS.map((e, i) => <LogEntry key={i} {...e} title={e.title} />)}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {}
  };

  const handleChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="page">
      <h2 className="page-title">Contact</h2>
      <div className="about-grid">
        <Panel>
          <div className="panel-header"><StatusDot />DIRECT CHANNELS</div>
          <div className="contact-row">
            <Mail size={16} />
            <span>{EMAIL}</span>
            <button className="icon-btn" onClick={copyEmail} aria-label="Copy email">
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
          <a className="contact-row" href={`tel:${PHONE.replace(/\s/g, "")}`}>
            <Phone size={16} /><span>{PHONE}</span>
          </a>
          <a className="contact-row" href={GITHUB} target="_blank" rel="noreferrer">
            <Github size={16} /><span>github.com/armannayak-ai12</span>
            <ArrowUpRight size={14} className="row-arrow" />
          </a>
          <a className="contact-row" href={LINKEDIN} target="_blank" rel="noreferrer">
            <Linkedin size={16} /><span>linkedin.com/in/arman-nayak</span>
            <ArrowUpRight size={14} className="row-arrow" />
          </a>
        </Panel>

        <Panel>
          <div className="panel-header"><StatusDot />SEND A MESSAGE</div>
          <form className="contact-form" onSubmit={handleSend}>
            <label className="field">
              <span>Name</span>
              <input required value={form.name} onChange={handleChange("name")} placeholder="Your name" />
            </label>
            <label className="field">
              <span>Email</span>
              <input required type="email" value={form.email} onChange={handleChange("email")} placeholder="you@example.com" />
            </label>
            <label className="field">
              <span>Message</span>
              <textarea required rows={5} value={form.message} onChange={handleChange("message")} placeholder="What would you like to say?" />
            </label>
            <button className="btn btn-primary" type="submit">
              Send Message <ArrowUpRight size={16} />
            </button>
            <p className="form-note">
              This opens your email client with the message ready to send to {EMAIL}.
            </p>
          </form>
        </Panel>
      </div>
    </div>
  );
}

/* ---------------- APP SHELL ---------------- */

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (p) => {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (page) {
      case "about": return <About />;
      case "skills": return <Skills />;
      case "projects": return <Projects />;
      case "experience": return <Experience />;
      case "contact": return <Contact />;
      default: return <Home go={go} />;
    }
  };

  return (
    <div className="app-shell">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        :root {
          --bg: #0A0D10;
          --panel: #10151A;
          --panel-border: #1E262D;
          --text: #E6EDF0;
          --text-muted: #7C8A94;
          --accent: #4DE8B0;
          --accent-dim: #2E6B54;
          --alert: #EF4444;
        }

        .app-shell * { box-sizing: border-box; }
        .app-shell {
          background: var(--bg);
          color: var(--text);
          font-family: 'IBM Plex Sans', sans-serif;
          min-height: 100vh;
          position: relative;
        }
        .app-shell button, .app-shell input, .app-shell textarea {
          font-family: inherit;
        }
        .app-shell a { color: inherit; text-decoration: none; }
        .app-shell *:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          .app-shell * { animation: none !important; transition: none !important; }
        }

        .status-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--dot-color);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--dot-color) 20%, transparent);
          display: inline-block;
          flex-shrink: 0;
          animation: pulse 2.4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }

        /* Topbar */
        .topbar {
          position: sticky; top: 0; z-index: 20;
          background: rgba(10,13,16,0.85);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--panel-border);
        }
        .topbar-inner {
          max-width: 980px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 20px;
        }
        .brand {
          font-family: 'IBM Plex Mono', monospace;
          font-weight: 600; font-size: 15px;
          display: flex; align-items: center; gap: 8px;
          background: none; border: none; color: var(--text); cursor: pointer;
        }
        .brand .status-dot { }
        .nav { display: flex; gap: 2px; }
        .nav-btn {
          background: none; border: none; color: var(--text-muted);
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px; padding: 8px 12px; cursor: pointer;
          border-radius: 4px; transition: color 0.15s, background 0.15s;
          text-transform: uppercase; letter-spacing: 0.04em;
        }
        .nav-btn:hover { color: var(--text); background: var(--panel); }
        .nav-btn.active { color: var(--accent); }
        .nav-desktop { display: flex; }
        .menu-btn { display: none; background: none; border: none; color: var(--text); cursor: pointer; }
        .nav-mobile {
          display: none; flex-direction: column; gap: 2px;
          padding: 8px 20px 16px; border-top: 1px solid var(--panel-border);
        }
        .nav-mobile .nav-btn { text-align: left; }
        .nav-mobile.open { display: flex; }

        @media (max-width: 720px) {
          .nav-desktop { display: none; }
          .menu-btn { display: block; }
        }

        /* Page layout */
        .page {
          max-width: 980px; margin: 0 auto;
          padding: 48px 20px 80px;
          animation: fadeIn 0.35s ease both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .page-title {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--text-muted); margin: 0 0 28px;
          border-bottom: 1px solid var(--panel-border);
          padding-bottom: 12px;
        }

        /* Hero */
        .home { padding-top: 40px; }
        .terminal {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px; color: var(--accent);
          margin-bottom: 28px; min-height: 88px;
        }
        .term-cmd { color: var(--text-muted); }
        .term-out { color: var(--text); margin-bottom: 8px; }
        .cursor {
          display: inline-block; width: 7px; height: 14px;
          background: var(--accent); animation: blink 1s step-start infinite;
          vertical-align: middle;
        }
        @keyframes blink { 50% { opacity: 0; } }

        .hero-name {
          font-family: 'IBM Plex Mono', monospace;
          font-size: clamp(36px, 7vw, 64px);
          font-weight: 700; margin: 0 0 12px; line-height: 1.05;
        }
        .hero-role {
          color: var(--text-muted); font-size: 16px; line-height: 1.6;
          max-width: 560px; margin: 0 0 28px;
        }
        .hero-actions { display: flex; gap: 12px; margin-bottom: 44px; flex-wrap: wrap; }

        .btn {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px; padding: 11px 18px; border-radius: 4px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          text-transform: uppercase; letter-spacing: 0.03em;
          transition: transform 0.15s, background 0.15s, border-color 0.15s;
        }
        .btn:active { transform: scale(0.97); }
        .btn-primary { background: var(--accent); color: #06110C; border: 1px solid var(--accent); font-weight: 600; }
        .btn-primary:hover { background: #63f0bf; }
        .btn-ghost { background: transparent; color: var(--text); border: 1px solid var(--panel-border); }
        .btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

        .stat-row { display: flex; gap: 14px; flex-wrap: wrap; }
        .stat-card {
          background: var(--panel); border: 1px solid var(--panel-border);
          border-radius: 6px; padding: 14px 18px;
          display: flex; align-items: flex-start; gap: 10px;
          min-width: 160px; flex: 1;
        }
        .stat-card .status-dot { margin-top: 6px; }
        .stat-value { font-family: 'IBM Plex Mono', monospace; font-size: 20px; font-weight: 600; }
        .stat-label { color: var(--text-muted); font-size: 12px; margin-top: 2px; }

        .marquee-wrap {
          margin-top: 56px; border-top: 1px solid var(--panel-border);
          border-bottom: 1px solid var(--panel-border);
          overflow: hidden; padding: 16px 0;
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
        .marquee { display: flex; gap: 28px; width: max-content; animation: scroll 26s linear infinite; }
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-item {
          font-family: 'IBM Plex Mono', monospace; font-size: 12px;
          color: var(--text-muted); white-space: nowrap;
          padding: 4px 12px; border: 1px solid var(--panel-border); border-radius: 4px;
        }

        /* Panels */
        .panel {
          background: var(--panel); border: 1px solid var(--panel-border);
          border-radius: 8px; padding: 22px;
        }
        .panel-header {
          font-family: 'IBM Plex Mono', monospace; font-size: 12px;
          letter-spacing: 0.08em; color: var(--text-muted);
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 16px;
        }
        .bio { color: var(--text); line-height: 1.7; font-size: 14.5px; margin: 0 0 14px; }
        .bio:last-child { margin-bottom: 0; }

        .about-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 20px; align-items: start; }
        .stack { display: flex; flex-direction: column; gap: 20px; }
        @media (max-width: 720px) { .about-grid { grid-template-columns: 1fr; } }

        .log-list { display: flex; flex-direction: column; gap: 14px; }
        .log-entry { display: grid; grid-template-columns: 130px 1fr; gap: 12px; }
        .log-date { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--accent); padding-top: 2px; }
        .log-title { font-size: 14px; font-weight: 500; }
        .log-detail { font-size: 12.5px; color: var(--text-muted); margin-top: 3px; line-height: 1.5; }
        @media (max-width: 480px) { .log-entry { grid-template-columns: 1fr; } }

        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
        .tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .tag {
          font-size: 12.5px; font-family: 'IBM Plex Mono', monospace;
          border: 1px solid var(--panel-border); color: var(--text);
          padding: 5px 10px; border-radius: 4px;
        }
        .tag-sm { font-size: 11px; padding: 4px 8px; color: var(--text-muted); }

        .project-list { display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }
        .project-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 10px; }
        .project-name { font-size: 17px; font-weight: 600; }
        .project-period { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--text-muted); margin-top: 3px; }
        .pill {
          font-family: 'IBM Plex Mono', monospace; font-size: 10.5px;
          border: 1px solid var(--accent-dim); color: var(--accent);
          padding: 4px 9px; border-radius: 20px; display: flex; align-items: center; gap: 6px;
          white-space: nowrap;
        }
        .project-desc { color: var(--text-muted); font-size: 14px; line-height: 1.6; margin: 0 0 12px; }
        .project-bullets { margin: 0 0 14px; padding-left: 18px; }
        .project-bullets li { font-size: 13.5px; color: var(--text); line-height: 1.6; margin-bottom: 6px; }

        .inline-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'IBM Plex Mono', monospace; font-size: 13px;
          color: var(--accent); border: 1px solid var(--accent-dim);
          padding: 9px 14px; border-radius: 6px;
        }
        .inline-link:hover { background: rgba(77,232,176,0.08); }

        .contact-row {
          display: flex; align-items: center; gap: 10px;
          font-size: 13.5px; padding: 11px 0;
          border-bottom: 1px solid var(--panel-border);
        }
        .contact-row:last-child { border-bottom: none; }
        .contact-row svg { color: var(--accent); flex-shrink: 0; }
        .row-arrow { margin-left: auto; color: var(--text-muted) !important; }
        .icon-btn {
          margin-left: auto; background: none; border: 1px solid var(--panel-border);
          color: var(--text-muted); border-radius: 4px; padding: 5px; cursor: pointer;
          display: flex; align-items: center;
        }
        .icon-btn:hover { color: var(--accent); border-color: var(--accent-dim); }

        .contact-form { display: flex; flex-direction: column; gap: 14px; }
        .field { display: flex; flex-direction: column; gap: 6px; }
        .field span { font-size: 12px; color: var(--text-muted); font-family: 'IBM Plex Mono', monospace; }
        .field input, .field textarea {
          background: var(--bg); border: 1px solid var(--panel-border); color: var(--text);
          border-radius: 5px; padding: 10px 12px; font-size: 13.5px; resize: vertical;
        }
        .field input:focus, .field textarea:focus { border-color: var(--accent); }
        .form-note { font-size: 11.5px; color: var(--text-muted); margin: 0; }

        footer {
          border-top: 1px solid var(--panel-border);
          padding: 22px 20px; text-align: center;
          font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; color: var(--text-muted);
        }
      `}</style>

      <div className="topbar">
        <div className="topbar-inner">
          <button className="brand" onClick={() => go("home")}>
            <StatusDot /> arman.sys
          </button>
          <nav className="nav nav-desktop">
            {NAV.map((n) => (
              <button
                key={n}
                className={`nav-btn ${page === n ? "active" : ""}`}
                onClick={() => go(n)}
              >
                {n}
              </button>
            ))}
          </nav>
          <button className="menu-btn" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className={`nav-mobile ${menuOpen ? "open" : ""}`}>
          {NAV.map((n) => (
            <button
              key={n}
              className={`nav-btn ${page === n ? "active" : ""}`}
              onClick={() => go(n)}
            >
              {n}
            </button>
          ))}
        </nav>
      </div>

      {renderPage()}

      <footer>SYSTEM: ARMAN NAYAK · BUILT WITH REACT · {new Date().getFullYear()}</footer>
    </div>
  );
}
