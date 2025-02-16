import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gray-700 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">İletişim</h2>
                <p className="mt-4 text-lg mb-12">Fiyat bilgisi ve daha fazla detay için bizimle iletişime geçebilirsiniz.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Telefon ve E-posta Kartları */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-start mb-4">
                            <i className="fas fa-phone-alt text-3xl mr-4 text-blue-500"></i>
                            <div>
                                <p className="text-lg">+90 123 456 7890</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-start mb-4">
                            <i className="fas fa-phone-alt text-3xl mr-4 text-blue-500"></i>
                            <div>
                                <p className="text-lg">+90 123 456 7890</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-start">
                            <i className="fas fa-envelope text-3xl mr-4 text-yellow-500"></i>
                            <div>
                                <p className="text-lg">info@bulutemlak.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Adres ve Sosyal Medya Kartları */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-start mb-4">
                            <i className="fas fa-map-marker-alt text-3xl mr-4 text-red-500"></i>
                            <div>
                                <p className="text-lg">Bulut Emlak, Samsun, Türkiye</p>
                            </div>
                        </div>

                        <div className="space-y-6 mt-8">
                            <div className="flex items-center justify-start">
                                <i className="fab fa-facebook-square text-3xl mr-4 text-blue-600"></i>
                                <div>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500">facebook.com/bulutemlak</a>
                                </div>
                            </div>

                            <div className="flex items-center justify-start">
                                <i className="fab fa-instagram text-3xl mr-4 text-pink-600"></i>
                                <div>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-500">instagram.com/bulutemlak</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Konum Kartı */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-gray-800 p-6 rounded-lg shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.740026627941!2d36.27230337666689!3d41.31451887130919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40887843f4d194e1%3A0x51a9bd91c42dcc6e!2sMevlana%2C%20804.%20Sk.%2C%2055200%20Atakum%2FSamsun!5e0!3m2!1str!2str!4v1739704184861!5m2!1str!2str"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Contact Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
