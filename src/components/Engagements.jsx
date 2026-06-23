import profileData from "../data/profileData";

export default function Engagements() {
  const { engagements } = profileData;

  return (
    <section className="section" id="engagements">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Moot Court & Academic Engagements</span>
          <h2>Legal exposure beyond the classroom through competitions, seminars, and committee work.</h2>
        </div>

        <div className="card-grid engagements-grid">
          <div className="glass-card engagement-card">
            <h3>Moot Court Experience</h3>
            <ul>
              {engagements.mootCourt.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="glass-card engagement-card">
            <h3>Seminars & Legal Participation</h3>
            <ul>
              {engagements.seminars.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="glass-card engagement-card">
            <h3>Organisational Experience</h3>
            <ul>
              {engagements.organizational.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}