"use client"
import React, { useState } from 'react';
import { MdMessage } from "react-icons/md";
function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage("All fields are required.");
            return;
        }

        // Simulate a successful submission
        setSuccessMessage("Your message has been sent!");
        setErrorMessage("");

        // Reset fields
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div id="contact" className="container mx-auto p-6 mt-10">
            <h2 className="text-4xl font-bold text-center mb-6 text-gray-400">Contact Me</h2>
            {errorMessage && (
                <p className="mb-4 text-red-500 text-center">{errorMessage}</p>
            )}
            {successMessage && (
                <p className="mb-4 text-green-500 text-center">{successMessage}</p>
            )}
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-semibold text-gray-700" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring text-black focus:ring-blue-200"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-semibold text-gray-700" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring text-black focus:ring-blue-200"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-semibold text-gray-700" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none text-black focus:ring focus:ring-blue-200"
                        rows="5"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-200"
                >
                    Send Message 
                </button>
            </form>
        </div>
    );
}

export default ContactMe;