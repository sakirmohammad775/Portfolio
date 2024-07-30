import About from "../About/About";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">

            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                    <div className="max-w-screen-xl mx-auto">
                    <Navbar></Navbar>
                    <Banner></Banner>
                    <About></About>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;