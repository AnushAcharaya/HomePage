import React from "react";
import { motion } from "framer-motion";
import { Brain, Smile, Heart, BookOpen, Mic, Users } from "lucide-react";

const conditions = [
    {
        name: "ADHD",
        description: "Support for children with attention and focus challenges.",
        icon: <Brain size={40} />,
        color: "bg-pink-100 text-pink-600",
    },
    {
        name: "Autism Spectrum Disorder",
        description: "Individualized therapy to enhance communication and social skills.",
        icon: <Smile size={40} />,
        color: "bg-blue-100 text-blue-600",
    },
    {
        name: "Down Syndrome",
        description: "Encouraging development through inclusive learning programs.",
        icon: <Heart size={40} />,
        color: "bg-green-100 text-green-600",
    },
    {
        name: "Slow Learners",
        description: "Personalized support to help every child reach their potential.",
        icon: <BookOpen size={40} />,
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        name: "Speech Delays",
        description: "Speech and language therapy to boost confidence and communication.",
        icon: <Mic size={40} />,
        color: "bg-purple-100 text-purple-600",
    },
    {
        name: "Special Education Needs",
        description: "Customized education plans for diverse learning abilities.",
        icon: <Users size={40} />,
        color: "bg-orange-100 text-orange-600",
    },
];

const ConditionsWeSupport = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-blue-50">
            <div className="text-center mb-12">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Conditions We Support
                </motion.h2>
                <motion.p
                    className="text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    We provide compassionate and personalized support for every child's unique needs.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {conditions.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`rounded-3xl p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 bg-white-200`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${item.color}`}
                        >
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
                            {item.name}
                        </h3>
                        <p className="text-gray-600 text-center">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ConditionsWeSupport;
