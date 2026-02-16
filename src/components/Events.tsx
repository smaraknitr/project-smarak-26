"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { events } from "@/app/config/events";

const SCALE_CENTER = 1.08;
const SCALE_SIDE = 0.85;
const OPACITY_CENTER = 1;
const OPACITY_SIDE = 0.6;

export default function Events() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: false,
      skipSnaps: false,
      dragFree: false,
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      className="relative w-full min-h-[65vh] md:min-h-[75vw] lg:min-h-[90vh] overflow-x-hidden flex flex-col items-center justify-start gap-6 sm:gap-8 md:gap-12 pb-12 sm:bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/events.png')",
      }}
    >
      {/* heading */}
      <h1
        className="font-saman text-red-800 mt-[4vw] text-6xl md:text-6xl lg:text-[6rem] mb-[4vw] md:mb-16 "
        // style={{ fontSize: "clamp(2.5rem, 8vw, 9rem)", marginBottom: "2vh" }}
      >
        events
      </h1>

      {/* carousel — 1 card on mobile, 3 on desktop */}
      <div className="w-full mx-auto " ref={emblaRef}>
        <div className="flex">
          {events.map((event, i) => {
            const isCenter = i === selectedIndex;

            return (
              <div
                key={i}
                className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_45%] min-w-0 px-6 sm:px-[2.5vw] md:px-[5vw] xl:px-[8vw]"
              >
                <div
                  className="origin-center transition-all duration-400 ease-in-out"
                  style={{
                    transform: `scale(${isCenter ? SCALE_CENTER : SCALE_SIDE})`,
                    opacity: isCenter ? OPACITY_CENTER : OPACITY_SIDE,
                  }}
                >
                  <div
                    className="bg-[#F6A440] shadow-2xl"
                    style={{
                      borderRadius: "clamp(1rem, 2vw, 1.5rem)",
                      padding: "clamp(1.25rem, 2.5vw, 2rem)",
                    }}
                  >
                    <div
                      className="border bg-[#F6A440] rounded-xl"
                      style={{
                        height: "clamp(12rem, 28vh, 18rem)",
                        marginBottom: "clamp(1rem, 2vh, 1.5rem)",
                      }}
                    ></div>

                    <h2
                      className="font-saman"
                      style={{
                        fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
                        marginBottom: "clamp(0.25rem, 0.5vh, 0.5rem)",
                      }}
                    >
                      {event.title}
                    </h2>

                    <p
                      className="leading-relaxed"
                      style={{
                        fontSize: "clamp(0.7rem, 1vw, 0.875rem)",
                        marginBottom: "clamp(0.75rem, 1.5vh, 1rem)",
                      }}
                    >
                      {event.description}
                    </p>

                    <button
                      className="bg-[#980204] text-white rounded-full font-medium"
                      style={{
                        fontSize: "clamp(0.7rem, 1vw, 0.875rem)",
                        padding:
                          "clamp(0.35rem, 0.8vh, 0.5rem) clamp(1rem, 2vw, 1.25rem)",
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
