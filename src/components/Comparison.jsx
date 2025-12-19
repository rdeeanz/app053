import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const Comparison = () => {
    return (
        <section className="py-20 bg-dark text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Pilih Mana: Profesional atau Penjahat?
                    </h2>
                    <p className="text-gray-400">
                        Perbedaan antara sukses jangka panjang dan kegagalan mendadak.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full max-w-4xl mx-auto border-collapse">
                        <thead>
                            <tr>
                                <th className="p-4 text-left text-lg font-bold text-gray-400 border-b border-gray-700 w-1/3">Fitur & Keamanan</th>
                                <th className="p-4 text-center text-xl font-bold text-urgent border-b border-gray-700 bg-urgent/5 w-1/3">
                                    BAJAKAN (Crack)
                                    <span className="block text-xs font-normal text-red-300 mt-1">Berisiko Tinggi</span>
                                </th>
                                <th className="p-4 text-center text-xl font-bold text-solution border-b border-gray-700 bg-solution/5 w-1/3">
                                    RESMI (Official)
                                    <span className="block text-xs font-normal text-green-300 mt-1">Aman & Legal</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Stabilitas File DWG", "Sering Corrupt/Rusak", "100% Stabil & Aman"],
                                ["Keamanan Data", "Rawan Malware/Virus", "Terproteksi Penuh"],
                                ["Legalitas Hukum", "Ilegal (Pidana/Denda)", "Legal (Sertifikat Resmi)"],
                                ["Akses Fitur AI & Cloud", "Tidak Bisa", "Full Access (AutoCAD Web)"],
                                ["Technical Support", "Tidak Ada (Google Sendiri)", "Support Resmi Autodesk"],
                                ["Ketenangan Pikiran", "0% (Was-was Tiap Hari)", "100% (Fokus Berkarya)"]
                            ].map(([feature, bad, good], idx) => (
                                <tr key={idx} className="border-b border-gray-700 hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium text-gray-300">{feature}</td>
                                    <td className="p-4 text-center bg-urgent/5">
                                        <div className="flex flex-col items-center gap-2 text-red-400 font-bold">
                                            <XCircle size={24} />
                                            {bad}
                                        </div>
                                    </td>
                                    <td className="p-4 text-center bg-solution/5">
                                        <div className="flex flex-col items-center gap-2 text-solution font-bold">
                                            <CheckCircle2 size={24} />
                                            {good}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
