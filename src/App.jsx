import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Simulasi proses loading selama 2 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Tambahkan event listener untuk mousemove
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Bayangan Kursor */}
          <div
            className="mouse-shadow bg-gradient-to-r from-purple-200 to-purple-900"
            style={{
              position: "fixed",
              top: mousePosition.y + 5, // Offset sedikit di bawah kursor
              left: mousePosition.x + 5,
              width: "150px",
              height: "150px",
              filter: "blur(40px)", // Membuat efek bayangan
              pointerEvents: "none", // Tidak menghalangi interaksi
              zIndex: 9999, // Tetap di atas elemen lainnya
            }}
          ></div>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Experience />
          <Contact />
          <Footer />
          <Reveal />
        </>
      )}
    </>
  );
}
