import "../app/globals.css";

export default function Projects() {
    const projects = [
        { title: "SwissHub", gradient: "bg-gradient-to-r from-blue-400 to-blue-100", span: "col-span-3 row-span-8", speed:2.5},
        { title: "RecipesFullStack", gradient: "bg-gradient-to-r from-blue-400 to-blue-100", span: "col-span-3 row-span-7",speed:4.5},
        { title: "Bankgeheimnis", gradient: "bg-gradient-to-r from-blue-400 to-blue-100", span: "col-span-3 row-span-7", speed:3},
        { title: "BibliothekBackend", gradient: "bg-gradient-to-r from-blue-400 to-blue-100", span: "col-span-3 row-span-8", speed:3 },
        { title: "OOP_ShopSystem", gradient: "bg-gradient-to-r from-blue-400 to-blue-100", span: "col-span-3 row-span-8", speed:3.2 },
        { title: "ETH-KI-Wettbewerb", gradient: "bg-gradient-to-r from-blue-400 to-blue-100", span: "col-span-3 row-span-9", speed:3.5 },
        { title: "Hangman", gradient: "bg-gradient-to-r from-blue-400 to-blue-100", span: "col-span-3 row-span-8", speed:3.7 },
        { title: "DiscordMusicBot", gradient: "bg-gradient-to-r from-blue-400 to-blue-100", span: "col-span-3 row-span-8", speed:4.5 },
    ];

    return (
        <div className="w-full grid grid-cols-12 auto-rows-auto gap-6 p-20">
            {projects.map((project, index) => (
                <div
                    key={index}
                    style={{
                        '--i': project.speed,
                        'backgroundImage': `url("/projects/${project.title}.png")`
                    }}
                    className={`project relative rounded-lg shadow-lg cursor-pointer ${project.span} ${project.gradient}`}
                >
                    {project.title !== "SwissHub" ? (
                        <a href={`https://github.com/Saalim-Baba/${project.title}`} target="_blank">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-xl font-semibold text-center">
                                    {project.title}
                                </h3>
                            </div>
                        </a>
                    ) : (
                        <a href={"https://github.com/SwissHub-Development/Readme"} target="_blank">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-white text-xl font-semibold text-center">
                                {project.title}
                            </h3>
                        </div>
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
}
