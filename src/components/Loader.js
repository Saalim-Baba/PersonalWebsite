'use client';

import "../app/globals.css"
import React, {useState, useEffect} from "react";

export default function Loader(){

    useEffect(()=>{
        const body = document.body;
        body.style.overflow = 'hidden';
        const loaderElement = document.getElementById('count');
        const loaderSite = document.getElementById("loader")
        loaderElement.style.opacity = '1';
        let count = 0;
        const interval = setInterval(() => {
            loaderElement.textContent = `${count}%`;
            count++;
            if (count > 100) {
                clearInterval(interval);
                loaderElement.textContent = "Welcome!";
                loaderElement.style.opacity = '0';
                setTimeout(()=>{
                    loaderSite.style.opacity = '0';
                    loaderSite.remove()
                    body.style.overflow = 'auto';
                },1000)

            }

        }, 20);
    },[])
    return <>
        <div id="loader" className={"flex flex-col justify-center"}>
            <h1 id="count"></h1>
        </div>

    </>
}