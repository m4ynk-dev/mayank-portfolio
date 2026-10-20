"use client";

import { useState } from "react";

const tracks = [
  ["Harvey", "Hers · on repeat, probably"],
  ["Stress Relief", "Late Night Drive Home · windows down"],
  ["505", "Arctic Monkeys · the long way home"],
  ["somewhere, sometime", "your next favourite song · TBD"],
];

const projects = [
  {
    number: "01",
    type: "open source / hackathon",
    year: "2026",
    name: "Circuit Setu",
    description:
      "A browser-based circuit playground built to make experimenting with electronics feel a little less intimidating. Frontend, interactions, and a lot of tiny details.",
    tags: ["Next.js", "React", "Canvas UI"],
    href: "https://github.com/r17e8h/CircuitSetu",
    art: "circuit",
  },
  {
    number: "02",
    type: "personal project",
    year: "ongoing",
    name: "Afterhours Player",
    description:
      "A little corner of the internet for music, late-night thoughts, and the songs that make a room feel like a movie scene.",
    tags: ["HTML / CSS", "JavaScript", "UI design"],
    href: "https://github.com/m4ynk-dev",
    art: "music",
  },
];

export default function Home() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [toast, setToast] = useState(false);

  function nextTrack() {
    setTrackIndex((current) => (current + 1) % tracks.length);
    setToast(true);
    window.setTimeout(() => setToast(false), 1500);
  }

  return (
    <div className="app" id="top">
      <div className="grain" aria-hidden="true" />
      <header className="nav">
        <a className="brand" href="#top">
          <span className="brand-mark">M.</span>
          <span>Mayank / personal archive</span>
        </a>
        <nav className="navlinks" aria-label="Main navigation">
          <a href="#work">work</a>
          <a href="#about">about</a>
          <a href="#contact">say hi:)</a>
        </nav>
        <div className="status"><span className="dot" /> open to interesting things</div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">developer, daydreamer, night owl</div>
            <h1>making<br />things<br /><span className="soft">feel</span> alive.</h1>
            <p className="hero-copy">
              Hey, I&apos;m <strong>Mayank</strong> — a developer who likes the space
              between a working interface and a feeling you can&apos;t quite explain.
              Currently building for the web, collecting songs, and figuring it out as I go.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#work">explore my work <span className="arrow">↘</span></a>
              <a className="btn" href="#contact">get in touch <span className="arrow">↗</span></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Illustrated sunset with power lines">
            <div className="art-frame">
              <div className="art-sky" />
              <div className="moon" />
              <div className="sunset-lines" />
              <div className="powerline" />
              <div className="hill" />
              <div className="hill two" />
              <div className="art-number">FIG. 001 — AFTER HOURS</div>
              <div className="art-sticker">somewhere, after midnight</div>
            </div>
            <div className="spark">✳</div>
            <div className="scribble">still here.</div>
            <div className="art-caption"><span>delhi, india</span><span>made of curiosity + caffeine</span></div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-inner">
            {Array.from({ length: 2 }).map((_, i) => (
              <span className="ticker-group" key={i}>
                <span>code with feeling</span><b>✳</b>
                <span>build / break / repeat</span><b>✳</b>
                <span>somewhere between noise &amp; nostalgia</span><b>✳</b>
                <span>keep making weird things</span><b>✳</b>
              </span>
            ))}
          </div>
        </div>

        <section className="section" id="work">
          <div className="section-head">
            <div><div className="kicker">01 / selected experiments</div><h2>Things I&apos;ve <em>made.</em></h2></div>
            <div className="side-note">A few things from the workbench.<br />More to come, always.</div>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className="project-top"><span>{project.number} — {project.type}</span><span>{project.year}</span></div>
                <div className="project-art">
                  {project.art === "circuit" ? (
                    <div className="circuit"><i className="node n1" /><i className="node n2" /><i className="node n3" /><i className="node n4" /></div>
                  ) : <div className="music-art">side<br />effects</div>}
                </div>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-bottom">
                    <div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>↗</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-head">
            <div><div className="kicker">02 / a little context</div><h2>Not just <em>the code.</em></h2></div>
            <div className="side-note">A person behind the pixels.<br />Plot still developing.</div>
          </div>
          <div className="about-grid">
            <div className="about-note">
              <p>Make something honest. Make it a little strange. Make it yours.</p>
              <small>personal operating system / v.∞</small>
            </div>
            <div className="about-text">
              <p>I&apos;m learning by building — turning ideas into interfaces, chasing the details that make a product feel <strong>human</strong>, and trying not to lose the fun in the process.</p>
              <p>My taste lives somewhere between lo-fi nights, indie-rock feelings, worn-out film stills, and stories where the characters are a little messy but still choose to keep going. That energy sneaks into the things I make.</p>
              <p>Right now I&apos;m exploring frontend development, sharpening my JavaScript, and slowly making my way toward bigger, more ambitious projects.</p>
              <div className="skills">
                {["JavaScript", "React", "Next.js", "Tailwind CSS", "Python", "Figma-ish energy"].map((skill) => <span className="skill" key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="now-playing" aria-label="Currently listening">
          <div>
            <div className="np-label">the room is dim / currently listening to</div>
            <div className="np-title">{tracks[trackIndex][0]}</div>
            <div className="np-sub">{tracks[trackIndex][1]}</div>
          </div>
          <div className="np-controls">
            <div className={`bars ${paused ? "paused" : ""}`} aria-hidden="true">
              {Array.from({ length: 11 }).map((_, i) => <i key={i} />)}
            </div>
            <button className="play" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Resume animation" : "Pause animation"}>{paused ? "▶" : "Ⅱ"}</button>
            <button className="play" onClick={nextTrack} aria-label="Next track">↻</button>
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <div className="kicker">03 / the next chapter</div>
            <h2>Let&apos;s make<br />something <em>real.</em></h2>
            <p>Have a project, an idea, or a song you think I&apos;d love? My inbox is open. The best things usually start with a conversation.</p>
            <a className="btn primary" href="mailto:REPLACE-WITH-YOUR-EMAIL@example.com">send a little signal <span className="arrow">↗</span></a>
          </div>
          <div className="contact-links">
            <a href="https://github.com/m4ynk-dev" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href="mailto:REPLACE-WITH-YOUR-EMAIL@example.com">Email <span>↗</span></a>
            <a href="#top">Back to the top <span>↑</span></a>
          </div>
        </section>
        <footer>
          <span>© {new Date().getFullYear()} mayank. made with intent.</span>
          <span>best experienced with headphones + a little time</span>
          <a href="#top">↑ back upstairs</a>
        </footer>
      </main>
      {toast && <div className="toast" role="status">A tiny change of mood.</div>}
    </div>
  );
}
