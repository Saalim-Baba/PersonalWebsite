import "./globals.css";
import Nav from "../components/Nav"
import Clouds from "../components/Clouds"
import Image from 'next/image'

const HomePage = () => {
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
                <h1 className="text-center text-[6vh] font-bold text-white mb-40">SAALIM BABA</h1>
                <Clouds/>
            </div>
            <div id="rest">
                <p className="text-xl font-bold">Hello Everyone</p>
            </div>
        </>
    );
};

export default HomePage;
