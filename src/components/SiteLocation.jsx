import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold">Site Konumu</h2>
                <p className="mt-4 text-lg">Şehrin kalbinde, toplu ulaşıma yakın muhteşem bir konum</p>

                {/* Çamlık Sitesi Konumu */}
                <div className="mt-12">
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

            </div>
        </section>
    );
}

export default About;
