import BonBon from "../assets/bonbon.png";
import { useState, useEffect } from "react";
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';

const portfolioTabs = [
    { label: "All", value: "all" },
    { label: "Web Design", value: "web-design" },
    { label: "Web development", value: "web-development" },
    { label: "Photograph", value: "photo" },
    { label: "Video Editor", value: "video" },
];

const portfolioItems = [
    { title: "Finance", type: "web-design", image: BonBon },
    { title: "DOP", type: "web-development", image: BonBon },
    { title: "Paracosm", type: "web-development", image: BonBon },
    { title: "BonBonSicula", type: "web-development", image: BonBon },
    { title: "Vinfast", type: "photo", image: BonBon },
    { title: "T1", type: "video", image: BonBon },
];

export default function Portfolio() {
    const [portfolioTab, setActivePortfolioTab] = useState("all");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize(); // Kiểm tra ngay khi load
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const filteredItems = portfolioTab === "all"
        ? portfolioItems
        : portfolioItems.filter(item => item.type === portfolioTab);

    return (
        <div>
            <h1 className="text-xl font-bold text-white">Portfolio</h1>
            <hr className="w-[10%] text-yellow-300 pb-4 border-t-4" />

            {/* Hiển thị <select> nếu là mobile */}
            {isMobile ? (
                <div className="w-full max-w-[90%] mx-auto mb-4">
                    <Listbox value={portfolioTab} onChange={setActivePortfolioTab}>
                        <div className="relative">
                            <Listbox.Button className="w-full bg-gray-800 border border-yellow-400 rounded-md py-2 px-4 text-left text-white text-sm flex justify-between items-center">
                                {
                                    portfolioTabs.find(tab => tab.value === portfolioTab)?.label || "Select"
                                }
                                <ChevronUpDownIcon className="h-5 w-5 text-yellow-400 ml-2" />
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-800 py-1 text-sm text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {portfolioTabs.map((tab) => (
                                    <Listbox.Option
                                        key={tab.value}
                                        value={tab.value}
                                        className={({ active }) =>
                                            `cursor-pointer select-none px-4 py-2 ${active ? 'bg-yellow-600 text-white' : 'text-gray-200'
                                            }`
                                        }
                                    >
                                        {({ selected }) => (
                                            <div className="flex justify-between items-center">
                                                <span className="truncate">{tab.label}</span>
                                                {selected && (
                                                    <CheckIcon className="h-4 w-4 text-yellow-300" />
                                                )}
                                            </div>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </div>
                    </Listbox>
                </div>
            ) : (
                <div className="flex space-x-4">
                    {portfolioTabs.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActivePortfolioTab(tab.value)}
                            className={`px-4 pb-1 transition ${portfolioTab === tab.value
                                ? 'text-yellow-400 border-b-2 border-yellow-400'
                                : 'hover:text-yellow-400'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            )}


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 rounded-lg">
                {filteredItems.map((item, index) => (
                    <div key={index} className="bg-[#2c2c2c] rounded-xl overflow-hidden shadow-md">
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="font-semibold text-lg">{item.title}</h2>
                            <p className="text-gray-400 capitalize">{item.type.replace("-", " ")}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
