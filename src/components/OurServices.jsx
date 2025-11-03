import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Mic, Users, Heart, Brain, Activity, Book } from "lucide-react";

const services = [
    {
        icon: <Mic size={32} />,
        title: "Speech Therapy",
        desc: "Speak confidently.",
    },
    {
        icon: <Users size={32} />,
        title: "Psychotherapy",
        desc: "Healing Through Support",
    },
    {
        icon: <Heart size={32} />,
        title: "Occupational Therapy",
        desc: "Improve Daily Living",
    },
    {
        icon: <Brain size={32} />,
        title: "Behavioral Therapy",
        desc: "Positive Growth",
    },
    {
        icon: <Activity size={32} />,
        title: "Physical Therapy",
        desc: "Build Strength",
    },
    {
        icon: <Book size={32} />,
        title: "Educational Support",
        desc: "Learning Assistance",
    },
];

const ServicesSection = () => {
    return (
        <section className="py-16 px-6 lg:px-20 text-center">
            {/* Section Header */}
            <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
                --- Our Services
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
                Our Autism Services
            </h2>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="max-w-6xl mx-auto"
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-start text-left p-6 rounded-xl h-40 justify-center shadow-sm transition-all duration-300 hover:shadow-lg bg-blue-50 hover:bg-blue-600 hover:text-white cursor-pointer">
                            <div className="flex items-center gap-3">
                                <span className="text-blue-600 group-hover:text-white">
                                    {service.icon}
                                </span>
                                <h3 className="text-lg font-bold">{service.title}</h3>
                            </div>
                            <p className="mt-2 text-sm opacity-80">{service.desc}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ServicesSection;
