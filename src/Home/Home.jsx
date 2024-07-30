import About from "../About/About";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Technologies from "../Technologies/Technologies";

const Home = () => {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
            <div className="w-full h-full fixed top-0 -z-10">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>
            
                    <div className="max-w-screen-xl mx-auto px-8">
                    <Navbar></Navbar>
                    <Banner></Banner>
                    <About></About>
                    <Technologies></Technologies>
                    <Projects></Projects>
                    </div>
                
            </div>

        </>
    );
};

export default Home;