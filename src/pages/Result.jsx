import React from 'react';
import { motion } from 'framer-motion';

// Import images - make sure the paths are correct
import Image1 from '../assets/images/images-1.jpg'; 
import Image2 from '../assets/images/images-2.jpeg';
import Image3 from '../assets/images/images-3.jpeg';
import Image4 from '../assets/images/images-4.jpeg';
import Image5 from '../assets/images/images-4.jpeg'; 
import Image6 from '../assets/images/images-3.jpeg';
import Image7 from '../assets/images/images-2.jpeg';
import Image8 from '../assets/images/images-1.jpg';

const Result = () => {
  // Array of schools with their names and student data
  const schools = [
    {
      name: "School Name Here 1",
      students: [
        {
          name: "John Doe",
          class: "5th Grade",
          rank: 1,
          image: Image1,  // This should match the correct import
        },
        {
          name: "Jane Smith",
          class: "6th Grade",
          rank: 2,
          image: Image2,
        },
        {
          name: "Alice Johnson",
          class: "7th Grade",
          rank: 3,
          image: Image3,
        },
        {
          name: "Bob Brown",
          class: "8th Grade",
          rank: 1,
          image: Image4,
        },
      ],
    },
    {
      name: "School Name Here 2",
      students: [
        {
          name: "Emily Davis",
          class: "5th Grade",
          rank: 1,
          image: Image5,
        },
        {
          name: "Michael Wilson",
          class: "6th Grade",
          rank: 2,
          image: Image6,
        },
        {
          name: "Sophia Brown",
          class: "7th Grade",
          rank: 3,
          image: Image7,
        },
        {
          name: "Liam Johnson",
          class: "8th Grade",
          rank: 2,
          image: Image8,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 pt-10">
      {/* Heading Section */}
      <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-4">
        SpellCraft Olympiad
      </h1>

      {/* Map through each school to display sections dynamically */}
      {schools.map((school, schoolIndex) => (
        <div key={schoolIndex} className="mt-10 w-full">
          {/* School Name with responsive margin and font size */}
          <h1 className="text-3xl font-bold mb-4 md:text-2xl sm:text-xl sm:ml-4 sm:mb-2">
            {school.name}
          </h1>
          <div className="flex flex-wrap justify-center gap-8 p-4 border-2 border-gray-300 rounded-lg shadow-md bg-white">
            {school.students.map((student, studentIndex) => (
              <motion.div
                key={studentIndex}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-80 transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              >
        <motion.img
  src={student.image}
  alt={student.name}
  className={`w-32 h-32 rounded-full mb-4 transition-transform duration-300 transform hover:scale-110 border-4 ${
    student.rank === 1 ? 'border-yellow-500' : 
    student.rank === 2 ? 'border-gray-400' : 
    student.rank === 3 ? 'border-yellow-700' : 
    'border-blue-500' // default color if rank is not 1, 2, or 3
  }`}
  whileHover={{ scale: 1.1 }}
/>

                <h2 className="text-xl font-semibold text-gray-800">{student.name}</h2>
                <p className="text-gray-600">Class: {student.class}</p>
                <p className="text-gray-800 font-bold">Rank: {student.rank}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Result;
