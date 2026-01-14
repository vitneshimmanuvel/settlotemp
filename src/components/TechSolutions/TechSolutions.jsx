import {
  FiUsers,
  FiTarget,
  FiTrendingUp,
  FiShield,
  FiCpu,
  FiGlobe,
} from 'react-icons/fi';
import './TechSolutions.css';

const TechSolutions = () => {
  const highlights = [
    {
      icon: <FiTarget />,
      label: 'Product‑first mindset',
      text: 'Every engagement starts from your business outcomes, not just tech choices.',
    },
    {
      icon: <FiTrendingUp />,
      label: 'Growth focused',
      text: 'We design systems that reduce manual work and unlock new revenue.',
    },
    {
      icon: <FiShield />,
      label: 'Secure & reliable',
      text: 'Best practices in auth, access control, and cloud infra for peace of mind.',
    },
    {
      icon: <FiCpu />,
      label: 'Modern stack',
      text: 'React, Node.js, PostgreSQL, MongoDB, AWS and more—picked to fit your use case.',
    },
  ];

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '1K +', label: 'Talents Connected' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '3+', label: 'Years Experience' },
  ];

  return (
    <section className="who-settlo section">
      <div className="container who-settlo-layout">
        {/* Left: Text content */}
        <div className="who-settlo-content">
          <span className="who-settlo-tag">Who is Settlo?</span>
          <h2 className="who-settlo-title">
            Your <span>long‑term tech partner</span> for AI, Cloud & CRM‑driven growth.
          </h2>
          <p className="who-settlo-intro">
            Settlo Tech Solutions is an IT partner based in Erode, Tamil Nadu, helping
            businesses modernize operations with smart CRM, web, mobile, and automation
            platforms tailored to Indian and global markets.
          </p>
          <p className="who-settlo-intro secondary">
            From canteen automation to manufacturing CRMs and education platforms,
            Settlo bridges real‑world processes with robust, scalable digital products
            that teams love to use every day.
          </p>

          <div className="who-settlo-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-item">
                <div className="highlight-icon">{item.icon}</div>
                <div className="highlight-texts">
                  <h4 className="highlight-label">{item.label}</h4>
                  <p className="highlight-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="who-settlo-cta-row">
            <a href="#contact" className="btn btn-primary">
              Talk to Our Team
            </a>
            <a href="#case-studies" className="btn btn-ghost">
              View Case Studies
            </a>
          </div>
        </div>

        {/* Right: Image + stats */}
        <div className="who-settlo-side">
          <div className="who-settlo-main-card">
            <div className="who-settlo-main-image">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=450&fit=crop"
                alt="Settlo team collaborating"
              />
            </div>
            <div className="who-settlo-main-content">
              <h3>Built for ambitious teams</h3>
              <p>
                Whether you are a startup validating your MVP or an enterprise upgrading
                legacy systems, Settlo acts as your remote tech team that ships fast and
                stays with you for the long run.
              </p>
              <div className="who-settlo-badges">
                <span className="badge">
                  <FiGlobe /> India & Global clients
                </span>
                <span className="badge">
                  <FiUsers /> Domain‑driven solutions
                </span>
              </div>
            </div>
          </div>

          <div className="who-settlo-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSolutions;
