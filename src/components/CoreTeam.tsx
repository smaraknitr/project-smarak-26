"use client";

import React from "react";
import Image from "next/image";
import { teamHeads } from "../app/config/core-team";

export default function CoreTeam() {
    return (
        <section id="about" className="relative w-full py-16 md:py-20 lg:py-24 bg-[url('/images/bg.png')] bg-[length:100%_auto] bg-repeat bg-top overflow-hidden">
            <div className="absolute inset-0 bg-[#f5e6cc]/20"></div>
            <div className="relative z-10 w-full flex flex-col items-center">
                <div className="relative flex flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-4xl py-6 mb-8">
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
                        Core Team
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

                <div className="flex flex-wrap justify-center gap-6 px-6 md:px-12 w-full max-w-7xl mx-auto">
                    {teamHeads.map((card, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] rounded-3xl overflow-hidden shadow-lg border-[4px] md:border-[6px] border-[#f5b461] hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col"
                        >
                            <div className="relative w-full aspect-[1.1] md:aspect-[1.15] bg-[#980204] flex items-end justify-center overflow-hidden pt-4">
                                <div className="absolute inset-4 sm:inset-6 z-[1]">
                                    <Image
                                        src="/images/Vector.png"
                                        alt="vector Background"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="absolute inset-0 z-[2] top-4">
                                    <Image
                                        src={card.imageSrc}
                                        alt={card.name}
                                        fill
                                        className="object-contain object-bottom"
                                        priority={index < 4}
                                    />
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-[#f5b461] to-[#e8a047] py-2 md:py-3 lg:py-4 flex flex-col items-center justify-center overflow-hidden flex-grow">
                                <h3
                                    className={`text-center text-[#7a1a0f] tracking-wide font-serif font-bold whitespace-nowrap overflow-hidden text-ellipsis w-full px-1 sm:px-2 ${card.name.length > 15
                                        ? "text-[1.10rem] sm:text-[1rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.2rem]"
                                        : "text-2xl md:text-[1.15rem] lg:text-[1.3rem] xl:text-2xl"
                                        }`}
                                >
                                    {card.name}
                                </h3>
                                <p className={`text-center text-[#7a1a0f] font-semibold mt-0.5 uppercase tracking-widest whitespace-nowrap overflow-hidden text-ellipsis w-full px-1 sm:px-2 ${card.description.length > 15
                                    ? "text-[9px] sm:text-[10px] md:text-[7.5px] lg:text-[8.5px] xl:text-[10px]"
                                    : "text-xs md:text-[9px] lg:text-[10px] xl:text-xs"
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
