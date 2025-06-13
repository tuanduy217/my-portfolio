// src/pages/Home.jsx
import Avatar from "../assets/avatar.jpg";
import BKCoreTech from "../assets/logoBKCoretech.png";
import BonBon from "../assets/bonbon.png";
import DOP from "../assets/logoDop.png";
import "../index/about.css";
import { FaBookOpen } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { FaPaperPlane } from "react-icons/fa";
L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

const tabs = [
    { label: "About", value: "about" },
    { label: "Resume", value: "resume" },
    { label: "Portfolio", value: "portfolio" },
    { label: "Contact", value: "contact" },
];

const portfolioTabs = [
    { label: "All", value: "all" },
    { label: "Web Design", value: "web-design" },
    { label: "Applications", value: "app" },
    { label: "Web development", value: "web-dev", }
]

const educationData = [
    {
        school: "University School Of The Arts",
        period: "2007 — 2008",
        description:
            "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
    {
        school: "New York Academy Of Art",
        period: "2006 — 2007",
        description:
            "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..",
    },
    {
        school: "High School Of Art And Design",
        period: "2002 — 2004",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
    },
];

function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMap();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                setPosition([latitude, longitude]);
                map.setView([latitude, longitude], 13);
            },
            () => {
                alert("Không thể truy cập vị trí của bạn.");
            }
        );
    }, [map]);

    return position === null ? null : (
        <Marker position={position}>
            <Popup>Bạn đang ở đây 📍</Popup>
        </Marker>
    );
}

