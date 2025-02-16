import React from 'react';

const Hero = () => {
    return (
        <section
            id="home"
            className="bg-cover bg-center h-96"
            style={{
                backgroundImage: "url('/images/hero-bg.jpg')",
                backgroundSize: "contain",  // Fotoğrafı tam olarak sığdırmak
                backgroundPosition: "center",  // Fotoğrafı ortalamak
                backgroundAttachment: "fixed",  // Sayfa kaydırıldıkça fotoğrafın sabit kalması
                backgroundRepeat: "no-repeat"  // Fotoğrafın tekrar etmemesi
            }}
        >
            <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
                <div className="text-center text-white">
                    <h1 className="text-4xl font-bold">Çamlık Sitesi</h1>
                    <p className="mt-4 text-xl">Geniş yaşam alanları, sosyal donatılar ve doğa ile iç içe bir yaşam. Her şey sizin için düşünüldü!</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
