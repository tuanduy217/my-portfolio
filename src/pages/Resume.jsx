import { FaBookOpen } from "react-icons/fa";
const educationData = [
    {
        school: "University School Of The Arts",
        period: "2007 — 2008",
        description:
            "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
    {
        school: "New York Academy Of Art",
        period: "2006 — 2007",
        description:
            "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..",
    },
    {
        school: "High School Of Art And Design",
        period: "2002 — 2004",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
    },
];
export default function Resume() {
    return (
        <div>
            <h1 className="text-xl font-bold text-white">Resume</h1>
            <hr className="w-[10%] text-yellow-300 pb-4 border-t-4"></hr>
            <div className="bg-[#1c1c1c] text-white p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#2b2b2b] p-3 rounded-full">
                        <FaBookOpen className="text-yellow-400" />
                    </div>
                    <h2 className="text-2xl font-bold">Education</h2>
                </div>

                <div className="relative border-l border-gray-700 ml-5">
                    {educationData.map((item, index) => (
                        <div key={index} className="mb-10 ml-6 relative">
                            <span className="absolute -left-8 top-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-gray-800"></span>
                            <h3 className="text-lg font-semibold">{item.school}</h3>
                            <span className="text-yellow-400 text-sm font-medium">{item.period}</span>
                            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#2b2b2b] p-3 rounded-full">
                        <FaBookOpen className="text-yellow-400" />
                    </div>
                    <h2 className="text-2xl font-bold">Experience</h2>
                </div>

                <div className="relative border-l border-gray-700 ml-5">
                    {educationData.map((item, index) => (
                        <div key={index} className="mb-10 ml-6 relative">
                            <span className="absolute -left-8 top-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-gray-800"></span>
                            <h3 className="text-lg font-semibold">{item.school}</h3>
                            <span className="text-yellow-400 text-sm font-medium">{item.period}</span>
                            <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}