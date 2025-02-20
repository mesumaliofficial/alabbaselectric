"use client";
import { FaIndustry } from "react-icons/fa6";
import Image from "next/image";
import Home_Service_1 from './images/Home_service_1.jpg';
import { useState } from "react";

const ServiceButton = ({ text, active }: { text: string, active: boolean }) => {
    return (
        <div className="relative group">
            <button className={`w-full py-4 md:py-6 px-4 md:px-5 text-lg md:text-2xl font-semibold transition-all duration-500 ${active ? "bg-blue-950 text-white" : "bg-white hover:bg-blue-950 hover:text-white"}`}>
                {text}
            </button>
            <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 md:border-l-8 border-r-6 md:border-r-8 border-t-6 md:border-t-8 border-t-blue-950 border-transparent ${active ? "" : "opacity-0 group-hover:opacity-100 transition-opacity duration-300"}`}
            ></div>
        </div>
    );
};

const Home_Service = () => {
    return (
        <>
            <div className="bg-gray-100 pt-96 lg:pt-32 md:pt-56 text-center">
                <div className="max-w-2xl text-center mx-auto">
                    <h1 className="text-sm md:text-xl lg:text-2xl font-bold text-gray-500 uppercase">Our Services</h1>
                    <p className="text-lg md:text-2xl lg:text-[45px] lg:leading-10 mt-3 font-bold text-[#34495e] capitalize">
                        We are a Full Service Electrical Contractor
                    </p>
                </div>

                {/* Services Section */}
                <div className="container mx-auto px-4 md:px-6 lg:px-16 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 shadow-xl">
                        <ServiceButton text="Domestic Services" active={true} />
                        <ServiceButton text="Industrial Services" active={false} />
                        <ServiceButton text="Commercial Services" active={false} />
                    </div>
                </div>
            </div>

            {/* Domestic Service - Container */}
            <div className="domestic bg-slate-100">
                <div className="container mx-auto px-4 md:px-6 lg:px-16 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Text Section */}
                        <div className="col-span-2 lg:pr-20">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-950">Domestic Services</h1>
                            <p className="text-gray-500 md:text-lg text-base font-[500] py-5">
                                Al Abbas offers comprehensive domestic electrical services to meet all of your home electrical needs. Whether you need routine maintenance, repairs, or upgrades, our skilled technicians are ready to provide fast, reliable, and affordable solutions to keep your home's electrical systems running smoothly.
                            </p>

                            {/* Service Features */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:py-5">
                                {/* Feature Icon with Hover Effect */}
                                <div className="flex items-start gap-4 group">
                                    {/* Icon */}
                                    <div className="relative flex p-4 bg-white text-blue-950 rounded-full text-2xl shadow-2xl transition-all duration-500 group-hover:bg-blue-950 group-hover:text-white">
                                        <FaIndustry className="relative z-10 transition-all duration-500 group-hover:scale-110" />
                                        {/* Center Fill Effect */}
                                        <span className="absolute inset-0 bg-blue-950 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
                                    </div>
                                    <div>
                                        <h2 className="text-lg md:text-xl font-bold text-blue-950">Panel Fixing Service</h2>
                                        <p className="text-gray-600 text-base font-[500]">
                                            Our team of experienced technicians uses the latest tools and techniques to diagnose and repair panel issues.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="relative flex p-4 bg-white text-blue-950 rounded-full text-2xl shadow-2xl transition-all duration-500 group-hover:bg-blue-950 group-hover:text-white">
                                        <FaIndustry className="relative z-10 transition-all duration-500 group-hover:scale-110" />
                                        <span className="absolute inset-0 bg-blue-950 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
                                    </div>
                                    <div>
                                        <h2 className="text-lg md:text-xl font-bold text-blue-950">Indoor Lighting</h2>
                                        <p className="text-gray-600 text-base font-[500]">
                                            We offer a wide range of indoor lighting solutions to meet all of your needs.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="relative flex p-4 bg-white text-blue-950 rounded-full text-2xl shadow-2xl transition-all duration-500 group-hover:bg-blue-950 group-hover:text-white">
                                        <FaIndustry className="relative z-10 transition-all duration-500 group-hover:scale-110" />
                                        <span className="absolute inset-0 bg-blue-950 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
                                    </div>
                                    <div>
                                        <h2 className="text-lg md:text-xl font-bold text-blue-950">Security System</h2>
                                        <p className="text-gray-600 text-base font-[500]">
                                            Our team of experts can design and install a custom security system.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="hidden md:flex relative">
                            {/* Border Wrapper */}
                            <div className="absolute -bottom-12 -left-12 flex justify-center items-center rounded-full p-4 border-2 border-dashed border-blue-950">
                                {/* Icon with Background */}
                                <div className="p-8 bg-blue-950 text-white flex justify-center items-center rounded-full shadow-2xl">
                                    <FaIndustry className="text-4xl" />
                                </div>
                            </div>

                            {/* Image */}
                            <Image src={Home_Service_1} alt="Domestic Service" className="w-full max-w-xs md:max-w-full lg:w-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home_Service;
