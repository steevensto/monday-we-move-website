import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveWhatWeCanDo = () => {
    const [activeItem, setActiveItem] = useState(null);

    const items = [
        {
            title: "Educate on the Benefits of Having Fit Employees",
            description: "Discover how a fit workforce can enhance productivity, reduce absenteeism, and boost morale.",
            image: "/educate.webp"
        },
        {
            title: "Educate Employees on the Basics of Being Fit",
            description: "Provide your employees with the knowledge they need to maintain a healthy lifestyle.",
            image: "/basic_fitness.webp"
        },
        {
            title: "Help the Company Align on the Same Fit Goals",
            description: "We assist in setting corporate fitness goals, OKRs, and SMART goals to ensure everyone is on the same page.",
            image: "/okrs.webp"
        },
        {
            title: "Help Employees Find Time in Their Calendar",
            description: "We provide solutions to help employees integrate fitness into their busy schedules.",
            image: "/generated_schedule.png"
        },
        {
            title: "Connect Employees to Fitness Habits and Programs",
            description: "We link employees with fitness programs and habits that can be sustained long-term.",
            image: "/upcoming_workout.png"
        }
    ];

    return (
        <div className="relative z-20 bg-gray-100 py-20">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center text-primary"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    What We Can Do
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setActiveItem(activeItem === index ? null : index)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                                <h3 className="text-xl font-semibold text-white text-center">
                                    {item.title}
                                </h3>
                            </div>
                            {activeItem === index && (
                                <motion.div
                                    className="absolute inset-0 bg-primary bg-opacity-90 flex items-center justify-center p-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-white text-center">
                                        {item.description}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InteractiveWhatWeCanDo;
