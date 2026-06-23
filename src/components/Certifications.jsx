import profileData from "../data/profileData";

export default function Certifications() {
  const { certifications, achievements } = profileData;

  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Certifications & Achievements</span>
          <h2>Additional learning, participation, and professional development.</h2>
        </div>

        <div className="certifications-layout">
          <div className="card-grid cert-grid">
            {certifications.map((item) => (
              <article className="glass-card cert-card" key={item.title}>
                <div className="cert-icon">📜</div>
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
                <span>{item.period}</span>
              </article>
            ))}
          </div>

          <div className="glass-card achievements-card">
            <h3>Achievements & Participation</h3>
            <ul>
              {achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}