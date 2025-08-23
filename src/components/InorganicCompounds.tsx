import React from "react";
import FilterModal from "./FilterModal";
import DetailModal from "./DetailModal";

const getScrollbarStyles = (theme: string) => {
	switch (theme) {
		case "dark":
		case "night":
		case "dracula":
		case "forest":
		case "dark-glass":
			return `
		::-webkit-scrollbar {
		  width: 14px;
		  background: #181c2a;
		  z-index: 1100;
		}
		::-webkit-scrollbar-thumb {
		  background: linear-gradient(135deg, #232946 0%, #6750a4 100%);
		  border-radius: 12px;
		  border: 3px solid #181c2a;
		  box-shadow: 0 2px 8px #6750a4aa;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: linear-gradient(135deg, #6750a4 0%, #a084e8 100%);
		}
	  `;
		case "light":
			return `
		::-webkit-scrollbar {
		  width: 14px;
		  background: #f3f4f6;
		  z-index: 1100;
		}
		::-webkit-scrollbar-thumb {
		  background: linear-gradient(135deg, #e0e7ff 0%, #a084e8 100%);
		  border-radius: 12px;
		  border: 3px solid #f3f4f6;
		  box-shadow: 0 2px 8px #a084e8aa;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: linear-gradient(135deg, #a084e8 0%, #6750a4 100%);
		}
	  `;
		case "cyberpunk":
			return `
		::-webkit-scrollbar {
		  width: 14px;
		  background: #0f0026;
		  z-index: 1100;
		}
		::-webkit-scrollbar-thumb {
		  background: linear-gradient(135deg, #ff00cc 0%, #00fff7 100%);
		  border-radius: 12px;
		  border: 3px solid #0f0026;
		  box-shadow: 0 2px 8px #ff00ccaa;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: linear-gradient(135deg, #00fff7 0%, #ff00cc 100%);
		}
	  `;
		case "win98":
			return `
		::-webkit-scrollbar {
		  width: 14px;
		  background: #c0c0c0;
		  z-index: 1100;
		}
		::-webkit-scrollbar-thumb {
		  background: #e0e0e0;
		  border-radius: 0;
		  border: 2px solid #808080;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: #bdbdbd;
		}
	  `;
		case "pastel":
			return `
		::-webkit-scrollbar {
		  width: 14px;
		  background: #fce7f3;
		  z-index: 1100;
		}
		::-webkit-scrollbar-thumb {
		  background: linear-gradient(135deg, #a7f3d0 0%, #fbcfe8 100%);
		  border-radius: 12px;
		  border: 3px solid #fce7f3;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: linear-gradient(135deg, #fbcfe8 0%, #a7f3d0 100%);
		}
	  `;
		case "peach":
			return `
		::-webkit-scrollbar {
		  width: 14px;
		  background: #fff7ed;
		  z-index: 1100;
		}
		::-webkit-scrollbar-thumb {
		  background: linear-gradient(135deg, #fdba74 0%, #fbbf24 100%);
		  border-radius: 12px;
		  border: 3px solid #fff7ed;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: linear-gradient(135deg, #fbbf24 0%, #fdba74 100%);
		}
	  `;
		case "high-contrast":
			return `
		::-webkit-scrollbar {
		  width: 16px;
		  background: #000;
		  z-index: 1100;
		}
		::-webkit-scrollbar-thumb {
		  background: #FFD600;
		  border-radius: 12px;
		  border: 4px solid #000;
		  box-shadow: 0 2px 8px #FFD600aa;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: #FFB300;
		}
	  `;
		case "amoled":
			return `
		::-webkit-scrollbar {
		  width: 14px;
		  background: #000;
		  z-index: 1100;
		}
		::-webkit-scrollbar-thumb {
		  background: linear-gradient(135deg, #232946 0%, #181818 100%);
		  border-radius: 12px;
		  border: 3px solid #000;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: linear-gradient(135deg, #181818 0%, #232946 100%);
		}
	  `;
		case "solarized":
			return `
		::-webkit-scrollbar {
		  width: 14px;
		  background: #f3f4f6;
		  z-index: 1100;
		}
		::-webkit-scrollbar-thumb {
		  background: linear-gradient(135deg, #e0e7ff 0%, #a084e8 100%);
		  border-radius: 12px;
		  border: 3px solid #f3f4f6;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: linear-gradient(135deg, #a084e8 0%, #6750a4 100%);
		}
	  `;
		default:
			return `
		::-webkit-scrollbar {
		  width: 14px;
		  background: #f3f4f6;
		  z-index: 1100;
		}
		::-webkit-scrollbar-thumb {
		  background: linear-gradient(135deg, #e0e7ff 0%, #a084e8 100%);
		  border-radius: 12px;
		  border: 3px solid #f3f4f6;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: linear-gradient(135deg, #a084e8 0%, #6750a4 100%);
		}
	  `;
	}
};

