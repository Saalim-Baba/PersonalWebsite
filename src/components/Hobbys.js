import "../app/globals.css";


export default function Hobbys(){

    const hobbys = [
        { name: "Wandern", description: "Genieße die Natur beim Wandern.", margin: 12 },
        { name: "Krafttraining", description: "Stärke deinen Körper im Gym.", margin: 32 },
        { name: "Technik", description: "Löse Probleme durch Code.", margin: 52 },
        { name: "Skisport", description: "Erlebe den Winter auf Skiern.", margin: 72 },
    ];



    return (
        <>
        <div className="w-full ">
            {hobbys.map((hobby, index) => (
                <div
                    key={index}
                    className="mt-20"
                >
                    <div style={{ marginLeft: `${hobby.margin}vw` }}>
                        <div className="thd_card">
                            <div className="face front">
                                <p>{hobby.name}</p>
                            </div>
                            <div className="face back" style={{'backgroundImage': `url("/hobbys/${hobby.name}.png")`}}>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        </>
    );
}