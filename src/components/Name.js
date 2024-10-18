'use client';

import React, { useEffect, useRef } from "react";
import "../app/globals.css";

export default function Name() {
    const textRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (textRef.current) {
                const value = window.scrollY / 12;
                textRef.current.style.marginTop = `${value}vh`;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="relative text-center">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                    ref={textRef}
                    className="text-[10vh] md:text-[20vh] text-black uppercase opacity-10 select-none"
                    style={{ fontFamily: 'Arial Black, sans-serif' }}
                >
                    SAALIM BABA
                </span>
            </div>
            <h1
                id="Name"
                className="relative text-[6vh] text-white hidden_raw"
            >
                Portfolio Page <br />
            </h1>
        </div>
    );
}
