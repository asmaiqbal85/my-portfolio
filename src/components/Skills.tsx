import React from 'react';
import Image from 'next/image';

const skills = [
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
    { name: 'ShadCN', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' },
];

function Skills() {
    return (
        <div id="skills" className="container mx-auto p-6 text-white bg-gray-900 rounded-2xl shadow-2xl max-w-4xl">
            <h2 className="text-4xl font-extrabold mb-6 text-blue-400 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center p-5 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-blue-500">
                        <Image 
                          src={skill.icon} 
                          alt={`${skill.name} icon`} 
                          width={64} 
                          height={64} 
                          className="mb-3 transition-opacity duration-300 hover:opacity-80" 
                        />
                        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
