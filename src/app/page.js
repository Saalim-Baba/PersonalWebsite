"use client";


import "./globals.css";
import Nav from "../components/Nav"
import Clouds from "../components/Clouds"
import Name from "../components/Name"
import Loader from "../components/Loader"
import Image from 'next/image'
import {useEffect} from "react";

const HomePage = () => {
    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <>
            <Loader/>
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
                <p className="text-xl font-bold mb-96">Hello Everyone</p>
            </div>
        </>
    );
};

export default HomePage;
