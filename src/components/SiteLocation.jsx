import React from "react";

const SiteLocation = () => {
    const scrollToContact = () => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="site-location"
            className="h-screen flex flex-col justify-center items-center text-center p-4"
            style={{
                backgroundImage: 'url("/images/img.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="w-full px-6">
                <h2 className="text-4xl font-bold">Site Konumu</h2>
                <p className="mt-4 text-lg md:text-xl">Şehrin kalbinde, toplu ulaşıma yakın muhteşem bir konum</p>

                <div className="mt-12 w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.5350977571297!2d36.23814567666787!3d41.34072167130583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4088790cb0d85f0b%3A0x5cbd3e698542a2ce!2sBulut%20Emlak!5e0!3m2!1str!2str!4v1739706154065!5m2!1str!2str"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="site map"
                    ></iframe>
                </div>

                {/* Buton ile iletişim bölümüne geçiş */}
                <button
                    onClick={scrollToContact}
                    className="mt-8 px-6 py-3 bg-white text-brown-800 font-semibold rounded-full shadow-lg transition duration-300 hover:bg-gray-200"
                >
                    İletişime Geç
                </button>
            </div>
        </section>
    );
};

export default SiteLocation;
