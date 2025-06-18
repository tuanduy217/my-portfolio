import { useState, useRef, useEffect } from "react";
import {
    FaChevronDown, FaChevronUp, FaFacebook, FaInstagram, FaTiktok,
    FaEnvelope, FaPhoneAlt, FaBirthdayCake, FaMapMarkerAlt
} from "react-icons/fa";
import Avatar from "../assets/avatar.jpg";

export default function Sidebar() {
    const [showInfo, setShowInfo] = useState(false);
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("130px");
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isDesktop) {
            setMaxHeight("100%");
        } else {
            if (showInfo && contentRef.current) {
                setTimeout(() => {
                    setMaxHeight(`${contentRef.current.scrollHeight + 50}px`);
                }, 50);
            } else {
                setMaxHeight("130px");
            }
        }
    }, [showInfo, isDesktop]);

    return (
        <div
            className="relative bg-gray-700 text-white p-6 shadow-lg rounded-2xl overflow-hidden transition-all duration-500 ease-in-out lg:h-full"
            style={{ maxHeight: isDesktop ? undefined : maxHeight }}
        >
            {/* Toggle button */}
            {!isDesktop && (
                <button
                    className="bg-yellow-400 text-black px-4 py-2 absolute right-0 top-0 rounded-tr-2xl rounded-bl-2xl z-10"
                    onClick={() => setShowInfo(prev => !prev)}
                >
                    {showInfo ? <FaChevronUp /> : <FaChevronDown />}
                </button>
            )}

            {/* Nội dung */}
            <div ref={contentRef}>
                <div className="flex lg:flex-col items-start lg:items-center mt-4 lg:mt-0">
                    <img
                        src={Avatar}
                        alt="avatar"
                        className="w-20 h-20 mr-2 lg:w-28 lg:h-28 rounded-2xl mb-4"
                    />
                    <div>
                        <h2 className="text-4xl font-bold">Tuấn Duy</h2>
                        <span className="bg-gray-200 text-sm px-4 py-1 mt-2 rounded-md text-gray-600 inline-block">
                            Web developer
                        </span>
                    </div>
                </div>

                <div className="space-y-5 mt-5 text-sm">
                    <InfoItem icon={<FaEnvelope />} label="Email" value="duy.nguyen21072003@gmail.com" />
                    <InfoItem icon={<FaPhoneAlt />} label="Phone" value="0819 306 878" />
                    <InfoItem icon={<FaBirthdayCake />} label="Birthday" value="June 21, 2003" />
                    <InfoItem icon={<FaMapMarkerAlt />} label="Location" value="Binh Thanh, HCM" />
                    <div className="flex flex-row justify-center items-center space-x-4 pt-2">
                        <a href="https://www.facebook.com/tuan.duy.462141" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a href="https://www.instagram.com/duy.nguyen210703/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a href="https://www.tiktok.com/@tunduydichill" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoItem({ icon, label, value }) {
    return (
        <div className="flex items-start space-x-4">
            <div className="p-3 bg-[#2c2c2c] rounded-xl text-yellow-400">
                {icon}
            </div>
            <div>
                <p className="text-gray-400 uppercase text-xs">{label}</p>
                <p className="text-sm font-medium truncate overflow-hidden whitespace-nowrap lg:max-w-[150px]">
                    {value}
                </p>
            </div>
        </div>
    );
}
