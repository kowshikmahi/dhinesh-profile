import profileData from "../data/profileData";

export default function Contact() {
  const { personal } = profileData;

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Contact</span>
          <h2>
            Let’s connect for legal opportunities, internships, and
            professional collaborations.
          </h2>
        </div>

        <div className="contact-grid">
          <div className="glass-card contact-info-card">
            <h3>Contact Information</h3>

            <div className="contact-item">
              <span>Email</span>
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </div>

            <div className="contact-item">
              <span>Phone</span>
              <a href={`tel:${personal.phone}`}>{personal.phone}</a>
            </div>

            <div className="contact-item">
              <span>LinkedIn</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                View LinkedIn Profile
              </a>
            </div>

            <div className="contact-resume-actions">
              <a
                href={personal.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Resume
              </a>

            </div>
          </div>

          <div className="glass-card contact-form-card">
            <form
              action={`https://formsubmit.co/${personal.email}`}
              method="POST"
              className="contact-form"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="Portfolio Contact - Dhinesh Kumar P"
              />

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}