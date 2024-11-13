/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Projects from "../components/Projects";
import OurServices from "../components/OurServices";
import OurClients from "../components/OurClients";
import SplitType from "split-type";
import Navbar from "../components/shared/Navbar";
import { useEffect } from "react";
const Home = () => {
    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo(
            '.hero-title',
            { opacity: 0, y: 100 }, // Start off-screen below
            { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" } // Slide up smoothly
        )
            .fromTo(
                '.hero-title2',
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
                "-=0.8" // Overlap animations slightly
            )
            .fromTo('.hero-des', { opacity: 0, y: 10, }, { y: 0, opacity: 1 }, "-=0.9")
        const title1 = new SplitType('.hero-title')
        const title2 = new SplitType('.hero-title2')
        document.querySelectorAll('.char').forEach(c => {
            c.addEventListener('mouseenter', () => {
                gsap.to('.cursor', { backgroundColor: 'blue', });
            })
            c.addEventListener('mouseleave', () => {
                gsap.to('.cursor', { backgroundColor: 'red' });
            })
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '.main',
                start: 'top -30%',
                end: 'bottom 30%',
                scrub: true,
            }
        }).fromTo('.main', { y: '0%' }, { y: '-20%',}).to('.footer', {zIndex: 4})
    }, [])

    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="flex h-full justify-center items-center text-[#d9d9d9] bg-black px-4 md:px-8 -mt-[100px]">
                    <div className="relative hero-text-container min-h-[calc(100vh-85px)] pt-32">
                        <div className="text-4xl md:text-[152px] md:leading-[137px] font-extrabold text-center uppercase w-full mx-auto">
                            <div className="overflow-hidden">
                                <span className="hero-title block">NOTHING</span>
                            </div>
                            <div className="overflow-hidden text-nowrap w-full">
                                <span className="hero-title2 block">DESIGN STUDIO</span>
                            </div>
                        </div>
                        <div className="w-full md:w-[30%] mt-8 md:mt-16 absolute left-0 md:left-[10%] hero-des">
                            <p className="text-start text-sm md:text-xl"><span className="px-4 md:px-16"></span> We are a creative studio based in Canada, We build solid brands that needs no introduction at all.</p>
                        </div>
                    </div>
                </div>
                <Projects />
                <OurServices />
                <OurClients />
            </div>
        </div>
    );
};

export default Home;
