import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const openModal = (image) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage(null);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024, // 1024px ve daha geniş ekranlarda
                settings: {
                    slidesToShow: 3, // Daha geniş ekranlarda 3 öğe göster
                },
            },
            {
                breakpoint: 640, // 640px ve daha küçük ekranlarda
                settings: {
                    slidesToShow: 1, // Küçük ekranlarda sadece 1 öğe göster
                },
            },
        ],
    };

    // Smooth Scroll to Site Location Section
    const scrollToSiteLocation = () => {
        const section = document.getElementById("site-location");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="about"
            className="h-screen flex flex-col justify-center items-center text-center"
            style={{
                backgroundImage: 'url("/images/img.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">Site Özellikleri</h2>
                <p className="mt-4 text-lg mb-12">145 m² net kullanım alanı, havuz, basket sahası, kamelyalarıyla lüks ve konforun adresi!</p>

                <div className="mt-8">
                    <Slider {...settings}>
                        {/* Card 1 */}
                        <div className="p-4 flex flex-col justify-between">
                            <div className="bg-white/30 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                                <h3 className="text-xl font-semibold">Site Planı</h3>
                                 <p className="mt-4 text-ellipsis overflow-hidden line-clamp-3">Geniş oturum alanında kurgulanmış site mimarisi.</p>
                                <img
                                    className="mt-4 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer"
                                    src="/images/plan-1.jpg"
                                    alt="plan"
                                    loading="lazy"
                                    onClick={() => openModal("/images/plan-1.jpg")}
                                />
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="p-4 flex flex-col justify-between">
                            <div className="bg-white/30 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                                <h3 className="text-xl font-semibold">Havuz</h3>
                                 <p className="mt-4 text-ellipsis overflow-hidden line-clamp-3">Geniş yüzme havuzuyla yazın keyfini çıkarın.</p>
                                <img
                                    className="mt-4 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer"
                                    src="/images/havuz-1.jpeg"
                                    alt="Havuz"
                                    loading="lazy"
                                    onClick={() => openModal("/images/havuz-1.jpeg")}
                                />
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="p-4 flex flex-col justify-between">
                            <div className="bg-white/30 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                                <h3 className="text-xl font-semibold">Basket Sahası</h3>
                                 <p className="mt-4 text-ellipsis overflow-hidden line-clamp-3">Sağlıklı bir yaşam için basket sahasında spor yapın.</p>
                                <img
                                    className="mt-4 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer"
                                    src="/images/basket-1.jpeg"
                                    alt="Basket Sahası"
                                    loading="lazy"
                                    onClick={() => openModal("/images/basket-1.jpeg")}
                                />
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="p-4 flex flex-col justify-between">
                            <div className="bg-white/30 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                                <h3 className="text-xl font-semibold">Sosyal Alanlar</h3>
                                 <p className="mt-4 text-ellipsis overflow-hidden line-clamp-3">Ailenizle huzurlu vakit geçirebileceğiniz kamelyalar.</p>
                                <img
                                    className="mt-4 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer"
                                    src="/images/kamelya-1.jpeg"
                                    alt="kamelya"
                                    loading="lazy"
                                    onClick={() => openModal("/images/kamelya-1.jpeg")}
                                />
                            </div>
                        </div>
                        {/* Card 5*/}
                        <div className="p-4 flex flex-col justify-between">
                            <div className="bg-white/30 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                                <h3 className="text-xl font-semibold">Çocuk Park</h3>
                                 <p className="mt-4 text-ellipsis overflow-hidden line-clamp-3">Çocukların güvenle eğlenebileceği park alanları.</p>
                                <img
                                    className="mt-4 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer"
                                    src="/images/park-1.jpg"
                                    alt="park"
                                    loading="lazy"
                                    onClick={() => openModal("/images/park-1.jpg")}
                                />
                            </div>
                        </div>
                        {/* Card 6*/}
                        <div className="p-4 flex flex-col justify-between">
                            <div className="bg-white/30 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                                <h3 className="text-xl font-semibold">Otopark</h3>
                                 <p className="mt-4 text-ellipsis overflow-hidden line-clamp-3">Açık ve kapalı otoparklar ile aracınız her zaman güvende.</p>
                                <img
                                    className="mt-4 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer"
                                    src="/images/otopark-1.jpg"
                                    alt="otopark"
                                    loading="lazy"
                                    onClick={() => openModal("/images/otopark-1.jpg")}
                                />
                            </div>
                        </div>
                        {/* Card 7*/}
                        <div className="p-4 flex flex-col justify-between">
                            <div className="bg-white/30 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                                <h3 className="text-xl font-semibold">Mutfak</h3>
                                 <p className="mt-4 text-ellipsis overflow-hidden line-clamp-3">Modern ve şık bir mutfak tasarımı ile hayatınızı kolaylaştırın.</p>
                                <img
                                    className="mt-4 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer"
                                    src="/images/mutfak-1.jpeg"
                                    alt="mutfak"
                                    loading="lazy"
                                    onClick={() => openModal("/images/mutfak-1.jpeg")}
                                />
                            </div>
                        </div>
                        {/* Card 8*/}
                        <div className="p-4 flex flex-col justify-between">
                            <div className="bg-white/30 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                                <h3 className="text-xl font-semibold">Oturma Odası</h3>
                                 <p className="mt-4 text-ellipsis overflow-hidden line-clamp-3">Ailenizle rahatça vakit geçirebileceğiniz ferah bir oturma odası.</p>
                                <img
                                    className="mt-4 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer"
                                    src="/images/oturma-1.jpg"
                                    alt="oturma"
                                    loading="lazy"
                                    onClick={() => openModal("/images/oturma-1.jpg")}
                                />
                            </div>
                        </div>
                        {/* Card 9*/}
                        <div className="p-4 flex flex-col justify-between">
                            <div className="bg-white/30 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                                <h3 className="text-xl font-semibold">Yatak Odası</h3>
                                 <p className="mt-4 text-ellipsis overflow-hidden line-clamp-3">Zarif ve modern tasarımıyla geniş yatak odası.</p>
                                <img
                                    className="mt-4 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer"
                                    src="/images/yatak-2.jpg"
                                    alt="yatak"
                                    loading="lazy"
                                    onClick={() => openModal("/images/yatak-2.jpg")}
                                />
                            </div>
                        </div>
                    </Slider>
                </div>

                {/* Yavaşça kayan ok ile Site Konumuna geçiş */}
                <div
                    onClick={scrollToSiteLocation}
                    className="mt-6 cursor-pointer flex flex-col items-center justify-center space-y-2"
                    title="Site Konumuna Git"
                >
                    <span className="text-white text-lg">Site Konumunu Gör</span>
                    <div className="animate-bounce">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-8 h-8 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="relative bg-white/90 p-4 rounded-lg max-w-lg w-full">
                        <button className="absolute top-2 right-2 text-gray-700" onClick={closeModal}>
                            ✖
                        </button>
                        <img src={modalImage} alt="Modal" className="rounded-lg w-full" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default About;
