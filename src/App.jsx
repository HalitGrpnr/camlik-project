import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import SiteLocation from "./components/SiteLocation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const sections = ["hero", "about", "site-location", "contact"];

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToSection = (index) => {
        if (index >= 0 && index < sections.length) {
            document.getElementById(sections[index]).scrollIntoView({
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    // Fare tekerleği ile tam ekran geçişi
    const handleWheel = (event) => {
        if (event.deltaY > 0) {
            scrollToSection(currentIndex + 1);
        } else if (event.deltaY < 0) {
            scrollToSection(currentIndex - 1);
        }
    };

    // Klavye ok tuşları ile kaydırma
    const handleKeyDown = (event) => {
        if (event.key === "ArrowDown") {
            scrollToSection(currentIndex + 1);
        } else if (event.key === "ArrowUp") {
            scrollToSection(currentIndex - 1);
        }
    };

    useEffect(() => {
        window.addEventListener("wheel", handleWheel);
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentIndex]);

    return (
        <div>
            <div id="hero">
                <Hero scrollToSection={() => scrollToSection(1)} />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="site-location">
                <SiteLocation />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default App;
