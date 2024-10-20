"use client";


import "./globals.css";
import Nav from "../components/Nav"
import Clouds from "../components/Clouds"
import Name from "../components/Name"
import Loader from "../components/Loader"
import Image from 'next/image'
import {useEffect} from "react";
import Box from "../components/Box"
import Grass from "../components/Grass"
import Blob from "../components/Blob"
import Projects from "../components/Projects"
import Hobbys from "../components/Hobbys"
import Carousel from "../components/Carousel"
import "../app/css/cloud.css"

const HomePage = () => {
    useEffect(() => {
        const circles = document.querySelectorAll(".circle");
        const box_lid = document.getElementById("box_lid");
        let url = window.location

        window.addEventListener('beforeunload', function(event) {
            const baseUrl = window.location.protocol + '//' + window.location.host;
            history.replaceState(null, document.title, baseUrl);
            window.scroll(0,0)
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting){
                    entry.target.classList.add("show");
                    if (entry.target.classList.contains("box_reveal")){
                        if (!box_lid.classList.contains("lid")) {
                            box_lid.classList.add("lid");

                            circles.forEach((circle, index) => {
                                setTimeout(() => {
                                    circle.classList.toggle("fade-out");
                                }, index * 200);
                            });
                        }
                    }

                } else {
                    entry.target.classList.remove("show");
                    if (entry.target.classList.contains("box_reveal")){
                        if (box_lid.classList.contains("lid")){
                            box_lid.classList.remove("lid");
                            circles.forEach((circle, index) => {
                                setTimeout(() => {
                                    circle.classList.toggle("fade-out");
                                }, index * 200);
                            });
                        }

                    }
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".hidden_raw");
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
            window.onbeforeunload = null;
        };
    }, []);


    return (
        <>
            <body>
            <div id="image-top" className="flex flex-col justify-center ">
                <Nav/>
                <Image
                    src="/sun.png"
                    alt="sun picture"
                    width={200}
                    height={200}
                    id={"sun"}
                />
                <Name/>
                <Clouds/>
            </div>
            <div id="stack" className="hidden_raw">
                <div className='cloud'>
                    <h1 className="text-black absolute stack-cool">STACK</h1>
                </div>
                    <Carousel/>
                    <Box/>
            </div>
            <div id="projects" className="">
                <div className="cloud hidden_raw">
                    <h1 className="text-[1vw] stack-cool z-0 mr-12 absolute left-[-50%]">
                    PROJECTS
                </h1>
                </div>
                <div className="relative mb-5 justify-end items-center bottom-0 h-[70vh]">
                    <Projects/>
                </div>
            </div>
            <div id="hobbys" className="hidden_raw">
                <div className="cloud">
                    <h1 className="text-[1vw] stack-cool z-0 absolute left-[-25%]">
                        HOBBYS
                    </h1>
                </div>
                <div className="relative mb-10 items-center bottom-0 h-[70vh]">
                    <Hobbys/>
                </div>
            </div>
            <footer >
                <div className="mt-72 relative bottom-0 h-[100vh]">
                    <Grass/>
                </div>
                <div id="contact"></div>
            </footer>
            </body>
        </>
    );
};

export default HomePage;
