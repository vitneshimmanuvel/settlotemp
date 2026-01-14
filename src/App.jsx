import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';

// Pages
import Home from './pages/Home';
import Academy from './pages/academy/Academy';
import DesignCourses from './pages/academy/DesignCourses';
import MasterCourses from './pages/academy/MasterCourses';
import FullstackCourses from './pages/academy/FullstackCourses';
import MasteryCourses from './pages/academy/MasteryCourses';
import CoursePage from './pages/academy/CoursePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/academy/design-courses" element={<DesignCourses />} />
        <Route path="/academy/master-courses" element={<MasterCourses />} />
        <Route path="/academy/fullstack-courses" element={<FullstackCourses />} />
        <Route path="/academy/mastery-courses" element={<MasteryCourses />} />
        <Route path="/academy/course/:courseId" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
