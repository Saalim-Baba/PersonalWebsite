import React, { useEffect, useState } from "react";
import Card from './Card';
import data from "../app/languages.json";

export default function Box() {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const handleImageClick = (event) => {
            setSelectedImage(event.target);
        };

        const images = document.querySelectorAll(".circle > img");
        images.forEach(img => img.addEventListener("click", handleImageClick));

        return () => {
            images.forEach(img => img.removeEventListener("click", handleImageClick));
        };
    }, []);

    return (
        <>
            <div
                className="background_grad relative flex flex-col justify-end items-center bottom-0 h-[70vh] box-container hidden_raw box_reveal">
                <div>
                    {data.map((item, index) => (
                        <button key={index} className=" circle z-[900]">
                            <img src={item.src} alt={item.alt}/>
                        </button>
                    ))}
                </div>
                <button id="box-id">
                    <div className="box absolute">
                        <div className="box__face box__face--front"></div>
                        <div id="box_lid" className="box__face box__face--top"></div>
                        <div className="box__face box__face--left flex flex-col justify-center items-center"></div>
                        <div className="box_shadow"></div>
                        <div className="relative box__face box__face--right"></div>
                        <div className="box__face box__face--back"></div>
                    </div>
                </button>
                <Card selectedImage={selectedImage}/>

            </div>
        </>
    );
}
