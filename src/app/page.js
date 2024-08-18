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

const HomePage = () => {
    useEffect(() => {
        const circles = document.querySelectorAll(".circle");
        const box_lid = document.getElementById("box_lid");

        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        };

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
            <div id="image-top" className="flex flex-col justify-center mb-32 ">
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
            <Blob/>
            <div id="stack" className="mt-2">
                <h1 className="stack-cool z-0 ml-20 hidden_raw">
                    STACK
                </h1>
                <Box/>
            </div>
            <div id="projects" className="mt-72 hidden_raw">
                <h1 className="stack-cool z-0 ml-20">
                    Projects
                </h1>
                <div className="relative flex flex-col justify-end items-center bottom-0 h-[70vh]">

                </div>
            </div>
            <div>
                <Grass/>
            </div>

        </>
    );
};

export default HomePage;
