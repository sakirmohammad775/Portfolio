import { useEffect, useState } from 'react';
import { Card } from "flowbite-react";
import {  motion } from "framer-motion"

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <div className='max-w-screen-xl mx-auto'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Projects</motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                {projects.map((project) => (
                    <Card key={project.id}  >
                        <div className='w-full mt-10 mb-8 flex flex-wrap lg:justify-center'>
                            {/* left side */}
                            <motion.div 
                            whileInView={{opacity:1,x:0}}
                            initial={{opacity:0,x:-100}}
                            transition={{duration:1}}
                            className='lg:w-1/4'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    width={150}
                                    height={150}
                                    className='mb-6 rounded' />
                            </motion.div>
                            {/* right side */}
                            <motion.div 
                            whileInView={{opacity:1,x:0}}
                            initial={{opacity:0,x:100}}
                            transition={{duration:1}}
                            className='lg:w-3/4'>
                                <h5 className="text-2xl font-thin tracking-tight text-white">
                                    {project.title}
                                </h5>
                                <p className="font-normal text-gray-500">
                                    {project.description}
                                </p>
                                <div className="mt-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;
