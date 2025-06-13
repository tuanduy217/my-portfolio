// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/About";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <div className="w-[20%] bg-black pl-12 py-6">
        <Sidebar />
      </div>

      {/* Nội dung chính */}
      <div className="flex-1 bg-black p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Mở các trang nếu đã tạo */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </div>

  );
}
