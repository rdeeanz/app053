import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">

                    {/* Left Side: Value Framing */}
                    <div className="md:w-1/2 p-8 md:p-12 bg-dark text-white flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-6">Investasi Keamanan</h3>
                        <p className="text-gray-400 mb-8 text-lg">
                            Bandingkan harga lisensi dengan kerugian jika satu proyek gagal total. Lisensi resmi adalah asuransi termurah untuk karir Anda.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Bebas rasa takut razia software",
                                "Update fitur terbaru otomatis",
                                "Akses AutoCAD Web & Mobile App",
                                "Prioritas support teknis"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="bg-solution/20 p-1 rounded-full">
                                        <Check className="text-solution" size={20} />
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side: CTA */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center text-center">
                        <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-2">
                            AutoCAD 2024 Official
                        </span>
                        <div className="text-5xl font-extrabold text-dark mb-2">
                            Promo
                        </div>
                        <p className="text-red-500 font-bold mb-8">
                            Stok Lisensi Promo Terbatas!
                        </p>

                        <a
                            href="https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20amankan%20data%20dengan%20AutoCAD%20Resmi"
                            className="w-full block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-1"
                        >
                            Chat WhatsApp Sekarang
                        </a>
                        <p className="mt-4 text-xs text-gray-400">
                            *Full garansi resmi Autodesk Indonesia. Faktur pajak tersedia.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;
