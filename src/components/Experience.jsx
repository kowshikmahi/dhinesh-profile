import profileData from "../data/profileData";

export default function Experience() {
  const { experience } = profileData;

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Internship Experience</span>
          <h2>Practical exposure to legal work, procedure, and client-facing responsibilities.</h2>
        </div>

        <div className="experience-timeline">
          {experience.map((item, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-dot" />
              <div className="glass-card experience-card">
                <div className="experience-head">
                  <div>
                    <h3>{item.role}</h3>
                    <h4>{item.org}</h4>
                  </div>
                  <span className="experience-duration">{item.duration}</span>
                </div>

                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}