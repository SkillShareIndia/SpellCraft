import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useFirebase } from '../Context/firebase';

const Result = () => {
    const { getArticles, getStudentsBySchool, getImageURL } = useFirebase();
    const [schoolData, setSchoolData] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const articlesSnapshot = await getArticles();
                const uniqueSchools = Array.from(
                    new Set(articlesSnapshot.docs.map(doc => doc.data().school))
                );

                const schoolsWithStudents = await Promise.all(
                    uniqueSchools.map(async school => {
                        const students = await getStudentsBySchool(school);
                        const studentsWithImages = await Promise.all(
                            students.map(async student => {
                                const imageURL = await getImageURL(student.imageURL);
                                return { ...student, imageURL };
                            })
                        );

                        const sortedStudents = studentsWithImages.sort((a, b) => {
                            if (a.classs !== b.classs) return a.classs - b.classs;
                            return a.rank - b.rank;
                        });

                        return { name: school, students: sortedStudents };
                    })
                );

                setSchoolData(schoolsWithStudents);
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchData();
    }, [getArticles, getStudentsBySchool, getImageURL]);

    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 pt-10">
            {/* Heading Section */}
            <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-8">
                SpellCraft Olympiad
            </h1>

            {loading ? (
                <p className="text-lg text-gray-600">Loading data...</p>
            ) : schoolData.length === 0 ? (
                <div className="flex flex-col items-center text-center py-20 px-6 bg-white rounded-lg shadow-lg border border-gray-300 w-3/4 md:w-1/2">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">No Student Data Yet</h2>
                    <p className="text-gray-600 mb-4">
                        Student data will appear here once added to the system.
                    </p>
                    <svg
                        className="w-24 h-24 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m4 0h-1v4h-1m-4 0H7v-4h1v4z"
                        ></path>
                    </svg>
                </div>
            ) : (
                schoolData.map((school, schoolIndex) => (
                    <div key={schoolIndex} className="mt-10 w-full">
                        <h1 className="text-3xl font-bold mb-4 md:text-2xl sm:text-xl sm:ml-4 sm:mb-2">
                            {school.name}
                        </h1>
                        <div className="flex flex-wrap justify-center gap-8 p-4 border-2 border-gray-300 rounded-lg shadow-md bg-gray-100">
                            {school.students.map((student, studentIndex) => (
                                <motion.div
                                    key={studentIndex}
                                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-80 transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                                    }}
                                >
                                    <motion.img
                                        src={student.imageURL}
                                        alt={student.name}
                                        className={`w-32 h-32 rounded-full mb-4 transition-transform duration-300 transform hover:scale-110 border-4 ${
                                            student.rank === 1
                                                ? 'border-yellow-500'
                                                : student.rank === 2
                                                ? 'border-gray-400'
                                                : student.rank === 3
                                                ? 'border-yellow-700'
                                                : 'border-blue-500'
                                        }`}
                                        whileHover={{ scale: 1.1 }}
                                    />
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        {student.name}
                                    </h2>
                                    <p className="text-gray-600">Class: {student.classs}</p>
                                    <p className="text-gray-800 font-bold">Rank: {student.rank}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Result;
