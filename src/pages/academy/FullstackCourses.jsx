import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Monitor, Server, Smartphone, Network } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Academy.css';

const fullstackCourses = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Master HTML, CSS, JavaScript, React, and modern frontend frameworks. Build stunning web interfaces.',
    tag: 'Essential',
    duration: '14 Weeks',
    icon: Monitor,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    path: '/academy/course/frontend-dev'
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Learn Node.js, Python, databases, APIs, and server-side architecture. Build scalable applications.',
    tag: 'Core',
    duration: '16 Weeks',
    icon: Server,
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    path: '/academy/course/backend-dev'
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Build iOS and Android apps. Learn React Native, Flutter, and mobile development best practices.',
    tag: 'Hot',
    duration: '12 Weeks',
    icon: Smartphone,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    path: '/academy/course/mobile-app-dev'
  },
  {
    id: 'python-networking',
    title: 'Python & Networking',
    description: 'Master Python programming and networking fundamentals. Build automation scripts and network tools.',
    tag: 'Technical',
    duration: '10 Weeks',
    icon: Network,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    path: '/academy/course/python-networking'
  }
];

const FullstackCourses = () => {
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
            <h1>Fullstack Courses</h1>
            <p>Complete development courses covering the entire stack from frontend to backend</p>
          </div>
        </section>

        <section className="courses-section">
          <div className="container">
            <div className="courses-grid">
              {fullstackCourses.map((course) => (
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

export default FullstackCourses;
