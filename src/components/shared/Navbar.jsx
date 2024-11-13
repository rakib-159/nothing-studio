import { useEffect, useState } from "react";
import gsap from "gsap";
import AnimatedButton from "./AnimatedButton";
import img from '../../assets/img1.avif';
import HoverImage from "../HoverImage";
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        const tl = gsap.timeline();
        // Initial animation for logo and menu buttons on page load
        tl.from(".logo .static-text", { x: -50, opacity: 0, duration: 1 });
        tl.from(".menu .static-text", { x: 50, opacity: 0, duration: 1 }, "<");
    }, []);

    return (
        <>
            <nav className="flex justify-between items-center py-4 md:py-8 px-4 md:px-8 bg-transparent sticky top-0 z-40">
                <AnimatedButton text="[ NOTHING STUDIO ]" name="logo" link={'/'} />
                <AnimatedButton onClick={() => {
                    setToggle(!toggle)

                }} text={toggle ? "[ Close ]" : "[ Menu ]"} name="menu" />

            </nav>
            {
                toggle && <div className={`min-h-screen bg-black navbar-wrapper pt-[70px] md:pt-0 -mt-[60px] md:-mt-[92px] fixed z-30 w-full h-full`}>
                    <nav className="hidden md:flex justify-between items-center py-4 md:py-8 px-4 md:px-8 bg-transparent sticky top-0" >
                        <AnimatedButton text="[ NOTHING STUDIO ]" name="logo" link={'/'} />
                        <AnimatedButton onClick={() => {
                            setToggle(!toggle)

                        }} text={"[ Close ]"} name="menu" />

                    </nav>
                    <div className="flex gap-16 -mt-4">
                        <HoverImage src={img} alt="Image" />
                        <div className="flex flex-col px-4 md:px-0 z-50">
                            <AnimatedButton text='Home' size="text-5xl md:text-[116px] font-extrabold" name="home" intialColor='#464646' link={'/'} />
                            <AnimatedButton text='Showcase' size="text-5xl md:text-[116px] font-extrabold" name='showcase' intialColor='#464646' link={'/projectShowcase'} />
                            <AnimatedButton text='Carrier' size="text-5xl md:text-[116px] font-extrabold" name='carrier' intialColor='#464646' link={'/carrier'} />
                            <AnimatedButton text='About' size="text-5xl md:text-[116px] font-extrabold" name='about' intialColor='#464646' link={'/about'} />
                            <AnimatedButton text='Contacts' size="text-5xl md:text-[116px] font-extrabold" name='contact' intialColor='#464646' link={'/contact'} />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-start md:justify-between  items-start md:items-center px-4 md:px-8 py-1 md:py-2 gap-6 md:gap-0">
                        <div className="text-start text-[#d9d9d9] ">
                            <AnimatedButton text="HELLO@NOTHING.STUDIO" name='email2' />
                            <h1 >+44 12 34 56 78</h1>
                        </div>
                        <div className="text-[#d9d9d9] text-sm md:text-xl flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8 *:uppercase">
                            <AnimatedButton text="Linkedin" name='linkedin' link={'/linkedin'} />
                            <AnimatedButton text="Twitter" name='twitter' link={'/twitter'} />
                            <AnimatedButton text="Instagram" name='instagram' link={'/instagram'} />
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Navbar;
