import React from 'react';

const About = () => {
    return (
        <section id="about" className="container mx-auto p-8 mt-10 text-white bg-gray-900 shadow-2xl rounded-2xl max-w-3xl transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-5xl font-extrabold mb-6 text-blue-400">About Me</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Hello! I&apos;m a passionate developer with experience in building web applications
                using modern technologies. I enjoy creating intuitive and dynamic user experiences,
                and I thrive on solving complex problems.
            </p>
            <h3 className="text-3xl font-semibold mb-4 text-blue-300">Skills</h3>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-300">
                <li className="hover:text-white transition-colors duration-200">JavaScript (ES6+)</li>
                <li className="hover:text-white transition-colors duration-200">React</li>
                <li className="hover:text-white transition-colors duration-200">Node.js</li>
                <li className="hover:text-white transition-colors duration-200">Tailwind CSS</li>
                <li className="hover:text-white transition-colors duration-200">HTML & CSS</li>
                <li className="hover:text-white transition-colors duration-200">Git & GitHub</li>
            </ul>
            <h3 className="text-3xl font-semibold mb-4 text-blue-300">Get in Touch</h3>
            <p className="text-lg text-gray-300">
                You can find me on:
                <a href="https://github.com/asmaiqbal85" className="text-blue-400 hover:text-white underline ml-2 transition-colors duration-200">GitHub</a>,
                <a href="https://www.linkedin.com/in/asma-iqbal-" className="text-blue-400 hover:text-white underline ml-2 transition-colors duration-200">LinkedIn</a>,
                or reach out via email:
                <a href="mailto:aasmaiqbal85@gmail.com" className="text-blue-400 hover:text-white underline ml-2 transition-colors duration-200">aasmaiqbal85@gmail.com</a>.
            </p>
        </section>
    );
}

export default About;
