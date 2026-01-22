import React, { useState } from 'react';
import process from 'process';

const MasterProCourse = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [activeModule, setActiveModule] = useState(0);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should contain only letters and spaces';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${process.env.BACKEND_URL}/api/course-enrollment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            courseName: 'MasterPro: Complete Business & Tech Mastery',
          }),
        });

        const data = await response.json();
        
        if (response.ok) {
          console.log('Server response:', data);
          alert('Enrollment submitted successfully!');
          setShowModal(false);
          setFormData({ name: '', phone: '', email: '' });
        } else {
          throw new Error(data.message || 'Failed to submit enrollment');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit enrollment. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      if (value === '' || /^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  function allowOnlyLetters(e) {
    const char = e.key;
    if (!/^[a-zA-Z\s]$/.test(char) && !['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(char)) {
      e.preventDefault();
    }
  }

  const modules = [
    {
      title: "Business Strategy & Planning",
      objective: "Master strategic business planning and execution fundamentals.",
      topics: [
        "Strategic thinking and analysis",
        "Business model canvas development",
        "Market analysis and research",
        "Competitive positioning strategies"
      ],
      outcome: "Students will develop comprehensive business strategies and plans."
    },
    {
      title: "Project Management Excellence",
      objective: "Develop advanced project management skills for complex projects.",
      topics: [
        "Agile and Scrum methodologies",
        "Resource planning and allocation",
        "Risk management frameworks",
        "Stakeholder communication"
      ],
      outcome: "Students will lead and manage projects effectively from start to finish."
    },
    {
      title: "Leadership & Team Building",
      objective: "Build and lead high-performing teams in any organization.",
      topics: [
        "Leadership styles and approaches",
        "Team dynamics and motivation",
        "Conflict resolution techniques",
        "Performance management"
      ],
      outcome: "Students will inspire and guide teams to achieve exceptional results."
    },
    {
      title: "Business Communication",
      objective: "Master professional communication for business success.",
      topics: [
        "Professional writing and documentation",
        "Presentation skills and techniques",
        "Negotiation tactics and strategies",
        "Public speaking fundamentals"
      ],
      outcome: "Students will communicate effectively in any professional setting."
    },
    {
      title: "Technology & Automation",
      objective: "Leverage technology tools for business efficiency.",
      topics: [
        "Productivity tools and software",
        "Process automation basics",
        "Data analysis and visualization",
        "AI tools for business applications"
      ],
      outcome: "Students will automate workflows and increase productivity."
    },
    {
      title: "Professional Development",
      objective: "Build a strong personal brand and professional network.",
      topics: [
        "Personal branding strategies",
        "Networking and relationship building",
        "Career planning and growth",
        "Continuous learning mindset"
      ],
      outcome: "Students will develop a compelling professional presence and network."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      <header className="text-black py-16 px-4">  
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-8">
              <img src="settlo logogogogog-01-01.png" alt="Logo" className="mb-5 md:mb-0 md:mr-10 w-20 transform scale-[1.5]"  />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">MasterPro: Complete Business & Tech Mastery</h1>
              <p className="text-xl max-w-3xl">
                Comprehensive mastery program for business strategy, technology skills, and professional development
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 text-white">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 flex-1">
              <h3 className="font-bold text-lg mb-2">Course Details</h3>
              <p className="text-3xl font-bold mb-2">20+ Hours</p>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <span className="mr-2">•</span> 100% Online
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> 6 comprehensive modules
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Real-world projects
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 flex-1">
              <h3 className="font-bold text-lg mb-2">Fees</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold mr-2">4999 /- </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-1">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-purple-500 pl-4">Course Introduction</h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-lg mb-4">
              Settlo Academy presents MasterPro: Complete Business & Tech Mastery. This comprehensive program is designed to transform you into a complete professional, equipped with strategic thinking, leadership capabilities, and modern technology skills.
            </p>
            <p className="text-lg">
              Whether you're an aspiring leader, entrepreneur, or professional looking to level up, this course provides the essential skills to excel in today's competitive business landscape.
            </p>
          </div>
        </section>

        {/* Course Objective */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-purple-500 pl-4">Course Objective</h2>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-gray-200">
            <ul className="space-y-3 pl-4 list-disc">
              <li>Master strategic business planning and execution</li>
              <li>Develop leadership and team management skills</li>
              <li>Learn effective communication and negotiation techniques</li>
              <li>Leverage technology and automation for productivity</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-purple-500 pl-4">Course Modules</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           
            <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Module Overview</h3>
              <ul className="space-y-2">
                {modules.map((module, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => setActiveModule(index)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        activeModule === index 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      <span className="font-medium">Module {index + 1}:</span> {module.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Module Details */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Module {activeModule + 1}: {modules[activeModule].title}
              </h3>
              <div className="mb-4">
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Objective
                </span>
              </div>
              <p className="text-lg mb-6">{modules[activeModule].objective}</p>
              
              <h4 className="text-xl font-semibold mb-4 text-gray-700">Topics Covered</h4>
              <ul className="space-y-3">
                {modules[activeModule].topics.map((topic, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block mt-1.5 w-5 h-5 rounded-full bg-purple-500 mr-3 flex-shrink-0"></span>
                    <span className="text-lg">{topic}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-semibold text-gray-700">Outcome: {modules[activeModule].outcome}</p>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-purple-500 pl-4">Learning Outcomes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Course Outcomes</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Strategic thinking and business planning expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Advanced project management capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Leadership and team building skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Professional communication mastery</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-pink-700">Professional Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>15+ tools and frameworks for your toolkit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Eligible for leadership and management roles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Complete business planning framework</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <span>Gold Membership Card for lifetime benefits</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-purple-500 pl-4">Certification & Membership</h2>
          
          <div className="bg-gradient-to-r from-purple-900 to-pink-800 text-white rounded-xl p-8 shadow-xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Professional Recognition</h3>
              <p className="text-xl mb-6">
                Upon successful completion of the course, students will receive:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">Certifications:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>ISO Certification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>Digital Badge for LinkedIn</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>Certificate of Completion</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">Membership Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>Gold Membership with Settlo Academy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>Priority access to career resources</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>Exclusive networking opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 px-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Mastery Journey Today</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Enroll now and become a complete professional with Settlo Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-8 py-4 rounded-full text-lg hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
            >
              Enroll Now 
            </button>
          </div>
        </section>
      </main>

      {/* Enrollment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Enroll Now</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleSubmit}>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onKeyDown={allowOnlyLetters}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    placeholder="Enter 10-digit phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                          Loading...
                      </span>
                    ) : (
                      'Submit Enrollment'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-gray-300 text-black py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
                <img src="logo.png" alt="Logo" className=" md:mb-0 md:mr-10 w-20 transform scale-[3]" />
            </div>
            <p className="text-lg">© 2025 Settlo Academy all rights reserved.</p>
            <p className="mt-2 text-purple-600">Empowering professionals with mastery skills</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MasterProCourse;
