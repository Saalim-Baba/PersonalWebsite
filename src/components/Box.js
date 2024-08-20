import React, { useEffect, useState } from "react";
import Card from './Card';

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
            <div className="background_grad relative flex flex-col justify-end items-center bottom-0 h-[70vh] box-container hidden_raw box_reveal">
                <button className="circle z-[1000]">
                    <img

                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                        alt="python"
                    />
                </button>
                <button className="circle z-[1000]">
                    <img

                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        alt="javascript"
                    />
                </button>
                <button className="circle z-[1000]">
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mariadb/mariadb-original-wordmark.svg"
                        alt="mariadb"
                    />
                </button>
                <button className="circle z-[1000]">
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
                        alt="tailwindcss"
                    />
                </button>
                <button className="circle">
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                        alt="cpp"
                    />
                </button>
                <button className="circle">
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg"
                        alt="bash"
                    />
                </button>
                <button className="circle">
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg"
                        alt="nextjs"
                    />
                </button>
                <button className="circle">
                    <img

                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                        alt="nodejs"
                    />
                </button>
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
                <Card selectedImage={selectedImage} />

            </div>
        </>
    );
}