const styles = `
.compound-card {
  position: relative;
  transition: transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.35s cubic-bezier(0.25, 0.8, 0.25, 1), border-color 0.3s;
  will-change: transform, box-shadow, border-color;
  border-radius: 2.5rem;
  box-shadow: 0 4px 32px 0 rgba(60, 60, 90, 0.10), 0 1.5px 6px 0 rgba(60, 60, 90, 0.08);
  border: 2.5px solid var(--m3-outline, #e0e0e0);
  padding: 3rem 2.5rem 2.5rem 2.5rem;
  margin-bottom: 0.5rem;
  min-height: 540px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.compound-card:hover {
  transform: translateY(-10px) scale(1.025);
  box-shadow: 0 8px 40px 0 rgba(103, 80, 164, 0.18), 0 2px 12px 0 rgba(103, 80, 164, 0.10);
  border-color: #6750a4;
}
.compound-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  transition: box-shadow 0.4s;
  box-shadow: 0 0 0 0 rgba(103, 80, 164, 0);
  z-index: -1;
}
.compound-card:hover::after {
  box-shadow: 0 0 60px 12px rgba(103, 80, 164, 0.13);
}
.compound-card .line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.compound-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 4.5rem 4.5rem;
  align-items: stretch;
  margin-bottom: 0.5rem;
}
.compound-card .card-icon {
  padding: 1.25rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px 0 rgba(103, 80, 164, 0.13);
  margin-right: 1rem;
}
.compound-card .card-badge {
  padding: 0.75rem 1.5rem;
  border-radius: 1.25rem;
  font-size: 1.1rem;
  font-weight: 700;
  box-shadow: 0 2px 8px 0 rgba(103, 80, 164, 0.10);
  margin-left: 1rem;
}
.m3-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 2.2rem;
  border-radius: 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  background: linear-gradient(90deg, #6750a4 0%, #a084e8 100%);
  color: #fff;
  box-shadow: 0 2px 8px 0 rgba(103, 80, 164, 0.13);
  border: none;
  outline: none;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
  margin-top: 2.2rem;
}
.m3-button:hover, .m3-button:focus {
  background: linear-gradient(90deg, #7c5fd3 0%, #b39ddb 100%);
  box-shadow: 0 4px 16px 0 rgba(103, 80, 164, 0.18);
  transform: translateY(-2px) scale(1.04);
}
@media (max-width: 1200px) {
  .compound-grid {
	gap: 3rem 3rem;
  }
}
@media (max-width: 900px) {
  .compound-grid {
	gap: 2.2rem 2.2rem;
  }
}
@media (max-width: 600px) {
  .compound-grid {
	gap: 1.2rem 1.2rem;
	grid-template-columns: 1fr;
  }
  .compound-card {
	padding: 1.2rem;
	min-height: 420px;
  }
}

/* Dialog */
.qc-dialog-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); z-index: 50; display:flex; align-items:center; justify-content:center; padding: 1rem; animation: fadeIn 200ms ease-out; }
.qc-dialog { width: min(720px, 92vw); border-radius: 1.75rem; overflow: hidden; box-shadow: 0 24px 64px rgba(0,0,0,0.25); }
.qc-dialog-header { padding: 1.25rem 1.5rem; border-bottom: 1px solid rgba(0,0,0,0.06); }
.qc-dialog-body { padding: 1.25rem 1.5rem; }
.qc-dialog-actions { display:flex; justify-content:flex-end; gap:0.5rem; padding: 1rem 1.5rem; border-top: 1px solid rgba(0,0,0,0.06); }

@keyframes fadeIn { from { opacity: 0; transform: translateY(4px);} to { opacity: 1; transform: translateY(0);} }

/* Modern modal polish + chips */
.qc-dialog { transform: translateY(4px); }
.qc-dialog-title { display:flex; align-items:center; gap:.75rem; }
.qc-divider { height:1px; background: rgba(0,0,0,0.06); margin:.5rem -1.5rem 1rem; }
.dark .qc-divider { background: rgba(255,255,255,0.08); }
.m3-chip { appearance:none; border:none; cursor:pointer; padding:.6rem 1rem; border-radius:9999px; font-weight:600; font-size:.95rem; background: rgba(103,80,164,0.08); color:#4b5563; transition: all .18s ease; box-shadow: 0 1px 2px rgba(0,0,0,0.06) inset; }
.m3-chip:hover { transform: translateY(-1px); box-shadow: 0 2px 6px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.06) inset; }
.m3-chip.active { color: white; background: linear-gradient(90deg, #6750a4 0%, #a084e8 100%); box-shadow: 0 6px 16px rgba(103,80,164,0.28); }
.dark .m3-chip { background: rgba(255,255,255,0.08); color:#e5e7eb; }
.m3-badge { display:inline-flex; align-items:center; gap:.5rem; padding:.4rem .75rem; border-radius:9999px; font-size:.85rem; font-weight:600; background: rgba(103,80,164,0.12); color:#4b5563; }
.dark .m3-badge { background: rgba(255,255,255,0.08); color:#e5e7eb; }
.qc-dialog-actions { position: sticky; bottom: 0; background: transparent; }
`;

