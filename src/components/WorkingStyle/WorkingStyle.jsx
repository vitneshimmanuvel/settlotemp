import { FiCode, FiSmartphone, FiMonitor, FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import './WorkingStyle.css';

const WorkingStyle = () => {
  const services = [
    { label: 'Software Development', icon: FiCode },
    { label: 'Mobile App Development', icon: FiSmartphone },
    { label: 'Web Development', icon: FiMonitor },
    { label: 'E-commerce Services', icon: FiShoppingCart },
  ];

  return (
    <section className="working-style">
      {/* Background Image with Overlay */}
      <div className="working-style-bg">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop"
          alt="Team collaboration"
          className="working-style-bg-img"
        />
        <div className="working-style-overlay"></div>
      </div>

      <div className="container">
        <div className="working-style-content">
          <h2 className="working-style-title">Key Areas of Our Expertise</h2>

          <div className="service-pills">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <button key={index} className="service-pill">
                  <IconComponent size={18} />
                  <span>{service.label}</span>
                </button>
              );
            })}
          </div>

          <a href="#contact" className="btn btn-orange btn-lg working-style-cta">
            Let's Talk About Your Business
            <FiArrowRight size={20} />
          </a>
        </div>

        <p className="working-style-subtitle">
          Partnered with Startups and Fortune 500 companies worldwide
        </p>
      </div>
    </section>
  );
};

export default WorkingStyle;
