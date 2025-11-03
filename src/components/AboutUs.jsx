import React from "react";
import { CheckCircle, ArrowRight, ClipboardList, Users } from "lucide-react";

const AboutUs = () => {
    return (
        <section className="relative bg-white py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-start gap-12">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                    <p className="text-blue-600 font-semibold uppercase tracking-wide mb-10">
                        ---------------  About Us
                    </p>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
                        Empowering Autistic Families with Compassionate Care
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        For over 20 years, we've been dedicated to supporting autistic children
                        and their families with personalized, evidence-based care.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                        {/* Individualized Therapy Plans */}
                        <div>
                            <div className="flex items-center gap-3 mb-10">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <ClipboardList className="text-blue-600" size={24} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Individualized Therapy Plans
                                </h3>
                            </div>
                            <ul className="mt-3 text-gray-600 space-y-4 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-blue-500" /> Individualized Therapy Plans
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-blue-500" /> Family-Centered Support
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-blue-500" /> Holistic Development Focus
                                </li>
                            </ul>
                        </div>

                        {/* Holistic Development Focus */}
                        <div>
                            <div className="flex items-center gap-3 mb-10">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <Users className="text-blue-600" size={24} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Holistic Development Focus
                                </h3>
                            </div>
                            <ul className="mt-3 text-gray-600 space-y-4 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-blue-500" /> Expert-Led Behavioral Support
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-blue-500" /> Safe & Nurturing Environment
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact Button at Bottom */}
                <div className="flex items-center gap-4 mt-12">
                    <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition">
                        Contact Us <ArrowRight size={18} />
                    </button>
                    <p className="text-gray-700">Monday to Friday: 9:00 AM to 5:00 PM</p>
                </div>
            </div>

            {/* Right Image & Card */}
            <div className="flex-1 relative h-160 w-full">
                <img
                    src="./choose-us-banner.png"
                    alt="Therapist with child"
                    className="rounded-2xl shadow-lg w-full h-full object-cover"
                />

                {/* Experience Badge */}
                <div className="absolute top-6 -left-12 bg-yellow-400 text-gray-900 font-bold px-4 py-2 w-36 h-20 flex items-center justify-center rounded-lg shadow-md transform -rotate-90">
                    35+ Years of Experience
                </div>

                {/* Therapist Info Card */}
                <div className="absolute bottom-4 -left-8 bg-blue-600 text-white p-4 rounded-xl shadow-lg w-56 h-40 flex flex-col justify-center">
                    <Users className="text-white mb-2" size={35} />
                    <h4 className="text-lg font-bold">Dr. Emily Carter</h4>
                    <p className="text-sm">PhD, BCBA</p>
                    <p className="text-sm">Certified ABA Therapist</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;



