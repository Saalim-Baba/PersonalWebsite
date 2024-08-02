

const HomePage = () => {
    return (
        <div className="bg-black-100 font-sans">
            <nav className="bg-black-100 fixed w-full top-0 shadow-sm z-50">
                <div className="container mx-auto py-4">
                    <div className="flex justify-center space-x-10">
                        <a href="#engagement" className="nav-link  transition duration-300">
                            Home
                        </a>
                        <a href="#projekte" className="nav-link  transition duration-300">
                            About
                        </a>
                        <a href="#travel" className="nav-link  transition duration-300">
                            Services
                        </a>
                        <a href="#contact" className="nav-link  transition duration-300">
                            Contact
                        </a>
                    </div>
                </div>

            </nav>


        </div>
    );
};

export default HomePage;
