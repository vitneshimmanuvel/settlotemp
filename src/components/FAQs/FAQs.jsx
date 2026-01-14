import { useState } from 'react';
import './FAQs.css';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Why choose Settlo as your IT software service provider?',
      answer: 'Settlo combines deep technology expertise with a client-centric approach to deliver solutions that drive real business value. Our team of skilled developers prioritizes understanding your unique needs to deliver exceptional results that exceed expectations.'
    },
    {
      question: 'How do you handle project management and timelines?',
      answer: 'We use agile methodologies with regular sprints, daily standups, and transparent communication channels. Our project managers provide weekly progress reports and ensure all milestones are met on time.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have extensive experience across 17+ industries including Healthcare, Financial Services, Retail, Education, Real Estate, Logistics, Media & Entertainment, and more.'
    },
    {
      question: 'Do you offer support and maintenance services?',
      answer: 'Yes, we provide comprehensive post-launch support and maintenance packages including bug fixes, security updates, performance optimization, and feature enhancements.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with 50+ cutting-edge technologies including React, Angular, Node.js, Python, .NET, PHP, AWS, Azure, and many more. Our team stays updated with the latest technology trends.'
    }
  ];

  return (
    <section className="faqs section section-light">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Find answers to common questions about our services and processes.
        </p>

        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faqs-cta">
          <a href="#contact" className="btn btn-primary btn-lg">
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
