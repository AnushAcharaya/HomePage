import React, { useEffect, useState } from 'react';
import { ChevronDown, Calendar, Gift, Menu, X } from "lucide-react";
import { motion } from 'framer-motion';

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const menuItems = [
        { name: "HOME" },
        { name: "SERVICES", dropdown: ["Our Services", "Services Details"] },
        { name: "DOCTORS", dropdown: ["Our Specialists", "Specialist Profile"] },
        { name: "PAGES", dropdown: ["Blog", "Blog Details", "Book Appointment", "FAQS", "Give Donations"] },
        { name: "ABOUT US" },
        { name: "CONTACT US" },
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 w-full z-50 px-4 md:px-6 lg:px-10 
                flex flex-wrap items-center justify-between transition-all duration-300
                h-16 md:h-20
                ${isScrolled ? "bg-white shadow-lg" : "bg-white/70 backdrop-blur"}  
                `}
            >
                {/* LOGO */}
                <div className="text-[20px] md:text-[22px] font-bold whitespace-nowrap shrink-0 mr-4">
                    <span className="text-blue-600">Autixum</span>
                </div>

                {/* Menu + Buttons Container */}
                <div className="flex flex-1 flex-wrap justify-center items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8">
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex flex-wrap justify-center items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8 flex-1">
                        {menuItems.map((items, index) => (
                            <li
                                key={index}
                                className="relative group cursor-pointer whitespace-nowrap"
                                onMouseEnter={() => items.dropdown && setDropdownOpen(index)}
                                onMouseLeave={() => setDropdownOpen(null)}
                            >
                                <div className="flex items-center gap-1 text-[13px] md:text-[14px] lg:text-[15px] hover:text-blue-600 transition-colors">
                                    {items.name}
                                    {items.dropdown && <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />}
                                </div>

                                {items.dropdown && dropdownOpen === index && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white shadow-xl rounded-md w-44 md:w-52 py-2 z-50"
                                    >
                                        {items.dropdown.map((sub, idx) => {
                                            let subPath = "";
                                            if (sub === "Book Appointment") subPath = "/appointment";
                                            if (sub === "Give Donations") subPath = "/donate";

                                            return (
                                                <li
                                                    key={idx}
                                                    className="px-3 md:px-4 py-2 text-sm hover:bg-blue-50 whitespace-nowrap cursor-pointer"
                                                >
                                                    {subPath ? <a href={subPath}>{sub}</a> : sub}
                                                </li>
                                            );
                                        })}
                                    </motion.ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0 ml-auto flex-wrap">
                        <a href="/appointment">
                            <button className="px-2 md:px-3 lg:px-4 py-1 md:py-1.5 rounded-full border border-gray-300 text-gray-700 text-[12px] md:text-[13px] lg:text-[14px] hover:bg-gray-50 hover:border-gray-400 transition">
                                APPOINTMENT
                            </button>
                        </a>
                        <a href="/donate">
                            <button className="px-2 md:px-3 lg:px-4 py-1 md:py-1.5 rounded-full bg-blue-600 text-white text-[12px] md:text-[13px] lg:text-[14px] hover:bg-blue-700 transition">
                                DONATE NOW
                            </button>
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden gap-3 items-center ml-auto">
                    <a href="/appointment">
                        <Calendar className="w-6 h-6 text-gray-700" />
                    </a>
                    <a href="/donate">
                        <Gift className="w-6 h-6 text-blue-600" />
                    </a>
                    <Menu
                        className="w-7 h-7 cursor-pointer text-gray-700"
                        onClick={() => setIsMenuOpen(true)}
                    />
                </div>
            </motion.nav>

            {/* Mobile Sidebar */}
            {isMenuOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 overflow-y-auto"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6 pb-4 border-b">
                                <div className="text-xl font-bold">
                                    <span className="text-blue-600">Autixum</span>
                                </div>
                                <X
                                    className="w-7 h-7 cursor-pointer hover:text-red-500 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                />
                            </div>

                            <ul className="flex flex-col gap-1 mb-6">
                                {menuItems.map((items, index) => (
                                    <li key={index} className="border-b border-gray-100">
                                        <div
                                            className="flex justify-between items-center py-3 cursor-pointer hover:text-blue-600 transition-colors"
                                            onClick={() => items.dropdown && setMobileDropdownOpen(
                                                mobileDropdownOpen === index ? null : index
                                            )}
                                        >
                                            <span className="text-[14px]">{items.name}</span>
                                            {items.dropdown && (
                                                <ChevronDown
                                                    className={`w-5 h-5 transition-transform duration-200 ${mobileDropdownOpen === index ? "rotate-180" : ""}`}
                                                />
                                            )}
                                        </div>

                                        {items.dropdown && mobileDropdownOpen === index && (
                                            <motion.ul
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                className="pl-4 pb-2 text-gray-600"
                                            >
                                                {items.dropdown.map((sub, idx) => {
                                                    let subPath = "";
                                                    if (sub === "Book Appointment") subPath = "/appointment";
                                                    if (sub === "Give Donations") subPath = "/donate";

                                                    return (
                                                        <li key={idx} className="py-2 text-sm hover:text-blue-600 transition-colors">
                                                            {subPath ?
                                                                <a href={subPath} onClick={() => setIsMenuOpen(false)}>
                                                                    {sub}
                                                                </a> : sub
                                                            }
                                                        </li>
                                                    );
                                                })}
                                            </motion.ul>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile Action Buttons */}
                            <div className="flex flex-col gap-3 pt-4 border-t">
                                <a href="/appointment">
                                    <button className="w-full py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all" onClick={() => setIsMenuOpen(false)}>
                                        BOOK APPOINTMENT
                                    </button>
                                </a>
                                <a href="/donate">
                                    <button className="w-full py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md" onClick={() => setIsMenuOpen(false)}>
                                        DONATE NOW
                                    </button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </>
    );
};

export default Nav;
