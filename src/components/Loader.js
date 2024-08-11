'use client';

import "../app/globals.css"
import React, {useState, useEffect} from "react";

export default function Loader(){

    useEffect(()=>{
        const loaderElement = document.getElementById('count');
        const loaderSite = document.getElementById("loader")
        let count = 0;
        const interval = setInterval(() => {
            loaderElement.textContent = `${count}%`;
            count++;


            if (count > 100) {
                clearInterval(interval);
                loaderElement.textContent = "Welcome!";
                setTimeout(()=>{
                    loaderSite.style.opacity = '0';
                },500)

            }

        }, 20);
    },[])
    return <>
        <div id="loader" className={"flex flex-col justify-center"}>
            <h1 id="count"></h1>
        </div>

    </>
}