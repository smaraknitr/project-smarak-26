"use client";

import React from "react";
import Image from "next/image";
import { coordinators } from "../app/config/coordinators";

export default function Coordinators() {
    const sortedCoordinators = [...coordinators].sort((a, b) => {
    if (a.description === b.description) {
        return a.name.localeCompare(b.name); // sort names inside same team
    }
    return a.description.localeCompare(b.description); // sort teams
    });
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
                    {sortedCoordinators.map((card, index) => (
                        <div
                            key={index}
                            className="relative w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-2rem)] lg:w-[calc(25%-2.5rem)] xl:w-[calc(20%-2.5rem)] max-w-[300px] hover:-translate-y-2 transition-transform duration-300 cursor-pointer flex flex-col items-center"
                        >

                            <div className="relative w-[13rem] h-[13rem] sm:w-[13.5rem] sm:h-[13.5rem] md:w-[14rem] md:h-[14rem] rounded-full bg-[#980204] border-[4px] border-[#f5b461] flex items-center justify-center overflow-hidden z-20 shadow-lg p-4 sm:p-5" style={{ marginTop: '-1rem' }}>
                                <div className="absolute inset-0 flex items-center justify-center z-[1] p-4 sm:p-5">
                                    <div className="relative w-full aspect-square">
                                        <Image
                                            src="/images/Vector.svg"
                                            alt="vector Background"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="relative w-[90%] aspect-square z-[2] rounded-full overflow-hidden scale-[0.85]">
                                    <Image
                                        src={card.imageSrc}
                                        alt={card.name}
                                        fill
                                        className="object-cover object-center"
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
                                <p className={`text-center text-[#7a1a0f] font-bold mt-0.5 sm:mt-1 uppercase tracking-widest w-full px-1 ${card.description.length > 15
                                    ? "text-[7.5px] sm:text-[8px] md:text-[6.5px] lg:text-[7.5px] xl:text-[8.5px]"
                                    : "text-[8px] sm:text-[9px] md:text-[7.5px] lg:text-[8.5px] xl:text-[10px]"
                                    }`}>
                                    {card.description.split(',').map((part, index) => (
                                        <React.Fragment key={index}>
                                            {part.trim()}
                                            {index < card.description.split(',').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}   