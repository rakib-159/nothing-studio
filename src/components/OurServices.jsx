import { useEffect } from "react";
import Vd from '../assets/ne9l3T3ovtDswK4FAYqMEN0ZAs.mp4';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#services',
                start: 'top bottom',
                end: 'top bottom',
                scrub: 2.5,
            },
        });
    
        tl.fromTo(".service1",
            { opacity: 0 },
            { opacity: 1,},
            "+=0.5"
        )
        .fromTo(".service2",
            { opacity: 0 },
            { opacity: 1, },
            "+=0.5"
        )
        .fromTo(".service3",
            { opacity: 0 },
            { opacity: 1, }, 
            "+=0.5" 
        )
        .fromTo(".service4",
            { opacity: 0 },
            { opacity: 1, }, 
            "+=0.5" 
        );
    
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    

    return (
        <div className="p-4 md:p-8 bg-black text-[#d9d9d9]">
            <div className="flex">
                <div className="min-w-[25%] hidden md:block"></div>
                <div id="services">
                    <div className='py-8 text-sm md:text-xl font-normal'>
                        <h1 className="w-full md:w-5/12">With a blend of creativity and technical prowess, we transform ideas into reality!</h1>
                    </div>
                    <h1 className="text-xl font-normal my-8 pb-2 md:pb-10">[ OUR SERVICES ]</h1>
                    <div className="space-y-28 hidden md:block">
                        <div className="flex flex-col md:flex-row w-full">
                            <div className="flex-1 pl-5 border-l flex flex-col justify-between min-h-[300px] service1">
                                <div>
                                    <p className="text-2xl text-[#ea4826]">01</p>
                                    <h1 className="text-5xl font-medium">Research</h1>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-normal">Digging deep</h3>
                                    <p className="text-xl text-[#777] w-8/12">
                                        We unearth valuable insights that inform strategic decisions, guiding you towards sustainable growth and impact.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 pl-5 border-l flex flex-col justify-between min-h-[300px] service2">
                                <div>
                                    <p className="text-2xl text-[#ea4826]">02</p>
                                    <h1 className="text-5xl font-medium">Strategy</h1>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-normal">Paving the way</h3>
                                    <p className="text-xl text-[#777] w-8/12">
                                        Tailored strategies that align with your goals, helping you navigate complexities and seize opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row w-full pb-32">
                            <div className="flex-1 pl-5 border-l flex flex-col justify-between min-h-[300px] service3">
                                <div>
                                    <p className="text-xl md:text-2xl text-[#ea4826]">03</p>
                                    <h1 className="text-3xl md:text-5xl font-medium">Design</h1>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-normal">Shaping the future</h3>
                                    <p className="text-lg md:text-xl text-[#777] w-full md:w-8/12">
                                        We blend creativity with functionality, crafting experiences that leave lasting impressions and resonate.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 pl-5 border-l flex flex-col justify-between min-h-[300px] service4">
                                <div>
                                    <p className="text-xl md:text-2xl text-[#ea4826]">04</p>
                                    <h1 className="text-3xl md:text-5xl font-medium">Development</h1>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-normal">Building visions</h3>
                                    <p className=" text-lg md:text-xl text-[#777] w-full md:w-8/12">
                                        We harness the latest technologies to build robust, scalable platforms that drive your digital presence forward.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* mobile device */}
                    <div className="flex flex-col md:hidden gap-5 my-4">
                        <div className="flex flex-col justify-between gap-10 border-b pb-2 service1 w-full">
                            <div>
                                <p className="text-xl md:text-2xl text-[#ea4826]">01</p>
                                <h1 className="text-3xl md:text-5xl font-medium">Research</h1>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-normal">Digging deep</h3>
                                <p className="text-lg md:text-xl text-[#777] w-full md:w-8/12">
                                    We unearth valuable insights that inform strategic decisions, guiding you towards sustainable growth and impact.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-10 border-b pb-2 service2">
                            <div>
                                <p className="text-xl md:text-2xl text-[#ea4826]">02</p>
                                <h1 className="text-3xl md:text-5xl font-medium">Strategy</h1>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-normal">Paving the way</h3>
                                <p className="text-lg md:text-xl text-[#777] w-full md:w-8/12">
                                    Tailored strategies that align with your goals, helping you navigate complexities and seize opportunities.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-10 border-b pb-2 service3">
                            <div>
                                <p className="text-xl md:text-2xl text-[#ea4826]">03</p>
                                <h1 className="text-3xl md:text-5xl font-medium">Design</h1>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-normal">Shaping the future</h3>
                                <p className="text-lg md:text-xl text-[#777] w-full md:w-8/12">
                                    We blend creativity with functionality, crafting experiences that leave lasting impressions and resonate.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-10 service4 border-b pb-2">
                            <div>
                                <p className="text-xl md:text-2xl text-[#ea4826]">04</p>
                                <h1 className="text-3xl md:text-5xl font-medium">Development</h1>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-normal">Building visions</h3>
                                <p className=" text-lg md:text-xl text-[#777] w-full md:w-8/12">
                                    We harness the latest technologies to build robust, scalable platforms that drive your digital presence forward.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full overflow-hidden rounded-xl max-h-[400px] flex items-center">
                <video
                    className="w-full h-full object-cover z-20"
                    loop
                    preload="auto"
                    autoPlay
                    muted
                    src={Vd}
                />
                <div className="text-white text-2xl font-semibold absolute z-20 top-[50%] left-[25%]">
                    <h1>Pure Design,<br /> NOTHING else!</h1>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
