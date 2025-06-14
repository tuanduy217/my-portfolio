// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="flex">
      <aside className="h-screen fixed bg-black text-white p-6 shadow-lg">
        <Sidebar />
      </aside>
      <main className="ml-72 flex-1 overflow-y-auto p-6 bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
