import React from 'react';
import { FileWarning, Ban, Skull, Siren } from 'lucide-react';

const PainDetails = [
    {
        icon: <FileWarning className="w-12 h-12 text-urgent" />,
        title: "File Corrupt = Project Batal",
        desc: "Software bajakan memodifikasi file DLL inti. Efeknya? Algoritma save file tidak stabil. Bayangkan file DWG proyek 2 bulan Anda rusak permanen H-1 deadline. Tidak bisa di-recover.",
        bg: "bg-red-50"
    },
    {
        icon: <Skull className="w-12 h-12 text-urgent" />,
        title: "Malware & Ransomware",
        desc: "Crack tool itu pintu belakang (backdoor) untuk hacker. Data klien, password bank, dan privasi perusahaan Anda bisa dicuri atau dikunci sampai Anda bayar tebusan.",
        bg: "bg-gray-50 bg-white"
    },
    {
        icon: <Siren className="w-12 h-12 text-urgent" />,
        title: "Audit Hukum & Denda",
        desc: "BSA (Business Software Alliance) gencar melakukan audit di Indonesia. Tertangkap pakai bajakan? Denda ratusan juta dan reputasi hancur seketika di mata klien.",
        bg: "bg-red-50"
    },
    {
        icon: <Ban className="w-12 h-12 text-urgent" />,
        title: "Fitur AI & Update Diblokir",
        desc: "AutoCAD resmi punya fitur AI yang mempercepat kerja 40%. Bajakan? Stuck di versi lama, lambat, sering not responding, dan kalah saing dengan kompetitor.",
        bg: "bg-gray-50 bg-white"
    }
];

const PainPoints = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
                        Realita Pahit: Anda Sedang Berjudi dengan Nasib
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Setiap kali Anda menekan 'Save' di AutoCAD bajakan, Anda sedang memutar rolet Rusia.
                        Kapan pelurunya meledak? Bisa hari ini, bisa besok.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {PainDetails.map((item, idx) => (
                        <div key={idx} className={`p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow ${item.bg}`}>
                            <div className="mb-6 flex items-center gap-4">
                                <div className="p-3 bg-red-100 rounded-lg">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-dark">{item.title}</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
