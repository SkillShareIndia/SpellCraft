import React, { useState } from 'react';
import { motion } from 'framer-motion';

import reviewPhoto1 from "../assets/images/Skill-Share-Reviews.jpg";
import reviewPhoto2 from "../assets/images/Skill-Share-Reviews-01.jpg";
import reviewPhoto3 from "../assets/images/Skill-Share-Reviews-02.jpg";

const reviews = [
    {
        id: 1,
        name: "Thank you, SkillShare India! 🙏",
        photo: reviewPhoto1,
        comment: "SkillShare courses provided a comfortable and enriching learning environment. The study material is well-organized and focused on NEP, making the experience both amazing and enlightening. The team and members were incredibly cooperative, and it was a fantastic opportunity to be part of these courses. I am eagerly looking forward to more opportunities like this. SkillShare is truly a great platform for self-improvement!",
        rating: 5,
    },
    {
        id: 2,
        name: "Grateful, SkillShare India! 🌟",
        photo: reviewPhoto1,
        comment: "The National Teacher Olympiad surpassed my expectations for professional development. It offered valuable insights and practical strategies that I can readily apply in my classroom. The sessions were engaging, well-organized, and provided excellent opportunities for networking and collaboration with fellow educators. Overall, it was a highly enriching and rewarding experience.",
        rating: 5,
    },
    {
        id: 3,
        name: "Thanks, SkillShare India! 👏",
        photo: reviewPhoto1,
        comment: "Thank you, SkillShare, for providing such a fantastic platform. I am truly grateful to have joined the NTO, which allowed me to learn about NEP, NCF, SQAA, and SDG from the comfort of my home, all under one roof. Joining SkillShare was absolutely worth it. After years away from teaching, I returned to the field this year feeling unsure about NEP. However, SkillShare provided me with clarity and knowledge—just like 'rainfall on a drought-stricken land.' Thank you so much, and please continue spreading knowledge!",
        rating: 5,
    },
    
];


const Reviews = () => {
    const [visibleReviews, setVisibleReviews] = useState(7);

    const loadMoreReviews = () => {
        setVisibleReviews(prevVisibleReviews => Math.min(prevVisibleReviews + 7, reviews.length));
    };

    return (
        <div className="bg-gradient-to-r from-blue-200 to-blue-400 min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-8 rounded-lg shadow-lg bg-white">
                <h2 className="text-4xl text-center font-bold text-gray-800 mb-6">What Our Clients Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.slice(0, visibleReviews).map((review) => (
                        <motion.div
                            key={review.id}
                            className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={review.photo}
                                alt={review.name}
                                className="w-24 h-24 rounded-full border-2 border-blue-500 mb-4 mx-auto"
                            />
                            <h3 className="text-xl font-semibold text-center text-blue-600">{review.name}</h3>
                            <p className="text-yellow-500 text-center">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                            <p className="text-gray-600 text-center mt-2">{review.comment}</p>
                        </motion.div>
                    ))}
                </div>
                {visibleReviews < reviews.length && (
                    <div className="text-center mt-6">
                        <button 
                            onClick={loadMoreReviews} 
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};


export default Reviews;
