import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import mail from '../assets/images/image 1.png';
import phone from '../assets/images/image 2.png';
import location from '../assets/images/image 12.png';

// Export as an object
export const images = {
  mail,
  phone,
  location,
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true); // State to track success or error
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

  // Validate the form data
  const validateForm = () => {
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      return 'All fields are required.';
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address.';
    }

    // Phone number validation (simple)
    const phoneRegex = /^\d{10}$/; // Adjust this as needed
    if (!phoneRegex.test(phone)) {
      return 'Please enter a valid phone number (10 digits).';
    }

    return null; // Form is valid
  };

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const validationError = validateForm();
    if (validationError) {
      setIsSuccess(false);
      setResultMessage(validationError);
      setIsModalOpen(true);
      setLoading(false);
      return;
    }

    const data = new URLSearchParams(formData);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxOSuIp_o27447Ag22Qi1hOkRIuK53peB3TxwXWwBbYichDTV550guZMovN-DEQciFW/exec', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setIsSuccess(true);
      setResultMessage(
        <span className="flex items-center text-green-600">
          <AiOutlineCheckCircle className="text-3xl mr-2" />
          Your form has been submitted. Our team will contact you soon!
        </span>
      );
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Submission Error:', error);
      setIsSuccess(false);
      setResultMessage(
        <span className="flex items-center text-red-600">
          <AiOutlineCloseCircle className="text-3xl mr-2" />
          There was a problem submitting the form. Please try again.
        </span>
      );
    } finally {
      setLoading(false);
      setIsModalOpen(true); // Show modal when form is submitted
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#E0F7FA] flex items-center justify-center p-4 sm:p-6">
      <motion.div
        className="max-w-6xl w-full bg-white shadow-lg rounded-[20px] p-6 mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#212121] mb-4 sm:mb-6">Contact Us</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 transition-transform duration-500 transform hover:scale-105"
          >
            {/* Form Fields */}
            <div className="mb-4 sm:mb-5">
              <label className="block text-[#444444] text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border border-[#BB86FC] rounded-lg w-full py-2 px-3 text-[#212121] leading-tight focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4 sm:mb-5">
              <label className="block text-[#444444] text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border border-[#BB86FC] rounded-lg w-full py-2 px-3 text-[#212121] leading-tight focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4 sm:mb-5">
              <label className="block text-[#444444] text-sm font-semibold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border border-[#BB86FC] rounded-lg w-full py-2 px-3 text-[#212121] leading-tight focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4 sm:mb-5">
              <label className="block text-[#444444] text-sm font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="3"
                className="shadow appearance-none border border-[#BB86FC] rounded-lg w-full py-2 px-3 text-[#212121] leading-tight focus:outline-none focus:ring-2 focus:ring-[#6200EA]"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#6200EA] hover:bg-[#3700B3] text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300 ease-in-out transform hover:scale-105"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit Form'}
            </button>
          </form>

      {/* Right Side: Contact Details */}
      <div className="md:w-1/2 flex flex-col justify-between">
            {/* Contact Details Card */}
            <div className="bg-[#F3E5F5] shadow-lg rounded-lg p-6 mb-4">
              <h3 className="text-lg font-semibold text-[#212121] mb-4">Contact Details</h3>

              {/* Email */}
              <motion.div
                className="flex items-center cursor-pointer mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => window.open('mailto:contact@skillshareindia.com')}
              >
                <img
                  src={images.mail}
                  alt="Mail Logo"
                  className="w-6 h-6 mr-4"
                />
                <span className="text-sm sm:text-base">skillshareindia00@gmail.com</span>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-center cursor-pointer mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => window.open('tel:+918700630842')}
              >
                <img
                  src={images.phone}
                  alt="Phone Logo"
                  className="w-6 h-6 mr-4"
                />
                <span className="text-sm sm:text-base">+918700630842</span>
              </motion.div>

          {/* Address */}
<motion.div
  className="flex items-start cursor-pointer mb-4"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
  onClick={() =>
    window.open('https://maps.google.com?q=Skillshare+India,+723+Tower+C,+Seventh+Floor,+Logix+Cyberpark,+sector+62,+Noida,+201-301', '_blank')
  }
>
  <img
    src={images.location}
    alt="Address Logo"
    className="w-6 h-6 mr-4"
  />
  <span className="text-sm sm:text-base">Skillshare India, 723 Tower C, Seventh Floor, Logix Cyberpark, sector 62, Noida, 201-301</span>
</motion.div>

            </div>

            {/* Map Section */}
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
  <iframe
    title="Location Map"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241317.04451129443!2d77.20622973430656!3d28.535517460487408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1bc1234e56a7%3A0x24d456f1fd49bcfd!2sSkillshare%20India%2C%20723%20Tower%20C%2C%20Seventh%20Floor%2C%20Logix%20Cyberpark%2C%20Sector%2062%2C%20Noida%2C%20201-301!5e0!3m2!1sen!2sus!4v1625648239655!5m2!1sen!2sus"
    width="100%"
    height="100%"
    style={{ border: '0' }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>

          </div>
          </div>

        {/* Modal for Success/Error Messages */}
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-opacity-50 bg-gray-800 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsModalOpen(false)} // Close modal on backdrop click
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              {resultMessage && (
                <div className={`p-4 ${isSuccess ? 'bg-green-100' : 'bg-red-100'} rounded-lg`}>
                  {resultMessage}
                </div>
              )}
            </div>
          </motion.div>
        )}

      </motion.div>
    </div>
  );
};

export default ContactUs;
