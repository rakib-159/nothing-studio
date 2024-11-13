import { useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import gsap from "gsap";
import showcase from '../assets/projects/showcase.avif';
import allos1 from '../assets/projects/ellos.avif'
import wiling from '../assets/projects/willi.avif'
import catering from '../assets/projects/catering.avif'
import kinetic from '../assets/projects/kintic.avif'
import dessert from '../assets/projects/dessert.avif'
import donemate from '../assets/projects/donate.avif'
import { Link } from "react-router-dom";
import OurClients from "../components/OurClients";

const recentProject = [
    { img: allos1, title: 'Ellos Rebranding', },
    { img: wiling, title: 'Wiley Roots Brewing', link: 'wileyRoots' },
    { img: catering, title: 'Catering', link: 'catering' },
    { img: kinetic, title: 'Kinetic Campaign', link: 'kinetic' },
    { img: dessert, title: 'Desert Flower', link: 'desert' },
    { img: donemate, title: 'Donemate', link: 'donemate' }
]
const ProjectShowcase = () => {
    useEffect(() => {
        window.scroll(0, 0)
        gsap.timeline({
            scrollTrigger: {
                trigger: '.project-showcase-container',
                start: 'top -30%',
                end: 'bottom 30%',
                scrub: true,
            }
        }).fromTo('.project-showcase-container', { y: '0%' }, { y: '-20%' }).to('.footer', {zIndex: 4})
        const tl = gsap.timeline()
        tl.fromTo(
            '.showcase-title1',
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
        )
            .fromTo(
                '.showcase-title2',
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
                "-=0.8"
            )
        const projectShowcaseImg = document.querySelectorAll(".showcase-image");
        projectShowcaseImg.forEach((img) => {
            img.addEventListener("mouseenter", () => {
                gsap.to('.cursor', { scale: 5, duration: 0.3, opacity: 0.5 });
            });

            img.addEventListener("mouseleave", () => {
                gsap.to('.cursor', { scale: 1, duration: 0.3, opacity: 1 });
            });
        });

        return () => {
            projectShowcaseImg.forEach((img) => {
                img.removeEventListener("mouseenter", () => { });
                img.removeEventListener("mouseleave", () => { });
            });
        };
    }, [])
    return (
        <>
            <Navbar />
            <div className="bg-black project-showcase-container text-white z-50 -mt-[200px] pt-[200px]">
                <div className="px-4 md:px-8">
                    <div className="text-4xl md:text-[152px] md:leading-[137px] font-extrabold text-center uppercase w-full mx-auto">
                        <div className="overflow-hidden">
                            <span className="showcase-title1 block">ShowCase</span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="showcase-title2 block">Nothing!</span>
                        </div>
                    </div>
                    <div className="h-[400px] my-10">
                        <img className="rounded-3xl w-full h-full" src={showcase} alt='Showcase img' />
                    </div>
                    <div className="my-10 flex flex-col justify-center items-center gap-10">
                        <h1 className="text-[40px] leading-[48px] w-full md:w-[40%]">Have a look at our latest projects and see how we create values!</h1>
                        <h1 className="text-sm md:text-xl uppercase">[ Recent Project ]</h1>
                    </div>
                    <div className="flex flex-col my-10 gap-10">
                        {
                            recentProject.map(p => (
                                <Link to={`/projects/${p.title}`} key={p.title} className="md:h-[400px] relative showcase-image">
                                    <img className="rounded-3xl w-full h-full" src={p.img} alt='Showcase img' />
                                    <div className="absolute bottom-0 left-0 p-3 md:p-6 w-full">
                                        <h3 className="text-[#d9d9d9] text-2xl md:text-5xl font-semibold uppercase">
                                            [ {p.title}]
                                        </h3>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <OurClients />
                </div>
            </div>
        </>
    );
};

export default ProjectShowcase;