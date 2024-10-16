
"use client";

import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Use useNavigate
import { Img } from "react-image"; // Ensure you're using the correct import for images

export default function Header() {
    const navigate = useNavigate(); // Replace useHistory with useNavigate
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [notifications, setNotifications] = useState(["New project launched!", "Event coming up soon!", "Volunteer meeting tomorrow"]);
    const [language, setLanguage] = useState('en');
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search query:", searchQuery);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        console.log("Language selected:", e.target.value);
    };

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    return (
        <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-3">
                        <Img
                            src="/final.png"
                            alt="Logo"
                            className="w-12 h-12 sm:w-15 sm:h-15"
                            loading="lazy" // Optional for performance
                        />
                        <div className="text-xl sm:text-2xl font-bold">
                            <Link to="/home" className="hover:text-blue-200 transition duration-300">SPM</Link>
                        </div>
                    </div>
                    <nav className="hidden md:flex space-x-6 items-center ml-auto">
                        <NavLinks />
                        <form onSubmit={handleSearch} className="flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="px-3 py-2 rounded bg-white text-black focus:outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="px-3 py-2 bg-blue-700 rounded text-white hover:bg-blue-800 transition duration-300"
                            >
                                Search
                            </button>
                        </form>
                        <Link to="/volunteer" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300 whitespace-nowrap">
                            Volunteer Now
                        </Link>
                        <div className="relative">
                            <button onClick={toggleNotifications} className="focus:outline-none">
                                <svg
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                            </button>
                            {showNotifications && notifications.length > 0 && (
                                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                                    <ul>
                                        {notifications.map((notification, index) => (
                                            <li key={index} className="px-4 py-2 hover:bg-gray-100">
                                                {notification}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <select
                            className="bg-blue-700 text-white px-3 py-2 rounded hover:bg-blue-800 transition duration-300"
                            value={language}
                            onChange={handleLanguageChange}
                        >
                            <option value="en">English</option>
                            <option value="hi">Hindi</option>
                        </select>
                    </nav>

                    <div className="md:hidden ml-auto">
                        <button
                            type="button"
                            className="text-white focus:outline-none hover:text-blue-200 transition duration-300"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                <nav className="px-4 pt-2 pb-4 space-y-2 bg-blue-600">
                    <NavLinks mobile />
                    <div className="flex flex-col space-y-2">
                        <form onSubmit={handleSearch} className="flex space-x-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="px-3 py-2 rounded bg-white text-black focus:outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="px-3 py-2 bg-blue-700 rounded text-white hover:bg-blue-800 transition duration-300"
                            >
                                Search
                            </button>
                        </form>
                        <Link to="/volunteer" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300 whitespace-nowrap">
                            Volunteer Now
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

function NavLinks({ mobile = false }) {
    const linkClass = mobile
        ? "block text-white hover:bg-blue-700 rounded py-2 px-3 transition duration-300"
        : "text-white hover:text-blue-200 transition duration-300 underline-on-hover whitespace-nowrap";

    return (
        <>
            <Link to="/" className={linkClass}>Home</Link>
            <Link to="/donate" className={linkClass}>Donate</Link>
            <Link to="/apply" className={linkClass}>Apply</Link>
            <Link to="/contact" className={linkClass}>Contact</Link>
            <Link to="/signup" className={linkClass}>Signup</Link>
        </>
    );
}
