import profileData from "../data/profileData";

export default function Education() {
  const { education } = profileData;

  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Education</span>
          <h2>Academic foundation in law and legal reasoning.</h2>
        </div>

        <div className="timeline-wrap">
          {education.map((item, index) => (
            <div className="timeline-item glass-card" key={index}>
              <div className="timeline-line-dot" />
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                <p>{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}