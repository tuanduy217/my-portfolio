// TabBar.jsx
export default function TabBar({ tabs, activeTab, onTabChange }) {
    return (
        <div className="fixed bottom-0 left-0 w-full flex justify-around bg-gray-800 py-2 z-50 lg:hidden">
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => onTabChange(tab.value)}
                    className={`px-2 pb-1 font-semibold transition ${activeTab === tab.value
                        ? "text-yellow-400 border-b-2 border-yellow-400"
                        : "text-white hover:text-yellow-400"
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}