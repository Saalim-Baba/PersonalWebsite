import "../app/globals.css"

export default function Nav(){
    return  <div className="bg-black-100 font-sans">
        <nav className="bg-black-100 fixed w-full top-0 ">
            <div className="container mx-auto py-4">
                <div className="flex justify-center space-x-10">
                    <a href="#engagement" className="nav-link transition duration-300">
                        Home
                    </a>
                    <a href="#projekte" className="nav-link transition duration-300">
                        Projects
                    </a>
                    <a href="#hobbies" className="nav-link transition duration-300">
                        Hobbys
                    </a>
                    <a href="#contact" className="nav-link transition duration-300">
                        Contact
                    </a>
                </div>
            </div>

        </nav>



    </div>
}