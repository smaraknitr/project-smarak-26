"use client";

export interface Event {
    id: number;
    title: string;
    description: string;
}

interface EventCardProps {
    event: Event;
}

export default function EventCard({ event }: EventCardProps) {
    return (
        <div className="bg-[#F6A440] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-[#FBD4A8] rounded-xl h-40 mb-4 border-2 border-[#E89654]"></div>
            <h3 className="text-2xl font-bold text-[#5A1A0F] mb-3 font-saman">
                {event.title}
            </h3>
            <p className="text-sm text-[#5A1A0F] mb-4 leading-relaxed">
                {event.description}
            </p>
            <button className="bg-[#8B1A1A] text-white px-6 py-2 rounded-full hover:bg-[#6B1515] transition-colors font-medium text-sm">
                Explore Now
            </button>
        </div>
    );
}
