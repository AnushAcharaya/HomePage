import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('./OIP.jpg')",
                        opacity: 0.3, // Lower opacity for the background image
                    }}
                ></div>

                {/* Gradient Overlay Layer */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(173, 216, 230, 0.9), rgba(255, 228, 225, 0.9))",
                        opacity: 0.9, // Higher opacity for gradient
                    }}
                ></div>

                {/* Content Wrapper */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl ">
                    {/* Left Image - Visible on Medium Screens and Above */}
                    <div className="w-64 h-96 overflow-hidden hidden md:block">
                        <img
                            src="./center-for-autism.jpg"
                            alt="Autism Support"
                            className="w-full h-full object-cover"
                            style={{
                                clipPath: "ellipse(50% 50% at 50% 50%)",
                            }}
                        />
                    </div>

                    {/* Center Text Content with Animation */}
                    <motion.div
                        className="text-center max-w-2xl mx-auto px-4 mr-20 ml-20 md:mr-0 md:ml-0"

                    >
                        <motion.span
                            className="inline-block text-sm px-4 py-1 mb-4 rounded-full border border-blue-500 text-blue-700 font-medium bg-white/70 transform translate-y-30 -translate-x-60 -rotate-30"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Let's Build
                        </motion.span>

                        <div className="w-30 h-30 overflow-hidden hidden md:block transform translate-y-5 translate-x-123 -rotate-70">
                            <img
                                src="./autism-sign.png"
                                alt="Autism Support"
                                className="w-full h-full object-cover"
                            // style={{
                            //     clipPath: "ellipse(50% 50% at 50% 50%)",
                            // }}
                            />
                        </div>

                        <motion.h1
                            className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight mb-4"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Nurturing Every Child’s Bright Future
                        </motion.h1>

                        <motion.p
                            className="text-gray-700 text-base md:text-lg mb-6"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Therapies & education designed for children with autism, ADHD,
                            speech delays, and developmental needs.
                        </motion.p>

                        <motion.button
                            className="px-6 py-3 text-blue-900 font-semibold border border-blue-900 rounded-full bg-white hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>

                    {/* Right Image - Visible on Medium Screens and Above */}
                    <div className="w-64 h-96 overflow-hidden hidden md:block">
                        <img
                            src="./center-for-autism-nepal.jpg"
                            alt="Autism Support Nepal"
                            className="w-full h-full object-cover"
                            style={{
                                clipPath: "ellipse(50% 50% at 50% 50%)",
                            }}
                        />
                    </div>

                    {/* Single Image for Mobile (Below Text) */}
                    <div className="w-64 h-80 overflow-hidden mt-8 block md:hidden">
                        <img
                            src="./center-for-autism.jpg"
                            alt="Autism Support"
                            className="w-full h-full object-cover"
                            style={{
                                clipPath: "ellipse(50% 50% at 50% 50%)",
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
