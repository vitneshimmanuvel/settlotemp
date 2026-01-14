import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Megaphone, Building, Brush, UserCheck } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Academy.css';

const masteryCourses = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Mastery',
    description: 'Complete digital marketing training. Learn social media, email marketing, analytics, and campaign management.',
    tag: 'Comprehensive',
    duration: '12 Weeks',
    icon: Megaphone,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    path: '/academy/course/digital-marketing'
  },
  {
    id: 'brand-development',
    title: 'Brand Development',
    description: 'Build powerful brands from scratch. Learn brand strategy, positioning, and identity development.',
    tag: 'Business',
    duration: '10 Weeks',
    icon: Building,
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    path: '/academy/course/brand-development'
  },
  {
    id: 'cartoon-caricature',
    title: 'Cartoon & Caricature Mastery',
    description: 'Master the art of cartoon illustration and caricature. Create unique character designs and illustrations.',
    tag: 'Creative',
    duration: '8 Weeks',
    icon: Brush,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    path: '/academy/course/cartoon-caricature'
  },
  {
    id: 'junior-pro',
    title: 'Junior Pro Programs',
    description: 'Specialized programs for young professionals. Get hands-on experience with industry projects.',
    tag: 'Entry Level',
    duration: '6 Weeks',
    icon: UserCheck,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    path: '/academy/course/junior-pro'
  }
];

const MasteryCourses = () => {
  return (
    <div className="academy-page">
      <Header />
      <main>
        <section className="category-page-hero">
          <div className="container">
            <Link to="/academy" className="back-link">
              <ArrowLeft size={18} />
              Back to Academy
            </Link>
            <h1>Mastery Courses</h1>
            <p>Expert-level courses in marketing, branding, and creative arts</p>
          </div>
        </section>

        <section className="courses-section">
          <div className="container">
            <div className="courses-grid">
              {masteryCourses.map((course) => (
                <Link to={course.path} key={course.id} className="course-card">
                  <div className="course-image" style={{ background: course.gradient }}>
                    <course.icon size={48} />
                  </div>
                  <div className="course-content">
                    <span className="course-tag">{course.tag}</span>
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-description">{course.description}</p>
                    <div className="course-meta">
                      <span className="course-duration">
                        <Clock size={16} />
                        {course.duration}
                      </span>
                      <span className="course-btn">View Details</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MasteryCourses;