const getThemeClasses = (theme: string) => {
	const baseClasses = "min-h-screen transition-all duration-300 overflow-auto";
	switch (theme) {
		case "dark":
			return `${baseClasses} bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white`;
		case "light":
			return `${baseClasses} bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900`;
		case "dark-glass":
			return `${baseClasses} bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-700/90 backdrop-blur-md text-white`;
		case "win98":
			return `${baseClasses} bg-[#c0c0c0] text-black`;
		case "cyberpunk":
			return `${baseClasses} bg-gradient-to-br from-purple-900 via-pink-800 to-cyan-900 text-cyan-100`;
		case "dracula": // updated to red-accent variant matching Quantum
			return `${baseClasses} bg-gradient-to-br from-[#2a0f25] via-[#4d1a36] to-[#8b1e41] text-[#f8f8f2]`;
		case "forest":
			return `${baseClasses} bg-gradient-to-br from-green-900 via-green-700 to-green-500 text-white`;
		case "pastel":
			return `${baseClasses} bg-gradient-to-br from-pink-100 via-blue-100 to-green-100 text-gray-800`;
		case "peach":
			return `${baseClasses} bg-gradient-to-br from-orange-100 via-pink-200 to-yellow-100 text-orange-900`;
		case "high-contrast":
			return `${baseClasses} bg-black text-yellow-300`;
		case "amoled":
			return `${baseClasses} bg-black text-white`;
		case "night":
			return `${baseClasses} bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white`;
		case "solarized":
			return `${baseClasses} bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900`;
		default:
			return `${baseClasses} bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900`;
	}
};

