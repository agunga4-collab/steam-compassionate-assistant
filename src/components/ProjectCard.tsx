
import React from 'react';
import { SteamProject } from '../types';

interface ProjectCardProps {
  project: SteamProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-emerald-50">
        
        {/* Project Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-8 py-10 text-center text-white">
          <span className="bg-white/20 text-xs px-3 py-1 rounded-full backdrop-blur-sm mb-4 inline-block">Proyek STEAM Terintegrasi</span>
          <h2 className="text-3xl font-serif font-bold mb-2 leading-tight">{project.title}</h2>
          <div className="w-24 h-1 bg-emerald-300 mx-auto rounded-full"></div>
        </div>

        {/* Phase 1: Compassion */}
        <div className="p-8 border-b border-gray-100 bg-rose-50/30">
          <div className="flex items-start gap-4">
            <div className="bg-rose-100 p-2 rounded-lg shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-rose-800 mb-2 uppercase tracking-wide">Fase 1: Compassion & Empati</h3>
              <p className="text-gray-700 leading-relaxed italic">{project.compassionPhase}</p>
            </div>
          </div>
        </div>

        {/* Materials List */}
        <div className="p-8 border-b border-gray-100 bg-amber-50/20">
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-2 rounded-lg shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-800 mb-3 uppercase tracking-wide">Bahan Low-Cost / Bekas</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.materials.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm bg-white border border-amber-100 px-3 py-1.5 rounded-lg shadow-sm">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* STEAM Breakdown */}
        <div className="p-8 space-y-8">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">S</span>
            Science (Sains)
          </h3>
          <p className="text-gray-600 bg-gray-50 p-4 rounded-xl border-l-4 border-emerald-500">{project.science}</p>

          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">T</span>
            Technology (Teknologi)
          </h3>
          <p className="text-gray-600 bg-gray-50 p-4 rounded-xl border-l-4 border-blue-500">{project.technology}</p>

          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">E</span>
            Engineering (Teknik)
          </h3>
          <p className="text-gray-600 bg-gray-50 p-4 rounded-xl border-l-4 border-purple-500">{project.engineering}</p>

          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm">A</span>
            Arts (Seni)
          </h3>
          <p className="text-gray-600 bg-gray-50 p-4 rounded-xl border-l-4 border-rose-500">{project.arts}</p>

          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">M</span>
            Math (Matematika)
          </h3>
          <p className="text-gray-600 bg-gray-50 p-4 rounded-xl border-l-4 border-orange-500">{project.math}</p>
        </div>

        {/* Assessment Section */}
        <div className="bg-gray-900 p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-emerald-500 p-1.5 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold">Refleksi & Penilaian</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">{project.assessment}</p>
          <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row gap-4 items-center justify-between">
            <p className="text-xs text-gray-400 italic font-serif">"Pendidikan bukan sekadar mengisi wadah, melainkan menyalakan api welas asih."</p>
            <button 
              onClick={() => window.print()}
              className="px-6 py-2 bg-white text-gray-900 rounded-full font-bold text-sm hover:bg-emerald-400 transition-colors"
            >
              Cetak Modul Proyek
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
