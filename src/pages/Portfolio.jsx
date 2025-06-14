import BonBon from "../assets/bonbon.png";
import { useState } from "react";
const portfolioTabs = [
    { label: "All", value: "all" },
    { label: "Web Design", value: "web-design" },
    { label: "Applications", value: "app" },
    { label: "Web development", value: "web-dev", }
]

const portfolioItems = [
    { title: "Finance", type: "web-design", image: BonBon },
    { title: "DOP", type: "web-dev", image: BonBon },
    { title: "Paracosm", type: "web-dev", image: BonBon },
    { title: "BonBonSicula", type: "web-dev", image: BonBon },
    { title: "Vinfast", type: "app", image: BonBon },
    { title: "T1", type: "web-design", image: BonBon }
]
export default function Portfolio() {
    const [portfolioTab, setActivePortfolioTab] = useState("all");

    const filteredItems = portfolioTab === "all"
        ? portfolioItems
        : portfolioItems.filter(item => item.type === portfolioTab);

    return (
        <div>
            <h1 className="text-xl font-bold text-white">Portfolio</h1>
            <hr className="w-[10%] text-yellow-300 pb-4 border-t-4"></hr>
            {portfolioTabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => setActivePortfolioTab(tab.value)}
                    className={`px-4 pb-1 transition ${portfolioTab === tab.value
                        ? "text-yellow-400 border-b-2 border-yellow-400"
                        : "hover:text-yellow-400"
                        }`}
                >
                    {tab.label}
                </button>
            ))}
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
    )
}