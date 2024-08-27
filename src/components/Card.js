import React from 'react';

export default function Card({ selectedImage }) {
    if (!selectedImage) {
        return null
    }

    return (
        <div className="card z-[1000] flex flex-col right-20 top-0 border-black text-black border absolute">
            <img src={selectedImage.src} alt={selectedImage.alt}/>
            <h2 className="text-center	font-bold text-[2vw] py-3">{selectedImage.title}</h2>
            <p className="text-justify">{selectedImage.description}</p>
        </div>
    );
}
