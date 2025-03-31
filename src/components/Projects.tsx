import React from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const data: Project[] = [
  {
    id: 1,
    title: "Todo List",
    desc: "A todo app helps you organize and manage your tasks efficiently.",
    img: "/todo.png",
    tags: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Weather App",
    desc: "A weather app providing current and forecasted weather conditions.",
    img: "/weather.png",
    tags: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Video Call App",
    desc: "A video calling app enabling face-to-face remote conversations.",
    img: "/video.png",
    tags: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Time Table",
    desc: "A visual schedule displaying organized time slots for planning.",
    img: "/Time.png",
    tags: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Pizza App",
    desc: "An app for ordering delicious pizza with various toppings.",
    img: "/piz.png",
    tags: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "Library Management",
    desc: "A system for organizing, tracking, and managing books and members.",
    img: "/library.png",
    tags: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
  },
  {
    id: 7,
    title: "Countdown Timer",
    desc: "A digital tool displaying remaining time until a specific event.",
    img: "/timer.png",
    tags: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
  },
  {
    id: 8,
    title: "Calculator",
    desc: "A fast and reliable calculator built with Next.js and TypeScript.",
    img: "/calculator.png",
    tags: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
  },
  {
    id: 9,
    title: "AI Artist",
    desc: "An AI-powered creative tool generating original artwork.",
    img: "/aipeacock.png",
    tags: ["TypeScript", "Next.js", "Node", "Tailwind CSS"],
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-500">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <Image src={project.img} alt={project.title} width={400} height={250} className="w-full object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-400 mb-2">{project.title}</h2>
        <p className="text-gray-300 mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-blue-600 text-white px-3 py-1 text-xs rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
