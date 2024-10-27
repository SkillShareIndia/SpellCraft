import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import girlImage1 from '../assets/images/Girl-images.png';
import Result from '../assets/images/spellcraft.jpg'
import { FaBullseye, FaEye, FaCheckCircle } from 'react-icons/fa'; // Icons for mission and vision


// Export as an object
export const images = {
  girlImage1,
};


const AboutUs = () => {
  return (
    <div className="bg-[#E8F5E9] py-8">


<div className="container mx-auto w-[90%] lg:w-[80%] p-6 bg-gradient-to-r from-[#E0F7FA] to-[#B2EBF2] rounded-lg shadow-lg">
  <div className="flex flex-wrap justify-center items-center">
    {/* Right Side: Image (Now on top for small screens) */}
    <motion.div
      className="w-full lg:w-1/4 p-6 flex justify-center order-1 lg:order-2" // Changed order for responsive layout
      initial={{ opacity: 0 }} // Initial opacity for fade-in effect
      animate={{ opacity: 1 }} // Final opacity for fade-in effect
      transition={{ duration: 0.6, ease: 'easeInOut' }} // Fade-in duration
    >
      <motion.img
        src={images.girlImage1} // Replace with your actual image path
        alt="Educational Consultancy"
        className="max-w-full h-auto transition-transform duration-500 transform hover:scale-105 rounded-lg shadow-lg"
      />
    </motion.div>

    {/* Left Side: Content */}
    <motion.div
      className="w-full lg:w-3/4 p-6 order-2 lg:order-1" // Adjusted order for responsive layout
      initial={{ opacity: 0, x: -50 }} // Initial position for slide-in effect
      animate={{ opacity: 1, x: 0 }} // Slide-in effect
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <h2 className="text-[#00796B] text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
      <p className="text-[#424242] text-lg leading-relaxed mb-4">
        <span className="font-semibold">SkillShare India</span> is the leading educational consultancy for schools across India. Our goal is to provide professional assistance to all educational stakeholders.
      </p>
      <p className="text-[#424242] text-lg leading-relaxed">
        We aim to deliver quality audit services, competency mapping for teachers, and training tailored to the immediate needs of educational institutions. Additionally, we conduct national Olympiads and offer consultancy services to enhance school management and admissions.
      </p>
    </motion.div>
  </div>
</div>











{/* Mission and Vision Sections */}
<div className="flex flex-col md:flex-row items-center justify-center py-8 space-y-8 md:space-y-0 md:space-x-8">
  {/* Our Mission Section */}
  <motion.section
    className="bg-gradient-to-r from-[#B2DFDB] to-[#E0F7FA] rounded-lg shadow-md p-6 w-11/12 md:w-1/3 flex flex-col"
    initial={{ opacity: 0 }} // Start invisible
    animate={{ opacity: 1 }} // Fade in
    transition={{ duration: 0.4 }} // Simpler animation
  >
    <div className="flex items-center mb-4">
      <FaBullseye className="text-3xl text-[#00796B] mr-2" />
      <h3 className="text-xl font-bold text-[#00796B]">Our Mission</h3>
    </div>
    <ul className="list-disc list-inside text-gray-800 text-base space-y-1">
      <li>Build a strong foundation for young learners.</li>
      <li>Boost confidence and encourage participation.</li>
    </ul>
  </motion.section>

  {/* Our Vision Section */}
  <motion.section
    className="bg-gradient-to-r from-[#B2DFDB] to-[#E0F7FA] rounded-lg shadow-md p-6 w-11/12 md:w-1/3 flex flex-col"
    initial={{ opacity: 0 }} // Start invisible
    animate={{ opacity: 1 }} // Fade in
    transition={{ duration: 0.4, delay: 0.1 }} // Simple fade-in with slight delay
  >
    <div className="flex items-center mb-4">
      <FaEye className="text-3xl text-[#00796B] mr-2" />
      <h3 className="text-xl font-bold text-[#00796B]">Our Vision</h3>
    </div>
    <ul className="list-disc list-inside text-gray-800 text-base space-y-1">
      <li>Empower students with language skills.</li>
      <li>Make language learning enjoyable and effective.</li>
    </ul>
  </motion.section>
</div>



{/* Why Choose Us Section */}
<motion.section className="bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] py-12">
  <div className="max-w-6xl mx-auto px-6">
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#00796B] tracking-wide">
      Why Choose Us?
    </h1>
    
    <motion.div
      className="bg-gradient-to-br from-white via-[#F0F4F8] to-[#FFFFFF] shadow-xl rounded-xl p-8 space-y-6 transition-transform transform hover:scale-105 duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ul className="space-y-4 text-lg md:text-xl text-gray-700">
        <motion.li
          className="flex items-start p-4 rounded-lg bg-[#FAFAFA] shadow-sm hover:bg-[#F5F5F5] transition-colors duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <FaCheckCircle className="text-[#00796B] mr-3 mt-1" />
          <div>
            <strong>Comprehensive Assessment:</strong> Our Olympiad begins with a thorough evaluation to pinpoint each child's strengths, areas for development, and concerns regarding English language proficiency.
          </div>
        </motion.li>

        <motion.li
          className="flex items-start p-4 rounded-lg bg-[#FAFAFA] shadow-sm hover:bg-[#F5F5F5] transition-colors duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <FaCheckCircle className="text-[#00796B] mr-3 mt-1" />
          <div>
            <strong>Targeted Support:</strong> Based on the initial assessment, students are categorized into zones.
          </div>
        </motion.li>

        <motion.li
          className="flex items-start p-4 rounded-lg bg-[#FAFAFA] shadow-sm hover:bg-[#F5F5F5] transition-colors duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <FaCheckCircle className="text-[#00796B] mr-3 mt-1" />
          <div>
            <strong>Strength Zone:</strong> Where the child excels.
          </div>
        </motion.li>

        <motion.li
          className="flex items-start p-4 rounded-lg bg-[#FAFAFA] shadow-sm hover:bg-[#F5F5F5] transition-colors duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <FaCheckCircle className="text-[#00796B] mr-3 mt-1" />
          <div>
            <strong>Developing Zone:</strong> Where the child requires more practice.
          </div>
        </motion.li>

        <motion.li
          className="flex items-start p-4 rounded-lg bg-[#FAFAFA] shadow-sm hover:bg-[#F5F5F5] transition-colors duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <FaCheckCircle className="text-[#00796B] mr-3 mt-1" />
          <div>
            <strong>Concern Zone:</strong> Where the child needs focused intervention.
          </div>
        </motion.li>

        <motion.li
          className="flex items-start p-4 rounded-lg bg-[#FAFAFA] shadow-sm hover:bg-[#F5F5F5] transition-colors duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <FaCheckCircle className="text-[#00796B] mr-3 mt-1" />
          <div>
            <strong>Continuous Development:</strong> We offer personalized support to meet the specific needs of every student, ensuring ongoing enhancement of their language skills. Through this approach, we cultivate a spirit of healthy competition among students and broaden their intellectual horizons.
          </div>
        </motion.li>
      </ul>
    </motion.div>
  </div>
</motion.section>



    



{/* Result Summary Section */}
<motion.div
  className="bg-gradient-to-r from-[#E3F2FD] to-[#BBDEFB] shadow-lg rounded-lg p-6 mb-8 max-w-[90%] mx-auto transition-transform transform hover:scale-105"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#0D47A1]">
    Result Summary
  </h3>

  <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-8">
    {/* Left: Result Summary List */}
    <div className="md:w-3/4 w-full flex flex-col justify-center items-center space-y-4 text-center md:text-left">
      <ul className="list-disc list-inside text-gray-800 text-base md:text-lg space-y-6 md:space-y-4">
        <li className="font-medium">
          Customized result summary showcasing strengths and weaknesses.
        </li>
        <li className="font-medium">
          This summary helps in setting goals and fosters continuous improvement.
        </li>
        <li className="font-medium">
          Targeted assignments for areas of concern shall be provided.
        </li>
      </ul>
    </div>

    {/* Right: Single Image */}
    <div className="md:w-1/4 w-full flex justify-center items-center">
      <motion.img
        src={Result}// Replace with your actual image path
        alt="Summary Image"
        className="w-[250px] md:w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 object-cover"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
    </div>
  </div>
</motion.div>




      <div className="flex flex-col items-start justify-start p-10 bg-gray-100">
  <h2 className="text-4xl font-extrabold text-indigo-600 mb-10 text-left">
    Awards
  </h2>

  {/* Line Animation and Award Elements */}
  <div className="flex flex-col md:flex-row items-center justify-center relative"> {/* Use flex-col for mobile and flex-row for larger screens */}
    {/* Animated Line */}
    <motion.div
      className="absolute top-16 h-1 bg-gray-300 left-0 hidden md:block" // Hide on mobile
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 4, ease: "easeInOut" }}
      style={{ zIndex: 1 }}
    />

    {/* Award 1: Gold Medal */}
    <motion.div
      className="relative flex flex-col items-center text-center z-10 mb-10 md:mb-0 md:mr-10" // Added margin for separation in md
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <motion.div
        className="rounded-full w-32 h-32 bg-yellow-500 flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <strong className="text-white text-2xl">Gold Medal</strong>
      </motion.div>
      <p className="mt-4 text-gray-600 text-sm md:text-base">
        Presented to the top achiever in each class for their outstanding efforts.
      </p>
    </motion.div>

    {/* Award 2: Medal of Excellence */}
    <motion.div
      className="relative flex flex-col items-center text-center z-10 mb-10 md:mb-0 md:mr-10" // Added margin for separation in md
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <motion.div
        className="rounded-full w-32 h-32 bg-blue-500 flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <strong className="text-white text-2xl">Excellence</strong>
      </motion.div>
      <p className="mt-4 text-gray-600 text-sm md:text-base">
        Awarded to the 2nd and 3rd runners-up in each class for commendable performance.
      </p>
    </motion.div>

    {/* Award 3: Participation Certificate */}
    <motion.div
      className="relative flex flex-col items-center text-center z-10"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 3, duration: 0.8 }}
    >
      <motion.div
        className="rounded-full w-32 h-32 bg-green-500 flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <strong className="text-white text-2xl">Certificate</strong>
      </motion.div>
      <p className="mt-4 text-gray-600 text-sm md:text-base">
        Given to all participants to acknowledge their enthusiasm and involvement.
      </p>
    </motion.div>
  </div>
</div>





<motion.div
  className="p-10 bg-gradient-to-br from-blue-50 via-white to-yellow-50 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-500"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <motion.h2
    className="text-4xl font-bold text-gray-800 mb-12 text-center tracking-wide"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    Recognition
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Recognition Card 1 */}
    <motion.div
      className="flex flex-col items-center bg-gradient-to-r from-white to-blue-50 p-6 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-50 hover:to-yellow-50 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <span className="bg-blue-500 h-6 w-6 rounded-full mb-4"></span>
      <p className="text-center text-gray-800 text-lg">
        A <span className="font-semibold text-gray-900">Certificate of Appreciation</span> will be awarded to the school coordinator for their invaluable support in organizing and facilitating the competition.
      </p>
    </motion.div>

    {/* Recognition Card 2 */}
    <motion.div
      className="flex flex-col items-center bg-gradient-to-r from-white to-yellow-50 p-6 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-yellow-50 hover:to-blue-50 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <span className="bg-yellow-500 h-6 w-6 rounded-full mb-4"></span>
      <p className="text-center text-gray-800 text-lg">
        The <span className="font-semibold text-gray-900">Principal</span> will receive an Award in acknowledgment of their leadership and commitment to successfully completing the competition.
      </p>
    </motion.div>
  </div>
</motion.div>

  


    </div>
  );
};

export default AboutUs;
