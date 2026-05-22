import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm currently looking for internships and freelance opportunities. If you have a project in mind, feel free to reach out.
          </p>
          <div className="social-links">
            <a href="mailto:silvest43n85@gmail.com" className="social-icon" aria-label="Email" style={{ borderRight: '1px solid #79829383', paddingRight: '25px' }}>
              <FaEnvelope size={30} />
            </a>
            <a href="https://www.linkedin.com/in/silvestaj" target="_blank"  className="social-icon" aria-label="LinkedIn" style={{ borderRight: '1px solid #79829383', paddingRight: '25px' }}>
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/SILVXT-AJ" target="_blank"  className="social-icon" aria-label="GitHub">
              <FaGithub size={30} />
            </a>
          </div>
          <a href="mailto:silvest43n85@gmail.com" className="email-btn">
            Email Me Directly
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
