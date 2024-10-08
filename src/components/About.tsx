import React from 'react';

const About = () => {
    return (
        <section id="about" className="container mx-auto p-5 mt-10  text-white shadow-lg rounded-lg">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-4">
                Hello! I'm a passionate developer with experience in building web applications
                using modern technologies. I enjoy creating intuitive and dynamic user experiences,
                and I thrive on solving complex problems.
            </p>
            <h3 className="text-2xl font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside mb-4">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Tailwind CSS</li>
                <li>HTML & CSS</li>
                <li>Git & GitHub</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
            <p>
                You can find me on:
                <a href="https://github.com/yourusername" className="text-blue-400 underline ml-1">GitHub</a>,
                <a href="https://linkedin.com/in/yourusername" className="text-blue-400 underline ml-1">LinkedIn</a>,
                or reach out via email: 
                <a href="mailto:your-email@example.com" className="text-blue-400 underline ml-1">your-email@example.com</a>.
            </p>
        </section>
    );
}

export default About;