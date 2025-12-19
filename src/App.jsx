import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import StickyCTA from './components/StickyCTA';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Hero />
            <PainPoints />
            <Comparison />
            <Pricing />

            {/* Footer */}
            <footer className="bg-dark text-gray-400 py-12 text-center text-sm">
                <div className="container mx-auto px-4">
                    <p className="mb-4">&copy; {new Date().getFullYear()} Official Software Reseller Indonesia.</p>
                    <p className="max-w-2xl mx-auto leading-relaxed opacity-60">
                        Disclaimer: Kami adalah partner resmi yang berkomitmen memberantas pembajakan software demi kemajuan industri konstruksi Indonesia. Semua merek dagang adalah milik masing-masing pemiliknya.
                    </p>
                </div>
            </footer>

            <StickyCTA />
        </div>
    );
}

export default App;
