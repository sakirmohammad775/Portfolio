import { DiRedis } from "react-icons/di";
import { FaNode, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";



const Technologies = () => {
    return (
        <>
            <div className="border-b border-neutral-800 pb-24">
                <h1 className="my-20 text-center text-4xl">Technologies</h1>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaReact className="text-7xl text-cyan-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiNextdotjs className="text-7xl text-white" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaNode className="text-7xl text-green-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <IoLogoJavascript className="text-7xl  bg-yellow-400  text-gray-800" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaPython className="text-7xl text-yellow-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiRedis className="text-7xl text-red-600" />
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Technologies;