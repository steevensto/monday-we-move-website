import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css'; // Import the CSS file

const MondayWeMoveWebsite = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const AnimatedLogo = () => (
        <motion.svg
            width="50"
            height="50"
            viewBox="0 0 100 100"
            initial={{ rotate: -180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1, ease: "linear" }}
        >
            <rect width="100" height="100" rx="20" fill="#e91e63" />
            <text x="50" y="60" textAnchor="middle" fill="white" fontSize="30" fontWeight="bold">MVM</text>
        </motion.svg>
    );

    const NavBar = () => (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <AnimatedLogo />
                    <h1 className="text-3xl font-bold text-primary ml-3">Monday We Move</h1>
                </motion.div>
                <ul className="flex space-x-6">
                    {['Home', 'Benefits', 'Programs'].map((item) => (
                        <motion.li
                            key={item}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <button
                                onClick={() => setCurrentPage(item.toLowerCase())}
                                className={`text-lg ${currentPage === item.toLowerCase() ? 'text-primary font-bold' : 'text-gray-700'}`}
                            >
                                {item}
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </nav>
    );


    const facts = [
        {
            title: "Lacking Creativity? Do This",
            question: "Feeling stuck?",
            description: "A 30-minute run can unlock your creative potential by boosting oxygen flow and brain function. Or try a 20-minute yoga session to relax and open up your mind to new ideas!",
            image: "creativity_run.webp"
        },
        {
            title: "Feeling Tired at Work? Do This",
            question: "Feeling sluggish?",
            description: "A quick 15-minute HIIT session can revitalize your energy levels. Even a 10-minute walk outdoors can refresh your mind and body!",
            image: "energy_increase.webp"
        },
        {
            title: "Have to Prepare for a Speaking Engagement? Do This",
            question: "Nervous about speaking?",
            description: "Practice deep breathing for 10 minutes to calm your nerves. Stand tall in a power pose for 2 minutes to boost your confidence!",
            image: "deepbreathing.webp"
        },
        {
            title: "Have a Difficult Conversation to Prepare For? Do This",
            question: "Dreading a tough talk?",
            description: "Try 10 minutes of mindfulness meditation to manage your emotions. Light stretching can also help you stay calm and relaxed!",
            image: "yoga_conversation.webp"
        },
        {
            title: "Need Help in Problem Solving? Do This",
            question: "Stuck on a problem?",
            description: "A 20-minute resistance training session can enhance your cognitive function. Tai Chi for 20 minutes can improve your mental flexibility!",
            image: "problem_solving.webp"
        }
    ];

    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: "50%", padding: "10px", zIndex: 1 }}
                onClick={onClick}
            >
                <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.41 16.58L10.83 12l4.58-4.58L14 6l-6 6 6 6z" />
                </svg>
            </div>
        );
    };

    const CustomNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: "50%", padding: "10px", zIndex: 1 }}
                onClick={onClick}
            >
                <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M8.59 16.58L13.17 12 8.59 7.42 10 6l6 6-6 6z" />
                </svg>
            </div>
        );
    };

    const InteractiveWhatWeCanDo = () => {
        const [activeItem, setActiveItem] = useState(null);
        const [showModal, setShowModal] = useState(false);

        const items = [
            {
                title: "Educate on the Benefits of Having Fit Employees",
                description: "Discover how a fit workforce can enhance productivity, reduce absenteeism, and boost morale.",
                image: "/corpfit2.webp",
                buttonText: "Learn More"
            },
            {
                title: "Help the Company Align on the Same Fit Goals",
                description: "We assist in setting corporate fitness goals, OKRs, and SMART goals to ensure everyone is on the same page.",
                image: "/okrs.webp",
                buttonText: "Get Started"
            },
            {
                title: "Help Employees Find Time in Their Calendar",
                description: "We provide solutions to help employees integrate fitness into their busy schedules.",
                image: "/generated_schedule.png",
                buttonText: "Find Out How"
            }
        ];

        const sliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <CustomPrevArrow />,
            nextArrow: <CustomNextArrow />
        };

        return (
            <div className="relative z-20 bg-gray-100 py-20">
                <div className="container mx-auto px-6">
                    <motion.h2
                        className="text-4xl font-bold mb-12 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span style={{ color: '#e91e63' }}>Been There, Solved That.</span> Here’s How We Can Help ...
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer square"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => setActiveItem(activeItem === index ? null : index)}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 transition-opacity duration-300 hover:bg-opacity-50">
                                    <h3 className="text-xl font-semibold text-white text-center">
                                        {item.title}
                                    </h3>
                                    <div className="absolute top-2 right-2 text-white text-4xl plus-sign">
                                        {activeItem === index ? '-' : '+'}
                                    </div>
                                </div>
                                {activeItem === index && (
                                    <motion.div
                                        className="absolute inset-0 bg-primary bg-opacity-90 flex flex-col items-center justify-center p-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="text-white text-center mb-4">
                                            {item.description}
                                        </p>
                                        <button
                                            className="bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold hover:bg-secondary transition duration-300"
                                            onClick={() => setShowModal(true)}
                                        >
                                            {item.buttonText}
                                        </button>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {showModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <button className="modal-close" onClick={() => setShowModal(false)}>X</button>
                                <Slider {...sliderSettings}>
                                    {facts.map((fact, index) => (
                                        <div key={index} className="slide">
                                            <h3 className="text-3xl font-bold text-center slide-title">{fact.question}</h3>
                                            <div className="flex">
                                                <div className="slide-image-container">
                                                    <img src={fact.image} alt={fact.title} className="slide-image" />
                                                </div>
                                                <div className="slide-content">
                                                    <p className="text-lg mt-4">{fact.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };


    const HomePage = () => {
        const controls = useAnimation();
        const [ref, inView] = useInView();

        useEffect(() => {
            if (inView) {
                controls.start('visible');
            }
        }, [controls, inView]);

        const sliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            prevArrow: <button className="slick-prev">←</button>,
            nextArrow: <button className="slick-next">→</button>,
        };

        return (
            <div>
                <div className="relative min-h-screen">
                    <div className="fixed inset-0 z-0 overflow-hidden">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/whatsyourmovement.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="relative z-10 min-h-screen flex flex-col justify-center items-center bg-black bg-opacity-50">
                        <motion.div
                            className="text-center mb-8"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-5xl font-bold mb-6 text-white">Move. Engage. Thrive.</h2>
                            <p className="text-xl mb-8 text-white">Transform your workplace with movement-driven wellness</p>
                            <motion.button
                                className="bg-e91e63 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.location.href = 'https://monday-we-move-0c718d36d99b.herokuapp.com/'}
                            >
                                Start Moving
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                <div className="relative z-20 bg-gray-100 py-20">
                    <div className="container mx-auto px-6">
                        <Slider {...sliderSettings} className="slider-custom">
                            <div className="p-6 flex items-center justify-center flex-col md:flex-row bg-white">
                                <div className="text-content md:w-1/2 w-full md:pr-8 flex flex-col justify-center h-full">
                                    <h3 className="text-2xl font-semibold mb-4 text-primary">Do you struggle to find time to workout?</h3>
                                    <p className="text-large leading-7 text-gray-700">Find out how MWM can help you schedule workouts seamlessly into your busy day.</p>
                                </div>
                                <img src="/corp_findtime2.webp" alt="Do you struggle to find time to workout?" className="rounded-lg mb-6 md:mb-0 md:w-1/2 w-full" />
                            </div>
                            <div className="p-6 flex items-center justify-center flex-col md:flex-row bg-white">
                                <div className="text-content md:w-1/2 w-full md:pr-8 flex flex-col justify-center h-full">
                                    <h3 className="text-2xl font-semibold mb-4 text-primary">Do you have to hide when you workout during the day?</h3>
                                    <p className="text-large leading-7 text-gray-700">Learn how MWM encourages a transparent fitness culture in your workplace.</p>
                                </div>
                                <img src="/hide_workout2.webp" alt="Do you have to hide when you workout during the day?" className="rounded-lg mb-6 md:mb-0 md:w-1/2 w-full" />
                            </div>
                            <div className="p-6 flex items-center justify-center flex-col md:flex-row bg-white">
                                <div className="text-content md:w-1/2 w-full md:pr-8 flex flex-col justify-center h-full">
                                    <h3 className="text-2xl font-semibold mb-4 text-primary">Do you feel your business objectives conflict with your fitness goals?</h3>
                                    <p className="text-large leading-7 text-gray-700">Discover how MWM aligns corporate objectives with fitness goals to enhance overall well-being.</p>
                                </div>
                                <img src="/work_fitness_balance.webp" alt="Get your corporate involved with your fitness objectives" className="rounded-lg mb-6 md:mb-0 md:w-1/2 w-full" />
                            </div>
                        </Slider>
                    </div>
                </div>

                <InteractiveWhatWeCanDo />

                <div className="relative z-20 bg-gray-100 py-20">
                    <div className="container mx-auto px-6">
                        <motion.h2
                            className="text-4xl font-bold mb-12 text-center text-primary"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Get Your Fitness Time on Track
                        </motion.h2>
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
                            <img src="/automatic_fitness.webp" alt="Automatic fitness scheduling"
                                 className="w-full md:w-1/2 rounded-lg shadow-lg" style={{
                                maxWidth: '80%',
                                maxHeight: '400px',
                                height: 'auto',
                                objectFit: 'contain'
                            }}/>
                            <div className="w-full md:w-1/2">
                                <h3 className="text-3xl font-semibold mb-4 text-primary">Automatic Fitness Scheduling</h3>
                                <p className="text-lg leading-7 text-gray-700 mb-4">See how MWM's AI-powered scheduling takes the hassle out of planning your workouts.</p>
                                <motion.button
                                    className="bg-e91e63 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => alert('Start Automatic Scheduling')}
                                >
                                    Start Automatic Scheduling
                                </motion.button>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <img src="/tailor_objective.webp" alt="Fitness schedule tailored to your objective"
                                 className="w-full md:w-1/2 rounded-lg shadow-lg" style={{
                                maxWidth: '80%',
                                maxHeight: '400px',
                                height: 'auto',
                                objectFit: 'contain'
                            }}/>
                            <div className="w-full md:w-1/2">
                                <h3 className="text-3xl font-semibold mb-4 text-primary">Fitness Schedule Tailored to Your Objective</h3>
                                <p className="text-lg leading-7 text-gray-700 mb-4">Get personalized fitness schedules that align with your specific goals and needs.</p>
                                <motion.button
                                    className="bg-e91e63 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => alert('Get Your Tailored Schedule')}
                                >
                                    Get Your Tailored Schedule
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    const BenefitsPage = () => {
        const benefits = [
            {
                title: 'Enhanced Cognitive Function',
                icon: '🧠',
                description: 'Regular aerobic exercise increases hippocampus size, leading to improved memory and cognitive function.',
                study: 'Erickson et al. (2011) in Proceedings of the National Academy of Sciences',
                image: 'https://source.unsplash.com/random/800x600?brain'
            },
            {
                title: 'Reduced Risk of Neurodegenerative Diseases',
                icon: '🏃‍♂️',
                description: 'Regular exercise is associated with a lower risk of developing Alzheimer\'s disease and other forms of dementia.',
                study: 'Gomes-Osman et al. (2018) in Neurology: Clinical Practice',
                image: 'https://source.unsplash.com/random/800x600?elderly-exercise'
            },
            {
                title: 'Improved Mood and Reduced Anxiety',
                icon: '😊',
                description: 'Regular exercise can be as effective as medication in reducing symptoms of depression and anxiety.',
                study: 'Wipfli et al. (2008) in Physiology & Behavior',
                image: 'https://source.unsplash.com/random/800x600?happy-exercise'
            },
            {
                title: 'Enhanced Learning and Neuroplasticity',
                icon: '📚',
                description: 'Exercise increases the production of BDNF (Brain-Derived Neurotrophic Factor), which enhances neuroplasticity and learning.',
                study: 'Cotman and Berchtold (2002) in Trends in Neurosciences',
                image: 'https://source.unsplash.com/random/800x600?learning'
            },
        ];

        const recommendedExercises = [
            {
                name: 'High-Intensity Interval Training (HIIT)',
                when: 'Before work or during lunch breaks',
                why: 'Improves cognitive function and work performance in short bursts.',
                study: 'Metcalfe et al. (2012) in European Journal of Applied Physiology'
            },
            {
                name: 'Strength Training',
                when: '2-3 times per week',
                why: 'Improves cognitive function, particularly executive function crucial for office work.',
                study: 'Northey et al. (2018) in British Journal of Sports Medicine'
            },
            {
                name: 'Yoga and Mindfulness Exercises',
                when: 'Daily, especially during breaks',
                why: 'Improves focus, working memory, and cognitive flexibility.',
                study: 'Gothe et al. (2013) in Journal of Physical Activity and Health'
            },
            {
                name: 'Desk Exercises and Micro-breaks',
                when: 'Throughout the workday',
                why: 'Reduces fatigue and improves productivity in office settings.',
                study: 'Karakolis and Callaghan (2014) in Applied Ergonomics'
            },
        ];

        return (
            <div className="min-h-screen py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <motion.h2
                        className="text-4xl font-bold mb-12 text-center text-primary"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Science-Backed Benefits of Fitness
                    </motion.h2>
                    <div className="space-y-20">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="w-full md:w-1/2">
                                    <img src={benefit.image} alt={benefit.title} className="w-full h-64 object-cover rounded-lg shadow-md" />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-3xl font-semibold mb-4 flex items-center">
                                        <span className="text-4xl mr-4">{benefit.icon}</span>
                                        {benefit.title}
                                    </h3>
                                    <p className="text-xl text-gray-700 mb-4">{benefit.description}</p>
                                    <p className="text-sm text-gray-500 italic">Study: {benefit.study}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.h3
                        className="text-3xl font-bold mt-20 mb-8 text-center text-primary"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Recommended Exercises for Office Efficiency
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {recommendedExercises.map((exercise, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-6"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h4 className="text-xl font-semibold mb-2">{exercise.name}</h4>
                                <p className="text-gray-700 mb-2"><strong>When:</strong> {exercise.when}</p>
                                <p className="text-gray-700 mb-2"><strong>Why:</strong> {exercise.why}</p>
                                <p className="text-sm text-gray-500 italic">Study: {exercise.study}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    const ProgramsPage = () => {
        const programs = [
            { title: 'Morning Energizer', description: 'Start your day with a boost of energy', image: 'https://source.unsplash.com/random/800x600?fitness' },
            { title: 'Lunch Break Refresh', description: 'Recharge during your lunch break', image: 'https://source.unsplash.com/random/800x600?yoga' },
            { title: 'Team Building Workouts', description: 'Build stronger teams through fitness', image: 'https://source.unsplash.com/random/800x600?team' },
            { title: 'Stress Relief Sessions', description: 'Unwind and de-stress after work', image: 'https://source.unsplash.com/random/800x600?relaxation' },
        ];

        const packages = [
            {
                title: 'Fitness Literacy & Scheduling',
                description: 'Learn the basics of fitness and how to incorporate it into your daily schedule.',
                features: [
                    'Understanding different types of exercises',
                    'Creating a personalized workout plan',
                    'Time management for fitness',
                    'Fundamentals of nutrition and its impact on performance',
                    'Techniques for proper form and injury prevention'
                ],
                image: 'https://source.unsplash.com/random/800x600?schedule'
            },
            {
                title: 'Fitness Literacy, Scheduling & PT Training',
                description: 'Comprehensive program including personalized training sessions.',
                features: [
                    'All features of Literacy & Scheduling',
                    'One-on-one sessions with a certified trainer',
                    'Customized workout routines',
                    'Progress tracking and goal setting',
                    'Advanced nutrition planning',
                    'Stress management techniques'
                ],
                image: 'https://source.unsplash.com/random/800x600?personal-trainer'
            },
        ];

        return (
            <div className="min-h-screen py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <motion.h2
                        className="text-4xl font-bold mb-12 text-center text-primary"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Programs
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg overflow-hidden shadow-md"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-primary">{program.title}</h3>
                                    <p className="text-gray-700 mb-4">{program.description}</p>
                                    <motion.button
                                        className="bg-e91e63 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-secondary transition duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Learn More
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.h2
                        className="text-4xl font-bold mb-12 text-center text-primary"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Packages
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg overflow-hidden shadow-md"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-primary">{pkg.title}</h3>
                                    <p className="text-gray-700 mb-4">{pkg.description}</p>
                                    <ul className="list-disc list-inside mb-4">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="text-gray-700">{feature}</li>
                                        ))}
                                    </ul>
                                    <motion.button
                                        className="bg-e91e63 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-secondary transition duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Learn More
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-white min-h-screen">
            <NavBar />
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'benefits' && <BenefitsPage />}
            {currentPage === 'programs' && <ProgramsPage />}
        </div>
    );
};

export default MondayWeMoveWebsite;
