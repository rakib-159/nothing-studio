/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HoverImage = ({ src, alt }) => {
    const imageRef = useRef(null);

    useEffect(() => {
        const image = imageRef.current;

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const { left, top, width, height } = image.getBoundingClientRect();
            const xPos = ((clientX - left) / width) * 2 - 1; 
            const yPos = ((clientY - top) / height) * 2 - 1;

            // Calculate rotation angles
            const rotateY = xPos * 8;
            const rotateX = -yPos * 8; 

            // Apply 3D transformation
            gsap.to(image, {
                rotationY: rotateY,
                rotationX: rotateX,
                transformPerspective: 1000,
                duration: 0.3,
                ease: "power3.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(image, {
                rotationY: 0,
                rotationX: 0,
                duration: 0.3,
                ease: "power3.out"
            });
        };

        image.addEventListener("mousemove", handleMouseMove);
        image.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            image.removeEventListener("mousemove", handleMouseMove);
            image.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <img
            ref={imageRef}
            className="max-w-lg rounded-xl ml-10 hidden md:block"
            src={src}
            alt={alt}
            style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1ms ease',
                backfaceVisibility: 'hidden'  }} 
        />
    );
};

export default HoverImage;
