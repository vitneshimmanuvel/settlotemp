import { FiTarget, FiTrendingUp, FiShield } from 'react-icons/fi';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      icon: <FiTarget size={40} />,
      title: 'Innovation First',
      description: 'We bring fresh perspectives and cutting-edge solutions to transform your ideas into reality with creativity and precision.'
    },
    {
      icon: <FiTrendingUp size={40} />,
      title: 'Continuous Growth',
      description: 'Our academy and training programs ensure your team stays ahead with the latest skills and industry knowledge.'
    },
    {
      icon: <FiShield size={40} />,
      title: 'Trusted Partnership',
      description: 'Build lasting relationships with our dedicated team committed to your success and long-term goals.'
    }
  ];

  return (
    <section className="benefits section section-light">
      <div className="container">
        <h2 className="section-title">Why Choose Settlo?</h2>
        <p className="section-subtitle">
          We combine innovation, education, and talent to deliver exceptional results for your business.
        </p>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
