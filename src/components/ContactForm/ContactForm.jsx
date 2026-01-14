import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiShield, FiLock } from 'react-icons/fi';
import { API_ENDPOINTS } from '../../config/api';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const countryCodes = [
    { code: '+91', country: 'India' },
    { code: '+1', country: 'USA/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+61', country: 'Australia' },
    { code: '+971', country: 'UAE' },
    { code: '+65', country: 'Singapore' },
    { code: '+60', country: 'Malaysia' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    { code: '+81', country: 'Japan' },
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{6,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter a valid name';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (6-15 digits)';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch(API_ENDPOINTS.leads, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          company: formData.company || null,
          message: formData.message || null,
          source: 'contact'
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', countryCode: '+91', phone: '', company: '', message: '' });
        setErrors({});
        setTimeout(() => {
          setSubmitStatus('');
          alert('Thank you! We will contact you within 24 hours.');
        }, 1500);
      } else {
        setSubmitStatus('error');
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      alert('Failed to submit. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg-pattern"></div>

      <div className="container">
        <div className="contact-header">
          <span className="contact-eyebrow">Let's Work Together</span>
          <h2 className="contact-main-title">
            Ready to Transform Your Business?
          </h2>
          <p className="contact-main-subtitle">
            Get a free consultation and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Side - Info Cards */}
          <div className="contact-left">
            <div className="info-card">
              <div className="info-icon">
                <FiMail />
              </div>
              <div className="info-details">
                <h4>Email Us</h4>
                <a href="mailto:info@settlo.com">info@settlo.com</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiPhone />
              </div>
              <div className="info-details">
                <h4>Call Us</h4>
                <a href="tel:+919003633356">+91 9003633356</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiMapPin />
              </div>
              <div className="info-details">
                <h4>Visit Us</h4>
                <span>Erode, Tamil Nadu, India</span>
              </div>
            </div>

            <div className="trust-badges">
              {/* <div className="trust-badge">
                <FiShield className="trust-icon" />
                <span>100% Confidential</span>
              </div>
              <div className="trust-badge">
                <FiLock className="trust-icon" />
                <span>We Sign NDA</span>
              </div> */}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-right">
            <div className="form-card">
              <h3 className="form-heading">Send Us a Message</h3>
              <p className="form-subheading">Fill out the form and our team will get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="input-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>
                  <div className="input-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                </div>

                <div className="input-group">
                  <label>Phone Number *</label>
                  <div className="phone-input-group">
                    <select 
                      name="countryCode" 
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="country-select"
                    >
                      {countryCodes.map(({ code, country }) => (
                        <option key={code} value={code}>
                          {country} ({code})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="input-group">
                  <label>Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name (Optional)"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group full-width">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
                  <FiSend className="btn-icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
