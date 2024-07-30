import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className="flex justify-between  py-8">
           <div className="text-2xl">Levis</div>
           <div className="flex gap-2 text-2xl">
           <FaInstagram />
           <FaFacebook/>
           <FaGithub/>
           </div>
        </div>
    );
};

export default Navbar;