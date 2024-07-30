import bannerPicture from '../assets/kevinRushProfile.png'

const Banner = () => {
    return (
        <>
            <div className="border-b border-neutral-900 pb-4 lg:mb-35">
                <div className="flex flex-wrap">
                    <div className="w-full lg:flex ">
                        <div className="flex flex-col lg:w-1/2 items-center lg:items-start">
                            <h1 className="text-4xl pb-16 font-thin tracking-tight lg:mt-16 lg:text-6xl">Sakir Mohammad</h1>
                            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full stack Developer</span>
                            <p className="my-2 mx-w-xl py-6 font-light tracking-tight ">I am a JavaScript full-stack developer with expertise in both front-end and back-end development. I work with technologies like React, Angular, or Vue.js on the front end and Node.js, Express, or similar on the back end. My skills include creating responsive user interfaces, building APIs, managing databases, and ensuring application security and performance. I thrive in collaborative settings, working closely with teams to deliver high-quality, scalable web applications.</p>
                        </div>
                        {/* profile section */}
                        <div className='lg:w-1/2'>
                            <img src={bannerPicture} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;