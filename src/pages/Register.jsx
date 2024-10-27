import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Register = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    schoolAddress: '',
    principalName: '',
    schoolContact: '',
    schoolEmail: '',
  });

  const [studentData, setStudentData] = useState({
    studentName: '',
    studentClass: '',
    studentContact: '',
    studentEmail: '',
    studentSchoolName: '',
    studentAddress: '',
  });

  const [loading, setLoading] = useState(false);
  const [activeForm, setActiveForm] = useState('');

  const handleSchoolChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStudentChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleSchoolSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const scriptURL = "https://script.google.com/macros/s/AKfycbzxTOanvDLW1Xnn2bjblLDhx-LV8vLd5tyGhN_efYGvBilXkPpzveEN0XWuNOq-MjOtWg/exec";
    const data = new URLSearchParams(formData);

    fetch(scriptURL, {
      method: 'POST',
      body: data,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(() => {
        alert('School form submitted successfully!');
        setFormData({
          schoolName: '',
          schoolAddress: '',
          principalName: '',
          schoolContact: '',
          schoolEmail: '',
        });
        setActiveForm(''); // Close the form without animation
      })
      .catch(() => {
        alert('Error submitting school form!');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const studentScriptURL = 'https://script.google.com/macros/s/AKfycbzGb6WWyxkY3NvGLCWdssQtUudizen5B_eBtWEdJWCR7RQtg2jEW52prIiut0yU8-PZ9g/exec';
    const data = new URLSearchParams(studentData);

    fetch(studentScriptURL, {
      method: 'POST',
      body: data,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(() => {
        alert('Student form submitted successfully!');
        setStudentData({
          studentName: '',
          studentClass: '',
          studentContact: '',
          studentEmail: '',
          studentSchoolName: '',
          studentAddress: '',
        });
        setActiveForm(''); // Close the form without animation
      })
      .catch(() => {
        alert('Error submitting student form!');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Registration</h2>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        {activeForm === '' ? (
          <div className="flex flex-wrap justify-center gap-6">
            {/* School Card */}
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-purple-700 p-6 rounded-lg shadow-lg w-full md:w-1/2 transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => setActiveForm('school')}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-white text-center">School Registration</h3>
            </motion.div>

            {/* Student Card */}
            <motion.div
              className="bg-gradient-to-r from-teal-500 to-teal-700 p-6 rounded-lg shadow-lg w-full md:w-1/2 transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => setActiveForm('student')}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-white text-center">Student Registration</h3>
            </motion.div>
          </div>
        ) : (
          <div className="mt-6">
            {/* School Form */}
            {activeForm === 'school' && (
              <div className="overflow-hidden">
                <div className="bg-gradient-to-r from-white to-purple-50 p-6 rounded-lg shadow-md">
                  <form onSubmit={handleSchoolSubmit} className="space-y-4">
                    {['schoolName', 'schoolAddress', 'principalName', 'schoolContact', 'schoolEmail'].map((field, index) => (
                      <div key={index} className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor={field}>
                          {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </label>
                        <input
                          type={field === 'schoolEmail' ? 'email' : 'text'}
                          name={field}
                          required
                          className="shadow appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600"
                          placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
                          value={formData[field]}
                          onChange={handleSchoolChange}
                        />
                      </div>
                    ))}
                    <button
                      type="submit"
                      disabled={loading}
                      className={`bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300 ease-in-out transform hover:scale-105 ${loading && 'opacity-50 cursor-not-allowed'}`}
                    >
                      {loading ? 'Submitting...' : 'Submit Form'}
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Student Form */}
            {activeForm === 'student' && (
              <div className="overflow-hidden">
                <div className="bg-gradient-to-r from-white to-teal-50 p-6 rounded-lg shadow-md max-w-md mx-auto">
                  <h3 className="text-2xl font-semibold text-center mb-4 text-teal-700">Student Registration</h3>
                  <form onSubmit={handleStudentSubmit} className="space-y-4">
                    {['studentName', 'studentClass', 'studentContact', 'studentEmail', 'studentSchoolName', 'studentAddress'].map((field, index) => (
                      <div key={index} className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor={field}>
                          {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </label>
                        {field === 'studentAddress' ? (
                          <textarea
                            name={field}
                            required
                            rows="3"
                            className="shadow appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-600"
                            placeholder="Enter student's address"
                            value={studentData[field]}
                            onChange={handleStudentChange}
                          />
                        ) : (
                          <input
                            type={field === 'studentEmail' ? 'email' : 'text'}
                            name={field}
                            required
                            className="shadow appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-600"
                            placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
                            value={studentData[field]}
                            onChange={handleStudentChange}
                          />
                        )}
                      </div>
                    ))}
                    <button
                      type="submit"
                      disabled={loading}
                      className={`bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300 ease-in-out transform hover:scale-105 ${loading && 'opacity-50 cursor-not-allowed'}`}
                    >
                      {loading ? 'Submitting...' : 'Submit Form'}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
