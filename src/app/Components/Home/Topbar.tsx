import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

interface TopbarProps {
    bgColor?: string;       // Background color
    textColor?: string;     // Text color
    borderColor?: string;   // Border color
    hoverColor?: string;    // Hover effect color
}

const Topbar = ({ bgColor = "bg-blue-950", textColor = "text-white", borderColor = "border-white/50", hoverColor = "hover:bg-white/20" }: TopbarProps) => {
    
    const socialLinks = [
        { icon: <FaFacebookF />, link: "#", title: "Facebook" },
        { icon: <FaTwitter />, link: "#", title: "Twitter" },
        { icon: <FaLinkedinIn />, link: "#", title: "LinkedIn" },
        { icon: <FaInstagram />, link: "#", title: "Instagram", className: "border-r" }
    ];

    return (
        <div className={`w-full ${bgColor} ${textColor} shadow-md`}> 
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:px-5 px-3">
                
                {/* Left Side - Contact Info */}
                <div className={`flex flex-col sm:flex-row space-y-0 sm:space-y-0 sm:space-x-4 ${textColor}`}>
                    
                    {/* Phone */}
                    <div className={`flex items-center lg:border-r ${borderColor} space-x-2 py-2 px-1 lg:px-3`}>
                        <FaPhoneAlt className="text-lg md:text-sm" />
                        <span className="text-xs font-medium">+92 340-4849424</span>
                    </div>

                    {/* Address */}
                    <div className={`flex items-center lg:border-r ${borderColor} space-x-2 py-2 px-1 lg:px-3`}>
                        <HiMiniBuildingOffice2 className="text-lg md:text-sm" />
                        <span className="text-xs font-medium">Office No.25, Plot No.S-22/B & S-22/D, Malir Cantt Bazar, Karachi</span>
                    </div>

                    {/* Email */}
                    <div className={`hidden lg:flex items-center lg:border-r ${borderColor} space-x-2 py-2 px-3`}>
                        <MdEmail className="text-lg md:text-sm"/>
                        <span className="text-xs font-medium">rameez@alabbaselectric.com</span>
                    </div>
                </div>

                {/* Right Side - Social Icons */}
                <div className="hidden lg:flex justify-center md:justify-end space-x-1 mt-2 lg:mt-0">
                    {socialLinks.map(({ icon, link, title, className }, index) => (
                        <a key={index} href={link} 
                            className={`p-2 border-l ${borderColor} ${hoverColor} transition duration-300 flex items-center justify-center ${className || ""}`} 
                            title={title}>
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Topbar;
