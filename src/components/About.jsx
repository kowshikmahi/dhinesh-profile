import profileData from "../data/profileData";

export default function About() {
  const { about } = profileData;

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">About</span>
          <h2>Building a legal career with clarity, discipline, and purpose.</h2>
          <p>
            A focused legal profile shaped by research, drafting, court exposure,
            and a long-term commitment to advocacy.
          </p>
        </div>

        <div className="about-grid">
          <div className="glass-card about-quote-card">
            <div className="quote-mark">“</div>
            <p>{about.quote}</p>
          </div>

          <div className="glass-card about-story-card">
            {about.story.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}