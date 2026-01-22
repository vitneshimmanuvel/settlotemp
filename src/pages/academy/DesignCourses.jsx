import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Palette, PenTool, Layout, Scissors, Brush } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Academy.css';

const designCourses = [
  {
    id: 'graphic-design',
    title: 'Graphic Design Mastery',
    description: 'Learn professional graphic design from scratch. Master Adobe Creative Suite, branding, and visual communication.',
    tag: 'Popular',
    duration: '12 Weeks',
    icon: Palette,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    path: '/academy/course/graphic-design'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design Mastery',
    description: 'Create stunning user interfaces and seamless user experiences. Learn Figma, prototyping, and design systems.',
    tag: 'Trending',
    duration: '10 Weeks',
    icon: Layout,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    path: '/academy/course/ui-ux-design'
  },
  {
    id: 'website-design',
    title: 'Website Design Mastery',
    description: 'Design beautiful, responsive websites that convert. Learn modern design principles and tools.',
    tag: 'New',
    duration: '8 Weeks',
    icon: PenTool,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    path: '/academy/course/website-design'
  },
  {
    id: 'textile-design',
    title: 'Textile Design Mastery',
    description: 'Master textile and fashion design. Create patterns, prints, and fabric designs for the fashion industry.',
    tag: 'Specialized',
    duration: '10 Weeks',
    icon: Scissors,
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    path: '/academy/course/textile-design'
  },
  {
    id: 'brand-pro',
    title: 'BrandPro: Digital Design & Marketing Mastery',
    description: 'Transform your branding and digital marketing skills. Build complete brand identities and marketing campaigns.',
    tag: 'Pro',
    duration: '15+ Hours',
    icon: Brush,
    gradient: 'linear-gradient(135deg, #059669 0%, #2563eb 100%)',
    path: '/academy/course/brand-pro'
  }
];

const DesignCourses = () => {
  return (
    <div className="academy-page">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="category-page-hero">
          <div className="container">
            <Link to="/academy" className="back-link">
              <ArrowLeft size={18} />
              Back to Academy
            </Link>
            <h1>Design Courses</h1>
            <p>Master the art of visual design with our comprehensive courses taught by industry experts</p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="courses-section">
          <div className="container">
            <div className="courses-grid">
              {designCourses.map((course) => (
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

export default DesignCourses;
