import React from 'react';

export default function Card({ selectedImage }) {
    if (!selectedImage) {
        return <div>Please click an image to see details.</div>;
    }
    console.log(selectedImage)

    return (
        <div className="card z-[1000] flex flex-col right-20 top-10  border-black text-black border absolute">
            <h2>{selectedImage.alt}</h2>
            <img src={selectedImage.src} alt={selectedImage.alt}/>
            <p>Details about {selectedImage.alt}</p>
            {"Skibidi Language"}
        </div>
    );
}
