"use client";
import React from "react";

const slider = () => {
    return (
        <>
            <div className="w-full bg-[#f0d8b1] border-y-[4px] sm:border-y-[6px] border-[#980204] py-2 flex-shrink-0 overflow-hidden shadow-2xl">
                <div className="flex animate-scroll whitespace-nowrap">
                    <div className="flex items-center">
                        {[...Array(8)].map((_, i) => (
                            <span
                                key={`first-${i}`}
                                className="text-[#4a2c20] text-base sm:text-lg md:text-xl lg:text-3xl font-saman tracking-wider mx-4 sm:mx-8 md:mx-12"
                            >
                                Shaping Architecture Through Engineering Thought
                                <span className="mx-4 sm:mx-8 md:mx-12 font-bold">
                                    ||
                                </span>
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center">
                        {[...Array(8)].map((_, i) => (
                            <span
                                key={`second-${i}`}
                                className="text-[#4a2c20] text-base sm:text-lg md:text-xl lg:text-3xl font-saman tracking-wider mx-4 sm:mx-8 md:mx-12"
                            >
                                fusing innovation with a greener tomorrow
                                <span className="mx-4 sm:mx-8 md:mx-12 font-bold">
                                    ||
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 6s linear infinite;
                }
            `}</style>
        </>
    );
};

export default slider;
