"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { handleRegister } from "@/config";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

const navLinks = [
    { href: "/#about", label: "About Us" },
    { href: "/events", label: "Events" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/teams", label: "Teams" },
    { href: "/#contact", label: "Contact Us" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleClick() {
        if (isMenuOpen) setIsMenuOpen(false);
        handleRegister();
    }

    function handleBrochureDownload() {
        if (isMenuOpen) setIsMenuOpen(false);
        const link = document.createElement('a');
        link.href = '/brochure.pdf';
        link.download = 'SMARAK_Brochure.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <nav className="bg-[#980204] sticky top-0 z-50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/smarak-logo.svg"
                                alt="SMÀRÀK Logo"
                                className="h-7 sm:h-8 md:h-10 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-4 lg:gap-6">
                        {/* Desktop Links */}
                        <div
                            className={`hidden lg:flex items-center space-x-6 xl:space-x-8 ${poppins.className}`}
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-[#f5b461] hover:text-white transition-colors font-normal text-sm xl:text-base whitespace-nowrap"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop Buttons - Both styled same */}
                        <div className={`hidden lg:flex items-center gap-3 ${poppins.className}`}>
                            <button
                                onClick={handleBrochureDownload}
                                className="border-2 border-[#f5b461] text-[#f5b461] hover:bg-[#f5b461] hover:text-[#8B3333] px-5 xl:px-6 py-1.5 xl:py-2 rounded-full transition-all font-normal text-sm xl:text-base"
                            >
                                Brochure
                            </button>
                            <button
                                onClick={handleClick}
                                className="border-2 border-[#f5b461] text-[#f5b461] hover:bg-[#f5b461] hover:text-[#8B3333] px-5 xl:px-6 py-1.5 xl:py-2 rounded-full transition-all font-normal text-sm xl:text-base"
                            >
                                Register Now
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-[#FB9F2F] hover:text-white focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isMenuOpen ? (
                                        <path d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden absolute left-0 right-0 top-full bg-[#980204] overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                >
                    <div
                        className={`${poppins.className} py-4 space-y-2 border-t border-[#A64848]`}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block text-[#f5b461] hover:bg-[#A64848] transition-all duration-200 font-normal py-3 px-4 mx-2 rounded-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Buttons - Both styled same */}
                    <div className="pt-2 px-2 pb-5 space-y-2">
                        <button
                            onClick={handleBrochureDownload}
                            className="block border-2 border-[#f5b461] text-[#f5b461] hover:bg-[#f5b461] hover:text-[#8B3333] px-6 py-2.5 rounded-full transition-all duration-200 font-normal text-center w-full"
                        >
                            Brochure
                        </button>
                        <button
                            onClick={handleClick}
                            className="block border-2 border-[#f5b461] text-[#f5b461] hover:bg-[#f5b461] hover:text-[#8B3333] px-6 py-2.5 rounded-full transition-all duration-200 font-normal text-center w-full"
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}