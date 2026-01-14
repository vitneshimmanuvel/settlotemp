import { useParams } from 'react-router-dom';
import CourseDetail from './CourseDetail';
import { getCourseById } from '../../data/coursesData';

const CoursePage = () => {
  const { courseId } = useParams();
  const course = getCourseById(courseId);

  if (!course) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Course Not Found</h1>
        <p>The course you're looking for doesn't exist.</p>
      </div>
    );
  }

  return <CourseDetail course={course} />;
};

export default CoursePage;
