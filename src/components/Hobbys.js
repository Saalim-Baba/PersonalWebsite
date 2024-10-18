import "../app/globals.css";
import "../app/css/hobbys.css";

export default function Hobbys() {
    const isTouchDevice = () => {
        return (
            "ontouchstart" in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0
        );
    };

    const hobbys = [
        { name: "Hiking" },
        { name: "Fitness" },
        { name: "Technical" },
        { name: "Skisport" },
    ];

    return (
        <>
            <div className="hobby-container w-full grid grid-cols-4 auto-rows-auto gap-y-3 gap-x-4 p-20">
                {hobbys.map((hobby, index) => (
                    <div key={index} className="hobby">
                        <div>
                            <div
                                className="thd_card"
                                onClick={
                                    isTouchDevice()
                                        ? (e) => {
                                            e.currentTarget.classList.toggle("flipped");
                                        }
                                        : undefined
                                }
                            >
                                <div className="face front">
                                    <p>{hobby.name}</p>
                                </div>
                                <div
                                    className="face back"
                                    style={{
                                        backgroundImage: `url("/hobbys/${hobby.name}.webp")`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
