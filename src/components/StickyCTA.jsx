import React, { useState, useEffect } from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-50 md:hidden"
                >
                    <div className="flex gap-3">
                        <a
                            href="https://wa.me/6281234567890"
                            className="flex-1 bg-green-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm"
                        >
                            <MessageCircle size={20} />
                            Chat Admin
                        </a>
                        <a
                            href="#pricing"
                            className="flex-1 bg-dark text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm"
                        >
                            <ShieldCheck size={20} />
                            Beli Resmi
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyCTA;
