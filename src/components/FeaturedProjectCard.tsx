import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@/data/projects";

interface FeaturedProjectCardProps {
  project: Project;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  project,
}) => {
  return (
    <div className="relative bg-gray-900 text-white rounded-2xl shadow-2xl overflow-hidden mb-12 border border-blue-500/30">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="relative flex flex-col">
          <div className="relative w-full h-64 sm:h-80 lg:h-[400px]">
            <Image
              src={project.image}
              alt={`${project.title} — Home`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              FEATURED
            </div>
            {project.builtIn && (
              <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/40">
                Built in {project.builtIn}
              </div>
            )}
            <div className="absolute bottom-3 left-3 bg-gray-900/80 backdrop-blur text-white text-xs font-medium px-2.5 py-1 rounded-md border border-white/10">
              Home Page
            </div>
          </div>

          {project.secondaryImage && (
            <div className="relative w-full h-48 sm:h-56 border-t border-gray-800">
              <Image
                src={project.secondaryImage}
                alt={`${project.title} — AI Assistant`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-gray-900/80 backdrop-blur text-purple-300 text-xs font-medium px-2.5 py-1 rounded-md border border-purple-400/30">
                AI Assistant
              </div>
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <p className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-2">
            {project.type}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-4">
            {project.title}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            {project.description}
          </p>

          {project.features && project.features.length > 0 && (
            <ul className="space-y-2 mb-6">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-gray-200 text-sm"
                >
                  <span className="text-blue-400 mr-2 mt-0.5">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-600/80 text-white px-3 py-1 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold rounded-full hover:from-yellow-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <FaExternalLinkAlt size={14} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white font-semibold rounded-full border border-gray-700 hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
              >
                <FaGithub size={16} />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
