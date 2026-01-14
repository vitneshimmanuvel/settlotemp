import { Link } from 'react-router-dom';
import { Palette, Code, Rocket, Award, ArrowRight } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Academy.css';

const courseCategories = [
  {
    id: 'design-courses',
    title: 'Design Courses',
    description: 'Master the art of visual design with our comprehensive courses in graphic design, UI/UX, textile design, and more.',
    icon: Palette,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    courses: ['Graphic Design', 'UI/UX Design', 'Website Design', 'Textile Design'],
    path: '/academy/design-courses'
  },
  {
    id: 'master-courses',
    title: 'Master Courses',
    description: 'Advanced mastery programs in AI, SEO/SEM, video editing, and cutting-edge technologies for professionals.',
    icon: Award,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    courses: ['AI Mastery', 'SEO/SEM Mastery', 'Video Editing', 'Content Marketing'],
    path: '/academy/master-courses'
  },
  {
    id: 'fullstack-courses',
    title: 'Fullstack Courses',
    description: 'Complete development courses covering frontend, backend, mobile apps, and full-stack web development.',
    icon: Code,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    courses: ['Frontend Development', 'Backend Development', 'Mobile App Dev', 'Python & Networking'],
    path: '/academy/fullstack-courses'
  },
  {
    id: 'mastery-courses',
    title: 'Mastery Courses',
    description: 'Expert-level courses in digital marketing, brand development, and business growth strategies.',
    icon: Rocket,
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    courses: ['Digital Marketing', 'Brand Development', 'Cartoon & Caricature', 'Junior Pro Programs'],
    path: '/academy/mastery-courses'
  }
];

const Academy = () => {
  return (
    <div className="academy-page">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="academy-hero">
          <div className="container">
            <div className="academy-hero-content">
              <span className="academy-badge">Settlo Academy</span>
              <h1>Learn. Grow. <span className="text-gradient">Excel.</span></h1>
              <p className="academy-hero-subtitle">
                Transform your career with industry-leading courses designed by experts. 
                From design to development, marketing to AI – we've got you covered.
              </p>
              <div className="academy-stats">
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Courses</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Students</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
          <div className="academy-hero-bg"></div>
        </section>

        {/* Course Categories */}
        <section className="academy-categories section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Explore Our Course Categories</h2>
              <p className="section-subtitle">
                Choose from our carefully curated course categories to kickstart or advance your career
              </p>
            </div>
            
            <div className="categories-grid">
              {courseCategories.map((category) => (
                <Link to={category.path} key={category.id} className="category-card">
                  <div className="category-icon" style={{ background: category.gradient }}>
                    <category.icon size={32} />
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                  <ul className="category-courses">
                    {category.courses.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                  <div className="category-cta">
                    <span>Explore Courses</span>
                    <ArrowRight size={18} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="academy-cta section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Start Your Learning Journey?</h2>
              <p>Join thousands of successful students who have transformed their careers with Settlo Academy</p>
              <Link to="/academy/design-courses" className="btn btn-primary btn-lg">
                Browse All Courses
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Academy;
