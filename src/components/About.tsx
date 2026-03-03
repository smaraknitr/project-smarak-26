"use client";
import React from "react";
import Image from "next/image";
import Slider from "./slider";

const Aboutus = () => {
    return (
        <>
            <div id="about">
                <section className="relative w-full py-16 md:py-20 lg:py-24 bg-[url('/images/bg.png')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-[#f5e6cc]/20"></div>

                    <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pb-20">
                        <h2 className="text-center text-[#980204] font-saman text-6xl  lg:text-[6rem] mt-4 mb-12 md:mb-16 tracking-wide">
                            about us
                        </h2>

                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-12">
                            <div className="lg:w-[55%]">
                                <p className="text-[#3b2a1e] text-xl md:text-3xl lg:text-[2.2rem] font-serif text-left">
                                    Smarak is brought to life by the combined
                                    efforts of the faculty and students of the
                                    Civil Engineering Department at NIT
                                    Rourkela. With faculty members providing
                                    their expertise and guidance, and students
                                    infusing fresh ideas and energy, our team
                                    ensures a seamless blend of learning,
                                    competition, and innovation. Together, we
                                    craft an experience that challenges,
                                    inspires, and pushes the boundaries of civil
                                    engineering.
                                </p>
                            </div>

                            <div className="w-full lg:w-[52%] flex justify-center lg:justify-end">
                                <div className="relative w-full max-w-[550px]">
                                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#8b7355]">
                                        <Image
                                            src="/images/team/team.jpg"
                                            alt="Smarak Team"
                                            width={550}
                                            height={413}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Slider />
            </div>
        </>
    );
};

export default Aboutus;
