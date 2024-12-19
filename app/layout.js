"use client";
import Footer from "@/components/Footer";
import "./globals.css";
import Image from "next/image";
import { useState } from "react";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="min-h-screen">
        {/* Header Section */}
        <header className="p-4 bg-gray-100">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/logo.png" alt="E-Learning Platform" width={100} height={50} />
              <h1 className="text-xl font-bold ml-1 hidden md:block co-primary">Blended OFPPT</h1>
            </div>

            {/* Hamburger Menu for Mobile */}
            <button
              className="block md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>

            {/* Navbar Links */}
            <nav
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute md:static top-20 left-0 w-full md:w-auto bg-gray-100 md:bg-transparent z-10 md:flex items-center md:space-x-6`}
            >
              <ul className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 p-4 md:p-0">
                <li>
                  <a href="/" className="hover:text-blue-500">Accueil</a>
                </li>
                <li>
                  <a href="/courses" className="hover:text-blue-500">Frormations</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-blue-500">À propos</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-500">Contact</a>
                </li>
                <li>
                  <a href="/login" className="hover:text-blue-500">Inscription</a>
                </li>
                <li className="md:ml-auto">
                  <a href="/login" className="hover:text-blue-500">Connexion</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
