'use client';

import React, { useEffect, useRef } from "react";
import "../app/globals.css";

export default function Name() {
    const textRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (textRef.current) {
                const value = window.scrollY / 6;
                textRef.current.style.marginTop = `${value}vh`;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <h1 ref={textRef} id={"Name"} className="text-center text-[6vh] text-white mb-40 hidden_raw">
            Saalim Baba
        </h1>
    );
}