const getCardClasses = (theme: string) => {
	switch (theme) {
		case "dark":
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-[#181c2a] via-[#232946] to-[#1a1a2e] text-white rounded-3xl shadow-[0_8px_32px_0_rgba(80,60,180,0.28)] hover:shadow-[0_16px_48px_0_rgba(128,90,213,0.38)] border-[#6750a4]/70 hover:border-[#a084e8]/90 animate-fade-in";
		case "dark-glass":
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-[#232946]/90 via-[#181c2a]/80 to-[#232946]/90 backdrop-blur-2xl text-white rounded-[2.25rem] shadow-[0_8px_40px_0_rgba(0,255,255,0.22)] hover:shadow-[0_16px_64px_0_rgba(0,255,255,0.32)] border-cyan-300/70 hover:border-cyan-200/90 animate-fade-in";
		case "cyberpunk":
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-[#0f0026] via-[#ff00cc] to-[#00fff7] text-cyan-100 rounded-[2.75rem] shadow-[0_8px_40px_0_rgba(255,0,255,0.32)] hover:shadow-[0_16px_64px_0_rgba(255,0,255,0.42)] border-[#ff00cc]/80 hover:border-[#00fff7]/90 animate-fade-in";
		case "dracula": // updated red variant
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-[#2a0f25] via-[#4d1a36] to-[#8b1e41] text-[#f8f8f2] rounded-[2.25rem] shadow-[0_8px_40px_0_rgba(255,85,140,0.30)] hover:shadow-[0_16px_64px_0_rgba(255,85,140,0.45)] border-[#ff5678]/70 hover:border-[#ff8fa8]/90 animate-fade-in";
		case "forest":
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-[#0d261a] via-[#14532d] to-[#166534] text-green-100 rounded-[2.75rem] shadow-[0_8px_40px_0_rgba(16,185,129,0.28)] hover:shadow-[0_16px_64px_0_rgba(34,197,94,0.38)] border-green-700/80 hover:border-emerald-300/90 animate-fade-in";
		case "amoled":
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-black via-[#181818] to-[#232946] text-white rounded-[2.5rem] shadow-[0_8px_40px_0_rgba(59,130,246,0.28)] hover:shadow-[0_16px_64px_0_rgba(59,130,246,0.38)] border-white/60 hover:border-blue-400/90 animate-fade-in";
		case "night":
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-[#181c2a] via-[#232946] to-black text-white rounded-[2.5rem] shadow-[0_8px_40px_0_rgba(59,130,246,0.28)] hover:shadow-[0_16px_64px_0_rgba(59,130,246,0.38)] border-blue-700/80 hover:border-blue-400/90 animate-fade-in";
		case "high-contrast":
		case "highContrast": // alias
			return "compound-card flex flex-col relative overflow-hidden group border-4 bg-black text-yellow-300 rounded-2xl shadow-[0_8px_40px_0_rgba(255,255,0,0.42)] hover:shadow-[0_16px_64px_0_rgba(255,255,0,0.52)] border-yellow-300 hover:border-yellow-200 animate-fade-in";
		case "light":
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 rounded-[2.5rem] shadow-[0_6px_32px_0_rgba(60,60,90,0.10)] hover:shadow-[0_12px_48px_0_rgba(60,60,90,0.18)] border-blue-200/60 hover:border-blue-400/80 animate-fade-in";
		case "win98":
			return "compound-card flex flex-col relative overflow-hidden group border-2 bg-[#c0c0c0] text-black rounded-lg shadow-[3px_3px_0px_#000] hover:shadow-[4px_4px_0px_#000] border-t-[#e0e0e0] border-l-[#e0e0e0] border-r-[#808080] border-b-[#808080] animate-fade-in";
		case "pastel":
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-pink-100 via-blue-100 to-green-100 text-gray-800 rounded-[2.5rem] shadow-[0_6px_32px_0_rgba(236,72,153,0.10)] hover:shadow-[0_12px_48px_0_rgba(168,85,247,0.18)] border-pink-200/70 hover:border-purple-300/90 animate-fade-in";
		case "peach":
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-orange-100 via-pink-200 to-yellow-100 text-orange-900 rounded-[2.5rem] shadow-[0_6px_32px_0_rgba(251,191,36,0.10)] hover:shadow-[0_12px_48px_0_rgba(251,113,133,0.18)] border-orange-200/70 hover:border-pink-300/90 animate-fade-in";
		case "solarized":
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 rounded-[2.5rem] animate-fade-in";
		default:
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 rounded-[2.5rem] shadow-[0_6px_32px_0_rgba(60,60,90,0.10)] hover:shadow-[0_12px_48px_0_rgba(60,60,90,0.18)] border-gray-200/90 hover:border-blue-400/60 animate-fade-in";
	}
};

// --- Inorganic compound data ---
interface CompoundInfo {
	name: string;
	formula: string;
	description: string;
	molecularWeight: string;
	meltingPoint: string;
	boilingPoint: string;
	category: string;
	uses: string[];
	structure: string;
}

const compounds: CompoundInfo[] = [
	// Salts
	{
		name: "Sodium Chloride",
		formula: "NaCl",
		description: "Common salt, essential for life, used in food and industry.",
		molecularWeight: "58.44 g/mol",
		meltingPoint: "801°C",
		boilingPoint: "1413°C",
		category: "Salts",
		uses: ["Food seasoning", "De-icing", "Chemical feedstock", "Preservative"],
		structure: "Cubic crystal lattice",
	},
	{
		name: "Calcium Carbonate",
		formula: "CaCO₃",
		description: "Main component of limestone, chalk, and marble. Used in construction and as an antacid.",
		molecularWeight: "100.09 g/mol",
		meltingPoint: "825°C",
		boilingPoint: "Decomposes",
		category: "Salts",
		uses: ["Construction", "Antacid", "Filler material", "Agriculture"],
		structure: "Trigonal crystal system",
	},
	{
		name: "Potassium Nitrate",
		formula: "KNO₃",
		description: "Used in fertilizers, food preservation, and fireworks (saltpeter).",
		molecularWeight: "101.10 g/mol",
		meltingPoint: "334°C",
		boilingPoint: "Decomposes",
		category: "Salts",
		uses: ["Fertilizer", "Food preservative", "Fireworks", "Oxidizer"],
		structure: "Trigonal crystal system",
	},
	{
		name: "Magnesium Sulfate",
		formula: "MgSO₄",
		description: "Epsom salt, used in medicine, agriculture, and bath salts.",
		molecularWeight: "120.37 g/mol",
		meltingPoint: "1124°C",
		boilingPoint: "Decomposes",
		category: "Salts",
		uses: ["Medicine", "Agriculture", "Bath salts", "Drying agent"],
		structure: "Orthorhombic crystal system",
	},
	{
		name: "Copper(II) Sulfate",
		formula: "CuSO₄",
		description: "Blue crystalline solid used in fungicides, algicides, and chemistry education.",
		molecularWeight: "159.61 g/mol",
		meltingPoint: "110°C",
		boilingPoint: "Decomposes",
		category: "Salts",
		uses: ["Fungicide", "Algicide", "Chemistry education", "Electroplating"],
		structure: "Triclinic crystal system",
	},
	{
		name: "Sodium Bicarbonate",
		formula: "NaHCO₃",
		description: "Baking soda, used in baking, cleaning, and as an antacid.",
		molecularWeight: "84.01 g/mol",
		meltingPoint: "50°C",
		boilingPoint: "Decomposes",
		category: "Salts",
		uses: ["Baking", "Cleaning", "Antacid", "Fire extinguisher"],
		structure: "Monoclinic crystal system",
	},
	{
		name: "Potassium Chloride",
		formula: "KCl",
		description: "Used as a fertilizer, salt substitute, and in medicine.",
		molecularWeight: "74.55 g/mol",
		meltingPoint: "770°C",
		boilingPoint: "1420°C",
		category: "Salts",
		uses: ["Fertilizer", "Salt substitute", "Medicine", "Electrolyte"],
		structure: "Cubic crystal lattice",
	},
	{
		name: "Calcium Sulfate",
		formula: "CaSO₄",
		description: "Gypsum, used in plaster, drywall, and as a coagulant in tofu.",
		molecularWeight: "136.14 g/mol",
		meltingPoint: "1450°C",
		boilingPoint: "Decomposes",
		category: "Salts",
		uses: ["Plaster", "Drywall", "Tofu coagulant", "Cement"],
		structure: "Monoclinic crystal system",
	},
	// Acids
	{
		name: "Sulfuric Acid",
		formula: "H₂SO₄",
		description: "A strong mineral acid used in batteries, fertilizer, and chemical synthesis.",
		molecularWeight: "98.08 g/mol",
		meltingPoint: "10°C",
		boilingPoint: "337°C",
		category: "Acids",
		uses: ["Batteries", "Fertilizer", "Chemical synthesis", "Cleaning agent"],
		structure: "Tetrahedral sulfate anion",
	},
	{
		name: "Hydrochloric Acid",
		formula: "HCl",
		description: "A strong acid used in industry, cleaning, and digestion.",
		molecularWeight: "36.46 g/mol",
		meltingPoint: "-27.3°C",
		boilingPoint: "-85.1°C",
		category: "Acids",
		uses: ["Cleaning", "Pickling of steel", "pH control", "Digestion"],
		structure: "Diatomic molecule",
	},
	{
		name: "Nitric Acid",
		formula: "HNO₃",
		description: "A highly corrosive acid used in fertilizer, explosives, and etching.",
		molecularWeight: "63.01 g/mol",
		meltingPoint: "-41.6°C",
		boilingPoint: "83°C",
		category: "Acids",
		uses: ["Fertilizer", "Explosives", "Etching", "Rocket propellant"],
		structure: "Planar nitrate anion",
	},
	{
		name: "Phosphoric Acid",
		formula: "H₃PO₄",
		description: "Used in soft drinks, fertilizers, and as a rust remover.",
		molecularWeight: "97.99 g/mol",
		meltingPoint: "42.4°C",
		boilingPoint: "158°C",
		category: "Acids",
		uses: ["Soft drinks", "Fertilizer", "Rust remover", "Food additive"],
		structure: "Tetrahedral phosphate anion",
	},
	{
		name: "Acetic Acid",
		formula: "CH₃COOH",
		description: "Gives vinegar its sour taste and pungent smell. Used in food and industry.",
		molecularWeight: "60.05 g/mol",
		meltingPoint: "16.6°C",
		boilingPoint: "118°C",
		category: "Acids",
		uses: ["Food additive", "Solvent", "Chemical synthesis", "Preservative"],
		structure: "Planar carboxylic acid",
	},
	{
		name: "Carbonic Acid",
		formula: "H₂CO₃",
		description: "Weak acid found in carbonated drinks and the blood buffer system.",
		molecularWeight: "62.03 g/mol",
		meltingPoint: "-80°C",
		boilingPoint: "Decomposes",
		category: "Acids",
		uses: ["Carbonated drinks", "Blood buffer", "Water treatment", "Photosynthesis"],
		structure: "Planar molecule",
	},
	{
		name: "Perchloric Acid",
		formula: "HClO₄",
		description: "A strong acid used in rocket propellants and analytical chemistry.",
		molecularWeight: "100.46 g/mol",
		meltingPoint: "-17°C",
		boilingPoint: "203°C",
		category: "Acids",
		uses: ["Rocket propellant", "Analytical chemistry", "Oxidizer", "Etching"],
		structure: "Tetrahedral molecule",
	},
	{
		name: "Hydrofluoric Acid",
		formula: "HF",
		description: "A highly corrosive acid used for glass etching and metal cleaning.",
		molecularWeight: "20.01 g/mol",
		meltingPoint: "-83.6°C",
		boilingPoint: "19.5°C",
		category: "Acids",
		uses: ["Glass etching", "Metal cleaning", "Semiconductor industry", "Petroleum processing"],
		structure: "Diatomic molecule",
	},
	// Bases
	{
		name: "Ammonia",
		formula: "NH₃",
		description: "A colorless gas with a pungent smell, used in fertilizers and cleaning products.",
		molecularWeight: "17.03 g/mol",
		meltingPoint: "-77.7°C",
		boilingPoint: "-33.3°C",
		category: "Bases",
		uses: ["Fertilizer", "Cleaning agent", "Refrigerant", "Chemical feedstock"],
		structure: "Trigonal pyramidal",
	},
	{
		name: "Sodium Hydroxide",
		formula: "NaOH",
		description: "A strong base used in soap making, cleaning, and chemical manufacturing.",
		molecularWeight: "40.00 g/mol",
		meltingPoint: "318°C",
		boilingPoint: "1388°C",
		category: "Bases",
		uses: ["Soap making", "Cleaning agent", "Chemical synthesis", "Drain cleaner"],
		structure: "Ionic solid",
	},
	{
		name: "Calcium Hydroxide",
		formula: "Ca(OH)₂",
		description: "Slaked lime, used in construction, water treatment, and agriculture.",
		molecularWeight: "74.09 g/mol",
		meltingPoint: "580°C",
		boilingPoint: "Decomposes",
		category: "Bases",
		uses: ["Construction", "Water treatment", "Agriculture", "Food additive"],
		structure: "Hexagonal crystal system",
	},
	{
		name: "Potassium Hydroxide",
		formula: "KOH",
		description: "A strong base used in soap making, batteries, and biodiesel production.",
		molecularWeight: "56.11 g/mol",
		meltingPoint: "360°C",
		boilingPoint: "1327°C",
		category: "Bases",
		uses: ["Soap making", "Batteries", "Biodiesel", "Electrolyte"],
		structure: "Ionic solid",
	},
	{
		name: "Magnesium Hydroxide",
		formula: "Mg(OH)₂",
		description: "Milk of magnesia, used as an antacid and laxative.",
		molecularWeight: "58.32 g/mol",
		meltingPoint: "350°C",
		boilingPoint: "Decomposes",
		category: "Bases",
		uses: ["Antacid", "Laxative", "Fire retardant", "Wastewater treatment"],
		structure: "Brucite crystal structure",
	},
	{
		name: "Lithium Hydroxide",
		formula: "LiOH",
		description: "Used in batteries, air purification, and ceramics.",
		molecularWeight: "23.95 g/mol",
		meltingPoint: "462°C",
		boilingPoint: "924°C",
		category: "Bases",
		uses: ["Batteries", "Air purification", "Ceramics", "Grease"],
		structure: "Monoclinic crystal system",
	},
	{
		name: "Barium Hydroxide",
		formula: "Ba(OH)₂",
		description: "Used in analytical chemistry, water softening, and as a reagent.",
		molecularWeight: "171.34 g/mol",
		meltingPoint: "78°C",
		boilingPoint: "Decomposes",
		category: "Bases",
		uses: ["Analytical chemistry", "Water softening", "Reagent", "Lubricant"],
		structure: "Monoclinic crystal system",
	},
	{
		name: "Aluminum Hydroxide",
		formula: "Al(OH)₃",
		description: "Used as an antacid, fire retardant, and in water purification.",
		molecularWeight: "78.00 g/mol",
		meltingPoint: "300°C",
		boilingPoint: "Decomposes",
		category: "Bases",
		uses: ["Antacid", "Fire retardant", "Water purification", "Dye industry"],
		structure: "Hexagonal crystal system",
	},
];

interface InorganicCompoundsProps {
	theme: string;
}

const InorganicCompounds: React.FC<InorganicCompoundsProps> = ({ theme }) => {
	const [filterOpen, setFilterOpen] = React.useState(false);
	const [enabledSections, setEnabledSections] = React.useState<Record<string, boolean>>({
		Salts: true,
		Acids: true,
		Bases: true,
	});
	// Details modal state
	const [infoOpen, setInfoOpen] = React.useState(false);
	const [selectedCompound, setSelectedCompound] = React.useState<CompoundInfo | null>(null);

	// Added: category icons for refined Filters UI
	const categoryIcons: Record<string, string> = { Salts: "🧂", Acids: "🥤", Bases: "🧴" };

	React.useEffect(() => {
		const handler = () => setFilterOpen(true);
		window.addEventListener("open-page-filters", handler);
		return () => window.removeEventListener("open-page-filters", handler);
	}, []);

	const toggleSection = (key: string) => setEnabledSections((s) => ({ ...s, [key]: !s[key] }));
	const setAll = (val: boolean) => setEnabledSections({ Salts: val, Acids: val, Bases: val });

	// Sections array
	const sections = [
		{
			title: "Salts",
			subtitle: "Ionic compounds essential for life and industry",
			icon: "🧂",
			color: "from-blue-400 to-blue-700",
			compounds: compounds.filter((c) => c.category === "Salts"),
		},
		{
			title: "Acids",
			subtitle: "Substances with a sour taste and low pH",
			icon: "🥤",
			color: "from-pink-500 to-red-600",
			compounds: compounds.filter((c) => c.category === "Acids"),
		},
		{
			title: "Bases",
			subtitle: "Compounds with a bitter taste and slippery feel",
			icon: "🧴",
			color: "from-green-400 to-green-700",
			compounds: compounds.filter((c) => c.category === "Bases"),
		},
	] as const;
	const displayed = sections.filter((s) => enabledSections[s.title]);

	return (
		<div className={getThemeClasses(theme) + " pt-24"}>
			{/* Add custom styles */}
			<style>
				{styles +
					`
/* --- Refined dialog sizing & layout tweaks --- */
.qc-dialog { width: min(860px, 94vw); }
/* Chip grid for a more organized filters layout */
.chip-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: .6rem .6rem; }
/* Visual indicator inside chips */
.chip-indicator { width: 1.1rem; height: 1.1rem; border-radius: 9999px; border: 2px solid rgba(103,80,164,0.45); display:inline-flex; align-items:center; justify-content:center; font-weight:800; line-height:1; font-size:.8rem; color:#fff; background: transparent; }
.m3-chip.active .chip-indicator { background: #7c5fd3; border-color: #7c5fd3; box-shadow: 0 0 0 3px rgba(124,95,211,0.25); }
/* Larger badge option for Learn More */
.m3-badge-lg { padding:.5rem 1rem; font-size:1rem; }
/* High-contrast theme: section headers black, card content yellow */
${
	theme === "high-contrast" || theme === "highContrast"
		? `
.compound-card {
  background: #000 !important;
}
/* Section headers should be black */
h2.text-3xl, h2.text-4xl {
  color: #000 !important;
}
p.text-lg.text-gray-600 {
  color: #000 !important;
}
/* Card content should remain yellow */
.compound-card h3,
.compound-card .text-2xl,
.compound-card p,
.compound-card ul,
.compound-card li,
.compound-card div.text-2xl {
  color: #FFD600 !important;
}
/* Specifically target the symbol text */
.compound-card .font-mono {
  color: #FFD600 !important;
}
/* Text inside yellow icon boxes should be black */
.compound-card .card-icon span {
  color: #000 !important;
}
/* Text inside yellow badge boxes should be black */
.compound-card .card-badge {
  color: #000 !important;
}
/* Properties table styling - labels and values */
.compound-card .grid.grid-cols-3 span {
  color: #FFD600 !important;
}
/* Property labels (Weight, Melting, Boiling) */
.compound-card .text-sm.text-gray-500,
.compound-card .text-sm.text-gray-400 {
  color: #FFD600 !important;
}
/* Property values (temperatures, weights) */
.compound-card .text-xl.font-bold.text-gray-900,
.compound-card .text-xl.font-bold.text-white {
  color: #FFD600 !important;
}
`
		: ""
}
/* Solarized theme: text inside icon and badge boxes should be black */
${
	theme === "solarized"
		? `
/* Text inside icon boxes should be black */
.compound-card .card-icon span {
  color: #000 !important;
}
/* Text inside badge boxes should be black */
.compound-card .card-badge {
  color: #000 !important;
}
`
		: ""
}
`}
			</style>
			{/* Custom Scrollbar Styles for Theme */}
			<style>{getScrollbarStyles(theme)}</style>

			{/* Hero Section */}
			<section className="relative overflow-hidden pt-24" style={{ marginTop: "75px" }}>
				<div className="max-w-5xl mx-auto px-[5vw] py-16 text-center">
					<div className="space-y-8">
						<div className="flex justify-center pt-4">
							<div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
						</div>
					</div>
				</div>
			</section>
			{/* Main Content */}
			<div className="max-w-6xl mx-auto px-[5vw] pb-24">
				{displayed.map((section) => (
					<section key={section.title} className="mb-20">
						{/* Section Header */}
						<div className="text-center mb-12" style={section.title === "Salts" ? undefined : { marginTop: "3%" }}>
							<div className="inline-flex items-center justify-center mb-6">
								<div
									className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${section.color} flex items-center justify-center shadow-lg`}
								>
									<span className="text-2xl text-white">{section.icon}</span>
								</div>
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">{section.title}</h2>
							<p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{section.subtitle}</p>
							<div className="flex justify-center mt-4">
								<div className={`w-20 h-1 bg-gradient-to-r ${section.color} rounded-full`}></div>
							</div>
						</div>
						{/* Compounds Grid */}
						<div className="compound-grid">
							{section.compounds.map((compound) => (
								<div
									key={compound.name}
									className={getCardClasses(theme) + " mt-0"}
									style={{
										...(theme === "high-contrast" ? { background: "#000" } : {}),
										position: "relative",
										top: "5%",
									}}
								>
									<div className="flex items-center justify-between mb-10">
										{(() => {
											// Theme-based color maps for each section (customized for inorganic)
											const sectionColorMap = {
												Salts: {
													light: {
														bg: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #60a5fa44, 0 8px 32px 0 #2563eb66",
														badgeBg: "linear-gradient(90deg, #60a5fa 0%, #2563eb 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #60a5fa33, 0 4px 16px 0 #2563eb55",
													},
													dark: {
														bg: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #2563eb44, 0 8px 32px 0 #1e40af66",
														badgeBg: "linear-gradient(90deg, #2563eb 0%, #1e40af 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #2563eb33, 0 4px 16px 0 #1e40af55",
													},
													amoled: {
														bg: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #2563eb44, 0 8px 32px 0 #1e40af66",
														badgeBg: "linear-gradient(90deg, #2563eb 0%, #1e40af 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #2563eb33, 0 4px 16px 0 #1e40af55",
													},
													highContrast: {
														bg: "linear-gradient(135deg, #FFD600 0%, #FFB300 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #FFD60044, 0 8px 32px 0 #FFD60066",
														badgeBg: "linear-gradient(90deg, #FFD600 0%, #FFB300 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #FFD60033, 0 4px 16px 0 #FFD60055",
													},
												},
												Acids: {
													light: {
														bg: "linear-gradient(135deg, #fb7185 0%, #f43f5e 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #fb718544, 0 8px 32px 0 #f43f5e66",
														badgeBg: "linear-gradient(90deg, #fb7185 0%, #f43f5e 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #fb718533, 0 4px 16px 0 #f43f5e55",
													},
													dark: {
														bg: "linear-gradient(135deg, #be185d 0%, #f43f5e 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #be185d44, 0 8px 32px 0 #f43f5e66",
														badgeBg: "linear-gradient(90deg, #be185d 0%, #f43f5e 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #be185d33, 0 4px 16px 0 #f43f5e55",
													},
													amoled: {
														bg: "linear-gradient(135deg, #be185d 0%, #f43f5e 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #be185d44, 0 8px 32px 0 #f43f5e66",
														badgeBg: "linear-gradient(90deg, #be185d 0%, #f43f5e 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #be185d33, 0 4px 16px 0 #f43f5e55",
													},
													highContrast: {
														bg: "linear-gradient(135deg, #FFD600 0%, #FFB300 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #FFD60044, 0 8px 32px 0 #FFD60066",
														badgeBg: "linear-gradient(90deg, #FFD600 0%, #FFB300 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #FFD60033, 0 4px 16px 0 #FFD60055",
													},
												},
												Bases: {
													light: {
														bg: "linear-gradient(135deg, #6ee7b7 0%, #059669 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #6ee7b744, 0 8px 32px 0 #05966966",
														badgeBg: "linear-gradient(90deg, #6ee7b7 0%, #059669 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #6ee7b733, 0 4px 16px 0 #05966955",
													},
													dark: {
														bg: "linear-gradient(135deg, #059669 0%, #065f46 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #05966944, 0 8px 32px 0 #065f4666",
														badgeBg: "linear-gradient(90deg, #059669 0%, #065f46 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #05966933, 0 4px 16px 0 #065f4655",
													},
													amoled: {
														bg: "linear-gradient(135deg, #059669 0%, #065f46 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #05966944, 0 8px 32px 0 #065f4666",
														badgeBg: "linear-gradient(90deg, #059669 0%, #065f46 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #05966933, 0 4px 16px 0 #065f4655",
													},
													highContrast: {
														bg: "linear-gradient(135deg, #FFD600 0%, #FFB300 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #FFD60044, 0 8px 32px 0 #FFD60066",
														badgeBg: "linear-gradient(90deg, #FFD600 0%, #FFB300 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #FFD60033, 0 4px 16px 0 #FFD60055",
													},
												},
											};

											// Theme key mapping
											const themeKey =
												theme === "dark" ||
												theme === "night" ||
												theme === "dracula" ||
												theme === "forest" ||
												theme === "dark-glass"
													? "dark"
													: theme === "amoled"
													? "amoled"
													: theme === "high-contrast"
													? "highContrast"
													: "light";

											type SectionTitle = keyof typeof sectionColorMap;
											type ThemeKey = keyof (typeof sectionColorMap)[SectionTitle];
											const sectionTheme =
												sectionColorMap[section.title as SectionTitle][themeKey as ThemeKey];
											return (
												<>
													<div
														className="card-icon w-24 h-24"
														style={{
															background: sectionTheme.bg,
															boxShadow: sectionTheme.shadow,
														}}
													>
														<span className="text-white text-5xl drop-shadow-[0_2px_12px_rgba(80,80,255,0.45]">
															{section.icon}
														</span>
													</div>
													<span
														className="card-badge text-white"
														style={{
															background: sectionTheme.badgeBg,
															boxShadow: sectionTheme.badgeShadow,
														}}
													>
														{compound.category}
													</span>
												</>
											);
										})()}
									</div>
									<div className="relative z-10 flex flex-col flex-grow">
										<div className="flex-grow">
											<div className="mb-8">
												<h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
													{compound.name}
												</h3>
												<div
													className={`text-5xl font-mono font-black bg-gradient-to-r ${section.color} bg-clip-text text-transparent drop-shadow-sm mb-8`}
												>
													{compound.formula}
												</div>
											</div>
											<p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-5">
												{compound.description}
											</p>
										</div>
										<div className="mt-auto pt-8 flex flex-col gap-4">
											<div
												className="bg-gray-100/90 dark:bg-gray-900/70 rounded-[2.5rem] p-7 border border-black/5 dark:border-white/5 shadow-md flex flex-col gap-2 animate-fade-in"
												style={{ padding: "7.35%", margin: "2.5% 0" }}
											>
												<div className="grid grid-cols-3 gap-4 text-center">
													<div>
														<span className="text-sm text-gray-500 dark:text-gray-400 font-medium block mb-1">
															Weight
														</span>
														<span className="text-xl font-bold text-gray-900 dark:text-white">
															{compound.molecularWeight.split(" ")[0]}
														</span>
													</div>
													<div>
														<span className="text-sm text-gray-500 dark:text-gray-400 font-medium block mb-1">
															Melting
														</span>
														<span className="text-xl font-bold text-gray-900 dark:text-white">
															{compound.meltingPoint}
														</span>
													</div>
													<div>
														<span className="text-sm text-gray-500 dark:text-gray-400 font-medium block mb-1">
															Boiling
														</span>
														<span className="text-xl font-bold text-gray-900 dark:text-white">
															{compound.boilingPoint.split(" ")[0] ===
															compound.meltingPoint.split(" ")[0]
																? "Decomposes"
																: compound.boilingPoint.split(" ")[0]}
														</span>
													</div>
												</div>
											</div>
											<button
												className="m3-button"
												tabIndex={0}
												aria-label={`Learn more about ${compound.name}`}
												onClick={() => {
													setSelectedCompound(compound);
													setInfoOpen(true);
												}}
											>
												Learn More
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>
				))}
			</div>

			{/* Filters Modal */}
			<FilterModal
				isOpen={filterOpen}
				onClose={() => setFilterOpen(false)}
				enabledSections={enabledSections}
				toggleSection={toggleSection}
				setAll={setAll}
				categoryIcons={categoryIcons}
				theme={theme}
				totalSections={3}
			/>

			{/* Details Modal (Learn More) */}
			<DetailModal
				isOpen={infoOpen}
				onClose={() => setInfoOpen(false)}
				title={selectedCompound?.name || ""}
				subtitle={selectedCompound?.formula}
				description={selectedCompound?.description || ""}
				theme={theme}
			>
				<div className="detail-section-title">Key Properties</div>
				<div className="grid grid-cols-3 gap-4 text-center mb-6">
					<div>
						<span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">Weight</span>
						<span className="text-xl font-bold text-gray-900 dark:text-white">
							{selectedCompound?.molecularWeight}
						</span>
					</div>
					<div>
						<span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">Melting</span>
						<span className="text-xl font-bold text-gray-900 dark:text-white">{selectedCompound?.meltingPoint}</span>
					</div>
					<div>
						<span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">Boiling</span>
						<span className="text-xl font-bold text-gray-900 dark:text-white">{selectedCompound?.boilingPoint}</span>
					</div>
				</div>

				<div className="detail-section-title">Uses</div>
				<div className="flex flex-wrap gap-2 mb-6">
					{selectedCompound?.uses.map((u) => (
						<span key={u} className="detail-m3-badge">
							{u}
						</span>
					))}
				</div>

				<div className="detail-section-title">Structure</div>
				<p className="text-gray-800 dark:text-gray-200">{selectedCompound?.structure}</p>
			</DetailModal>
		</div>
	);
};

export default InorganicCompounds;
