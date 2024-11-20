import React from "react"; 
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
// Import all images
import spellFinalCover from '../assets/images/spell_final_cover__4___3_.pdf-removebg-preview.png'; // Adjust path if needed
import girlImage1 from '../assets/images/Girl-image-2.png';
import girlImage2 from '../assets/images/Girl-images.png';

// Export as an object
export const images = {
  spellFinalCover,
  girlImage1,
  girlImage2,
};


const settings = {
  dots: true, 
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  swipe: true,
  appendDots: (dots) => (
    <div style={{ background: "white", padding: "10px" }}>
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

import reviewPhoto1 from "../assets/images/Skill-Share-Reviews.jpg";
import reviewPhoto2 from "../assets/images/Skill-Share-Reviews-01.jpg";
import reviewPhoto3 from "../assets/images/Skill-Share-Reviews-02.jpg";

const reviews = [
  {
    name: "Thanks SkillShare India",
    photo: reviewPhoto1,
    review: "Amazing courses, well-organized material, and a great platform to upgrade skills. Highly recommend!",
    rating: 5,
  },
  {
    name: "Thanks SkillShare India",
    photo: reviewPhoto2,
    review: "SkillShare provided incredible insights into NEP and education. A blessing for teachers returning to the field!",
    rating: 4,
  },
  {
    name: "Thanks SkillShare India",
    photo: reviewPhoto3,
    review: "Enriching experience with practical strategies and excellent networking opportunities. Loved it!",
    rating: 5,
  },
  // Repeat for other entries...
];

const Home = () => {
  return (
    <div>

      {/* SpellCraft Olympiad Section with Color Zoom-Out Effect */}
      <motion.div
        className="relative h-auto lg:h-[500px] flex flex-col lg:flex-row justify-evenly items-center px-5 lg:px-10 py-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Zoom-Out Animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 opacity-70"
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        />

        <motion.div
          className="text-center flex flex-col justify-center items-center lg:w-1/2 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl lg:text-6xl font-extrabold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            SpellCraft Olympiad
          </motion.h1>
          <motion.p
            className="text-lg lg:text-2xl font-medium text-gray-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Crafting Language, Conjuring Brilliance!
          </motion.p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center lg:w-1/2 relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={images.spellFinalCover}
            alt="SpellCraft Olympiad"
            className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-contain"
          />
        </motion.div>
      </motion.div>




  {/* Stages Section */}

{/* Stages Section */}

<div className="flex flex-col md:flex-row w-full p-4 md:p-8 bg-white"> {/* Simple white background */}
  {/* Left Content Section with Stages - 75% width */}
  <div className="relative w-full md:w-3/4 flex flex-col gap-8">
    {/* Stage 1 */}
    <motion.div
      className="group flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg bg-blue-50 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Icon or Number */}
      <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg w-16 h-16 text-white font-bold text-3xl">
        1
      </div>
      {/* Stage Details */}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-blue-800 group-hover:text-blue-900 transition-colors duration-300">
          Stage 1: Testing
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Interactive Assessments: Engaging exercises designed to evaluate children's language skills, vocabulary, and comprehension through various question formats. Tailored for nursery through 8th grade.
        </p>
      </div>
    </motion.div>

    {/* Stage 2 */}
    <motion.div
      className="group flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg bg-blue-50 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }} // Added delay for staggered effect
    >
      {/* Icon or Number */}
      <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg w-16 h-16 text-white font-bold text-3xl">
        2
      </div>
      {/* Stage Details */}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-blue-800 group-hover:text-blue-900 transition-colors duration-300">
          Stage 2: Result Summary
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Detailed Report: Categorized into: Strength Zone: Recognizes advanced skills. Developing Zone: Identifies areas for improvement. Concern Zone: Highlights specific areas needing support.
        </p>
      </div>
    </motion.div>

    {/* Stage 3 */}
    <motion.div
      className="group flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg bg-blue-50 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }} // Added delay for staggered effect
    >
      {/* Icon or Number */}
      <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg w-16 h-16 text-white font-bold text-3xl">
        3
      </div>
      {/* Stage Details */}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-blue-800 group-hover:text-blue-900 transition-colors duration-300">
          Stage 3: Award and Worksheets
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Targeted Practice: Personalized worksheets based on test results. Awards: Gold, Silver, and Bronze medals; Participation certificates. School Recognition: Appreciation and leadership awards.
        </p>
      </div>
    </motion.div>
  </div>

  {/* Right Image Section - Hidden on Mobile */}
  <div className="w-full md:w-1/4 justify-center items-start mt-8 md:mt-0 hidden md:flex relative">
    <motion.img
      src={images.girlImage1}
      alt="Girl illustration"
      className="w-full h-full object-fit" // Ensures the image covers the entire section
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%", // Ensure the image stretches to fill the height of the content section
      }}
      initial={{ opacity: 0, scale: 0.8 }} // Initial scale for animation
      animate={{ opacity: 1, scale: 1 }} // Scale to normal size
      transition={{ duration: 0.5, delay: 0.3 }} // Added delay for staggered effect
    />
  </div>
</div>

 
{/* About Us Section */}
<motion.div
  className="py-8 bg-gradient-to-r from-[#f5f7fa] via-[#e6e9f0] to-[#f5f7fa] relative overflow-hidden"
  initial={{ backgroundPosition: "0% 50%" }}
  animate={{ backgroundPosition: "100% 50%" }}
  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
>
  <div className="container mx-auto w-[90%] lg:w-[80%] p-6 relative z-10">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 animate-bounce">
      About Us
    </h1>
    <div className="flex flex-col lg:flex-row justify-center items-center">
      {/* Left Side: Content */}
      <div className="w-full lg:w-2/3 p-4 order-1 flex flex-col justify-center">
        <motion.p
          className="text-gray-700 text-lg leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          We've created a unique competition format for students from Nursery to 10th grade, enhancing their language skills through interactive assessments. 
          Engage in quizzes that foster communication abilities and build confidence.
        </motion.p>
        <div className="mt-4 flex justify-center">
          <Link 
            to="/about-us" 
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
      {/* Right Side: Image */}
      <div className="w-full lg:w-1/3 p-4 order-2 flex justify-center">
        <motion.img
          src={images.girlImage2}
          alt="Girl Image"
          className="max-w-full h-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  </div>
</motion.div>


   
      <div className="max-w-screen-lg mx-auto my-10 px-4">
  <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
    What Our Clients Say
  </h2>
  <Slider {...settings}>
    {reviews.map((review, index) => (
      <motion.div
        key={index}
        className="p-4"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between text-center h-[400px] mx-auto transition-transform transform hover:scale-105">
          <motion.img
            src={review.photo}
            alt={review.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.p
            className="text-lg text-gray-700 mb-4 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            "{review.review}"
          </motion.p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {review.name}
          </h3>
          <div className="text-yellow-500 text-xl">
            {"★".repeat(review.rating)}
            {"☆".repeat(5 - review.rating)}
          </div>
        </div>
      </motion.div>
    ))}
  </Slider>
</div>



    </div>
  );
};

export default Home;
