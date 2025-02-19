"use client";
import Image from "next/image";
import { FaBolt } from "react-icons/fa";

// Importing local images using Next.js
import service_1 from "./images/service_1.jpg";
import service_2 from "./images/service_2.jpg";
import service_3 from "./images/service_3.jpg";

const Service = () => {
    const services = [
        {
            title: "House Wiring Repair",
            description: "We specialize in House Wiring Repair and we are giving you best services with good quality in low cost.",
            image: service_1,
        },
        {
            title: "Solar Panel Fixing",
            description: "Get top-quality solar panel fixing services at your doorstep with just one call. We provide the best solar panel fixing services in the area.",
            image: service_3,
        },
        {
            title: "Street Light Fixing",
            description: "We offer professional street light fixing services ensuring safe environments for all. Our team of experts is always ready to help you with your street light fixing needs.",
            image: service_2,
        },
    ];

    return (
        <div className="service relative bg-gray-100 py-20">
            <div className="container mx-auto px-6 lg:px-16 py-10">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div className="max-w-lg border-l-4 border-blue-950 pl-5">
                        <h1 className="text-xl lg:text-2xl font-bold text-gray-500 uppercase">Our Services</h1>
                        <p className="text-2xl lg:text-[45px] lg:leading-10 mt-3 font-bold text-black">
                            We are a Full Service Electrical Contractor
                        </p>
                    </div>
                    <button 
                        className="mt-7 lg:mt-0 px-6 py-3 lg:px-10 lg:py-4 bg-blue-950 text-white font-semibold shadow-md hover:bg-blue-800 transition"
                    >
                        More Services
                    </button>
                </div>
            </div>

            {/* Services Section */}
            <div className="container mx-auto px-6 lg:px-16 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="service-item group bg-gray-50 pb-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden"
                        >
                            <div className="w-full h-72 relative">
                                <Image
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover absolute z-0"
                                />
                                <div className="shape-2 absolute left-2 w-full h-16 bg-gray-50 z-20 bottom-0" 
                                    style={{clipPath: "polygon(75% 75%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 27% 50%)"}}></div>
                                <div className="shape-1 absolute w-full h-16 bg-blue-950 z-10 bottom-0" 
                                    style={{clipPath: "polygon(67% 57%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 75%, 26% 52%)"}}></div>
                                
                                <div className="absolute bg-blue-950 p-4 rounded-full z-50 right-3 top-60 md:top-52 transition-all duration-300 group-hover:rotate-12">
                                    <FaBolt className="text-4xl text-white" />
                                </div>
                            </div>
                            <h1 className="text-xl font-bold text-black mt-5 px-4 lg:text-2xl">{service.title}</h1>
                            <p className="text-gray-500 text-[14.5px] font-[500] mt-4 px-4">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;
