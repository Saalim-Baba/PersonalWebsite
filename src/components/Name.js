'use client';

import React, { useEffect, useRef } from "react";
import "../app/globals.css";

export default function Name() {
    const textRef = useRef(null); // Using useRef to reference the DOM element

    useEffect(() => {
        const handleScroll = () => {
            if (textRef.current) {
                const value = window.scrollY / 3;
                console.log(textRef.current.style.marginTop)
                textRef.current.style.marginTop = `${value}vh`;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <h1 ref={textRef} className="text-center text-[6vh] font-bold text-white mb-40">
            SAALIM BABA
        </h1>
    );
}
