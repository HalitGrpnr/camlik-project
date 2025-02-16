import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
    const settings = {
        dots: true,  // Sayfalama noktaları
        infinite: true, // Döngü
        speed: 500, // Geçiş hızı
        slidesToShow: 3, // Büyük ekranda 3 slayt
        slidesToScroll: 1, // Her kaydırmada 1 slayt kaydırma
        autoplay: true, // Otomatik kaydırma
        autoplaySpeed: 3000, // 3 saniye arayla kaydırma
        arrows: true, // Oklar aktif
        nextArrow: <button className="slick-next"><i className="fas fa-chevron-right"></i></button>, // Sağ ok
        prevArrow: <button className="slick-prev"><i className="fas fa-chevron-left"></i></button>, // Sol ok
        responsive: [
            {
                breakpoint: 1024, // 1024px'den küçük ekranlarda
                settings: {
                    slidesToShow: 2, // 2 slayt göster
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // 768px'den küçük ekranlarda
                settings: {
                    slidesToShow: 1, // 1 slayt göster
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section id="about" className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">Site Özellikleri</h2>
                <p className="mt-4 text-lg mb-12">145 m² net kullanım alanı, havuz, basket sahası, kamelyalarıyla lüks ve konforun adresi!</p>

                <div className="mt-8">
                    <Slider {...settings}>
                        {/* Card 1 */}
                        <div className="p-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">Havuz</h3>
                                <p className="mt-4">Geniş yüzme havuzuyla yazın keyfini çıkarın.</p>
                                <img className="mt-4 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105" src="https://imganuncios.mitula.net/havuzlu_sitede_mukemmel_11_daire_8240000739149771087.jpg" alt="Havuz" />
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="p-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">Basket Sahası</h3>
                                <p className="mt-4">Sağlıklı bir yaşam için basket sahasında spor yapın.</p>
                                <img className="mt-4 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105" src="https://www.meral.ltd/assets/files/contents/istanbul-acar-blu-da-3-1-lux-daire-2122412298.37" alt="Basket Sahası" />
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="p-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">Kamelyalar</h3>
                                <p className="mt-4">Ailenizle huzurlu vakit geçirebileceğiniz kamelyalar.</p>
                                <img className="mt-4 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105" src="https://i0.shbdn.com/photos/82/33/65/x5_12088233659xo.jpg" alt="Kamelyalar" />
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="p-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">Otopark</h3>
                                <p className="mt-4">Açık ve kapalı otoparklar ile aracınız her zaman güvende.</p>
                                <img className="mt-4 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105" src="https://sermedhavuz.com/wp-content/uploads/2024/05/Prefabrik-Havuz-Kurulumu-icin-En-Uygun-Bahce.jpg" alt="Site Planı" />
                            </div>
                        </div>
                        {/* Card 5 */}
                        <div className="p-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">Mutfak</h3>
                                <p className="mt-4">Modern ve şık bir mutfak tasarımı ile hayatınızı kolaylaştırın.</p>
                                <img className="mt-4 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105" src="https://static.ticimax.cloud/34274/uploads/urunresimleri/buyuk/greena-mutfak-dolabi-366176.jpg" alt="Daire Mutfak" />
                            </div>
                        </div>
                        {/* Card 6 */}
                        <div className="p-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">Oturma Odası</h3>
                                <p className="mt-4">Ailenizle rahatça vakit geçirebileceğiniz ferah bir oturma odası.</p>
                                <img className="mt-4 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105" src="https://www.cihancit.com.tr/depo/images/category/84fedc4c-6397-4f05-89b8-e2c97d82bc76.jpeg" alt="Daire Oturma Odası" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default About;
