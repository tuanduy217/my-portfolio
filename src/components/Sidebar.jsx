// src/components/Sidebar.jsx
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa";
import Avatar from "../assets/avatar.jpg"; // Thay bằng đường dẫn đến ảnh avatar của bạn
export default function Sidebar() {

    return (
        <div className="w-full min-h-full bg-gray-700 text-white p-6 shadow-lg rounded-2xl">
            {/* Avatar */}
            <div className="flex flex-col items-center">
                <img
                    src={Avatar}
                    alt="avatar"
                    className="w-28 h-28 rounded-2xl mb-4"
                />
                <h2 className="text-4xl font-bold">Tuấn Duy</h2>
                <span className="bg-gray-200 text-sm px-4 py-1 mt-2 rounded-md text-gray-600">
                    Web developer
                </span>
            </div>

            {/* Divider */}
            <hr className="my-6 border-gray-700" />

            {/* Contact Info */}
            <div className="space-y-5 text-sm">
                <InfoItem
                    icon={<FaEnvelope />}
                    label="Email"
                    value={
                        <span className="truncate block max-w-[150px]">
                            duy.nguyen21072003@gmail.com
                        </span>
                    }
                />
                <InfoItem icon={<FaPhoneAlt />} label="Phone" value="0819 306 878" />
                <InfoItem icon={<FaBirthdayCake />} label="Birthday" value="June 21, 2003" />
                <InfoItem icon={<FaMapMarkerAlt />} label="Location" value="Binh Thanh, HCM" />
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
                <p className="text-sm font-medium">{value}</p>
            </div>
        </div>
    );
}