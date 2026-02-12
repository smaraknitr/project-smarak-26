'use client';
import Image from 'next/image';
import Slider from './slider';

export default function Hero() {
    return (
        <>
            <div className="relative w-full h-[800px] flex flex-col bg-[url('/images/bg.png')] bg-cover bg-center">

                <div className="relative z-20 flex-shrink-0 flex flex-col items-center justify-start pt-[2vh] sm:pt-[3vh] lg:pt-[4vh] px-4 w-full">
                    <div className="relative w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw] mb-[1vh]">
                        <Image
                            src="/images/smarak.png"
                            alt="Smarak Logo"
                            width={500}
                            height={200}
                            className="w-full h-auto drop-shadow-2xl"
                            priority
                        />
                    </div>

                    <p className="text-xs sm:text-sm md:text-base lg:text-xl text-center text-[#733f35] mb-[1vh] px-4 font-serif font-medium tracking-wide max-w-2xl">
                        "Fusing Innovation With a Greener Tomorrow"
                    </p>


                    <div className="flex flex-row items-center justify-center gap-1 sm:gap-2 md:gap-4 w-full max-w-5xl px-2">

                        <div className="hidden sm:block w-16 sm:w-24 md:w-32 lg:w-40 opacity-90 flex-shrink-0">
                            <Image
                                src="/images/arrow-left.png"
                                alt="Decorative arrow left"
                                width={300}
                                height={30}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center text-[#733f35] font-saman whitespace-nowrap px-2">
                            11 - 13 April 2026
                        </p>

                        <div className="hidden sm:block w-16 sm:w-24 md:w-32 lg:w-40 opacity-90 flex-shrink-0">
                            <Image
                                src="/images/arrow-right.png"
                                alt="Decorative arrow right"
                                width={300}
                                height={30}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

                <Image
                    src="/images/monu.png"
                    alt="Monument"
                    width={1200}
                    height={200}
                    className="absolute bottom-0 w-full h-[600px] object-fill object-center"
                />
            </div>
            <Slider />
        </>
    );
}