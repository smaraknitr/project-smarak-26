"use client";

import EventCard, { Event } from "./EventCard";
import SectionHeader from "./SectionHeader";

interface EventsGridProps {
    title: string;
    events: Event[];
}

export default function EventsGrid({ title, events }: EventsGridProps) {
    return (
        <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <SectionHeader title={title} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </section>
    );
}
