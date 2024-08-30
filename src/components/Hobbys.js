import "../app/globals.css";


export default function Hobbys(){

    const hobbys = [
        { name: "Hiking", description: "Genieße die Natur beim Wandern.", margin: 15 },
        { name: "Fitness", description: "Stärke deinen Körper im Gym.", margin:35  },
        { name: "Technical", description: "Löse Probleme durch Code.", margin: 55},
        { name: "Skisport", description: "Erlebe den Winter auf Skiern.", margin:75},
    ];



    return (
        <>
        <div className=" hobby">
            {hobbys.map((hobby, index) => (
                <div
                    key={index}
                    className="mt-20"
                >
                    <div style={{ marginLeft: `${hobby.margin}vw`}}>
                        <div className="thd_card">
                            <div className="face front">
                                <p>{hobby.name}</p>
                            </div>
                            <div className="face back" style={{'backgroundImage': `url("/hobbys/${hobby.name}.webp")`}}>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        </>
    );
}