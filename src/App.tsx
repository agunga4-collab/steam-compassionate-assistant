
import React, { useState } from 'react';
import { generateSteamProject } from './services/gemini';
import { SteamProject, UserInput } from './types';
import ProjectCard from './components/ProjectCard';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<SteamProject | null>(null);
  const [input, setInput] = useState<UserInput>({
    topic: '',
    gradeLevel: 'SD (Kelas 4-6)',
    communityContext: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await generateSteamProject(input);
      setProject(result);
    } catch (error) {
      console.error("Error generating project:", error);
      alert("Maaf, terjadi kesalahan saat merancang proyek. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-emerald-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white">Rancang Proyek STEAM-Welas Asih</h2>
            <p className="text-emerald-50 text-sm">Mari ciptakan solusi bermakna untuk masyarakat.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Topik Utama</label>
                <input
                  type="text"
                  placeholder="Contoh: Krisis Air Bersih, Sampah Plastik..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  value={input.topic}
                  onChange={(e) => setInput({ ...input, topic: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Tingkat Pendidikan</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  value={input.gradeLevel}
                  onChange={(e) => setInput({ ...input, gradeLevel: e.target.value })}
                >
                  <option>PAUD/TK</option>
                  <option>SD (Kelas 1-3)</option>
                  <option>SD (Kelas 4-6)</option>
                  <option>SMP/MTs</option>
                  <option>SMA/MA/SMK</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-00 mb-1">Konteks Masyarakat/Lingkungan</label>
              <textarea
                placeholder="Jelaskan kondisi lingkungan sekolah atau masyarakat sekitar yang ingin dibantu..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none h-24 resize-none transition-all"
                value={input.communityContext}
                onChange={(e) => setInput({ ...input, communityContext: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl font-bold text-white transition-all transform active:scale-95 flex items-center justify-center gap-2 ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700 shadow-lg'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Meracik Kurikulum Inspiratif...</span>
                </>
              ) : (
                'Generate Rancangan Proyek'
              )}
            </button>
          </form>
        </section>

        {project && <ProjectCard project={project} />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
