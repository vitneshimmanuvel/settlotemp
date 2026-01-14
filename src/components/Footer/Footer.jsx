import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Consultation Form Section */}
      <div className="footer-consultation">
        <div className="container">
          <div className="consultation-content">
            <div className="consultation-text">
              <h3>Free Consultation</h3>
              <p>Get A Free Quote For Your Project</p>
            </div>
            <div className="consultation-form">
              <select className="form-select">
                <option value="">– Select Service –</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="software">Software Development</option>
                <option value="ecommerce">E-commerce Solutions</option>
                <option value="cloud">Cloud Solutions</option>
                <option value="ai">AI & Data Analytics</option>
              </select>
              <button className="btn btn-orange">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Office Section */}
            <div className="footer-column">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="office-info">
                <h5 className="office-title">Head Office</h5>
                <p className="office-name">Settlo Tech Solutions</p>
                <p className="office-address">
                  121 Akhil Plaza, San Perundurai Road, Erode.
                </p>
                <p className="office-contact">
                  Phone: <a href="tel:+919003633356">+91 9003633356</a>
                </p>
                <p className="office-contact">
                  Email: <a href="mailto:settlotech@gmail.com">info@settlo.com</a>
                </p>
              </div>

              {/* Social Links */}
              <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=100089781227221" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook size={24} />
                </a>
                <a href="https://x.com/Settloacademy" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter size={24} />
                </a>
                <a href="https://www.instagram.com/settlo_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.linkedin.com/in/settlo-academy-7534a027b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={24} />
                </a>
              </div>

              {/* WhatsApp Button */}
              <a 
                href="https://chat.whatsapp.com/DTB8UL9oYqZ59b8PAgfhik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <FaWhatsapp size={20} />
                JOIN US
              </a>
            </div>

            {/* Navigation Links */}
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            {/* Tech Services */}
            <div className="footer-column">
              <h4 className="footer-heading">Tech Services</h4>
              <ul className="footer-links">
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Mobile App Development</a></li>
                <li><a href="#services">Software Development</a></li>
                <li><a href="#services">E-commerce Solutions</a></li>
                <li><a href="#services">Cloud Solutions</a></li>
                <li><a href="#services">AI & Data Analytics</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-column">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-links">
                <li><a href="#faqs">FAQ</a></li>
                <li><a href="#articles">Blog & Articles</a></li>
                <li><a href="#tech-stack">Technology Stack</a></li>
                <li><a href="#industries">Industries</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms Of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>© 2024 - 2025 Settlo Tech Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
