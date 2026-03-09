"use client";

import React from "react";
import Image from "next/image";
import { convenors } from "../app/config/convenor";

export default function Convenor() {
  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 bg-[url('/images/bg.png')] bg-[length:100%_auto] bg-repeat bg-top overflow-hidden">
      <div className="absolute inset-0 bg-[#f5e6cc]/20"></div>

      <div className="relative z-10 w-full flex flex-col items-center">

     
        <h2 className="text-[#980204] text-4xl sm:text-5xl md:text-7xl font-saman tracking-widest mb-10">
          Convenor
        </h2>

       
        <div className="flex flex-wrap justify-center gap-6 px-6 md:px-12 w-full max-w-5xl mx-auto">
          {convenors.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[250px] rounded-3xl overflow-hidden shadow-lg border-[4px] border-[#f5b461] hover:scale-105 transition-transform duration-300"
            >
              
             
              <div className="relative w-full aspect-square bg-[#980204] flex items-center justify-center p-4">

                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/Vector.svg"
                    alt="vector"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="relative w-[85%] aspect-square rounded-full overflow-hidden">
                  <Image
                    src={card.imageSrc}
                    alt={card.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

             
              <div className="bg-gradient-to-b from-[#f5b461] to-[#e8a047] py-3 flex flex-col items-center">

                <h3 className="text-xl font-bold text-[#7a1a0f]">
                  {card.name}
                </h3>

                <p className="text-xs font-semibold text-[#7a1a0f] uppercase tracking-widest">
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