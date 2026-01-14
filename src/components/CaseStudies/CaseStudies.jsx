import './CaseStudies.css';
import { BarChart3 } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      category: 'Website Upgradation',
      title: 'From YII to Drupal 10: A Smooth Website Migration Journey',
      country: 'US',
      technology: 'Drupal',
      flag: '🇺🇸'
    },
    {
      category: 'Website Development',
      title: 'Empowering Structsight with a Real-Time Investment Platform',
      country: 'US',
      technology: 'Drupal',
      flag: '🇺🇸'
    },
    {
      category: 'Website Upgradation',
      title: 'Transforming Chardham Travel with a Custom Drupal Solution',
      country: 'India',
      technology: 'Drupal',
      flag: '🇮🇳'
    },
    {
      category: 'Website & Enterprise Application',
      title: 'Settlo Enhances Networking Opportunities for GonnaHappen',
      country: 'GB',
      technology: 'Drupal',
      flag: '🇬🇧'
    },
    {
      category: 'App Development',
      title: 'State Wide Logistics: Delivering Excellence with Precision and Innovation',
      country: 'AU',
      technology: 'Microsoft .NET 6',
      flag: '🇦🇺'
    },
    {
      category: 'Website Upgradation',
      title: 'Seamless Drupal Upgrade: From 8.9 to 10.3',
      country: 'GB',
      technology: 'Drupal, React, Elastic Search',
      flag: '🇬🇧'
    }
  ];

  return (
    <section className="case-studies section section-light">
      <div className="container">
        <h2 className="section-title">Read Our Client Success Stories</h2>
        <p className="section-subtitle">
          Grow your business with a team that wants to see you win
        </p>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card">
              <div className="case-study-image">
                <span className="case-study-placeholder"><BarChart3 size={48} /></span>
              </div>
              <div className="case-study-content">
                <span className="case-study-category">{study.category}</span>
                <h3 className="case-study-title">{study.title}</h3>
                <div className="case-study-meta">
                  <span className="case-study-country">
                    {study.flag} {study.country}
                  </span>
                  <span className="case-study-tech">{study.technology}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="case-studies-cta">
          <a href="#" className="btn btn-primary btn-lg">
            Read All Our Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
