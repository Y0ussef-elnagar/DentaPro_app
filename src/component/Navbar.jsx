import { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/5000_4_09.jpg";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full h-[60px] px-4 md:px-12 lg:px-20 xl:px-28 flex items-center justify-between z-50 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D]">
            <div className="flex items-center space-x-2">
                <img
                    src={logoImage}
                    alt="Logo"
                    className="w-12 h-12 sm:w-13 sm:h-13 border rounded-md"
                />
                <h1 className="text-black text-xl font-bold">
                    Denta<span className="text-sky-400">Pro</span>
                </h1>
            </div>

            <ul className="md:flex hidden items-center gap-10">
                <li>
                    <Link
                        to="/"
                        className="hover:text-blue-400 transition-colors duration-200"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className="hover:text-blue-400 transition-colors duration-200"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/services"
                        className="hover:text-blue-400 transition-colors duration-200"
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="hover:text-blue-400 transition-colors duration-200"
                    >
                        Contact Us
                    </Link>
                </li>
            </ul>

            <Link
                to="/Appointment"
                className="bg-sky-400 hover:bg-sky-500 transition text-white border border-blue-400 hidden md:flex justify-center items-center text-sm w-44 h-11 rounded-lg uppercase whitespace-nowrap"
            >
                Book An Appointment
            </Link>

            <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-2xl"
            >
                ☰
            </button>

            <div
                className={`${open ? "block" : "hidden"} absolute top-[60px] left-0 w-full bg-white p-6 md:hidden`}
            >
                <ul className="flex flex-col space-y-4 text-lg">
                    <li>
                        <Link
                            to="/"
                            className="hover:text-blue-400 transition-colors duration-200"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="hover:text-blue-400 transition-colors duration-200"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className="hover:text-blue-400 transition-colors duration-200"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="hover:text-blue-400 transition-colors duration-200"
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
