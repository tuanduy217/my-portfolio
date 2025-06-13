import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
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
        <div className="bg-[#1c1c1c] text-white p-6 md:p-10 rounded-lg max-w-2xl mx-auto shadow-md">
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
    );
}