export default function Home() {
    const [activeTab, setActiveTab] = useState("about");
    const [portfolioTab, setActivePorfolioTab] = useState("all");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
    });
    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent!");
        console.log(formData);
    };
    return (
        <div className="bg-gray-700 p-10 h-full rounded-2xl">
            <div className="max-w-full space-y-6 text-sm text-white">
                <div className="absolute rounded-tr-2xl rounded-bl-2xl top-6 right-6 space-x-6 bg-gray-500 px-6 py-3 text-white font-semibold">
                    {tabs.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            className={`px-2 pb-1 transition ${activeTab === tab.value
                                ? "text-yellow-400 border-b-2 border-yellow-400"
                                : "hover:text-yellow-400"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                {activeTab === "about" && (
                    <div>
                        <h1 className="text-xl font-bold text-white">About Me</h1>
                        <hr className="w-[10%] text-yellow-300 pb-4 border-t-4"></hr>
                        <div>
                            <p>
                                I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                            </p>
                            <p>
                                My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
                            </p>
                        </div>
                        <h1>What i'm doing</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl p-4 shadow flex items-center">
                                <img
                                    src={Avatar}
                                    alt="icon"
                                    className="w-12 h-12 rounded-lg object-cover mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold text-base text-black">Web design</h3>
                                    <p className="text-sm text-gray-600">The most modern and high-quality design made at a professional level.</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow flex items-center">
                                <img
                                    src={Avatar}
                                    alt="icon"
                                    className="w-12 h-12 rounded-lg object-cover mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold text-base text-black">Web development</h3>
                                    <p className="text-sm text-gray-600">The most modern and high-quality design made at a professional level.</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow flex items-center">
                                <img
                                    src={Avatar}
                                    alt="icon"
                                    className="w-12 h-12 rounded-lg object-cover mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold text-base text-black">Mobile apps</h3>
                                    <p className="text-sm text-gray-600">The most modern and high-quality design made at a professional level.</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow flex items-center">
                                <img
                                    src={Avatar}
                                    alt="icon"
                                    className="w-12 h-12 rounded-lg object-cover mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold text-base text-black">Photography</h3>
                                    <p className="text-sm text-gray-600">The most modern and high-quality design made at a professional level.</p>
                                </div>
                            </div>
                        </div>
                        <h1>Client</h1>
                        <div className="flex space-x-8 overflow-x-auto py-2 max-w-full custom-scrollbar">
                            <img src={BKCoreTech} alt="Logo 1" className="h-48 w-auto object-contain" />
                            <img src={BonBon} alt="Logo 2" className="h-48 w-auto object-contain" />
                            <img src={DOP} alt="Logo 3" className="h-48 w-auto object-contain" />
                            <img src={BKCoreTech} alt="Logo 4" className="h-48 w-auto object-contain" />
                            <img src={BonBon} alt="Logo 2" className="h-48 w-auto object-contain" />
                            <img src={DOP} alt="Logo 3" className="h-48 w-auto object-contain" />
                        </div>
                    </div>

                )}

                {activeTab === "resume" && (
                    <div>
                        <h1 className="text-xl font-bold text-white">Resume</h1>
                        <hr className="w-[10%] text-yellow-300 pb-4 border-t-4"></hr>
                        <div className="bg-[#1c1c1c] text-white p-8 rounded-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-[#2b2b2b] p-3 rounded-full">
                                    <FaBookOpen className="text-yellow-400" />
                                </div>
                                <h2 className="text-2xl font-bold">Education</h2>
                            </div>

                            <div className="relative border-l border-gray-700 ml-5">
                                {educationData.map((item, index) => (
                                    <div key={index} className="mb-10 ml-6 relative">
                                        <span className="absolute -left-8 top-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-gray-800"></span>
                                        <h3 className="text-lg font-semibold">{item.school}</h3>
                                        <span className="text-yellow-400 text-sm font-medium">{item.period}</span>
                                        <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-[#2b2b2b] p-3 rounded-full">
                                    <FaBookOpen className="text-yellow-400" />
                                </div>
                                <h2 className="text-2xl font-bold">Experience</h2>
                            </div>

                            <div className="relative border-l border-gray-700 ml-5">
                                {educationData.map((item, index) => (
                                    <div key={index} className="mb-10 ml-6 relative">
                                        <span className="absolute -left-8 top-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-gray-800"></span>
                                        <h3 className="text-lg font-semibold">{item.school}</h3>
                                        <span className="text-yellow-400 text-sm font-medium">{item.period}</span>
                                        <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                )}

                {activeTab === "portfolio" && (
                    <div>
                        <h1 className="text-xl font-bold text-white">Portfolio</h1>
                        <hr className="w-[10%] text-yellow-300 pb-4 border-t-4"></hr>
                        {portfolioTabs.map((portfolioTab) => (
                            <button
                                key={portfolioTab.value}
                                onClick={() => setActivePorfolioTab(portfolioTab.value)}
                                className={`px-4 pb-1 transition ${activeTab === portfolioTab.value
                                    ? "text-yellow-400 border-b-2 border-yellow-400"
                                    : "hover:text-yellow-400"
                                    }`}
                            >
                                {portfolioTab.label}
                            </button>
                        ))}
                        <div className="bg-[#1c1c1c] text-white p-8 rounded-lg">
                        </div>
                    </div>
                )}

                {activeTab === "contact" && (
                    <div>
                        <h1 className="text-xl font-bold text-white">Contact</h1>
                        <hr className="w-[10%] text-yellow-300 pb-4 border-t-4"></hr>
                        <div className="h-[45vh] w-full pb-2">
                            <MapContainer
                                center={[10.817548751643962, 106.71282669945577]}
                                zoom={13}
                                scrollWheelZoom={true}
                                className="h-full w-full z-10"
                            >
                                <TileLayer
                                    attribution='© <a href="https://osm.org/copyright">OpenStreetMap</a>'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <LocationMarker />
                            </MapContainer>
                        </div>

                        <h1 className="text-xl md:text-2xl font-semibold mb-6">Contact Form</h1>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Full Name + Email */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="flex-1 bg-[#2a2a2a] border border-[#3a3a3a] text-sm text-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="flex-1 bg-[#2a2a2a] border border-[#3a3a3a] text-sm text-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>

                            {/* Message */}
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#2a2a2a] border border-[#3a3a3a] text-sm text-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            ></textarea>

                            {/* Submit Button */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-medium px-6 py-2 rounded-lg shadow-md transition"
                                >
                                    <FaPaperPlane className="text-base" />
                                    <span>Send Message</span>
                                </button>
                            </div>
                        </form>

                    </div>
                )}
            </div>
        </div>
    );
}
