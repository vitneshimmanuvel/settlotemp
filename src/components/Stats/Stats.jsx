import { useEffect, useState, useRef } from 'react';
import { FiUsers, FiCheckCircle, FiBriefcase, FiAward, FiClock, FiGlobe } from 'react-icons/fi';
import './Stats.css';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { value: 50, suffix: '+', label: 'Projects Delivered', icon: <FiBriefcase /> },
    { value: 1000, suffix: '+', label: 'Talents Connected', icon: <FiUsers /> },
    { value: 50, suffix: '+', label: 'Industry Partners', icon: <FiCheckCircle /> },
    { value: 98, suffix: '%', label: 'Client Satisfaction', icon: <FiAward /> },
    { value: 3, suffix: '+', label: 'Years Experience', icon: <FiClock /> },
    { value: 2, suffix: '', label: 'Global Offices', icon: <FiGlobe /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span className="stat-value">
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section className="stats section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Our Impact in Numbers</h2>
        <p className="section-subtitle">
          Delivering results that matter through innovation, education, and talent excellence.
        </p>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-icon">{stat.icon}</span>
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
