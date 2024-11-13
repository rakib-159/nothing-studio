/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const AnimatedButton = ({ size = 'text-sm md:text-xl',intialColor, text, name, onHoverEffect = true, onClick, link }) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        
        const animatedText = button.querySelector(".animated-text");
        if (onHoverEffect) {
            const handleMouseEnter = () => {
                gsap.fromTo(
                    animatedText,
                    { y: "100%", opacity: 0, rotation: 10 },
                    { y: "0%", opacity: 1, duration: 0.3, rotation: 0, zIndex: 4, color: intialColor ? '#fff': '#d9d9d9cc' }
                );
                gsap.to('.cursor', { scale: 6, duration: 0.3, opacity: 0.5 });
            };

            const handleMouseLeave = () => {
                gsap.fromTo(
                    animatedText,
                    { y: "-100%", opacity: 0 },
                    { y: "0%", opacity: 1, duration: 0.3, color: intialColor? intialColor: '#d9d9d9' }
                );
                gsap.to('.cursor', { scale: 1, duration: 0.3, opacity: 1 });
            };

            button.addEventListener("mouseenter", handleMouseEnter);
            button.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                button.removeEventListener("mouseenter", handleMouseEnter);
                button.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [onHoverEffect]);

    return (
        <Link to={link}
            onClick={onClick}
            ref={buttonRef}
            className={`${size} ${intialColor ? `text-neutral-700`: 'text-[#d9d9d9]'} uppercase relative overflow-hidden ${name} w-fit`}
        >
            <div className="absolute w-full h-full bg-transparent z-40"></div>
            <div className="static-text opacity-0">{text}</div>
            <div className="animated-text absolute top-0 left-0 opacity-100">{text}</div>
        </Link>
    );
};

export default AnimatedButton;
