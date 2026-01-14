import { useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: 'Austin',
      company: 'Alao-Amadasun',
      image: '👤'
    },
    {
      name: 'Tom Squire',
      company: 'Shieldpay',
      image: '👤'
    },
    {
      name: 'Nick',
      company: 'Director at insidelines.com.au',
      image: '👤'
    },
    {
      name: 'Matt Brown',
      company: 'Magical Maths Club',
      image: '👤'
    },
    {
      name: 'Kevin Wolf',
      company: 'Marketing Manager, Samuel, Son & C',
      image: '👤'
    },
    {
      name: 'Mark Osmond',
      company: 'Mood Addict.com',
      image: '👤'
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Discover how we've helped businesses achieve their goals through our dedicated service and expertise.
        </p>

        <div className="testimonials-wrapper">
          <button className="testimonial-btn testimonial-prev" onClick={() => scroll('left')}>
            ‹
          </button>

          <div className="testimonials-scroll" ref={scrollRef}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-video">
                  <span className="play-icon">▶</span>
                </div>
                <div className="testimonial-info">
                  <span className="testimonial-avatar">{testimonial.image}</span>
                  <div className="testimonial-details">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="testimonial-btn testimonial-next" onClick={() => scroll('right')}>
            ›
          </button>
        </div>

        <div className="trustpilot-badge">
          <div className="trustpilot-content">
            <span className="trustpilot-stars">★★★★★</span>
            <span className="trustpilot-text">Rated Excellent on Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
