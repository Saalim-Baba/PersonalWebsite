import React, { useEffect } from "react";

export default function Box() {

    return (
        <>


            <div className="relative flex flex-col justify-end items-center bottom-0 h-[70vh] box-container hidden_raw box_reveal">
                <img
                    className="circle z-[1000]"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                    alt="python"
                />
                <img
                    className="circle z-[1000]"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                />
                <img
                    className="circle z-[1000]"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mariadb/mariadb-original-wordmark.svg"
                    alt="mariadb"
                />
                <img
                    className="circle z-[1000]"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
                    alt="tailwindcss"
                />
                <img
                    className="circle"
                     src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                     alt="cpp"
                />
                <img
                    className="circle"
                    src=""
                    alt=""
                />
                <img
                    className="circle"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg"
                    alt="nextjs"
                />
                <img
                    className="circle"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="nodejs"
                />
                <button id="box-id">
                    <div className="box absolute ">
                        <div className="box__face box__face--front"></div>
                        <div id="box_lid" className="box__face box__face--top"></div>
                        <div className="box__face box__face--left flex flex-col justify-center items-center">
                        </div>
                        <div className="box_shadow">
                        </div>
                        <div className="relative box__face box__face--right">
                        </div>
                        <div className="box__face box__face--back"></div>
                    </div>
                </button>
            </div>
        </>
    );
}
