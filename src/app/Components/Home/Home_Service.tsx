"use client";
import { FaBolt } from "react-icons/fa6";
import { FaIndustry } from "react-icons/fa6";
import Image from "next/image";
import Home_Service_1 from './images/Home_service_1.jpg';
import Home_Service_2 from './images/Home_service_2.jpg';
import { useState } from "react";

// Service Button Component
interface ServiceButtonProps {
    text: string;
    active: boolean;
    onclick: () => void;
}

const ServiceButton = ({ text, active, onclick }: ServiceButtonProps) => {
    return (
        <div className="relative group">
            <button className={`w-full py-4 md:py-6 px-4 md:px-5 text-lg md:text-2xl font-semibold transition-all duration-500 shadow-2xl  ${active ? "bg-blue-950 text-white" : "bg-white hover:bg-blue-950 hover:text-white"}`} onClick={onclick}>
                {text}
            </button>
            <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 md:border-l-8 border-r-6 md:border-r-8 border-t-6 md:border-t-8 border-t-blue-950 border-transparent ${active ? "" : "opacity-0 group-hover:opacity-100 transition-opacity duration-300"}`}
            ></div>
        </div>
    );
};

// Service Item Component
interface ServiceItemProps {
    title: string;
    description: string;
}

const ServiceItem = ({ title, description }: ServiceItemProps) => (
    <div className="flex items-start gap-4 group">
        <div className="relative flex p-4 bg-white text-blue-950 rounded-full text-2xl lg:text-4xl shadow-lg transition-all duration-500 group-hover:bg-blue-950 group-hover:text-white">
            <FaIndustry className="relative z-10 transition-all duration-500 group-hover:scale-110" />
            <span className="absolute inset-0 bg-blue-950 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
        </div>
        <div>
            <h2 className="text-lg md:text-xl font-bold text-blue-950">{title}</h2>
            <p className="text-gray-600 text-base font-medium">{description}</p>
        </div>
    </div>
);

const Home_Service = () => {
    const [activeService, setActiveService] = useState<"Domestic" | "Industrial" | "Commercial">("Industrial");
    return (
        <>
            <div className=" pt-96 lg:pt-32 md:pt-56 text-center">
                <div className="max-w-2xl text-center mx-auto">
                    <h1 className="text-sm md:text-xl lg:text-2xl font-bold text-gray-500 uppercase">Our Services</h1>
                    <p className="text-lg md:text-2xl lg:text-[45px] lg:leading-10 mt-3 font-bold text-[#34495e] capitalize">
                        We are a Full Service Electrical Contractor
                    </p>
                </div>

                {/* Services Section */}
                <div className="container mx-auto px-4 md:px-6 lg:px-16 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <ServiceButton text="Domestic Services" active={activeService === "Domestic"} onclick={() => setActiveService("Domestic")} />
                        <ServiceButton text="Industrial Services" active={activeService === "Industrial"} onclick={() => setActiveService("Industrial")} />
                        <ServiceButton text="Commercial Services" active={activeService === "Commercial"} onclick={() => setActiveService("Commercial")} />
                    </div>
                </div>
            </div>

            {/* Domestic Service - Container */}
            {activeService === "Domestic" && (
                <div>
                    <div className="container mx-auto px-4 md:px-6 lg:px-16 py-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-950">Domestic Services</h1>
                                <p className="text-gray-500 md:text-lg text-base font-medium py-5">
                                    Al Abbas offers comprehensive domestic electrical services for all home electrical needs.
                                    Whether it's routine maintenance, repairs, or upgrades, our skilled technicians provide
                                    fast, reliable, and affordable solutions.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <ServiceItem title="Panel Fixing Service" description="Our technicians diagnose and repair panel issues efficiently." />
                                    <ServiceItem title="Indoor Lighting" description="We provide various indoor lighting solutions for every need." />
                                    <ServiceItem title="Security System" description="We offer advanced security system installations for your home." />
                                </div>
                            </div>
                            <div className="hidden lg:flex justify-center">
                                <Image src={Home_Service_1} alt="Domestic Service" className="w-full max-w-md lg:max-w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Industrial Service - Container */}
            {activeService === "Industrial" && (
                <div className="industrial">
                    <div className="container mx-auto px-4 md:px-6 lg:px-16 py-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                            {/* Left Section */}
                            <div>
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-950">
                                    Industrial Service
                                </h1>
                                <p className="text-gray-500 md:text-lg text-base font-medium py-5">
                                    Al Abbas provides comprehensive industrial electrical services to meet the unique needs of industrial clients. Our team of experienced technicians use the latest tools and techniques to ensure the safety, efficiency, and reliability of your industrial electrical systems.
                                </p>
                            </div>

                            {/* Services Section - Column 1 */}
                            <div className="grid gap-6">
                                <ServiceItem title="Underground Cabling" description="Our Team of experts can design and install underground cable systems that are safe, reliable, and efficient." />
                                <ServiceItem title="Indoor Lighting" description="We offer a wide range of indoor lighting solutions to meet all of your needs." />
                                <ServiceItem title="Power Outlets" description="Our skilled technicians use the techniques to ensure that your power outlets are safe, reliable, and efficient." />
                            </div>

                            {/* Services Section - Column 2 */}
                            <div className="grid gap-6">
                                <ServiceItem title="Overhead cabling" description="At Our Electric company, we offer top-quality overhead cabling services for both residential and commercial properties." />
                                <ServiceItem title="Security System" description="we offer advanced security systems for both residential and commercial properties." />
                                <ServiceItem title="Electrical Panels" description="Our team of experts can repair, replace, or upgrade your electrical panels." />
                            </div>

                        </div>
                    </div>
                </div>
            )}

            {/* Commercial Service - Container */}
            {activeService === "Commercial" && (
                <div className="commercial">
                    <div className="container mx-auto px-4 md:px-6 lg:px-16 py-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                            <div className="relative hidden lg:flex justify-center">
                                {/* Image */}
                                <Image src={Home_Service_2} alt="Commercial Service" className="w-full max-w-md lg:max-w-full" />

                                {/* Main Content Box */}
                                <div className="absolute w-3/4 h-16 bg-blue-950 z-10 bottom-0 left-0 flex items-center px-6 text-white font-semibold text-lg">
                                    <FaBolt className="mr-2 text-yellow-400 text-2xl" /> Best Electrical Services
                                </div>

                                {/* Polygon Shape Aligned at the End */}
                                <div className="absolute w-10 h-16 bg-blue-950 z-20 bottom-0 left-[75%]"
                                    style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 33%, 50% 75%, 0% 100%, 0% 100%, 0% 80%, 0% 20%)" }}>
                                </div>
                            </div>
                            <div className="lg:col-span-2">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-950">Commercial Services</h1>
                                <p className="text-gray-500 md:text-lg text-base font-medium py-5">
                                    Al Abbas offers comprehensive commercial electrical services to meet the needs of businesses and organizations of all sizes. Our team of experienced technicians can handle all types of electrical projects, from routine maintenance to complex installations, ensuring the safety, efficiency, and reliability of your commercial electrical systems.
                                </p>
                                {/* Services List */}
                                <div className="grid grid-cols-1 lg:mt-6 md:grid-cols-2 gap-6 text-blue-950 font-medium capitalize text-base">
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3">
                                            <FaBolt className="text-yellow-400 text-xl" /> Electric connect
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <FaBolt className="text-yellow-400 text-xl" /> Power outlets
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <FaBolt className="text-yellow-400 text-xl" /> Appliances overheat
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <FaBolt className="text-yellow-400 text-xl" /> Electrical panel installation, upgrading, and replacement
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <FaBolt className="text-yellow-400 text-xl" /> Outlet installation and repair
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <FaBolt className="text-yellow-400 text-xl" /> Ceiling fan installation and repair
                                        </li>
                                    </ul>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3">
                                            <FaBolt className="text-yellow-400 text-xl" /> All lighting requirements – fixture installation, replacement, and repair
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <FaBolt className="text-yellow-400 text-xl" /> Electrical set up and rewiring
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <FaBolt className="text-yellow-400 text-xl" /> Solar System
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <FaBolt className="text-yellow-400 text-xl" /> Steer lights & Solar lights
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <FaBolt className="text-yellow-400 text-xl" /> Lights distribution
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};



export default Home_Service;
