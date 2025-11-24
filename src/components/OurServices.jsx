import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Mic, Users, Heart, Brain, Activity, Book } from "lucide-react";

const services = [
    { icon: <Mic size={28} />, title: "Speech Therapy", desc: "Speak confidently." },
    { icon: <Users size={28} />, title: "Psychotherapy", desc: "Healing Through Support" },
    { icon: <Heart size={28} />, title: "Occupational Therapy", desc: "Improve Daily Living" },
    { icon: <Brain size={28} />, title: "Behavioral Therapy", desc: "Positive Growth" },
    { icon: <Activity size={28} />, title: "Physical Therapy", desc: "Build Strength" },
    { icon: <Book size={28} />, title: "Educational Support", desc: "Learning Assistance" },
];

const ServicesSection = () => {
    return (
        <section className="py-16 px-6 lg:px-20 text-center">

            {/* Move pagination dots lower */}
            <style>
                {`
                .custom-swiper .swiper-pagination {
                    margin-top: 30px !important;
                    position: relative !important;
                }
                `}
            </style>

            <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
                --- Our Services
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
                Our Autism Services
            </h2>

            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                centeredSlides={false}
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                className="max-w-6xl mx-auto custom-swiper"
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="
                                flex flex-col 
                                p-6 
                                rounded-xl 
                                shadow-sm 
                                bg-blue-50 
                                hover:bg-blue-600 
                                hover:text-white 
                                transition-all 
                                duration-300 
                                cursor-pointer
                                h-auto 
                                min-h-[150px]
                            "
                        >
                            <div className="flex items-center gap-3">
                                {service.icon}
                                <h3 className="text-lg font-bold">{service.title}</h3>
                            </div>

                            <p className="mt-2 text-sm opacity-80 leading-snug">
                                {service.desc}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ServicesSection;
