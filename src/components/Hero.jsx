import React from 'react';
import { AlertTriangle, ChevronRight, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative bg-dark text-white overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-trust-light/20 via-dark to-dark opacity-50"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-urgent/10 border border-urgent/30 text-urgent px-4 py-2 rounded-full mb-8 font-semibold text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(216,0,50,0.3)]"
                >
                    <ShieldAlert size={18} className="animate-pulse" />
                    Peringatan Keras Untuk Drafter & Engineer
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
                    <span className="text-white">AutoCAD Bajakan Anda</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-urgent to-red-600 drop-shadow-sm">
                        Sedang Menghancurkan
                    </span><br />
                    Masa Depan Proyek.
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                    File corrupt di malam deadline? Crash saat rendering akhir? Malware ransomware?
                    <span className="text-white block mt-2 font-bold">Itu bukan "kebetulan". Itu harga mahal dari software gratisan.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#pricing"
                        className="w-full sm:w-auto bg-urgent hover:bg-urgent-hover text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-[0_4px_20px_rgba(216,0,50,0.5)] flex items-center justify-center gap-2"
                    >
                        HENTIKAN RISIKO SEKARANG
                        <ChevronRight size={20} />
                    </a>
                    <a
                        href="https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20konsultasi%20AutoCAD%20Resmi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:border-white text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all"
                    >
                        Konsultasi Admin (24/7)
                    </a>
                </div>

                <p className="mt-8 text-sm text-gray-500">
                    *Jangan sampai klien Anda tahu Anda pakai software bajakan.
                </p>
            </div>
        </section>
    );
};

export default Hero;
