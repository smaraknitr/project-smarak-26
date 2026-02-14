'use client'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <section className="relative w-full bg-[url('/images/bg.png')] bg-cover bg-center overflow-hidden">

            {/* Optional light overlay */}
            <div className="absolute inset-0 bg-[#f5e6cc]/5"></div>

            <div className="relative z-20 py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

                {["find us here", "team smarak", "nit rourkela"].map((title, i) => (
                    <div key={i} className="rounded-3xl overflow-hidden shadow-lg border-[6px] border-[#f5b461]">

                        <div className="bg-gradient-to-b from-[#b83a2f] to-[#8b2a1f] h-56 flex items-center justify-center">
                            <span className="text-white/30 text-3xl font-saman">image</span>
                        </div>

                        <div className="bg-gradient-to-b from-[#f5b461] to-[#e8a047] py-4">
                            <h3 className="text-center text-[#7a1a0f] font-saman text-3xl tracking-wide">
                                {title}
                            </h3>
                        </div>

                    </div>
                ))}

            </div>

            <div className="relative z-20 bg-[#5a5a5a]/90 py-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center text-white">

                    <div>
                        <h4 className="text-[#f5b461] font-saman text-5xl mb-3">
                            address
                        </h4>
                        <p className="font-saman text-base leading-relaxed">
                            national institute of technology rourkela<br />
                            odisha, india, 769008
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-28 h-28 mx-auto mb-3">
                            <Image
                                src="/images/nit-logo.png"
                                alt="NIT Logo"
                                width={128}
                                height={128}
                                className="object-contain"
                            />
                        </div>
                        <p className="font-saman text-sm">
                            © copyright 2026 cest club, nitr. all rights reserved.
                        </p>
                    </div>

                    <div className="text-right">
                        <h4 className="text-[#f5b461] font-saman text-5xl mb-3">
                            contact us
                        </h4>
                        <div className="font-saman text-base leading-relaxed">
                            <p>join our whatsapp channel</p>
                            <p>smarakhnitrourkela@gmail.com</p>
                            <p>9938380312</p>
                            <p>9078810869</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Footer