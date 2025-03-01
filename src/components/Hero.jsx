import React from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

const Hero = ({ scrollToSection }) => {
    return (
        <section
            className="h-screen flex flex-col justify-center items-center text-center relative p-4"
            style={{
                backgroundImage: 'url("/images/hero-bg.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.5]"></div>
            <div className="relative z-10 p-8 rounded-lg text-[#FFFFFF] bg-[rgba(0,0,0,0.3)] shadow-lg max-w-xl w-full">
                <h1 className="text-4xl md:text-6xl font-bold text-[#FFFFFF]">Çamlık Sitesi</h1>
                <p className="mt-4 text-lg md:text-xl text-[#F1F1F1]">Geniş yaşam alanları, sosyal donatılar ve doğa ile iç içe bir yaşam. Yaşamı güzelleştiren proje!</p>
            </div>

            {/* Yanıp sönen aşağı ok */}
            <div
                className="absolute bottom-10 flex justify-center items-center animate-bounce cursor-pointer"
                onClick={scrollToSection}
            >
                <ChevronDoubleDownIcon className="w-12 h-12 text-white opacity-80 hover:opacity-100 transition duration-300" />
            </div>
        </section>
    );
};

export default Hero;
