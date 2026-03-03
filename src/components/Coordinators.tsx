"use client";

import React from "react";
import Image from "next/image";
import { coordinators } from "../app/config/coordinators";

export default function Coordinators() {
    return (
        <section id="coordinators" className="relative w-full py-16 md:py-20 lg:py-24 bg-[url('/images/bg.png')] bg-[length:100%_auto] bg-repeat bg-top overflow-hidden">
            <div className="absolute inset-0 bg-[#f5e6cc]/20"></div>
            <div className="relative z-10 w-full flex flex-col items-center">

                <div className="relative flex flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-4xl py-6 mb-12">
                    <div className="hidden sm:block w-20 md:w-32 lg:w-40 opacity-90 transition-transform hover:-translate-x-1 duration-300">
                        <Image
                            src="/images/arrow-left.png"
                            alt="Decorative arrow left"
                            width={300}
                            height={300}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <h2 className="text-[#980204] text-4xl sm:text-5xl md:text-7xl font-saman tracking-widest px-2 sm:px-6 drop-shadow-md whitespace-nowrap">
                        Coordinators
                    </h2>

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

                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 px-6 md:px-12 w-full max-w-[1400px] mx-auto">
                    {coordinators.map((card, index) => (
                        <div
                            key={index}
                            className="relative w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-2rem)] lg:w-[calc(25%-2.5rem)] xl:w-[calc(20%-2.5rem)] max-w-[280px] hover:-translate-y-2 transition-transform duration-300 cursor-pointer flex flex-col items-center"
                        >

                            <div className="relative w-[14.5rem] h-[14.5rem] sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full bg-[#980204] border-[4px] border-[#f5b461] flex items-end justify-center overflow-hidden z-20 shadow-lg" style={{ marginTop: '-1rem' }}>
                                <div className="absolute inset-2 sm:inset-4 z-[1]">
                                    <Image
                                        src="/images/vector.png"
                                        alt="vector Background"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="absolute inset-x-0 bottom-0 top-6 z-[2]">
                                    <Image
                                        src={card.imageSrc}
                                        alt={card.name}
                                        fill
                                        className="object-contain object-bottom"
                                        priority={index < 5}
                                    />
                                </div>
                            </div>

                            <div className="relative z-30 -mt-4 sm:-mt-6 bg-gradient-to-b from-[#f5b461] to-[#e8a047] py-1.5 sm:py-2 px-2 sm:px-4 rounded-tl-[1.2rem] sm:rounded-tl-[1.5rem] rounded-br-[1.2rem] sm:rounded-br-[1.5rem] shadow-md border-b-[4px] border-[#980204]/20 w-[105%] sm:w-[105%] lg:w-[115%] flex flex-col items-center justify-center">
                                <h3
                                    className={`text-center text-[#7a1a0f] tracking-wide font-serif font-bold whitespace-nowrap overflow-hidden text-ellipsis w-full px-1 ${card.name.length > 15
                                        ? "text-[0.7rem] sm:text-[0.9rem] md:text-[0.8rem] lg:text-[0.85rem] xl:text-[0.95rem]"
                                        : "text-[0.85rem] sm:text-[1.05rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.15rem]"
                                        }`}
                                >
                                    {card.name}
                                </h3>
                                <p className={`text-center text-[#7a1a0f] font-bold mt-0.5 sm:mt-1 uppercase tracking-widest whitespace-nowrap overflow-hidden text-ellipsis w-full px-1 ${card.description.length > 15
                                    ? "text-[7.5px] sm:text-[8px] md:text-[6.5px] lg:text-[7.5px] xl:text-[8.5px]"
                                    : "text-[8px] sm:text-[9px] md:text-[7.5px] lg:text-[8.5px] xl:text-[10px]"
                                    }`}>
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
