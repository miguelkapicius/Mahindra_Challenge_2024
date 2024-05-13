import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function SlideShow() {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    return (
        <Slide
        autoplay={true}
        arrows={false}
        infinite={true}
        >
            {images.map((image, index) => (
                <div key={index} className="size-full">
                    <div className="flex items-center justify-center bg-cover h-[715px] rounded-lg" style={{ backgroundImage: `url(${image})` }}>
                        <span>Slide {index + 1}</span>
                    </div>
                </div>
            ))}
        </Slide>
    );
}
