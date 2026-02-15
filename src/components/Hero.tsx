"use client";
import Image from "next/image";
import Slider from "./slider";

export default function Hero() {
    return (
        <>
            <div className="relative w-full min-h-[93dvh] flex flex-col items-center justify-start overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/bg.png"
                        alt="Background Texture"
                        fill
                        className="object-cover object-center opacity-40 sm:opacity-100"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent sm:from-white/30" />
                </div>

                <div className="relative z-20 flex flex-col items-center w-full px-4 pt-[10vh] sm:pt-[4vh]">
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

                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center text-[#980204] mb-4 font-serif font-semibold tracking-wider max-w-3xl drop-shadow-sm">
                        &ldquo;Shaping Architecture Through Engineering
                        Thought&rdquo;
                    </p>

                    <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-4xl">
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
                            <div className="absolute top-full left-0 right-0 h-8 bg-gradient-to-b from-[#f6eee3] to-transparent" />
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

                {/* 3. Monument Image - FIX APPLIED HERE */}
                {/* - We set a fixed height for the container (e.g., 60% of viewport) so it doesn't jump around.
            - object-cover: Ensures the image fills the width fully (no side gaps).
            - object-bottom: Anchors the image to the floor so the base is never cut off.
        */}
                <div className="absolute bottom-0 z-10 w-full h-[50vh] md:h-[65vh] pointer-events-none llg:hidden">
                    <Image
                        src="/images/monu.png"
                        alt="Monument"
                        fill
                        className="object-cover object-bottom"
                        priority
                    />
                </div>

                <Image
                    src="/alter.png"
                    alt="Monument"
                    width={500}
                    height={500}
                    className="absolute bottom-0 w-auto h-auto object-fill object-center"
                />

                {/* 4. Slider */}
                <div className="absolute bottom-0 w-full z-30">
                    <Slider />
                </div>
            </div>
        </>
    );
}
