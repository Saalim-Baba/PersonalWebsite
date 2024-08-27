import "../app/globals.css"

export default function Nav() {
    return (
        <div className="font-sans text-center align-center">
            <nav className="w-[40vw] bg-gray-200 rounded-md bg-opacity-80 fixed top-0 left-1/2 transform -translate-x-1/2 z-[1000]">
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
