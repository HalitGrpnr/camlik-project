import React from 'react';

const Contact = () => {
    return (
        <section
            id="contact"
            className="h-screen flex flex-col justify-center items-center text-center"
            style={{
                backgroundImage: 'url("/images/img.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-semibold mb-8">İletişim</h2>
                <p className="mt-4 text-lg mb-12">Fiyat bilgisi ve daha fazla detay için bizimle iletişime geçebilirsiniz.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Telefon ve E-posta Kartları */}
                    <div className="bg-white/30 p-6 rounded-lg shadow-md flex flex-col justify-between items-center">
                        <div className="flex items-center justify-center mb-4">
                            <i className="fas fa-phone-alt text-3xl mr-4 text-blue-500"></i>
                            <div>
                                <p className="text-lg text-center">+90 549 595 8512</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <i className="fas fa-envelope text-3xl mr-4 text-yellow-500"></i>
                            <div>
                                <p className="text-lg text-center">info@bulutemlak.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Adres ve Sosyal Medya Kartları */}
                    <div className="bg-white/30 p-6 rounded-lg shadow-md flex flex-col justify-between items-center">
                        <div className="space-y-6 mt-30">
                            <div className="flex items-center justify-center">
                                <i className="fab fa-facebook-square text-3xl mr-4 text-blue-600"></i>
                                <div>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 text-center">facebook.com/bulutemlak</a>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <i className="fab fa-instagram text-3xl mr-4 text-pink-600"></i>
                                <div>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-500 text-center">instagram.com/bulutemlak</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Adres Kartı */}
                    <div className="bg-white/30 p-6 rounded-lg shadow-md flex flex-col justify-between items-center">
                        <div className="flex items-center justify-center mb-4">
                            <i className="fas fa-map-marker-alt text-3xl mr-4 text-red-500"></i>
                            <div>
                                <p className="text-lg text-center">
                                    Yenimahalle<br />
                                    Ali Gaffar Okkan Cad. NO:56 <br />
                                    Atakum/Samsun
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
