import { FiArrowRight, FiEdit3 } from 'react-icons/fi';
import './CTABanner.css';

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="cta-banner-inner">
        {/* Left Side - Text */}
        <div className="cta-banner-left">
          <h2 className="cta-banner-title">
            From Code to Success <FiEdit3 size={28} />
          </h2>
          <p className="cta-banner-subtitle">We Build More Than Software.</p>
        </div>

        {/* Right Side - Image + Button */}
        <div className="cta-banner-right">
          <div className="cta-banner-image-overlay"></div>
          <a href="#contact" className="btn-cta-banner">
            Discuss Your Requirement!
            <FiArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
