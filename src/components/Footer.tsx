"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer
            className="relative w-full bg-[url('/images/bg.png')] bg-cover bg-center overflow-hidden"
            id="contact"
        >
            <div className="absolute inset-0 bg-[#f5e6cc]/5"></div>

            <div className="relative z-20 py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                {["find us here", "team smarak", "nit rourkela"].map(
                    (title, i) => (
                        <div
                            key={i}
                            className="rounded-3xl overflow-hidden shadow-lg border-[6px] border-[#f5b461]"
                        >
                            <div className="bg-gradient-to-b from-[#b83a2f] to-[#8b2a1f] h-56 flex items-center justify-center">
                                <span className="text-white/30 text-3xl font-serif">
                                    image
                                </span>
                            </div>

                            <div className="bg-gradient-to-b from-[#f5b461] to-[#e8a047] py-4">
                                <h3 className="text-center text-[#7a1a0f] font-serif text-3xl tracking-wide">
                                    {title}
                                </h3>
                            </div>
                        </div>
                    ),
                )}
            </div>

            <div className="relative z-20 bg-[#5a5a5a]/95 backdrop-blur-md text-white mt-8">
                <div className="max-w-[1900px] mx-auto px-8 sm:px-16 lg:px-28 xl:px-40 py-14 sm:py-16 lg:py-14">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 md:gap-20 lg:gap-28 xl:gap-36 items-start">
                        <div className="text-center md:text-left space-y-5">
                            <h4 className="text-[#f5b461] font-saman text-3xl sm:text-4xl lg:text-5xl tracking-wide">
                                Address
                            </h4>
                            <p className="font-serif text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200">
                                National Institute of Technology Rourkela <br />
                                Odisha, India - 769008
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-start text-center space-y-5 md:min-w-[200px]">
                            <Image
                                src="/nit-logo.svg"
                                alt="NIT Logo"
                                width={130}
                                height={130}
                                className="object-contain"
                            />
                            <p className="font-serif text-sm sm:text-base lg:text-lg text-gray-300 tracking-wide px-4">
                                © 2026 CEST Club, NITR. All rights reserved.
                            </p>
                        </div>

                        <div className="text-center md:text-right space-y-5">
                            <h4 className="text-[#f5b461] font-saman text-3xl sm:text-4xl lg:text-5xl tracking-wide">
                                Contact Us
                            </h4>
                            <div className="font-serif text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200 space-y-2">
                                <p>Join our WhatsApp Channel</p>
                                <p>smarakhnitrourkela@gmail.com</p>
                                <p>+91 99383 80312</p>
                                <p>+91 90788 10869</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 py-5 sm:py-6 text-center px-4">
                    <p className="font-serif text-sm sm:text-base lg:text-lg text-white tracking-wide">
                        Made with ❤️ by Team Webwiz
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
