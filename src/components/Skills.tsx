import React from 'react';

const skills = [
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' }, // Updated Next.js icon URL
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
    { name: 'ShadCN', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' }, // Placeholder icon
];

function Skills() {
    return (
        <div id="skills" className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center p-4 border rounded-lg shadow-lg">
                        <img src={skill.icon} alt={`${skill.name} icon`} className="w-16 h-16 mb-2" />
                        <h3 className="text-xl font-semibold">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;