"use client";

export default function EventsHero() {
    return (
        <section className="relative py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h1
                    className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
                    style={{
                        fontFamily: "Saman, serif",
                        color: "#8B1A1A",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                    }}
                >
                    upcoming events
                </h1>
                <p className="text-lg md:text-xl text-[#8B1A1A] max-w-3xl mx-auto leading-relaxed font-serif">
                    Discover and register for exciting events. Join us for
                    competitions, workshops, and more to enhance your skills and
                    expand your network.
                </p>
            </div>
        </section>
    );
}
