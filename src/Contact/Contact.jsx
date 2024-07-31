import {  motion } from "framer-motion"

const Contact = () => {
    return (
        <div className="border-2 border-neutral-900 pb-20">
            <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
            <div className="text-center tracking-tighter">
                <motion.p 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}}
                className="my-4">Chattogram Bangladesh</motion.p>
                <motion.p  
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                className="my-2">089473879437</motion.p>
            </div>
        </div>
    );
};

export default Contact;