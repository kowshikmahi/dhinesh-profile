import profileData from "../data/profileData";
import heroPhoto from "../assets/hero-photo.png";

export default function Hero() {
  const { personal, heroIntro, values } = profileData;

  return (
    <section className="section hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">Personal Legal Portfolio</div>

          <h1 className="hero-name">{personal.name}</h1>

          <p className="hero-role">{personal.title}</p>

          <p className="hero-intro">{heroIntro}</p>

          <div className="hero-actions">
            <a
            href={personal.resumeFile}
            target="_blank"
            rel="noopener noreferrer"
             className="btn btn-primary"
            >
              View Resume
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-meta-grid">
            <div className="glass-chip">
              <span className="chip-label">College</span>
              <span className="chip-value">{personal.college}</span>
            </div>

            <div className="glass-chip">
              <span className="chip-label">Focus</span>
              <span className="chip-value">
                Civil Law • Research • Drafting
              </span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-card glass-card">
            <div className="hero-photo-ring">
              <img
                src={heroPhoto}
                alt="Dhinesh Kumar P"
                className="hero-photo"
              />
            </div>

            <div className="law-tags">
              {values.map((item) => (
                <div className="law-tag" key={item.label}>
                  <span className="law-tag-title">{item.label}</span>

                  <div className="law-tag-tooltip">
                    <strong>{item.label}</strong>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}