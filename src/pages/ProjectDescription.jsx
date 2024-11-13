import Navbar from "../components/shared/Navbar";
import allos1 from '../assets/projects/ellos.avif'
import allos2 from '../assets/projects/ellos2.avif'
import allos3 from '../assets/projects/ellos3.avif'
import allos4 from '../assets/projects/ellos4.avif'
import allos5 from '../assets/projects/ellos5.avif'
import allos6 from '../assets/projects/ellos6.avif'
import allos7 from '../assets/projects/ellos7.avif'
import allos8 from '../assets/projects/ellos8.avif'
import OurClients from "../components/OurClients";
import wiling from '../assets/projects/willi.avif'
import catering from '../assets/projects/catering.avif'
import kinetic from '../assets/projects/kintic.avif'
import dessert from '../assets/projects/dessert.avif'
import donemate from '../assets/projects/donate.avif'
import { useEffect } from "react";
import gsap from "gsap";
import { useParams } from "react-router-dom";
const projectImages = {
    'ellos rebranding': allos1,
    'wiley roots brewing': wiling,
    'catering': catering,
    'kinetic campaign': kinetic,
    'desert flower': dessert,
    'donemate': donemate,
};
const ProjectDescription = () => {
    const { projectName } = useParams();
    const selectedImage = projectImages[projectName.toLocaleLowerCase()] || null;
    console.log(projectName.toLocaleLowerCase(), selectedImage);

    useEffect(() => {
        window.scroll(0, 0)
        gsap.timeline({
            scrollTrigger: {
                trigger: '.projectContainer',
                start: 'top -30%',
                end: 'bottom 30%',
                scrub: true,
            }
        }).fromTo('.projectContainer', { y: '0%' }, { y: '-20%' }).to('.footer', {zIndex: 4})
        const tl = gsap.timeline()
        tl.fromTo('.wrapper', { translateY: '0%', }, { translateY: '-100%', duration: 0.5, display: 'none' })
        tl.fromTo(
            '.project-title1',
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
        )
            .fromTo(
                '.project-title2',
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
                "-=0.8"
            )
            .from('.hero-des', { opacity: 0, y: 10, }, "-=0.9")
    }, [projectName])
    return (
        <>
            <Navbar />
            <div className="bg-black projectContainer z-50 -mt-[200px] pt-[200px]">
                <div className="min-h-screen wrapper bg-white/80 fixed w-full"></div>
                <div className="px-4 md:px-8 text-white">
                    <div className="text-4xl md:text-[152px] md:leading-[137px] font-extrabold text-center uppercase w-full mx-auto">
                        <div className="overflow-hidden">
                            <span className="project-title1 block">{projectName.split(" ")[0]}</span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="project-title2 block">{projectName.split(" ")[1]}</span>
                        </div>
                    </div>
                    <div className="h-[calc(100vh-100px)] my-10">
                        {selectedImage ? (
                            <img className="rounded-3xl w-full h-full" src={selectedImage} alt={projectName} />
                        ) : (
                            <p>Image not found for this project.</p>
                        )}
                    </div>
                    <div className="flex flex-col md:flex-row justify-between content">
                        <div className="flex flex-col md:flex-row flex-1 text-[#d9d9d9]">
                            <h1 className="text-sm md:text-xl uppercase mr-0 md:mr-[25%] text-nowrap content-value">[ ABOUT PROJECTS ]</h1>
                            <div className="flex flex-col my-5 md:my-0 gap-5 md:gap-10 text-xl w-full md:text-[40px] md:leading-[48px] content-des">
                                <h1 className="text-sm md:text-xl uppercase">[ Brand Identity ]</h1>
                                <h1>We envision a world where wellbeing fundament & everyone is empowered to reach their peak potential.</h1>
                                <h1>Don&apos;t traditional healthcare system to determine your health.</h1>
                                <h1>Take control your super power.</h1>
                            </div> 
                        </div>
                        <div className=" flex justify-end">
                            <h1 className="text-sm md:text-xl uppercase content-value text-nowrap text-start w-full">[ ABOUT PROJECTS ]</h1>
                        </div>
                    </div>
                    <div className="max-h-screen my-10">
                        <img className="rounded-3xl w-full max-h-screen" src={allos2} alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center md:h-[400px]">
                        <img className="rounded-3xl w-full h-full" src={allos3} alt="" />
                        <img className="rounded-3xl w-full h-full" src={allos4} alt="" />
                    </div>
                    <div className="max-h-screen my-10">
                        <img className="rounded-3xl w-full max-h-screen" src={allos5} alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center md:h-[400px]">
                        <img className="rounded-3xl w-full h-full" src={allos6} alt="" />
                        <img className="rounded-3xl w-full h-full" src={allos7} alt="" />
                    </div>
                    <div className="max-h-screen my-10">
                        <img className="rounded-3xl w-full max-h-screen" src={allos6} alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center md:h-[400px]">
                        <img className="rounded-3xl w-full h-full" src={allos7} alt="" />
                        <img className="rounded-3xl w-full h-full" src={allos8} alt="" />
                    </div>
                    <OurClients />
                </div>
            </div>
        </>
    );
};

export default ProjectDescription;