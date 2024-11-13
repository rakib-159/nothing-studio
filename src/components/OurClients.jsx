import Marquee from "react-fast-marquee";

export default function OurClients() {

    const logos = [
        "/img04.svg",
        "/img05.svg",
        "/img06.svg",
        "/img07.svg",
        "/img08.svg",
        "/img09.svg",
        "/img10.svg",
    ];


    return (
        <div className="p-4 md:p-8 bg-black text-[#d9d9d9]">
            <div className="flex">
                <div className="min-w-[25%] hidden md:block"></div>
                <div>
                    <div className='py-4 md:py-8 text-lg md:text-xl font-normal'>
                        <h1 className="w-full md:w-5/12">
                            We cherish partnerships we have cultivated, each one a testament to commitment.
                        </h1>
                    </div>
                    <h1 className="text-xl font-normal my-8 pb-5 md:pb-10">[ OUR Clients ]</h1>
                </div>
            </div>
            <Marquee speed={90}>
                {
                    logos.map((p, idx) => (
                        <div key={idx} className="mr-8">
                            <img src={p} alt="" />
                        </div>
                    ))
                }
            </Marquee>
        </div>
    );
}
