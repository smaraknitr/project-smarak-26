'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: 'स्पर्धा',
      description: 'Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.',
    },
    {
      id: 2,
      title: 'स्पर्धा',
      description: 'Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.',
    },
    {
      id: 3,
      title: 'स्पर्धा',
      description: 'Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.',
    },
    {
      id: 4,
      title: 'स्पर्धा',
      description: 'Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.',
    },
    {
      id: 5,
      title: 'स्पर्धा',
      description: 'Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.',
    },
    {
      id: 6,
      title: 'स्पर्धा',
      description: 'Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.',
    },
  ];

  const workshops = [
    {
      id: 1,
      title: 'स्पर्धा',
      description: 'Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.',
    },
    {
      id: 2,
      title: 'स्पर्धा',
      description: 'Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.',
    },
    {
      id: 3,
      title: 'स्पर्धा',
      description: 'Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.',
    },
    {
      id: 4,
      title: 'स्पर्धा',
      description: 'Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.',
    },
    {
      id: 5,
      title: 'स्पर्धा',
      description: 'Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.',
    },
    {
      id: 6,
      title: 'स्पर्धा',
      description: 'Join us a thrematic team -based competition where participants will design and construct a structure bridge using specified materials.',
    },
  ];

  const categories = [
    { id: 1, name: 'find us here', color: '#B8442E' },
    { id: 2, name: 'teamessentials', color: '#A33B2B' },
    { id: 3, name: 'nit rourkela', color: '#AB3726' },
  ];

  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            style={{ 
              fontFamily: 'Saman, serif',
              color: '#8B1A1A',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            upcoming events
          </h1>
          <p className="text-lg md:text-xl text-[#8B1A1A] max-w-3xl mx-auto leading-relaxed">
            Discover and register for exciting events. Join us for competitions, workshops, and more to enhance your skills and expand your network.
          </p>
        </div>
      </section>

      {/* Flagship Events Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12 gap-4">
            <Image src="/images/arrow-left.png" alt="arrow left" width={150} height={30} className="object-contain" />
            <div>
              <h2 className={`px-4 text-3xl md:text-4xl font-bold text-[#8B1A1A] ${poppins.className}`}>
                Flagship Events
              </h2>
            </div>
            <Image src="/images/arrow-right.png" alt="arrow right" width={150} height={30} className="object-contain" />
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
      <div className="bg-[#8B1A1A] py-3 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll">
          <span className="text-[#F5DEB3] text-xl font-bold mx-8" style={{ fontFamily: 'Saman, serif' }}>
            shaping architecture through engineering thought
          </span>
          <span className="text-[#F5DEB3] text-xl mx-4">||</span>
          <span className="text-[#F5DEB3] text-xl font-bold mx-8" style={{ fontFamily: 'Saman, serif' }}>
            shaping architecture through engineering thought
          </span>
          <span className="text-[#F5DEB3] text-xl mx-4">||</span>
          <span className="text-[#F5DEB3] text-xl font-bold mx-8" style={{ fontFamily: 'Saman, serif' }}>
            shaping architecture through engineering thought
          </span>
        </div>
      </div>

      {/* Workshop & Seminar Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12 gap-4">
            <Image src="/images/arrow-left.png" alt="arrow left" width={150} height={30} className="object-contain" />
            <div>
              <h2 className={`px-4 text-3xl md:text-4xl font-bold text-[#8B1A1A] ${poppins.className}`}>
                Workshop & Seminar
              </h2>
            </div>
            <Image src="/images/arrow-right.png" alt="arrow right" width={150} height={30} className="object-contain" />
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
      <div className="bg-[#8B1A1A] py-3 overflow-hidden mb-12">
        <div className="whitespace-nowrap animate-scroll">
          <span className="text-[#F5DEB3] text-xl font-bold mx-8" style={{ fontFamily: 'Saman, serif' }}>
            shaping architecture through engineering thought
          </span>
          <span className="text-[#F5DEB3] text-xl mx-4">||</span>
          <span className="text-[#F5DEB3] text-xl font-bold mx-8" style={{ fontFamily: 'Saman, serif' }}>
            shaping architecture through engineering thought
          </span>
          <span className="text-[#F5DEB3] text-xl mx-4">||</span>
          <span className="text-[#F5DEB3] text-xl font-bold mx-8" style={{ fontFamily: 'Saman, serif' }}>
            shaping architecture through engineering thought
          </span>
        </div>
      </div>

      {/* Category Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div 
                  className="h-48"
                  style={{ backgroundColor: category.color }}
                ></div>
                <div className="bg-gradient-to-br from-[#F5A86E] to-[#F08A3C] py-4">
                  <h3 
                    className="text-2xl font-bold text-center text-[#5A1A0F]"
                    style={{ fontFamily: 'Saman, serif' }}
                  >
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#505050] text-white py-12 px-4 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
            {/* Address Section */}
            <div>
              <h3 
                className="text-2xl font-bold mb-4 text-[#F5A86E]" 
                style={{ fontFamily: 'Saman, serif' }}
              >
                address
              </h3>
              <p className="text-sm text-white leading-relaxed">
                National Institute of Technology Rourkela<br />
                Odisha, India, 769008
              </p>
            </div>

            {/* NIT Logo Center */}
            <div className="flex justify-center items-start">
              <div className="rounded-full p-6 w-32 h-32 flex items-center justify-center">
                <img src="/nit-logo.png" alt="NIT Rourkela" className="w-full h-full" />
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-left md:text-right">
              <h3 
                className="text-2xl font-bold mb-4 text-[#F5A86E]" 
                style={{ fontFamily: 'Saman, serif' }}
              >
                contact us
              </h3>
              <div className="text-sm text-white leading-relaxed">
                <a 
                  href="https://whatsapp.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-[#F5A86E] transition-colors"
                >
                  Join our WhatsApp Channel
                </a>
                <br />
                <a 
                  href="mailto:smaraknitrourkela@gmail.com"
                  className="hover:text-[#F5A86E] transition-colors"
                >
                  smaraknitrourkela@gmail.com
                </a>
                <br />
                <span>9905526212</span>
                <br />
                <span>9078840607</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-gray-600">
            <p className="text-sm text-white mb-6">
              © Copyright 2026 CEST Club, NITR. All Rights Reserved.
            </p>
            <p className="text-sm text-white">
              Made with <span className="text-red-500">❤</span> by Webwiz
            </p>
          </div>
        </div>
      </footer>

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
          display: inline-block;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
