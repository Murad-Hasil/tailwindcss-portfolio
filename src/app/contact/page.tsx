import React from 'react';
import '@/app/styles/contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">
          I’d love to hear from you! Whether you have a question, project idea, or just want to connect, feel free to reach out.
        </p>
        <div className="contact-form-wrapper">
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-input"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-input"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-textarea"
                  id="message"
                  placeholder="Your Message"
                  rows={10}
                ></textarea>
              </div>
              <div className="form-submit">
                <button
                  className="submit-button"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
