import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const crimson = Crimson_Text({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-crimson",
});

export const metadata: Metadata = {
    title: "Smarak",
    description:
        "Smarak is brought to life by the combined efforts of the faculty and students of the Civil Engineering Department at NIT Rourkela. With faculty members providing their expertise and guidance, and students infusing fresh ideas and energy, our team ensures a seamless blend of learning, competition, and innovation. Together, we craft an experience that challenges, inspires, and pushes the boundaries of civil engineering.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${crimson.variable} ${inter.className}`}>
                <Toaster />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
