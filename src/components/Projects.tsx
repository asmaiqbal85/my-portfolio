import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import Card from './Card'
import Image from 'next/image';
import Link from 'next/link';

const data = [
  {
    id:1,
    title: "Todo List",
    desc: "A todo app helps you organize and manage your tasks ",
    img: "/todo.png",
    tags: ["typescript", "next.js", "Node", "tailwindcss"],
  },
  {
    id:2,
    title: "Weather app",
    desc: "A weather app provides current and forecasted weather conditions, helping you plan and stay prepared for any climate!",
    img: "/weather.png",
    tags: ["typescript", "next.js", "Node", "tailwindcss"],
  },
  {
    id:3,
    title: "Video call app",
    desc: "Zego is a video calling app that enables face-to-face conversations with friends, family, and colleagues remotely!",
    img: "/video.png",
    tags: ["typescript", "next.js", "Node", "tailwindcss"],
  },
  {
    id:4,
    title: "Time Table.jpg",
    desc: "A visual representation of a schedule, displaying organized time slots and activities for better planning and management!",
    img: "/Time.png",
    tags: ["typescript", "next.js", "Node", "tailwindcss"],
  },
  {
    id:5,
    title: "pizza App",
    desc: "A delicious and savory pizza, topped with melted cheese, flavorful sauce, and various toppings, perfect for satisfying your hunger and cravings!",
    img: "/piz.png",
    tags: ["typescript", "next.js", "Node", "tailwindcss"],
  },
  {
    id:6,
    title: "library management",
    desc: "A system that efficiently organizes, tracks, and manages books, resources, and member information, streamlining operations for a seamless library experience!",
    img: "/library.png",
    tags: ["typescript", "next.js", "Node", "tailwindcss"],
  },
  {
    id:7,
    title: "count down timer",
    desc: "A countdown timer is a digital tool that displays the remaining time until a specific event or deadline, helping you stay on track, build anticipation, and count down to the moment!",
    img: "/timer.png",
    tags: ["typescript", "next.js", "Node", "tailwindcss"]
  },
  {
    id:8,
    title: "calculator",
    desc: "A calculator built with Next.js and TypeScript, enabling fast, accurate, and reliable calculations, utilizing modern web development technologies for a seamless user experience.",
    img: "/calculator.png",
    tags: ["typescript", "next.js", "Node", "tailwindcss"]
  },
  {
    id:9,
    title: "AI Artist",
    desc: "AI Artist is a creative tool that leverages artificial intelligence to generate stunning, original artwork, allowing users to explore new ideas, automate tasks, and bring their imagination to life!",
    img: "/aipeacock.png",
    tags: ["typescript", "next.js", "Node", "tailwindcss"]
  },
  
]


function Projects() {
  return (
    <div id="projects" className="container mx-auto p-4">
      <h1 className="text-4xl flex items-center justify-center font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  // Just display one image -- no cycle, as project.img is a string
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="text-gray-600">{project.description}</p>
        {/* <Link href={project.link} passHref>
          <span className="text-blue-500 hover:underline cursor-pointer">View Project</span>
        </Link> */}
      </div>
      <div className="p-4">
        <Image
          src={project.img}
          alt={project.title}
          width={400}
          height={300}
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Projects;