import "../app/globals.css"
import Image from "next/image";

export default function Grass(){
    return <>
        <div className="grass_container">
            <div className="grass text-center ml-[-20vw] h-[40vh] w-[200%]" style={{"--gust": 40}}></div>
            <div className="grass text-center ml-[-100vw] h-[30vh] w-[200%]" style={{"--gust": 30}}></div>
            <div className="grass text-center ml-[-2vw] h-[15vh] w-[200%]" style={{"--gust": 15}}></div>
            <div id="contact_info">
                <a href={"https://discord.com/users/387161545051996170"} target="_blank"><Image src={"/icons/discord.png"} height={100} width={100} alt={"discord"}/></a>
                <a href={"mailto: Saalim.Baba@outook.com"} target="_blank"><Image src={"/icons/email.png"}  height={90} width={90} alt={"email"}/></a>
                <a href={"https://github.com/Saalim-Baba"} target="_blank"><Image src={"/icons/github.png"}  height={90} width={90} alt={"github"} className="mt-3"/></a>
            </div>
            <Image src="/cartoon.png" alt={"me as a cartoon"} width={600} height={600} className="absolute bottom-10 right-10 z-10 pointer-events-none"/>
            <div className="soil">
                <div className="rocks"></div>
                <h1 className="text-white font-bold">{"> Made in 2024 <"}</h1>

                <div className="links">
                </div>
            </div>
        </div>
    </>
}