import "./Contact.css";

export function Contact() {
  return (
    <div className="contact-section-container">
      <h1 className="hero-text">{`LET'S WORK\nTOGETHER`}</h1>

      <div className="contact-form">
        <div className="client-info">
          <div className="input-group">
            <label>Name</label>
            <input type="text" className="info-input" placeholder="Your Name" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              className="info-input"
              placeholder="Your Email"
            />
          </div>
        </div>

        <div className="input-group full-width">
          <label>Message</label>
          <textarea
            className="info-input message"
            placeholder="Let me know how I can help..."
            rows="4"
          />
        </div>

        <button className="contact-btn">Send Message</button>
      </div>
    </div>
  );
}
