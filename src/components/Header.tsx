
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 p-2 rounded-lg shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21l-8.228-3.657a.723.723 0 01-.41-.671V6.244c0-.312.2-.593.5-.688l8.129-2.557a.726.726 0 01.417 0l8.129 2.557c.3.095.5.376.5.688v10.428c0 .287-.168.55-.41.67L12 21z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800 leading-tight">STEAM-Compassionate</h1>
            <p className="text-[10px] uppercase tracking-wider text-emerald-600 font-bold">Trainer Assistant • Indonesia</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium">Expert Mode ON</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
