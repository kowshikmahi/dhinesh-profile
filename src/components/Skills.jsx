import profileData from "../data/profileData";

const icons = {
  research: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M10.5 18a7.5 7.5 0 1 1 5.3-2.2L21 21" />
    </svg>
  ),
  drafting: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-4-1.2L4 18.8V20Z" />
      <path d="M13.5 5.5l5 5" />
    </svg>
  ),
  constitutional: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 9h18" />
      <path d="M5 9V6l7-3 7 3v3" />
      <path d="M6 9v8" />
      <path d="M10 9v8" />
      <path d="M14 9v8" />
      <path d="M18 9v8" />
      <path d="M3 20h18" />
    </svg>
  ),
  analysis: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 19h16" />
      <path d="M7 16V9" />
      <path d="M12 16V5" />
      <path d="M17 16v-4" />
    </svg>
  ),
  advocacy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v18" />
      <path d="M7 7h10" />
      <path d="M6 7c0 2-1.5 4-3 5 1.5 1 3 3 3 5" />
      <path d="M18 7c0 2 1.5 4 3 5-1.5 1-3 3-3 5" />
    </svg>
  ),
  procedure: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 3h8l4 4v14H4V3h4Z" />
      <path d="M14 3v5h5" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Core Competencies</span>
          <h2>Legal skills shaped by research, drafting, and practical exposure.</h2>
          <p>
            My work so far has focused on building a dependable foundation in legal
            research, drafting, procedural understanding, and oral advocacy.
          </p>
        </div>

        <div className="card-grid skills-grid">
          {profileData.skills.map((skill) => (
            <article className="glass-card skill-card" key={skill.title}>
              <div className="skill-icon">{icons[skill.icon]}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}