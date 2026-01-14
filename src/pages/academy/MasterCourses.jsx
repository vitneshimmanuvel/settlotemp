import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Brain, Search, Video, TrendingUp } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Academy.css';

const masterCourses = [
  {
    id: 'ai-mastery',
    title: 'Artificial Intelligence Mastery',
    description: 'Deep dive into AI and machine learning. Learn Python, TensorFlow, and build real AI applications.',
    tag: 'Advanced',
    duration: '16 Weeks',
    icon: Brain,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    path: '/academy/course/ai-mastery'
  },
  {
    id: 'seo-sem',
    title: 'SEO/SEM Mastery',
    description: 'Master search engine optimization and marketing. Drive organic traffic and run effective ad campaigns.',
    tag: 'In-Demand',
    duration: '8 Weeks',
    icon: Search,
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    path: '/academy/course/seo-mastery'
  },
  {
    id: 'video-editing',
    title: 'Video Editing Mastery',
    description: 'Professional video editing skills with Premiere Pro, After Effects. Create cinematic content.',
    tag: 'Creative',
    duration: '10 Weeks',
    icon: Video,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    path: '/academy/course/video-editing'
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing Mastery',
    description: 'Create compelling content strategies that drive engagement, leads, and business growth.',
    tag: 'Business',
    duration: '8 Weeks',
    icon: TrendingUp,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    path: '/academy/course/content-marketing'
  }
];

const MasterCourses = () => {
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
            <h1>Master Courses</h1>
            <p>Advanced mastery programs in cutting-edge technologies for professionals looking to level up</p>
          </div>
        </section>

        <section className="courses-section">
          <div className="container">
            <div className="courses-grid">
              {masterCourses.map((course) => (
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

export default MasterCourses;
