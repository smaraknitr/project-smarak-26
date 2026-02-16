import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smarak",
  description: "Smarak is brought to life by the combined efforts of the faculty and students of the Civil Engineering Department at NIT Rourkela. With faculty members providing their expertise and guidance, and students infusing fresh ideas and energy, our team ensures a seamless blend of learning, competition, and innovation. Together, we craft an experience that challenges, inspires, and pushes the boundaries of civil engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
