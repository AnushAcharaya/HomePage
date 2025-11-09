import React, { useState } from 'react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What therapies do you offer?",
            answer: "We provide ABA, speech, occupational therapy and social skills training tailored to your child's unique needs."
        },
        {
            question: "Are your therapists certified?",
            answer: "Yes, all our therapists are licensed and hold certifications in their respective fields."
        },
        {
            question: "What ages do you support?",
            answer: "We serve children from 2 years old through adolescence, with individualized programs for each stage."
        },
        {
            question: "How do I start services?",
            answer: "Simply fill out our contact form or call us — we’ll schedule a free consultation to begin your journey."
        },
        {
            question: "Can parents join therapy sessions?",
            answer: "Absolutely! Parent participation is encouraged and often integrated into our treatment plans."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            {/* Heading with Decorative Line */}
            <div className="max-w-6xl mx-auto text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-8 h-0.5 bg-blue-600"></div>
                    <span className="text-xs uppercase tracking-wider text-gray-500">FAQ</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 font-poppins">
                    Frequently Asked Questions
                </h2>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
                {/* Left: Accordion FAQ List */}
                <div className="lg:w-1/2 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 ${openIndex === index ? 'bg-blue-50' : 'bg-white'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-gray-800 font-poppins">
                                    {faq.question}
                                </span>
                                <span className="text-xl text-gray-500">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="p-5 pt-0 text-gray-600 font-poppins text-sm leading-relaxed border-t border-gray-200">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right: Info Card with Correct Icon (Speech Bubbles + Question Mark) */}
                <div className="lg:w-1/2 bg-blue-50 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                        {/* Two Speech Bubbles with Question Mark Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {/* First Speech Bubble */}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.8-8h4.8l1.6 1.6A4.8 4.8 0 0012 16c2.206 0 4.097-1.425 4.8-3.4L21 12z" />
                            {/* Second Speech Bubble (smaller, overlapping) */}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c0 1.657-1.007 3.07-2.454 3.712C8.1 16.4 7 17.7 7 19.3V21h10v-1.7c0-1.6-1.1-2.9-2.546-3.588C13.007 15.07 12 13.657 12 12z" />
                            {/* Question Mark Inside */}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 7.519c1.897-1.897 4.766-1.897 6.664 0l6.664 6.664a1.125 1.125 0 010 1.591m-6.664-6.664a1.125 1.125 0 000 1.591l6.664 6.664m-6.664-6.664a1.125 1.125 0 00-1.591 0l-6.664 6.664a1.125 1.125 0 000 1.591m6.664-6.664l-6.664 6.664M12 12a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
                        </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2 font-poppins">
                        Check More Information
                    </h4>
                    <p className="text-gray-600 mb-6 font-poppins text-sm">
                        Discover our tailored therapies, expert team, and family support resources today.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full flex items-center gap-2 transition-colors duration-200">
                        Get In Touch
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;