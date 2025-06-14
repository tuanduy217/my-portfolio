import Avatar from "../assets/avatar.jpg";
import BKCoreTech from "../assets/logoBKCoretech.png";
import BonBon from "../assets/bonbon.png";
import DOP from "../assets/logoDop.png";
export default function About() {
    return (
        <div>
            <h1 className="text-xl font-bold text-white">About Me</h1>
            <hr className="w-[10%] text-yellow-300 pb-4 border-t-4"></hr>
            <div>
                <p>
                    I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                </p>
                <p>
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
                </p>
            </div>
            <h1>What i'm doing</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow flex items-center">
                    <img
                        src={Avatar}
                        alt="icon"
                        className="w-12 h-12 rounded-lg object-cover mr-4"
                    />
                    <div>
                        <h3 className="font-semibold text-base text-black">Web design</h3>
                        <p className="text-sm text-gray-600">The most modern and high-quality design made at a professional level.</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow flex items-center">
                    <img
                        src={Avatar}
                        alt="icon"
                        className="w-12 h-12 rounded-lg object-cover mr-4"
                    />
                    <div>
                        <h3 className="font-semibold text-base text-black">Web development</h3>
                        <p className="text-sm text-gray-600">The most modern and high-quality design made at a professional level.</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow flex items-center">
                    <img
                        src={Avatar}
                        alt="icon"
                        className="w-12 h-12 rounded-lg object-cover mr-4"
                    />
                    <div>
                        <h3 className="font-semibold text-base text-black">Mobile apps</h3>
                        <p className="text-sm text-gray-600">The most modern and high-quality design made at a professional level.</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow flex items-center">
                    <img
                        src={Avatar}
                        alt="icon"
                        className="w-12 h-12 rounded-lg object-cover mr-4"
                    />
                    <div>
                        <h3 className="font-semibold text-base text-black">Photography</h3>
                        <p className="text-sm text-gray-600">The most modern and high-quality design made at a professional level.</p>
                    </div>
                </div>
            </div>
            <h1>Client</h1>
            <div className="flex space-x-8 overflow-x-auto py-2 max-w-full custom-scrollbar">
                <img src={BKCoreTech} alt="Logo 1" className="h-48 w-auto object-contain" />
                <img src={BonBon} alt="Logo 2" className="h-48 w-auto object-contain" />
                <img src={DOP} alt="Logo 3" className="h-48 w-auto object-contain" />
                <img src={BKCoreTech} alt="Logo 4" className="h-48 w-auto object-contain" />
                <img src={BonBon} alt="Logo 2" className="h-48 w-auto object-contain" />
                <img src={DOP} alt="Logo 3" className="h-48 w-auto object-contain" />
            </div>
        </div>
    )
}