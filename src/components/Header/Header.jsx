import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Search, Wrench, Rocket, FileText, GraduationCap } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);
  const searchRef = useRef(null);

  // Search recommendations
  const recommendations = [
    { label: 'CRM Software Development', section: '#services', type: 'service' },
    { label: 'Mobile App Development', section: '#services', type: 'service' },
    { label: 'Web Development', section: '#services', type: 'service' },
    { label: 'AI Integration', section: '#services', type: 'service' },
    { label: 'Manufacturing CRM', section: 'https://settlofullcrm.vercel.app', type: 'demo' },
    { label: 'Healthcare Solutions', section: 'https://settlohealthcare.vercel.app', type: 'demo' },
    { label: 'Contact Us', section: '#contact', type: 'page' },
    { label: 'About Us', section: '#about', type: 'page' },
    { label: 'Our Technologies', section: '#tech', type: 'page' },
  ];

  // Filter recommendations based on search query
  const filteredRecommendations = searchQuery.trim()
    ? recommendations.filter(item =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : recommendations.slice(0, 6);

  // Handle click outside search
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowRecommendations(false);
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search selection
  const handleSearchSelect = (item) => {
    if (item.type === 'demo') {
      window.open(item.section, '_blank');
    } else {
      const element = document.querySelector(item.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setSearchQuery('');
    setShowRecommendations(false);
    setSearchOpen(false);
  };

  const navItems = [
    // {
    //   label: 'Solutions',
    //   hasDropdown: true,
    //   items: [
    //     { label: 'Manufacturing CRM', href: 'https://settlofullcrm.vercel.app' },
    //     { label: 'HR Management', href: 'https://settlohrdemo.vercel.app' },
    //     { label: 'E-Commerce & Sports', href: 'https://settlo-sports-hub.netlify.app' },
    //     { label: 'Real Estate CRM', href: 'https://settlo-realestate-crm.netlify.app' },
    //     { label: 'Healthcare', href: 'https://settlohealthcare.vercel.app' },
    //     { label: 'Food Industry', href: 'https://settlohotel.vercel.app' },
    //     { label: 'Face Recognition/Biometrics', href: 'https://settlocanteen.vercel.app' },
    //   ]
    // },
    {
      label: 'Services',
      hasDropdown: true,
      items: [
        { label: 'CRM Software Development', href: '#services' },
        { label: 'Mobile App Development', href: '#services' },
        { label: 'Web Development', href: '#services' },
        { label: 'AI Integration', href: '#services' },
        { label: 'Cloud Solutions', href: '#services' },
      ]
    },
    {
      label: 'Industries',
      hasDropdown: true,
      items: [
        { label: 'Manufacturing', href: '#' },
        { label: 'Healthcare', href: '#' },
        { label: 'Real Estate', href: '#' },
        { label: 'Hospitality', href: '#' },
        { label: 'Retail & E-commerce', href: '#' },
      ]
    },
    {
      label: 'Academy',
      hasDropdown: true,
      items: [
        { label: 'All Courses', href: '/academy', isRoute: true },
        { label: 'Design Courses', href: '/academy/design-courses', isRoute: true },
        { label: 'Master Courses', href: '/academy/master-courses', isRoute: true },
        { label: 'Fullstack Courses', href: '/academy/fullstack-courses', isRoute: true },
        { label: 'Mastery Courses', href: '/academy/mastery-courses', isRoute: true },
      ]
    },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="header">
      
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="contact-info">
              <a href="tel:+919876543210" className="contact-item">
                <Phone size={14} />
                <span>+91 9003633356</span>
              </a>
              <a href="mailto:info@settlo.com" className="contact-item">
                <Mail size={14} />
                <span>info@settlo.com</span>
              </a>
            </div>
            <div className="top-tagline">
              Empowering Businesses With AI, Data Analytics & Cloud
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          <div className="header-main-content">
            {/* Logo */}
            <a href="/" className="logo">
              <img src="/settlo-logo.png" alt="Settlo" className="logo-image" />
              <span className="logo-text">SETTLO</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="nav-desktop">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="nav-item"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a href={item.href || '#'} className="nav-link">
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={14} />}
                  </a>
                  {item.hasDropdown && activeDropdown === index && (
                    <div className="dropdown-menu">
                      {item.items.map((subItem, subIndex) => (
                        subItem.isRoute ? (
                          <Link
                            key={subIndex}
                            to={subItem.href}
                            className="dropdown-item"
                          >
                            {subItem.label}
                          </Link>
                        ) : (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="dropdown-item"
                            target={subItem.href.startsWith('http') ? '_blank' : '_self'}
                            rel={subItem.href.startsWith('http') ? 'noopener noreferrer' : ''}
                          >
                            {subItem.label}
                          </a>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="header-actions">
              {/* Search */}
              <div className="search-wrapper" ref={searchRef}>
                <button
                  className={`icon-btn ${searchOpen ? 'active' : ''}`}
                  onClick={() => {
                    setSearchOpen(!searchOpen);
                    setShowRecommendations(true);
                  }}
                >
                  <Search size={20} />
                </button>

                {searchOpen && (
                  <div className="search-dropdown">
                    <input
                      type="text"
                      placeholder="Search services, solutions..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowRecommendations(true);
                      }}
                      onFocus={() => setShowRecommendations(true)}
                      autoFocus
                    />

                    {showRecommendations && filteredRecommendations.length > 0 && (
                      <div className="search-recommendations">
                        {filteredRecommendations.map((item, index) => (
                          <button
                            key={index}
                            className="search-item"
                            onClick={() => handleSearchSelect(item)}
                          >
                            <span className={`search-type ${item.type}`}>
                              {item.type === 'service' ? <Wrench size={18} /> : item.type === 'demo' ? <Rocket size={18} /> : <FileText size={18} />}
                            </span>
                            <span className="search-label">{item.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <a href="#contact" className="btn btn-primary">
                Get Free Demo
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          {/* Mobile Search */}
          <div className="mobile-search">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {navItems.map((item, index) => (
            <div key={index} className="mobile-nav-item">
              <div
                className="mobile-nav-link"
                onClick={() => item.hasDropdown && setActiveDropdown(activeDropdown === index ? null : index)}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className={activeDropdown === index ? 'rotate' : ''} size={18} />
                )}
              </div>
              {item.hasDropdown && activeDropdown === index && (
                <div className="mobile-dropdown">
                  {item.items.map((subItem, subIndex) => (
                    subItem.isRoute ? (
                      <Link
                        key={subIndex}
                        to={subItem.href}
                        className="mobile-dropdown-item"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ) : (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="mobile-dropdown-item"
                        target={subItem.href.startsWith('http') ? '_blank' : '_self'}
                      >
                        {subItem.label}
                      </a>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="#contact" className="btn btn-primary mobile-cta">
            Get Free Demo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
