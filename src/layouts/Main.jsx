import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import img1 from '../assets/img1.avif';
import img2 from '../assets/img2.avif';
import img3 from '../assets/img3.avif';
import img4 from '../assets/img4.avif';
import img5 from '../assets/img5.avif';
import Footer from "../components/Footer";
import gsap from "gsap";
import LenisWrapper from "../components/LenisWrapper";
const Main = () => {
    const [loading, setLoading] = useState(true);
    const [visibleImageIndex, setVisibleImageIndex] = useState(0);
    const images = [img1, img2, img3, img4, img5];

    useEffect(() => {
        // Show each image in sequence
        const interval = setInterval(() => {
            setVisibleImageIndex((prevIndex) => {
                if (prevIndex < images.length - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 500);
                    return prevIndex;
                }
            });
        }, 500);
        const root = document.getElementById('root')
        root.addEventListener('mousemove', (dets) => {
            gsap.to('.cursor', { x: dets.x, y: dets.y, duration: .75 })
        })
        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <>
            <div className='cursor pointer-events-none size-4 bg-red-600 rounded-full z-40 fixed'></div>
            {loading ? (
                <div className="flex items-center justify-center h-screen bg-black text-white text-xl">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`img-${index + 1}`}
                                className={`rounded-xl max-w-md transition-opacity duration-700 transform ${index === visibleImageIndex ? 'opacity-100' : 'opacity-0'
                                    } absolute`}
                            />
                        ))}
                    </div>
                </div>
            ) : (

                <div>
                    <LenisWrapper>
                        <Outlet />
                        <Footer />
                    </LenisWrapper>
                </div>
            )}
        </>
    );
};

export default Main;