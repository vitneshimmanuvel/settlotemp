import { useState } from 'react';
import { FiCpu, FiBarChart2, FiSettings, FiCheck } from 'react-icons/fi';
import './AISolutions.css';

const AISolutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Tech Innovation',
      icon: <FiCpu size={20} />,
      content: {
        description: 'We leverage cutting-edge technologies to build innovative solutions that drive business growth and digital transformation.',
        features: [
          'Custom Software Development',
          'AI & Machine Learning Integration',
          'Cloud-Native Applications',
          'IoT Solutions'
        ]
      }
    },
    {
      title: 'Business Analytics',
      icon: <FiBarChart2 size={20} />,
      content: {
        description: 'Transform your data into actionable insights with our advanced analytics solutions that drive smarter business decisions.',
        features: [
          'Data Visualization Dashboards',
          'Predictive Analytics',
          'Real-time Reporting',
          'Business Intelligence Tools'
        ]
      }
    },
    {
      title: 'Talent Connect',
      icon: <FiSettings size={20} />,
      content: {
        description: 'Connect with top-tier talent through our extensive network of skilled professionals ready to join your team.',
        features: [
          'IT Staffing Solutions',
          'Contract-to-Hire',
          'Direct Placement',
          'Remote Team Building'
        ]
      }
    }
  ];

  return (
    <section className="ai-solutions section section-dark">
      <div className="container">
        <h2 className="section-title text-white">Our Core Services</h2>
        <p className="section-subtitle text-white" style={{ opacity: 0.8 }}>
          AI Solutions • Data Analytics • Cloud Services
        </p>

        <div className="ai-tabs">
          <div className="ai-tabs-header">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`ai-tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.icon}
                {tab.title}
              </button>
            ))}
          </div>

          <div className="ai-tabs-content">
            <div className="ai-tab-panel">
              <p className="ai-tab-description">
                {tabs[activeTab].content.description}
              </p>
              <ul className="ai-features-list">
                {tabs[activeTab].content.features.map((feature, index) => (
                  <li key={index} className="ai-feature-item">
                    <span className="ai-feature-icon"><FiCheck size={14} /></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;
