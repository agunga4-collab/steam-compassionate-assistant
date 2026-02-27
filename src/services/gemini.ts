
import { GoogleGenAI, Type } from "@google/genai";
import { SteamProject, UserInput } from "../types";

export const generateSteamProject = async (input: UserInput): Promise<SteamProject> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  const prompt = `
    Bertindaklah sebagai expert pembelajaran STEAM di Indonesia dengan pengalaman lebih dari 20 tahun.
    Buatkan rancangan proyek pendidikan STEAM-Compassionate dengan detail sebagai berikut:
    
    Topik/Tema: ${input.topic}
    Tingkat Kelas: ${input.gradeLevel}
    Konteks Masyarakat: ${input.communityContext}
    
    Persyaratan Proyek:
    1. Harus dimulai dengan fase 'Compassion/Empati' yang mendalam.
    2. Menggunakan bahan low-cost atau barang bekas (recycled materials).
    3. Struktur instruksi jelas untuk Science, Technology, Engineering, Arts, dan Math.
    4. Bahasa yang digunakan adalah Bahasa Indonesia yang inspiratif dan edukatif.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          compassionPhase: { type: Type.STRING },
          materials: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          science: { type: Type.STRING },
          technology: { type: Type.STRING },
          engineering: { type: Type.STRING },
          arts: { type: Type.STRING },
          math: { type: Type.STRING },
          assessment: { type: Type.STRING },
        },
        required: ["title", "compassionPhase", "materials", "science", "technology", "engineering", "arts", "math", "assessment"]
      }
    },
  });

  return JSON.parse(response.text || "{}");
};
