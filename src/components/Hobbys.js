import "../app/globals.css";
import "../app/css/hobbys.css"

export default function Hobbys(){

    const hobbys = [
        { name: "Hiking", description: "Genieße die Natur beim Wandern." },
        { name: "Fitness", description: "Stärke deinen Körper im Gym."  },
        { name: "Technical", description: "Löse Probleme durch Code."},
        { name: "Skisport", description: "Erlebe den Winter auf Skiern."},
    ];



    return (
        <>
        <div className="hobby-container w-full grid grid-cols-4 gap-y-7 gap-x-4 ">
            {hobbys.map((hobby, index) => (
                <div
                    key={index}
                    className="mt-20 hobby"
                >
                    <div>
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