import bannerPicture from '../assets/kevinRushProfile.png'
import { motion } from "framer-motion"
const container =(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay}
    }
})
const Banner = () => {
    return (
        <>
            <div className="border-b border-neutral-900 pb-4 lg:mb-35">
                <div className="flex flex-wrap">
                    <div className="w-full lg:flex ">
                        <div className="flex flex-col lg:w-1/2 items-center lg:items-start">
                            <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="text-4xl pb-10 font-thin tracking-tight lg:mt-20 lg:text-6xl">Sakir Mohammad</motion.h1>
                            <motion.span 
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full stack Developer</motion.span>
                            <motion.p 
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 mx-w-xl pr-16 py-6 font-light tracking-tight ">I am a JavaScript full-stack developer with expertise in both front-end and back-end development. I work with technologies like React, Angular, or Vue.js on the front end and Node.js, Express, or similar on the back end. My skills include creating responsive user interfaces, building APIs, managing databases, and ensuring application security and performance. I thrive in collaborative settings, working closely with teams to deliver high-quality, scalable web applications.</motion.p>
                        </div>
                        {/* profile section */}
                        <div className='lg:w-1/2'>
                            <motion.img 
                            initial={{x:100,opacity:0}}
                            animate={{x:0,opacity:1}}
                            transition={{duration:1,delay:1.2}}
                            src={bannerPicture} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;