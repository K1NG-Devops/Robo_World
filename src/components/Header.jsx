import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const linkVariants = {
        hidden: { x: "-50%", opacity: 0 },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            transition: { delay: i * 0.1 },
        }),
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-2xl font-bold text-purple-900">
                        <a href="/">Roboworld</a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        <Link to={'/'} className="text-gray-600 hover:text-blue-600 transition">Home</Link>
                        {["About", "Programs", "Contact"].map((text) => (
                            <Link
                                key={text}
                                to={`/${text.toLowerCase().replace(/\s+/g, "")}`}
                                className="text-gray-600 hover:text-blue-600 transition"
                            >
                                {text}
                            </Link>
                        ))}
                        <button className="bg-purple-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                            Join Us
                        </button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            className="text-blue-600 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <motion.nav
                initial="hidden"
                animate="visible"
                className="flex flex-col space-y-4 px-4 py-6 bg-white md:hidden"
                >
                    <Link to={`/`} className="text-purple-600">Home</Link>
                    {["About", "Programs", "Contact"].map((text, i) => (
                        <motion.div
                            key={text}
                            custom={i}
                            variants={linkVariants}
                            className="text-gray-600 hover:text-blue-600"
                        >
                            <Link to={`/${text.toLowerCase().replace(/\s+/g, "")}`}>{text}</Link>
                        </motion.div>
                    ))}
                    <button className="animate-fadeIn bg-purple-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        Join Us
                    </button>
                </motion.nav>
            )}
        </header>
    );
}

export default Header;
