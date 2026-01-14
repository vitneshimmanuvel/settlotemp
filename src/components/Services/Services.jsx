import { useState } from 'react';
import { FiCode, FiSmartphone, FiMonitor, FiArrowRight } from 'react-icons/fi';
import './Services.css';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: FiCode,
      title: 'Software Development',
      shortDesc: 'Transforming client needs into software solutions',
      description: 'Transforming client needs into software solutions that leverage the latest technologies for exceptional performance and functionality.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop',
      link: '#contact'
    },
    {
      icon: FiSmartphone,
      title: 'Mobile App Development',
      shortDesc: 'Custom apps for iOS and Android',
      description: "Whether you're looking to create a custom app from scratch or modernise an existing one to match the latest technology trends, we can develop it according to your preferences.",
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      link: '#contact'
    },
    {
      icon: FiMonitor,
      title: 'Web Development',
      shortDesc: 'Modern, responsive websites',
      description: 'Your doorway to the world of the web. Get a customized and user-friendly website loaded with the latest technology stack.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      link: '#contact'
    },
  ];

  return (
    <section className="services-new section" id="services">
      <div className="container">
        <h2 className="section-title">What We Offer</h2>
        <p className="section-subtitle">
          Comprehensive solutions to transform your ideas into reality and drive business growth.
        </p>

        <div className="services-new-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                className={`service-image-card ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <div className="service-card-bg">
                  <img src={service.image} alt={service.title} />
                  <div className="service-card-overlay"></div>
                </div>

                {/* Card Content */}
                <div className="service-card-content">
                  <div className="service-card-header">
                    <IconComponent size={24} className="service-card-icon" />
                    <h3 className="service-card-title">{service.title}</h3>
                  </div>

                  <p className="service-card-desc">
                    {isHovered ? service.description : service.shortDesc}
                  </p>

                  {/* Dropdown Content on Hover */}
                  <div className={`service-card-dropdown ${isHovered ? 'show' : ''}`}>
                    <div className="service-card-buttons">
                      <a href={service.link} className="btn-service-outline">
                        Learn More
                      </a>
                      <a href={service.link} className="btn-service-filled">
                        Contact Us <FiArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Row - More Services */}
        <div className="services-new-grid services-row-2">
          {[
            {
              icon: FiCode,
              title: 'E-Commerce Solutions',
              shortDesc: 'Complete online store development',
              description: 'Complete online store development with payment integration, inventory management, and customer analytics.',
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
              link: '#contact'
            },
            {
              icon: FiCode,
              title: 'Cloud Services',
              shortDesc: 'Scalable cloud infrastructure',
              description: 'Scalable cloud infrastructure and deployment solutions with AWS, Azure, and Google Cloud expertise.',
              image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
              link: '#contact'
            },
            {
              icon: FiCode,
              title: 'Data Analytics',
              shortDesc: 'Transform data into insights',
              description: 'Turn your data into actionable business insights with advanced analytics and reporting dashboards.',
              image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
              link: '#contact'
            }
          ].map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === index + 3;

            return (
              <div
                key={index}
                className={`service-image-card ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(index + 3)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="service-card-bg">
                  <img src={service.image} alt={service.title} />
                  <div className="service-card-overlay"></div>
                </div>
                <div className="service-card-content">
                  <div className="service-card-header">
                    <IconComponent size={24} className="service-card-icon" />
                    <h3 className="service-card-title">{service.title}</h3>
                  </div>
                  <p className="service-card-desc">
                    {isHovered ? service.description : service.shortDesc}
                  </p>
                  <div className={`service-card-dropdown ${isHovered ? 'show' : ''}`}>
                    <div className="service-card-buttons">
                      <a href={service.link} className="btn-service-outline">
                        Learn More
                      </a>
                      <a href={service.link} className="btn-service-filled">
                        Contact Us <FiArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
