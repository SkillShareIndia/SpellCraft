import React, { useState } from "react";
import { motion } from "framer-motion";

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

  // Handle change for both forms
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (activeForm === "school") {
      setFormData({ ...formData, [name]: value });
    } else if (activeForm === "student") {
      setStudentData({ ...studentData, [name]: value });
    }
  };

  const handleSchoolSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const scriptURL = "https://script.google.com/macros/s/AKfycbzWVOy8c5GsUWQW3Kak4_UDBeOiPd7HAhY0YKF5lXFGychIHyq-ZeEV_GC5i4Nzyt59/exec";
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
        setActiveForm(''); // Close the form
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
    const studentScriptURL = 'https://script.google.com/macros/s/AKfycbwHtPCEH6qwtOD4o4HWH0U8oitXvUnHfEAN_sPS4RH-I6YYiXqFc5HW_ziEys09-1_h/exec';
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
        setActiveForm(''); // Close the form
      })
      .catch(() => {
        alert('Error submitting student form!');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        Registration
      </h1>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        {activeForm === "" ? (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <motion.div
              className="w-full sm:w-1/2 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg p-6 shadow-lg cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setActiveForm("school")}
            >
              <h2 className="text-center text-lg font-semibold">
                School Registration
              </h2>
            </motion.div>
            <motion.div
              className="w-full sm:w-1/2 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg p-6 shadow-lg cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setActiveForm("student")}
            >
              <h2 className="text-center text-lg font-semibold">
                Student Registration
              </h2>
            </motion.div>
          </div>
        ) : (
          <div className="mt-6">
            <div className="overflow-hidden bg-white p-6 rounded-lg shadow-lg border-4 border-indigo-200">
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
                {activeForm === "school"
                  ? "School Registration Form"
                  : "Student Registration Form"}
              </h3>
              <form
                className="space-y-4"
                onSubmit={activeForm === "school" ? handleSchoolSubmit : handleStudentSubmit}
              >
                {(activeForm === "school"
                  ? [
                      "schoolName",
                      "principalName",
                      "schoolContact",
                      "schoolEmail",
                      "schoolAddress",
                    ]
                  : [
                      "studentName",
                      "studentClass",
                      "studentContact",
                      "studentEmail",
                      "studentSchoolName",
                      "studentAddress",
                    ]
                ).map((field, index) => (
                  <div key={index}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-600 mb-1"
                    >
                      {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </label>
                    {field.includes("address") ? (
                      <textarea
                        id={field}
                        name={field}
                        rows="3"
                        required
                        value={activeForm === "school" ? formData[field] : studentData[field]}
                        onChange={handleInputChange}
                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder={`Enter ${field}`}
                      />
                    ) : (
                      <input
                        type={field.includes("email") ? "email" : field.includes("contact") ? "tel" : "text"}
                        id={field}
                        name={field}
                        required
                        value={activeForm === "school" ? formData[field] : studentData[field]}
                        onChange={handleInputChange}
                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        placeholder={`Enter ${field}`}
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded-lg transition-transform ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
              <button
                className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 rounded-lg transition-transform"
                onClick={() => setActiveForm('')}
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
