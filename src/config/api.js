// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  leads: `${API_BASE_URL}/api/leads`,
  health: `${API_BASE_URL}/api/health`,
  courseEnrollment: `${API_BASE_URL}/api/course-enrollment`
};

export default API_BASE_URL;

