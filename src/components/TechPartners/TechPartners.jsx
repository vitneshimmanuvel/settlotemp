import './TechPartners.css';
import { useState } from 'react';
import { Award } from 'lucide-react';

const TechPartners = () => {
  const [activeTab, setActiveTab] = useState('partnerships');

  const partnerships = [
    'Microsoft', 'Google Cloud', 'AWS', 'Salesforce', 'HubSpot',
    'Zoho', 'Drupal', 'Shopify', 'Magento', 'WordPress',
    'React', 'Angular', 'Node.js', 'Python', 'PHP',
    'Geo-fencing', 'Biometrics'
  ];

  const awards = [
    'Clutch Top Developer 2024',
    'GoodFirms Top IT Company',
    'DesignRush Best Web Design',
    'AppFutura Top App Developer',
    'IT Firms Top Software Company',
    'Extract.co Top UK Developer'
  ];

  return (
    <section className="tech-partners section">
      <div className="container">
        <h2 className="section-title">Leading Technology Partners and Achievements</h2>
        <p className="section-subtitle">
          With a history of excellence and innovation, we've been honored with several significant awards and partnered with leading technologies.
        </p>

        <div className="partners-tabs">
          <button
            className={`partners-tab ${activeTab === 'partnerships' ? 'active' : ''}`}
            onClick={() => setActiveTab('partnerships')}
          >
            Partnerships
          </button>
          <button
            className={`partners-tab ${activeTab === 'awards' ? 'active' : ''}`}
            onClick={() => setActiveTab('awards')}
          >
            Awards
          </button>
        </div>

        <div className="partners-content">
          {activeTab === 'partnerships' ? (
            <div className="partners-grid">
              {partnerships.map((partner, index) => (
                <div key={index} className="partner-item">
                  {partner}
                </div>
              ))}
            </div>
          ) : (
            <div className="awards-grid">
              {awards.map((award, index) => (
                <div key={index} className="award-item">
                  <span className="award-icon"><Award size={32} /></span>
                  <span className="award-text">{award}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechPartners;
