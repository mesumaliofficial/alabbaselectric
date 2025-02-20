"use client";
import Image from "next/image";
import logo from "./images/logo.png";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
    const SocialIcons = [
        { icon: <FaFacebookF />, link: "#", title: "Facebook" },
        { icon: <FaTwitter />, link: "#", title: "Twitter" },
        { icon: <FaLinkedinIn />, link: "#", title: "Linkedin" },
        { icon: <FaInstagram />, link: "#", title: "Instagram" },
    ];

    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className="navbar bg-gray-50 py-2 ransition-all duration-300 hover:shadow-md sticky top-0 z-50 border-b border-gray-200">
                <div className="container mx-auto px-6 flex items-center justify-between lg:justify-normal">

                    {/* Logo */}
                    <div className="logo flex items-center">
                        <a href="#" className="text-xl flex items-center">
                            <Image src={logo} alt="Al-Abbas Logo" className="w-[90px] h-[90px]"/>
                            {/* <span className="ml-2 text-lg lg:text-3xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-900 to-gray-900 text-transparent bg-clip-text">
                                Al-Abbas
                            </span> */}
                        </a>
                    </div>

                    {/* Mobile Menu Icon */}
                    <button
                        className="lg:hidden text-blue-900 transform transition duration-200 hover:scale-105 hover:translate-y-[-2px]"
                        onClick={() => setIsOpen(true)}
                    >
                        <HiMenu size={28} />
                    </button>

                    {/* Sidebar Backdrop */}

                    {isOpen && (
                        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
                    )}

                    {/* Sidebar Menu */}
                    <ul className={`uppercase lg:flex lg:space-x-8 lg:text-[16px] font-[500] list-none lg:pl-20 lg:relative lg:flex-row flex-col items-center fixed top-0 left-0 w-64 h-max ${isOpen ? "min-h-[550px]" : "h-auto"} bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                        } lg:translate-x-0 lg:w-auto lg:h-auto lg:space-y-0 space-y-6 pt-20 lg:pt-0 fixed z-50 pl-8`}>




                        {/* Sidebar Logo */}
                        <div className="lg:hidden flex items-center justify-center py-4 mr-12">
                            <Image src={logo} alt="Al-Abbas Logo" width={100} height={100} />
                        </div>


                        <li><a href="#" className="text-blue-950 font-[700] border-b-2 border-blue-950 pb-1">Home</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-950 transition duration-200">About</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-950 transition duration-200">Services</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-950 transition duration-200">Company Profile</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-950 transition duration-200">Project</a></li>

                        {/* Close Button */}
                        <button className="lg:hidden absolute top-4 right-4 text-blue-900" onClick={() => setIsOpen(false)}>
                            <HiX size={28} />
                        </button>

                        {/* Sidebar Logo */}
                        <div className="lg:hidden absolute top-4 left-4 text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-900 to-gray-900 text-transparent bg-clip-text">
                            <span>Al-Abbas</span>
                        </div>

                        {/* Social Icons */}
                        <div className="lg:hidden absolute bottom-4 left-6 flex flex-col w-[80%] border-t border-gray-300 pt-4 justify-end">
                            <div className="relative left-5 flex space-x-2">
                                {SocialIcons.map(({ icon, link, title }, index) => (
                                    <a key={index} href={link} title={title} className="p-2 border rounded hover:bg-gray-200 text-blue-950 transition duration-300">
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </ul>

                    {/* Contact Button */}
                    <div className="hidden lg:text-lg lg:flex lg:ml-auto">
                        <button className="uppercase px-10 py-4 bg-blue-950 text-white hover:bg-gray-600 font-[500] text-[17px] flex items-center justify-end">
                            Contact us <FaPhoneAlt className="ms-2" size={18} />
                        </button>
                    </div>

                </div>
            </div>
            {/* WhatsApp Icon  */}
            <a
                href="https://wa.me/923404849424?text=Hello!%20I%20want%20to%20contact%20you."
                target="_blank"
                className="fixed bottom-8 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center space-x-2 z-[1000]"
            >
                <FaWhatsapp size={24} />
                <span className="hidden md:inline">Chat with us</span>
            </a>



        </>
    );
};

export default Navbar;
