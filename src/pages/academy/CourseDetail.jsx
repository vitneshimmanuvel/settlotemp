import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ENDPOINTS } from '../../config/api';

const CourseDetail = ({ course }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [activeModule, setActiveModule] = useState(0);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should contain only letters and spaces';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch(API_ENDPOINTS.courseEnrollment, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            courseName: course.title,
            courseCategory: course.category,
          }),
        });

        const data = await response.json();
        
        if (response.ok) {
          alert('Enrollment submitted successfully!');
          setShowModal(false);
          setFormData({ name: '', phone: '', email: '' });
        } else {
          throw new Error(data.message || 'Failed to submit enrollment');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit enrollment. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      if (value === '' || /^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  function allowOnlyLetters(e) {
    const char = e.key;
    if (!/^[a-zA-Z\s]$/.test(char) && !['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(char)) {
      e.preventDefault();
    }
  }

  const modules = course.curriculum || [];

  return (
    <div className="cdp-wrapper">
      <style>{`
        /* Reset all inherited styles */
        .cdp-wrapper,
        .cdp-wrapper * {
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important;
        }
        
        .cdp-wrapper {
          min-height: 100vh !important;
          background: #eef0f2 !important;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        }
        
        .cdp-header {
          background: #2c3a5f !important;
          color: #ffffff !important;
          padding: 24px !important;
        }
        
        .cdp-header-inner {
          max-width: 1200px !important;
          margin: 0 auto !important;
        }
        
        .cdp-back {
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
          color: #ffffff !important;
          font-size: 14px !important;
          margin-bottom: 16px !important;
          text-decoration: none !important;
          opacity: 0.9 !important;
        }
        
        .cdp-top {
          display: flex !important;
          align-items: flex-start !important;
          gap: 20px !important;
          margin-bottom: 20px !important;
        }
        
        .cdp-logo {
          width: 56px !important;
          height: 56px !important;
          background: #ffffff !important;
          border-radius: 12px !important;
          padding: 6px !important;
          object-fit: contain !important;
          flex-shrink: 0 !important;
        }
        
        .cdp-title {
          font-size: 28px !important;
          font-weight: 700 !important;
          color: #ffffff !important;
          margin-bottom: 8px !important;
          line-height: 1.2 !important;
        }
        
        .cdp-desc {
          font-size: 15px !important;
          color: #ffffff !important;
          line-height: 1.5 !important;
          max-width: 700px !important;
        }
        
        .cdp-cards {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 16px !important;
        }
        
        @media (max-width: 600px) {
          .cdp-cards {
            grid-template-columns: 1fr !important;
          }
        }
        
        .cdp-card {
          background: linear-gradient(135deg, #059669, #2563eb) !important;
          border-radius: 12px !important;
          padding: 20px !important;
          color: #ffffff !important;
        }
        
        .cdp-card-label {
          font-size: 12px !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          color: rgba(255,255,255,0.9) !important;
          margin-bottom: 4px !important;
          display: block !important;
        }
        
        .cdp-card-value {
          font-size: 28px !important;
          font-weight: 700 !important;
          color: #ffffff !important;
          margin-bottom: 12px !important;
        }
        
        .cdp-card-list {
          list-style: none !important;
        }
        
        .cdp-card-list li {
          font-size: 14px !important;
          color: rgba(255,255,255,0.95) !important;
          margin-bottom: 4px !important;
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
        }
        
        .cdp-main {
          max-width: 1200px !important;
          margin: 0 auto !important;
          padding: 20px !important;
        }
        
        .cdp-section {
          margin-bottom: 20px !important;
        }
        
        .cdp-section-title {
          font-size: 22px !important;
          font-weight: 700 !important;
          color: #111827 !important;
          margin-bottom: 12px !important;
          padding-left: 12px !important;
          border-left: 4px solid #10b981 !important;
        }
        
        .cdp-box {
          background: #ffffff !important;
          border-radius: 12px !important;
          padding: 16px !important;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05) !important;
        }
        
        .cdp-box p {
          font-size: 15px !important;
          color: #1f2937 !important;
          line-height: 1.6 !important;
          margin-bottom: 10px !important;
        }
        
        .cdp-box p:last-child {
          margin-bottom: 0 !important;
        }
        
        .cdp-prereq-grid {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 12px !important;
        }
        
        @media (max-width: 600px) {
          .cdp-prereq-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        .cdp-prereq-card {
          background: #ffffff !important;
          border-radius: 12px !important;
          padding: 16px !important;
          border: 1px solid #e5e7eb !important;
        }
        
        .cdp-prereq-card h3 {
          font-size: 16px !important;
          font-weight: 600 !important;
          margin-bottom: 6px !important;
        }
        
        .cdp-prereq-card.req h3 {
          color: #1d4ed8 !important;
        }
        
        .cdp-prereq-card.help h3 {
          color: #059669 !important;
        }
        
        .cdp-prereq-card p {
          font-size: 14px !important;
          color: #1f2937 !important;
          margin: 0 !important;
        }
        
        .cdp-modules-grid {
          display: grid !important;
          grid-template-columns: 260px 1fr !important;
          gap: 12px !important;
        }
        
        @media (max-width: 800px) {
          .cdp-modules-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        .cdp-mod-list {
          background: #ffffff !important;
          border-radius: 12px !important;
          padding: 16px !important;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05) !important;
        }
        
        .cdp-mod-list h3 {
          font-size: 16px !important;
          font-weight: 600 !important;
          color: #059669 !important;
          margin-bottom: 10px !important;
        }
        
        .cdp-mod-list ul {
          list-style: none !important;
        }
        
        .cdp-mod-list li {
          margin-bottom: 6px !important;
        }
        
        .cdp-mod-btn {
          width: 100% !important;
          text-align: left !important;
          padding: 10px 12px !important;
          border-radius: 8px !important;
          border: none !important;
          cursor: pointer !important;
          font-size: 13px !important;
          font-family: inherit !important;
          transition: none !important;
        }
        
        .cdp-mod-btn.active {
          background: linear-gradient(135deg, #059669, #2563eb) !important;
          color: #ffffff !important;
        }
        
        .cdp-mod-btn:not(.active) {
          background: #f3f4f6 !important;
          color: #1f2937 !important;
        }
        
        .cdp-mod-detail {
          background: #ffffff !important;
          border-radius: 12px !important;
          padding: 16px !important;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05) !important;
        }
        
        .cdp-mod-detail h3 {
          font-size: 18px !important;
          font-weight: 700 !important;
          color: #111827 !important;
          margin-bottom: 8px !important;
        }
        
        .cdp-badge {
          display: inline-block !important;
          background: #d1fae5 !important;
          color: #065f46 !important;
          padding: 4px 10px !important;
          border-radius: 20px !important;
          font-size: 12px !important;
          font-weight: 500 !important;
          margin-bottom: 8px !important;
        }
        
        .cdp-mod-detail > p {
          font-size: 14px !important;
          color: #1f2937 !important;
          margin-bottom: 12px !important;
        }
        
        .cdp-mod-detail h4 {
          font-size: 16px !important;
          font-weight: 600 !important;
          color: #111827 !important;
          margin-bottom: 8px !important;
        }
        
        .cdp-topics {
          list-style: none !important;
        }
        
        .cdp-topics li {
          display: flex !important;
          align-items: flex-start !important;
          margin-bottom: 6px !important;
          gap: 10px !important;
        }
        
        .cdp-dot {
          width: 14px !important;
          height: 14px !important;
          border-radius: 50% !important;
          background: #10b981 !important;
          flex-shrink: 0 !important;
          margin-top: 3px !important;
        }
        
        .cdp-topics li span:last-child {
          font-size: 14px !important;
          color: #1f2937 !important;
        }
        
        .cdp-outcomes-grid {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 12px !important;
        }
        
        @media (max-width: 600px) {
          .cdp-outcomes-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        .cdp-outcome-card {
          background: #ffffff !important;
          border-radius: 12px !important;
          padding: 16px !important;
          border: 1px solid #e5e7eb !important;
        }
        
        .cdp-outcome-card h3 {
          font-size: 16px !important;
          font-weight: 600 !important;
          margin-bottom: 10px !important;
        }
        
        .cdp-outcome-card.out h3 {
          color: #1d4ed8 !important;
        }
        
        .cdp-outcome-card.car h3 {
          color: #059669 !important;
        }
        
        .cdp-outcome-card ul {
          list-style: none !important;
        }
        
        .cdp-outcome-card li {
          display: flex !important;
          align-items: flex-start !important;
          margin-bottom: 6px !important;
          gap: 8px !important;
          font-size: 14px !important;
          color: #1f2937 !important;
        }
        
        .cdp-check {
          color: #10b981 !important;
        }
        
        .cdp-bullet {
          color: #2563eb !important;
        }
        
        .cdp-cert {
          background: linear-gradient(135deg, #1e3a5f, #065f46) !important;
          border-radius: 12px !important;
          padding: 20px !important;
        }
        
        .cdp-cert h3 {
          font-size: 20px !important;
          font-weight: 700 !important;
          color: #ffffff !important;
          margin-bottom: 8px !important;
        }
        
        .cdp-cert > p {
          font-size: 15px !important;
          color: #ffffff !important;
          margin-bottom: 16px !important;
        }
        
        .cdp-cert-grid {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 12px !important;
        }
        
        @media (max-width: 600px) {
          .cdp-cert-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        .cdp-cert-card {
          background: rgba(255,255,255,0.1) !important;
          border-radius: 8px !important;
          padding: 14px !important;
        }
        
        .cdp-cert-card h4 {
          font-size: 15px !important;
          font-weight: 600 !important;
          color: #ffffff !important;
          margin-bottom: 8px !important;
        }
        
        .cdp-cert-card ul {
          list-style: none !important;
        }
        
        .cdp-cert-card li {
          display: flex !important;
          align-items: flex-start !important;
          margin-bottom: 4px !important;
          gap: 8px !important;
          font-size: 13px !important;
          color: rgba(255,255,255,0.95) !important;
        }
        
        .cdp-star {
          color: #fbbf24 !important;
        }
        
        .cdp-cta {
          text-align: center !important;
          padding: 24px !important;
          background: linear-gradient(135deg, #2563eb, #059669) !important;
          border-radius: 12px !important;
        }
        
        .cdp-cta h2 {
          font-size: 22px !important;
          font-weight: 700 !important;
          color: #ffffff !important;
          margin-bottom: 8px !important;
        }
        
        .cdp-cta p {
          font-size: 15px !important;
          color: #ffffff !important;
          margin-bottom: 16px !important;
        }
        
        .cdp-enroll-btn {
          background: linear-gradient(135deg, #10b981, #059669) !important;
          color: #ffffff !important;
          font-weight: 600 !important;
          padding: 12px 28px !important;
          border-radius: 50px !important;
          font-size: 16px !important;
          border: none !important;
          cursor: pointer !important;
          font-family: inherit !important;
        }
        
        .cdp-footer {
          background: #e5e7eb !important;
          padding: 24px !important;
          text-align: center !important;
          margin-top: 20px !important;
        }
        
        .cdp-footer-logo {
          width: 50px !important;
          height: 50px !important;
          border-radius: 10px !important;
          background: #ffffff !important;
          padding: 4px !important;
          margin: 0 auto 10px !important;
          display: block !important;
        }
        
        .cdp-footer p {
          font-size: 14px !important;
          color: #1f2937 !important;
          margin-bottom: 4px !important;
        }
        
        .cdp-footer .tagline {
          color: #059669 !important;
        }
        
        /* Modal */
        .cdp-modal {
          position: fixed !important;
          inset: 0 !important;
          background: rgba(0,0,0,0.5) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          z-index: 9999 !important;
          padding: 16px !important;
        }
        
        .cdp-modal-box {
          background: #ffffff !important;
          border-radius: 12px !important;
          max-width: 380px !important;
          width: 100% !important;
          padding: 20px !important;
        }
        
        .cdp-modal-head {
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          margin-bottom: 16px !important;
        }
        
        .cdp-modal-head h3 {
          font-size: 20px !important;
          font-weight: 700 !important;
          color: #111827 !important;
        }
        
        .cdp-close {
          background: none !important;
          border: none !important;
          color: #6b7280 !important;
          cursor: pointer !important;
          padding: 4px !important;
        }
        
        .cdp-form-group {
          margin-bottom: 12px !important;
        }
        
        .cdp-form-group label {
          display: block !important;
          font-size: 14px !important;
          font-weight: 500 !important;
          color: #111827 !important;
          margin-bottom: 6px !important;
        }
        
        .cdp-form-group input {
          width: 100% !important;
          padding: 10px 12px !important;
          border-radius: 8px !important;
          border: 1px solid #d1d5db !important;
          font-size: 14px !important;
          font-family: inherit !important;
          color: #111827 !important;
          background: #ffffff !important;
        }
        
        .cdp-form-group input:focus {
          outline: none !important;
          border-color: #10b981 !important;
        }
        
        .cdp-form-group input.err {
          border-color: #ef4444 !important;
        }
        
        .cdp-err {
          color: #ef4444 !important;
          font-size: 12px !important;
          margin-top: 4px !important;
        }
        
        .cdp-submit {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed) !important;
          color: #ffffff !important;
          font-weight: 600 !important;
          padding: 10px 20px !important;
          border-radius: 8px !important;
          border: none !important;
          cursor: pointer !important;
          font-size: 14px !important;
          font-family: inherit !important;
          margin-top: 8px !important;
          float: right !important;
        }
        
        .cdp-submit:disabled {
          opacity: 0.7 !important;
          cursor: not-allowed !important;
        }
      `}</style>

      <header className="cdp-header">
        <div className="cdp-header-inner">
          <Link to={course.backLink || '/academy'} className="cdp-back">
            ← Back to {course.category || 'Academy'}
          </Link>
          
          <div className="cdp-top">
            <img src="/settlo-logo.png" alt="Settlo" className="cdp-logo" />
            <div>
              <h1 className="cdp-title">{course.title}</h1>
              <p className="cdp-desc">{course.description}</p>
            </div>
          </div>
          
          <div className="cdp-cards">
            <div className="cdp-card">
              <span className="cdp-card-label">Duration</span>
              <div className="cdp-card-value">{course.duration}</div>
              <ul className="cdp-card-list">
                <li>• Intensive learning program</li>
                <li>• Live interactive sessions</li>
                <li>• Practical assignments</li>
                <li>• Capstone project</li>
              </ul>
            </div>
            
            <div className="cdp-card">
              <span className="cdp-card-label">Fees</span>
              <div className="cdp-card-value">₹{course.price?.toLocaleString() || '20,000'} /-</div>
              {course.originalPrice && (
                <span style={{ textDecoration: 'line-through', opacity: 0.7, fontSize: '14px' }}>
                  ₹{course.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="cdp-main">
        <section className="cdp-section">
          <h2 className="cdp-section-title">Course Introduction</h2>
          <div className="cdp-box">
            <p>{course.description}</p>
            <p>This comprehensive program will equip you with the skills necessary to pursue a career in this field. Our industry-expert instructors will guide you through practical, hands-on learning.</p>
          </div>
        </section>

        <section className="cdp-section">
          <h2 className="cdp-section-title">Pre-requisites</h2>
          <div className="cdp-prereq-grid">
            <div className="cdp-prereq-card req">
              <h3>Required</h3>
              <p>{course.requirements?.[0] || 'No prior experience required'}</p>
            </div>
            <div className="cdp-prereq-card help">
              <h3>Helpful</h3>
              <p>{course.requirements?.[1] || 'Basic computer skills helpful'}</p>
            </div>
          </div>
        </section>

        <section className="cdp-section">
          <h2 className="cdp-section-title">Course Modules</h2>
          <div className="cdp-modules-grid">
            <div className="cdp-mod-list">
              <h3>Module Overview</h3>
              <ul>
                {modules.map((module, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => setActiveModule(index)}
                      className={`cdp-mod-btn ${activeModule === index ? 'active' : ''}`}
                    >
                      <strong>Module {index + 1}:</strong> {module.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {modules.length > 0 && (
              <div className="cdp-mod-detail">
                <h3>Module {activeModule + 1}: {modules[activeModule]?.title}</h3>
                <span className="cdp-badge">Objective</span>
                <p>Master the concepts and techniques covered in this module through hands-on practice.</p>
                <h4>Topics Covered</h4>
                <ul className="cdp-topics">
                  {modules[activeModule]?.topics?.map((topic, index) => (
                    <li key={index}>
                      <span className="cdp-dot"></span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        <section className="cdp-section">
          <h2 className="cdp-section-title">Learning Outcomes</h2>
          <div className="cdp-outcomes-grid">
            <div className="cdp-outcome-card out">
              <h3>Course Outcomes</h3>
              <ul>
                {course.whatYouLearn?.slice(0, 5).map((item, index) => (
                  <li key={index}>
                    <span className="cdp-check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cdp-outcome-card car">
              <h3>Career Opportunities</h3>
              <ul>
                <li><span className="cdp-bullet">•</span><span>{course.title} Professional</span></li>
                <li><span className="cdp-bullet">•</span><span>Freelance Consultant</span></li>
                <li><span className="cdp-bullet">•</span><span>Industry Specialist</span></li>
                <li><span className="cdp-bullet">•</span><span>Team Lead / Manager</span></li>
                <li><span className="cdp-bullet">•</span><span>Entrepreneur</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cdp-section">
          <h2 className="cdp-section-title">Certification</h2>
          <div className="cdp-cert">
            <h3>Globally Recognized Certification</h3>
            <p>Upon completing this course, you will receive a globally recognized certification from Settlo Academy.</p>
            <div className="cdp-cert-grid">
              <div className="cdp-cert-card">
                <h4>Your certification demonstrates:</h4>
                <ul>
                  <li><span className="cdp-star">★</span><span>Expertise in {course.title}</span></li>
                  <li><span className="cdp-star">★</span><span>Ability to work on real-world projects</span></li>
                  <li><span className="cdp-star">★</span><span>Professional competency in tools</span></li>
                </ul>
              </div>
              <div className="cdp-cert-card">
                <h4>Bonus Perks:</h4>
                <ul>
                  <li><span className="cdp-star">★</span><span>Golden Membership Card for discounts</span></li>
                  <li><span className="cdp-star">★</span><span>Early access to new courses</span></li>
                  <li><span className="cdp-star">★</span><span>Portfolio review by experts</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="cdp-cta">
          <h2>Start Your {course.title} Journey Today</h2>
          <p>Transform your skills into a rewarding career with our intensive program</p>
          <button onClick={() => setShowModal(true)} className="cdp-enroll-btn">Enroll Now</button>
        </section>
      </main>

      {showModal && (
        <div className="cdp-modal">
          <div className="cdp-modal-box">
            <div className="cdp-modal-head">
              <h3>Enroll Now</h3>
              <button onClick={() => setShowModal(false)} className="cdp-close">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="cdp-form-group">
                <label>Full Name</label>
                <input type="text" name="name" value={formData.name} onKeyDown={allowOnlyLetters} onChange={handleChange} className={errors.name ? 'err' : ''} placeholder="Enter your full name" />
                {errors.name && <p className="cdp-err">{errors.name}</p>}
              </div>
              <div className="cdp-form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? 'err' : ''} placeholder="Enter 10-digit phone number" />
                {errors.phone && <p className="cdp-err">{errors.phone}</p>}
              </div>
              <div className="cdp-form-group">
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'err' : ''} placeholder="Enter your email" />
                {errors.email && <p className="cdp-err">{errors.email}</p>}
              </div>
              <button type="submit" className="cdp-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Loading...' : 'Submit Enrollment'}
              </button>
            </form>
          </div>
        </div>
      )}

      <footer className="cdp-footer">
        <img src="/settlo-logo.png" alt="Settlo" className="cdp-footer-logo" />
        <p>© 2026 Settlo Academy. All rights reserved.</p>
        <p className="tagline">Designed with passion for creative education</p>
      </footer>
    </div>
  );
};

export default CourseDetail;
