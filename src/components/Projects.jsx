import { useEffect } from 'react';
import img1 from '../assets/img1.avif';
import img2 from '../assets/img2.avif';
import img3 from '../assets/img3.avif';
import img4 from '../assets/img4.avif';
import img5 from '../assets/img5.avif';
import img6 from '../assets/img6.avif';
import gsap from 'gsap';
import AnimatedButton from './shared/AnimatedButton';
import { Link } from 'react-router-dom';

const projects = [
    { img: img1, title: 'Ellos Rebranding',  },
    { img: img2, title: 'Wiley Roots Brewing', link: 'wileyRoots' },
    { img: img3, title: 'Catering', link: 'catering' },
    { img: img4, title: 'Kinetic Campaign', link: 'kinetic' },
    { img: img5, title: 'Desert Flower', link: 'desert' },
    { img: img6, title: 'Donemate', link: 'donemate' }
];

const Projects = () => {
    useEffect(() => {
        const projectImages = document.querySelectorAll(".project-image");
        projectImages.forEach((img) => {
            img.addEventListener("mouseenter", () => {
                gsap.to('.cursor', { scale: 5, duration: 0.3, opacity: 0.5 });
            });

            img.addEventListener("mouseleave", () => {
                gsap.to('.cursor', { scale: 1, duration: 0.3, opacity: 1 });
            });
        });

        return () => {
            projectImages.forEach((img) => {
                img.removeEventListener("mouseenter", () => { });
                img.removeEventListener("mouseleave", () => { });
            });
        };
    }, []);

    return (
        <div className="bg-black p-4 md:p-8 project">
            <div className="flex justify-between items-center text-[#d9d9d9] bg-black">
                <button className="text-sm md:text-xl uppercase">[ FEATURED PROJECTS ]</button>
                <AnimatedButton text="[ Hire Us ]" name='hire'/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 my-8 image-container">
                {projects.map((project, index) => (
                    <Link to={`/projects/${project.title}`}
                        key={index}
                        className="group card project-image relative overflow-hidden rounded-3xl h-[230px] md:h-[450px] cursor-pointer transition-all duration-300"
                    >
                        <img
                            src={project.img}
                            alt={`project-${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 "
                        />
                        <div className="absolute bottom-0 left-0 p-3 md:p-6 w-full">
                            <h3 className="text-[#d9d9d9] text-2xl font-semibold uppercase">
                               [ {project.title}]
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
