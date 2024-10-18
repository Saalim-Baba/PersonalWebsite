import "../app/css/carousel.css";
import data from "../app/languages.json";
import React, {useState} from "react";
function Carousel() {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    return (
        <div className={"griddy grid"}>
            <button onClick={handlePrev} className="first">Prev</button>
            <div className="lang_card second z-[1000] w-full flex flex-col border-black text-black border">
                <img src={data[index].src} alt={data[index].alt}/>
                <h2 className="text-center	font-bold text-[2vw] py-3">{data[index].title}</h2>
                <p className="text-justify">{data[index].description}</p>
            </div>
            <button onClick={handleNext} className={" last"}>Next</button>
        </div>
    );
}

export default Carousel;