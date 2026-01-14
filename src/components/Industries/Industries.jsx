import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Industries.css';

const Industries = () => {
  const scrollRef = useRef(null);

  const industries = [
    {
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop',
      title: 'Healthcare',
      description: 'Digital health solutions for modern healthcare providers.'
    },
    {
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=300&h=200&fit=crop',
      title: 'Logistics',
      description: 'Supply chain and logistics management solutions.'
    },
    {
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&h=200&fit=crop',
      title: 'Finance',
      description: 'Fintech solutions for banking and financial services.'
    },
    {
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300&h=200&fit=crop',
      title: 'Retail',
      description: 'Omnichannel retail and e-commerce solutions.'
    },
    {
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=300&h=200&fit=crop',
      title: 'Manufacturing',
      description: 'Industry 4.0 and smart manufacturing solutions.'
    },
    {
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop',
      title: 'Real Estate',
      description: 'PropTech solutions for modern real estate.'
    },
    {
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=200&fit=crop',
      title: 'Technology',
      description: 'Custom software for tech startups and enterprises.'
    },
    {
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&h=200&fit=crop',
      title: 'Hospitality',
      description: 'Digital solutions for hotels and travel industry.'
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="industries section section-light">
      <div className="container">
        <h2 className="section-title">Industries We Serve</h2>
        <p className="section-subtitle">
          Delivering tailored solutions across diverse industries with deep domain expertise.
        </p>

        <div className="industries-wrapper">
          <button className="scroll-btn scroll-left" onClick={() => scroll('left')}>
            <FiChevronLeft size={24} />
          </button>

          <div className="industries-scroll" ref={scrollRef}>
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-image">
                  <img src={industry.image} alt={industry.title} />
                </div>
                <div className="industry-content">
                  <h3 className="industry-title">{industry.title}</h3>
                  <p className="industry-description">{industry.description}</p>
                  <a href="#" className="industry-link">Learn More →</a>
                </div>
              </div>
            ))}
          </div>

          <button className="scroll-btn scroll-right" onClick={() => scroll('right')}>
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
