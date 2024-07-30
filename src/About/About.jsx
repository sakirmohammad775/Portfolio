import about from "../assets/about.jpg"

const About = () => {
    return (
        <>
            <div className="border-b border-neutral-900 pb-4 lg:mb-35">
                <p className="text-3xl text-center my-20">About <span className="text-gray-500">Me</span></p>
                <div className="flex flex-wrap">
                    <div className="w-full lg:flex ">
                        {/* profile section */}
                        <div className='lg:w-1/2'>
                            <img src={about} alt="" />
                        </div>
                    {/* para section */}
                        <div className="flex flex-col lg:w-1/2 items-center lg:items-start">
                            <p className="my-2 mx-w-xl py-24 font-light tracking-tight ">As a JavaScript full-stack developer, you specialize in building and maintaining complex web applications that span both the client and server sides. Your expertise covers a broad range of technologies and frameworks, including but not limited to React, Angular, or Vue.js for front-end development, and Node.js, Express, or other server-side technologies for back-end development. You have a deep understanding of JavaScript and its ecosystem, enabling you to seamlessly integrate front-end user interfaces with robust back-end systems and databases. Your skills include developing APIs, managing databases, implementing authentication and authorization, and optimizing performance and security. You thrive in collaborative environments, working closely with designers, other developers, and stakeholders to deliver high-quality, scalable, and user-friendly web applications..</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;