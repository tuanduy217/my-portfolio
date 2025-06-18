import Avatar from "../assets/avatar.jpg";
import BKCoreTech from "../assets/logoBKCoretech.png";
import BonBon from "../assets/bonbon.png";
import DOP from "../assets/logoDop.png";
import DesignLogo from "../assets/icon-design.svg";
import DevLogo from "../assets/icon-dev.svg";
import PhotoLogo from "../assets/icon-photo.svg";
import AppLogo from "../assets/icon-app.svg";

export default function About() {
    return (
        <div>
            <h1 className="text-xl font-bold text-white">About Me</h1>
            <hr className="w-[10%] text-yellow-300 pb-4 border-t-4"></hr>
            <div>
                <p>
                    I'm a Web Designer & Developer with a passion for crafting modern, intuitive, and performance-driven digital experiences. I blend creative design thinking with solid coding skills to build responsive, user-friendly websites that work seamlessly across all devices.
                </p>
                <p>
                    Proficient in HTML, CSS, JavaScript, React, Tailwind CSS, and other modern tools, I not only design visually appealing interfaces but also bring them to life with clean, maintainable code.
                </p>
                <p>
                    Every project I take on is user-focused, brand-aligned, and optimized for both aesthetics and functionality — ensuring a smooth and impactful web presence.
                </p>
            </div>
            <h1>What i'm doing</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-gray-400 rounded-xl p-4 shadow flex items-center">
                    <img
                        src={DesignLogo}
                        alt="icon"
                        className="w-12 h-12 rounded-lg object-cover mr-4"
                    />
                    <div>
                        <h3 className="font-semibold text-base text-black">Web design</h3>
                        <p className="text-sm text-gray-600">
                            Creating modern, user-friendly, and visually stunning interfaces that elevate brand identity and user experience.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-400 rounded-xl p-4 shadow flex items-center">
                    <img
                        src={DevLogo}
                        alt="icon"
                        className="w-12 h-12 rounded-lg object-cover mr-4"
                    />
                    <div>
                        <h3 className="font-semibold text-base text-black">Web development</h3>
                        <p className="text-sm text-gray-600">
                            Building fast, responsive, and scalable websites using clean, efficient code and the latest technologies.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-400 rounded-xl p-4 shadow flex items-center">
                    <img
                        src={AppLogo}
                        alt="icon"
                        className="w-12 h-12 rounded-lg object-cover mr-4"
                    />
                    <div>
                        <h3 className="font-semibold text-base text-black">Video Editor</h3>
                        <p className="text-sm text-gray-600">
                            Crafting dynamic and engaging videos that communicate stories effectively through smooth transitions and polished visuals.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-400 rounded-xl p-4 shadow flex items-center">
                    <img
                        src={PhotoLogo}
                        alt="icon"
                        className="w-12 h-12 rounded-lg object-cover mr-4"
                    />
                    <div>
                        <h3 className="font-semibold text-base text-black">Photography</h3>
                        <p className="text-sm text-gray-600">
                            Capturing high-quality, creative, and meaningful moments that leave a lasting impression.
                        </p>
                    </div>
                </div>
            </div>
            <h1>Client</h1>
            <div className="flex space-x-8 overflow-x-auto py-2 max-w-full custom-scrollbar">
                <img src={BKCoreTech} alt="Logo 1" className="h-36 lg:h-48 w-auto object-contain" />
                <img src={BonBon} alt="Logo 2" className="h-36 lg:h-48 w-auto object-contain" />
                <img src={DOP} alt="Logo 3" className="h-36 lg:h-48 w-auto object-contain" />
                <img src={BKCoreTech} alt="Logo 4" className="h-36 lg:h-48 w-auto object-contain" />
                <img src={BonBon} alt="Logo 2" className="h-36 lg:h-48 w-auto object-contain" />
                <img src={DOP} alt="Logo 3" className="h-36 lg:h-48 w-auto object-contain" />
            </div>
        </div>
    )
}