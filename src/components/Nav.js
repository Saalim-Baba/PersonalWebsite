import "../app/globals.css"
import Image from "next/image";

export default function Nav() {
    return (
        <div className="font-serif text-center align-center">
            <nav className="w-[400px] bg-gray-200 rounded-md bg-opacity-50 fixed top-5 left-1/2 transform -translate-x-1/2 z-[11100]">
                <div className="container py-4">
                    <div className="flex justify-center space-x-10">
                        <a href="#stack" className="nav-link transition duration-300">
                            Stack
                        </a>
                        <a href="#projects" className="nav-link transition duration-300">
                            Projects
                        </a>
                        <a href="#hobbys" className="nav-link transition duration-300">
                            Hobbys
                        </a>
                        <a href="#contact" className="nav-link transition duration-300">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
