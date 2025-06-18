// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import TabBar from "./components/TabBar";
const tabs = [
  { label: "About", value: "about" },
  { label: "Resume", value: "resume" },
  { label: "Portfolio", value: "portfolio" },
  { label: "Contact", value: "contact" },
];


export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [fade, setFade] = useState(true);

  const handleTabChange = (tab) => {
    setFade(false);
    setTimeout(() => {
      setActiveTab(tab);
      setFade(true);
    }, 150);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-72 lg:h-screen lg:fixed bg-black text-white p-2 lg:p-6 shadow-lg z-10">
        <Sidebar />
      </aside>
      {/* Main content */}
      <main className="flex-1 mt-0 mb-12 lg:mb-0 lg:ml-68 overflow-y-auto p-2 lg:p-6 bg-black">
        <Routes>
          <Route path="/" element={
            <Home
              activeTab={activeTab}
              fade={fade}
              onTabChange={handleTabChange}
              tabs={tabs}
            />
          } />
        </Routes>
      </main>
      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
