"use client";


import "./globals.css";
import Nav from "../components/Nav"
import Clouds from "../components/Clouds"
import Name from "../components/Name"
import Loader from "../components/Loader"
import Image from 'next/image'
import {useEffect} from "react";
import Box from "../components/Box"

const HomePage = () => {
    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <>
            <div id="image-top" className={"flex flex-col justify-center"}>
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
            <div id="stack">
                <Box/>
            </div>

        </>
    );
};

export default HomePage;
