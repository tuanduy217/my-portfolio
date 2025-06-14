// src/pages/Home.jsx
import "../index/about.css";
import { useState } from "react";
import Resume from "./Resume";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import About from "./About";

const tabs = [
    { label: "About", value: "about" },
    { label: "Resume", value: "resume" },
    { label: "Portfolio", value: "portfolio" },
    { label: "Contact", value: "contact" },
];

export default function Home() {
    const [activeTab, setActiveTab] = useState("about");
    const [fade, setFade] = useState(true);

    const handleTabChange = (tab) => {
        setFade(false);
        setTimeout(() => {
            setActiveTab(tab);
            setFade(true);
        }, 150); // thời gian fade out
    };

    return (
        <div className="bg-gray-700 p-10 min-h-screen rounded-2xl">
            <div className="max-w-full space-y-6 text-sm text-white">
                <div className="absolute rounded-tr-2xl rounded-bl-2xl top-10 right-10 space-x-6 bg-gray-500 px-6 py-3 text-white font-semibold">
                    {tabs.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => handleTabChange(tab.value)}
                            className={`px-2 pb-1 transition ${activeTab === tab.value
                                ? "text-yellow-400 border-b-2 border-yellow-400"
                                : "hover:text-yellow-400"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
                    {activeTab === "about" && <About />}
                    {activeTab === "resume" && <Resume />}
                    {activeTab === "portfolio" && <Portfolio />}
                    {activeTab === "contact" && <Contact />}
                </div>
            </div>
        </div>
    );
}