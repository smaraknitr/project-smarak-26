"use client";
import Image from "next/image";
import Slider from "./slider";

export default function Hero() {
    return (
        <>
            <div className="relative w-full min-h-[93svh] llg:min-h-[120svh] flex flex-col items-center justify-start overflow-hidden bg-[url('/images/bg.png')] bg-center ">
                <div className="absolute inset-0 z-0">
                    {/* <Image
                        src="/images/bg.png"
                        alt="Background Texture"
                        fill
                        className="object-cover object-center opacity-40 sm:opacity-100"
                        priority
                    /> */}
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent sm:from-white/30" /> */}
                </div>

                <div className="relative z-20 flex flex-col items-center w-full px-4 pt-[10vh] md:pt-[2vh] llg:pt-[6vh]">
                    {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f6eee3] via-[#f6eee3]/90 to-transparent h-[120%]" /> */}

                    <div className="relative w-[60vw] sm:w-[40vw] lg:w-[25vw] mb-4 animate-fade-in-down">
                        <Image
                            src="/images/smarak.png"
                            alt="Smarak Logo"
                            width={500}
                            height={500}
                            className="w-full h-auto drop-shadow-2xl"
                            priority
                        />
                    </div>

                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center text-[#980204] font-serif font-semibold tracking-wider max-w-3xl drop-shadow-sm">
                        &ldquo;Shaping Architecture Through Engineering
                        Thought&rdquo;
                    </p>

                    <div className="relative flex flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-4xl py-6">
                        <div className="hidden sm:block w-20 md:w-32 lg:w-40 opacity-90 transition-transform hover:-translate-x-1 duration-300">
                            <Image
                                src="/images/arrow-left.png"
                                alt="Decorative arrow left"
                                width={300}
                                height={300}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        <div className="relative">
                            <p className="text-xl sm:text-2xl text-center text-[#980204] font-serif font-bold whitespace-nowrap drop-shadow-md">
                                13 - 15 March 2026
                            </p>
                        </div>

                        <div className="hidden sm:block w-20 md:w-32 lg:w-40 opacity-90 transition-transform hover:translate-x-1 duration-300">
                            <Image
                                src="/images/arrow-right.png"
                                alt="Decorative arrow right"
                                width={300}
                                height={300}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 z-10 w-full h-[50vh] md:h-[65vh] pointer-events-none llg:hidden">
                    <Image
                        src="/images/monu.png"
                        alt="Monument"
                        fill
                        className="object-cover object-bottom"
                        priority
                    />
                </div>

                <div className="absolute -bottom-[10rem] llg:-bottom-[15rem] -z-5 scale-150 animate-slow-spin origin-center">
                    <Image
                        src="/bg-rad.png"
                        alt=""
                        width={500}
                        height={500}
                        className="w-auto h-[40dvh] md:h-[50dvh] llg:h-[60dvh] object-contain brightness-0 invert max-w-none"
                    />
                    <Image
                        src="/bg-rad.png"
                        alt=""
                        width={500}
                        height={500}
                        className="w-auto h-[40dvh] md:h-[50dvh] llg:h-[60dvh] object-contain brightness-0 invert max-w-none rotate-180 -mt-[40px]"
                    />
                </div>

                <Image
                    src="/puri-2.png"
                    alt="Monument"
                    width={500}
                    height={500}
                    className="hidden llg:block absolute bottom-[3.8rem] h-[100dvh] w-full scale-100
                     object-contain object-bottom max-w-none"
                />

                <div className="absolute bottom-0 w-full z-30">
                    <Slider />
                </div>
            </div>
        </>
    );
}
