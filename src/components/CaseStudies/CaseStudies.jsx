import './CaseStudies.css';
import { Quote } from 'lucide-react';

const CaseStudies = () => {
  const testimonials = [
    {
      industry: 'Sweet Industry',
      company: 'SRM',
      role: 'CEO',
      quote: "We had a great experience working with the Settlo team for the CRM we were struggling to build. Together, we figured out what we needed and organized everything meaningfully. The system was created with face recognition and geo-fetching features. We got great effort and services with excellent error handling.",
      technologies: ['CRM', 'Face Recognition', 'Geo-Fetching']
    },
    {
      industry: 'Roofing Industry',
      company: 'Roofing Solutions',
      role: 'CEO',
      quote: "We have entered the new AI era with the help of the Settlo team. They created a beautiful website with AI integration - a chatbot that answers questions about our products and services. The website has great interactions, and they even built a live roof visualizer that shows different patterns and colors, helping us verify designs with clients.",
      technologies: ['AI Integration', 'Chatbot', 'Website Development']
    },
    {
      industry: 'Scaling Industry',
      company: 'Scale Solutions',
      role: 'CEO',
      quote: "We created a good product showcase website with accurate data. All products and categories are included properly organized. I didn't know how to categorize all the stuff and scaling requirements, but they helped me understand my own business in a technical manner. Truly professional work!",
      technologies: ['E-Commerce', 'Product Catalog', 'Web Development']
    },
    {
      industry: 'Clothing Industry',
      company: 'Textile Hub',
      role: 'CEO',
      quote: "I thought creating and structuring a product menu for clients in the textile industry - with all the sizes, thickness varieties, and seasons - would be impossible. But they gave me an admin panel where I can add categories and control my website entirely. I can update the website myself now. Thankful to the team!",
      technologies: ['Admin Panel', 'E-Commerce', 'Inventory Management']
    }
  ];

  return (
    <section className="case-studies section section-light">
      <div className="container">
        <h2 className="section-title">Read Our Client Success Stories</h2>
        <p className="section-subtitle">
          Grow your business with a team that wants to see you win
        </p>

        <div className="case-studies-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="case-study-card testimonial-style">
              <div className="industry-badge">
                {testimonial.industry}
              </div>

              <div className="case-study-content">
                <div className="quote-wrapper">
                  <Quote className="quote-icon" size={28} />
                  <p className="testimonial-quote">{testimonial.quote}</p>
                </div>
              </div>

              <div className="case-study-footer">
                <div className="author-info">
                  <span className="author-role">{testimonial.role}</span>
                  <span className="author-company">{testimonial.company}</span>
                </div>
                <div className="tech-tags">
                  {testimonial.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="case-studies-cta">
          <a href="#" className="btn btn-primary btn-lg">
            Read All Our Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
