import "../app/globals.css";
import { useEffect, useRef } from "react";

export default function Blob() {
    const textRef = useRef(null);

    useEffect(() => {
        document.body.onpointermove = event => {
            const { clientX, clientY } = event;
            const scrollX = window.scrollX || document.documentElement.scrollLeft;
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            textRef.current.animate({
                left: `${clientX + scrollX}px`,
                top: `${clientY + scrollY}px`
            }, { duration: 3000, fill: "forwards" });
        };
    }, []);

    return <div ref={textRef} id="blob"></div>;
}
