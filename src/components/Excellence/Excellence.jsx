import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Rocket, Building2, Target } from 'lucide-react';
import './Excellence.css';

const Excellence = () => {
  const [activeCard, setActiveCard] = useState(0);

  // Parse feature text to highlight keywords in blue
  const parseFeature = (text) => {
    const keywords = [
      'digital products',
      'internal platforms',
      'customer and staff journeys',
      'Cloud-native platforms',
      'Custom Software Development',
      'legacy modernization',
      'QA & Testing',
      'Dedicated squads',
      'white-label delivery',
    ];

    let result = text;
    keywords.forEach((keyword) => {
      if (result.includes(keyword)) {
        result = result.replace(
          keyword,
          `<span class="feature-highlight">${keyword}</span>`
        );
      }
    });
    return result;
  };

  const businessTypes = [
    {
      title: 'Product & Platform Lab',
      description:
        'For businesses that want to turn recurring, manual work into scalable digital products and internal platforms.',
      features: [
        'Transform everyday operations like canteen management, service tracking, and lead handling into reusable digital products.',
        'Design consistent customer and staff journeys across web, mobile, and CRM so every touchpoint stays connected.',
        'Reuse common building blocks such as auth, roles, approvals, billing, and reporting to reduce time to launch.',
        'Evolve your internal platforms continuously with new features, integrations, and automation instead of one‑off projects.',
      ],
    },
    {
      title: 'Enterprise Evolution',
      description:
        'For growing businesses modernizing their core operations with AI, cloud, and custom workflow automation.',
      features: [
        'Modernize ERPs, CRMs, and internal tools through pragmatic legacy modernization instead of risky big‑bang rewrites.',
        'Build secure, scalable line‑of‑business apps with our Custom Software Development for web, mobile, and canteen automation.',
        'Keep mission‑critical systems stable with structured QA & Testing across integrations, workflows, and reports.',
        'Move workloads to Cloud-native platforms on AWS or other clouds with performance, cost, and security baked in.',
      ],
    },
    {
      title: 'Agency Acceleration',
      description:
        'For agencies that want to deliver serious tech outcomes to clients without maintaining a large in‑house dev team.',
      features: [
        'Ship portals, CRMs, dashboards, and e‑commerce backends as ready productized solutions under your own brand.',
        'Guarantee smooth launches and handovers with QA & Testing built into every project milestone.',
        'Scale delivery quickly using Dedicated squads and Staff Augmentation across frontend, backend, and cloud.',
        'Offer full‑stack and AI capabilities with white-label delivery while you continue to own the client relationship.',
      ],
    },
  ];

  return (
    <section className="excellence section">
      <div className="container">
        <h2 className="section-title">Leading the Industry With Excellence</h2>
        <p className="section-subtitle">
          Settlo builds AI & Cloud driven CRMs, web platforms, and automation systems that
          match real business workflows across manufacturing, services, education, and more.
        </p>

        <div className="excellence-grid">
          {businessTypes.map((type, index) => (
            <div
              key={index}
              className={`excellence-card ${activeCard === index ? 'active' : ''}`}
              onClick={() => setActiveCard(index)}
            >
              <div className="excellence-card-icon">
                {index === 0 ? <Rocket size={32} /> : index === 1 ? <Building2 size={32} /> : <Target size={32} />}
              </div>
              <h3 className="excellence-title">{type.title}</h3>
              <p className="excellence-description">{type.description}</p>

              {activeCard === index && (
                <div className="excellence-features">
                  <div className="features-divider"></div>
                  <ul>
                    {type.features.map((feature, fIndex) => (
                      <li key={fIndex}>
                        <FiChevronRight className="feature-arrow" />
                        <span
                          dangerouslySetInnerHTML={{ __html: parseFeature(feature) }}
                        />
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn btn-primary">
                    Explore More
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Excellence;
