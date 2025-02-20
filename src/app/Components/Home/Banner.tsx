"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import banner1 from "@/app/Components/Home/images/banner-1.jpg";
import banner2 from "@/app/Components/Home/images/banner-2.jpg";
import banner3 from "@/app/Components/Home/images/banner-3.jpg";

const slides = [
    { title: "Welcome to Al-Abbas", subtitle: "We provide the best services.", image: banner1, link: "#services" },
    { title: "Innovative Solutions", subtitle: "Your success is our priority.", image: banner2, link: "#about" },
    { title: "Contact Us Today", subtitle: "Get in touch now.", image: banner3, link: "#contact" },
];

const Banner = () => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [currentSlide, setCurrentSlide] = useState<number | null>(null);
    const [date, setDate] = useState("");

    useEffect(() => {
        setIsHydrated(true);
        setCurrentSlide(0);
        setDate(new Date().toISOString().split("T")[0]);
    }, []);

    useEffect(() => {
        if (currentSlide === null) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev !== null ? (prev + 1) % slides.length : 0));
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    if (!isHydrated || currentSlide === null) return null; // Avoid hydration mismatch

    return (
        <>
            <div className="relative w-full h-[75vh] md:h-[555px] overflow-hidden z-10">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                        role="tabpanel"
                        aria-hidden={index !== currentSlide}
                    >
                        <div className="relative w-full h-full overflow-hidden">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                priority={index === 0}
                                fill
                                className={`object-cover transition-transform duration-1000 ease-in-out ${
                                    index === currentSlide ? "scale-110 translate-y-5" : "scale-100"
                                }`}
                            />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
                            <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
                            <p className="mt-2 text-lg">{slide.subtitle}</p>
                            <a
                                href={slide.link}
                                className="absolute bottom-16 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-[#ffc803] hover:bg-[#ebc53c] text-blue-950 font-bold"
                                aria-label="Request Service Today"
                            >
                                REQUEST SERVICE TODAY
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quote Section */}
            <div className="relative">
                <div className="quote-section w-5/6 absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-white mx-auto shadow-2xl z-20 py-6">
                    <div className="container mx-auto px-6 lg:px-12">
                        <form className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-2">
                            <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300" required />
                            <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300" required />
                            <input type="tel" placeholder="Your Phone" className="w-full p-4 border border-gray-300" required />
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-4 border border-gray-300" required />
                            <button type="submit" className="w-full p-4 bg-blue-950 text-white font-bold uppercase hover:bg-gray-600">
                                Get Service
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
