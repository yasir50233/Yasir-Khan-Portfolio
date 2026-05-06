import { useState } from 'react';
import { initialFormValues, validateContactField } from '../utils/contactValidation.js';

export default function Contact() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState({ type: '', text: '' });

  function handleFormChange(event) {
    const { name, value } = event.target;

    setFormValues(currentValues => ({
      ...currentValues,
      [name]: value
    }));

    setFormErrors(currentErrors => ({
      ...currentErrors,
      [name]: validateContactField(name, value)
    }));

    setFormStatus({ type: '', text: '' });
  }

  function handleFormBlur(event) {
    const { name, value } = event.target;

    setFormErrors(currentErrors => ({
      ...currentErrors,
      [name]: validateContactField(name, value)
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const nextErrors = Object.fromEntries(
      Object.entries(formValues).map(([name, value]) => [name, validateContactField(name, value)])
    );
    const hasErrors = Object.values(nextErrors).some(Boolean);

    setFormErrors(nextErrors);

    if (hasErrors) {
      setFormStatus({ type: 'error', text: 'Please fix the highlighted fields.' });
      return;
    }

    setFormStatus({
      type: 'success',
      text: `Thanks, ${formValues.name.trim()}. Your message is ready to send.`
    });
    setFormValues(initialFormValues);
    setFormErrors({});
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-intro">
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">Let's build something polished.</h2>
          <p className="section-subtitle">
            Tell me about your website, WordPress project, or frontend idea and I'll get back to you
            soon.
          </p>

          <div className="contact-details">
            <a href="mailto:yasirkhan9850233@gmail.com" className="contact-detail">
              <i className="fas fa-envelope"></i>
              <span>yasirkhan9850233@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yasir-khan-it"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
            >
              <i className="fab fa-linkedin"></i>
              <span>linkedin.com/in/yasir-khan-it</span>
            </a>
            <a
              href="https://github.com/yasir50233"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
            >
              <i className="fab fa-github"></i>
              <span>@yasir50233</span>
            </a>
          </div>
        </div>

        <form className="contact-form" id="contactForm" noValidate onSubmit={handleFormSubmit}>
          <div className="form-row">
            <div className={`form-group${formErrors.name ? ' error' : ''}`}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                onBlur={handleFormBlur}
                onChange={handleFormChange}
                placeholder="Your name"
                required
                type="text"
                value={formValues.name}
              />
              <small className="error-message">{formErrors.name}</small>
            </div>

            <div className={`form-group${formErrors.email ? ' error' : ''}`}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                onBlur={handleFormBlur}
                onChange={handleFormChange}
                placeholder="you@example.com"
                required
                type="email"
                value={formValues.email}
              />
              <small className="error-message">{formErrors.email}</small>
            </div>
          </div>

          <div className={`form-group${formErrors.subject ? ' error' : ''}`}>
            <label htmlFor="subject">Project Type</label>
            <select
              id="subject"
              name="subject"
              onBlur={handleFormBlur}
              onChange={handleFormChange}
              required
              value={formValues.subject}
            >
              <option value="">Choose one</option>
              <option value="frontend">Frontend Website</option>
              <option value="wordpress">WordPress Project</option>
              <option value="redesign">Website Redesign</option>
              <option value="support">Ongoing Support</option>
            </select>
            <small className="error-message">{formErrors.subject}</small>
          </div>

          <div className={`form-group${formErrors.message ? ' error' : ''}`}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              onBlur={handleFormBlur}
              onChange={handleFormChange}
              placeholder="Share a few details about your project"
              required
              rows="6"
              value={formValues.message}
            ></textarea>
            <small className="error-message">{formErrors.message}</small>
          </div>

          <button className="btn primary contact-submit" type="submit">
            <i className="fas fa-paper-plane"></i>
            Send Message
          </button>

          <p
            className={`form-status${formStatus.type ? ` ${formStatus.type}` : ''}`}
            id="formStatus"
            role="status"
            aria-live="polite"
          >
            {formStatus.text}
          </p>
        </form>
      </div>
    </section>
  );
}
