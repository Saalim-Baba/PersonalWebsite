import "../app/globals.css";

export default function Projects() {
    const projects = [
        { title: "RecipesFullStack", gradient: "bg-gradient-to-r from-blue-400 to-blue-100", span: "col-span-4 row-span-6"},
        { title: "Bankgeheimnis", gradient: "bg-gradient-to-r from-blue-400 to-blue-100", span: "col-span-4 row-span-6" },
        { title: "BibliothekBackend", gradient: "bg-gradient-to-r from-blue-400 to-blue-100", span: "col-span-4 row-span-6" },
        { title: "OOP_ShopSystem", gradient: "bg-gradient-to-r from-blue-400 to-blue-100", span: "col-span-3 row-span-7" },
        { title: "ETH-KI-Wettbewerb", gradient: "bg-gradient-to-r from-blue-400 to-blue-100", span: "col-span-3 row-span-9" },
        { title: "Hangman", gradient: "bg-gradient-to-r from-blue-400 to-blue-100", span: "col-span-3 row-span-8" },
        { title: "DiscordMusicBot", gradient: "bg-gradient-to-r from-blue-400 to-blue-100", span: "col-span-3 row-span-8" },
    ];
    let i = 1
    function getVar(){
        if (i > 4) {
            i=2.5
        }else{
            i++
        }


        return i
    }
    return (

        <div className="w-full grid grid-cols-12 auto-rows-auto gap-6 p-20 hidden_raw">
            {projects.map((project, index) => (
                <div
                    key={index}
                    style={{ '--i': getVar(),
                            'backgroundImage': `url("/projects/${project.title}.png")`}}
                            className={`project relative overflow-hidden rounded-lg shadow-lg cursor-pointer ${project.span} ${project.gradient}`}
                >
                    <a href={`https://github.com/Saalim-Baba/${project.title}`} target="_blank">
                    <div className=" absolute inset-0 flex items-center justify-center" >
                        <h3 className="text-white text-xl font-semibold text-center">
                            {project.title}
                        </h3>
                    </div>
                    </a>
                </div>
            ))}
        </div>
    );
}
