
export default function Box() {
    return (
        <>
            <div className="flex flex-col justify-end items-center bottom-0 border border-black h-[70vh]">
                <div className="box">
                    <div className="box__face box__face--front"></div>
                    <div className="box__face box__face--top"></div>
                    <div className="box__face box__face--left">
                        <br/>
                        <h1 className="ml-4">My Stack</h1>
                    </div>
                    <div className="relative box__face box__face--right">
                        <img src="/web-icon.png" className="hidden border border-black h-6 w-6  absolute bottom-0 right-0 m-2 [transform:rotateY(10deg)]">
                        </img>
                        <img src="/info-icon.png" className="hidden border border-black h-6 w-6  absolute bottom-0 right-7 m-2 [transform:rotateY(10deg)]">
                        </img>
                    </div>
                    <div className="box__face box__face--back"></div>
                </div>
            </div>
        </>
    );
}
