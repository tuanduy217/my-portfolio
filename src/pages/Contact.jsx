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
export default function Contact() {
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
    )
}