import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className="flex justify-between  py-8">
           <div className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">SM</div>
           <div className="flex gap-2 text-2xl">
           <FaInstagram />
           <FaFacebook/>
           <FaGithub/>
           </div>
        </div>
    );
};

export default Navbar;