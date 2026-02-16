"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import Slider from "@/components/slider";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function EventsPage() {
    const events = [
        {
  id: 1,
  title: 'SAHAYATRI',
  description: 'SAHAYATRI is a machine learning–based hackathon conducted under Smarak – The Civil Fest of NIT Rourkela. Participants will work with real-world accident data to build intelligent models and contribute toward creating safer and smarter road infrastructure by integrating civil engineering and data science. Participation is completely free for NIT Rourkela students, with a total cash prize pool of ₹25,000.',
},

    {
      id: 2,
      title: 'Gati Sheel',
      description: 'Gati Sheel is an innovative, team-based competition where participants will design and construct a functional roller coaster track using engineering principles. Teams will be evaluated based on the duration the marble remains in motion on the track and the overall aesthetics and structural creativity of their model. This competition challenges participants to apply concepts of physics, structural stability, and design efficiency, fostering teamwork, problem-solving, and innovation.',
    },
    {
      id: 3,
      title: 'Setu',
      description: 'Setu is a dynamic team-based competition where participants will design and construct a suspension bridge using specified materials. The structures will be evaluated based on maximum load-bearing capacity and aesthetic appeal. This event challenges teams to apply principles of structural engineering, material efficiency, and design innovation. The team achieving the highest overall score will be declared the winner, demonstrating excellence in both strength and creativity.',
    },
{
  id: 4,
  title: 'Pramanam',
  description: 'Pramanam is an engaging team-based quiz competition that tests participants’ fundamental knowledge across diverse subjects, including general awareness, current affairs, science, and history. Teams will compete in multiple challenging rounds that assess analytical thinking, problem-solving skills, and teamwork. The event promotes intellectual curiosity, knowledge retention, and a spirit of healthy competition.',
},

    {
      id: 5,
      title: 'Shilp Setu',
      description: 'Shilp Setu is a hands-on team-based competition where participants will design and construct a stable, load-bearing arch bridge using materials like sand, bricks, and water. This challenge tests structural engineering skills, creativity, and material efficiency. Bridges will be evaluated based on strength, load-bearing capacity, and overall design aesthetics. The competition encourages innovation in construction techniques while providing practical exposure to architectural and civil engineering principles.',
        },
    ];

    const workshops = [
        {
            id: 1,
            title: "STAAD Pro & Revit Workshop",
            description:
                "In this training session participants will dive into modern 3D modelling, design automation, structural load analysis, and real-world engineering applications. The session empowers learners with industry-ready skills to analyse, optimize, and model building structures. ",
        },
        {
            id: 2,
            title: "BIS Seminar",
            description:
                "This seminar offers students in-depth exposure to the Bureau of Indian Standards (BIS) and its significance in civil engineering. It covers essential industrial parameters, regulatory guidelines, and compliance requirements for construction materials and daily-use products. By understanding these standards, students will develop a strong foundation in safety, quality control, and industry best practices.",
        },
         {
      id: 3,
      title: '3D Printing Workshop',
      description: 'This interactive workshop explores the innovative applications of 3D printing in civil engineering. Students will learn about advanced construction techniques, material efficiency, and rapid prototyping using 3D printing technology. The session provides a comprehensive understanding of how digital fabrication is transforming the construction industry, from architectural modelling to large-scale infrastructure projects and it will be demonstrated by the NITR students only.',
    },
{
  id: 4,
  title: 'Professor Seminar',
  description: 'This expert-led seminar offers students valuable insights into the latest advancements in civil engineering. Renowned professors will discuss emerging technologies, sustainable construction practices, smart infrastructure, and cutting-edge research shaping the future of the field. The session encourages intellectual engagement and broadens students’ perspectives on evolving industry trends.',
},
    ];

    const categories = [
        { id: 1, name: "find us here", color: "#B8442E" },
        { id: 2, name: "teamessentials", color: "#A33B2B" },
        { id: 3, name: "nit rourkela", color: "#AB3726" },
    ];

    return (
        <div className="min-h-screen bg-[#F5EFE6]">

            {/* Hero Section */}
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
                    <p className="text-lg md:text-xl text-[#8B1A1A] max-w-3xl mx-auto leading-relaxed">
                        Discover and register for exciting events. Join us for
                        competitions, workshops, and more to enhance your skills
                        and expand your network.
                    </p>
                </div>
            </section>

            {/* Flagship Events Section */}
            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center mb-12 gap-4">
                        <Image
                            src="/images/arrow-left.png"
                            alt="arrow left"
                            width={150}
                            height={30}
                            className="object-contain"
                        />
                        <div>
                            <h2
                                className={`px-4 text-3xl md:text-4xl font-bold text-[#8B1A1A] ${poppins.className}`}
                            >
                                Flagship Events
                            </h2>
                        </div>
                        <Image
                            src="/images/arrow-right.png"
                            alt="arrow right"
                            width={150}
                            height={30}
                            className="object-contain"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="bg-gradient-to-br from-[#F5A86E] to-[#F08A3C] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
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
                        ))}
                    </div>
                </div>
            </section>

            {/* Scrolling Text Banner */}
            <Slider />

            {/* Workshop & Seminar Section */}
            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center mb-12 gap-4">
                        <Image
                            src="/images/arrow-left.png"
                            alt="arrow left"
                            width={150}
                            height={30}
                            className="object-contain"
                        />
                        <div>
                            <h2
                                className={`px-4 text-3xl md:text-4xl font-bold text-[#8B1A1A] ${poppins.className}`}
                            >
                                Workshop & Seminar
                            </h2>
                        </div>
                        <Image
                            src="/images/arrow-right.png"
                            alt="arrow right"
                            width={150}
                            height={30}
                            className="object-contain"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {workshops.map((workshop) => (
                            <div
                                key={workshop.id}
                                className="bg-gradient-to-br from-[#F5A86E] to-[#F08A3C] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="bg-[#FBD4A8] rounded-xl h-40 mb-4 border-2 border-[#E89654]"></div>
                                <h3 className="text-2xl font-bold text-[#5A1A0F] mb-3 font-saman">
                                    {workshop.title}
                                </h3>
                                <p className="text-sm text-[#5A1A0F] mb-4 leading-relaxed">
                                    {workshop.description}
                                </p>
                                <button className="bg-[#8B1A1A] text-white px-6 py-2 rounded-full hover:bg-[#6B1515] transition-colors font-medium text-sm">
                                    Explore Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scrolling Text Banner */}
            <Slider />

           
           
        </div>
    );
}
