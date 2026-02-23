import "./Contact.css";
import { useRef, useState } from "react";
import emailJs from "@emailjs/browser";

export function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [status, setStatus] = useState("Send Message");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    emailJs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank you for your message <3");
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        setTimeout(() => setStatus("Send Message"), 1000);
      })
      .catch((e) => {
        console.log("FAILED...", err);
        setStatus("Error! Try again.");
      });
  };

  return (
    <div className="contact-section-container">
      <h1 className="hero-text">{`LET'S WORK\nTOGETHER`}</h1>

      <div className="contact-form">
        <div className="client-info">
          <div className="input-group">
            <label>Name</label>
            <input
              ref={nameRef}
              type="text"
              className="info-input"
              placeholder="Your Name"
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              ref={emailRef}
              type="email"
              className="info-input"
              placeholder="Your Email"
            />
          </div>
        </div>

        <div className="input-group full-width">
          <label>Message</label>
          <textarea
            ref={messageRef}
            className="info-input message"
            placeholder="Let me know how I can help..."
            rows="4"
          />
        </div>

        <button className="contact-btn" onClick={sendEmail}>
          {status}
        </button>
      </div>
    </div>
  );
}
