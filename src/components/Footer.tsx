
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          Dirancang untuk Trainer STEAM Indonesia yang berdedikasi.
        </p>
        <p className="text-gray-400 text-xs mt-2">
          &copy; {new Date().getFullYear()} STEAM-Compassionate Assistant. Menggunakan Teknologi AI untuk Kebaikan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
