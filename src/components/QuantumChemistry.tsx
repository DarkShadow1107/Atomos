import React from "react";

// --- Quantum Chemistry Data ---
interface QuantumConcept {
	name: string;
	symbol: string;
	description: string;
	details: string[];
	category: string;
}

const quantumConcepts: QuantumConcept[] = [
	// Orbitals
	{
		name: "s-Orbital",
		symbol: "1s, 2s, ...",
		description: "Spherically symmetric region around the nucleus where electrons are likely to be found.",
		details: ["Can hold up to 2 electrons", "Present in every principal energy level", "No angular node (l = 0)"],
		category: "Orbitals",
	},
	{
		name: "p-Orbital",
		symbol: "2p, 3p, ...",
		description: "Dumbbell-shaped region with a node at the nucleus, oriented along x, y, or z axes.",
		details: ["Can hold up to 6 electrons (3 orientations)", "Starts from n = 2", "One angular node (l = 1)"],
		category: "Orbitals",
	},
	{
		name: "d-Orbital",
		symbol: "3d, 4d, ...",
		description: "Four-lobed region with complex shapes, important in transition metals.",
		details: ["Can hold up to 10 electrons (5 orientations)", "Starts from n = 3", "Two angular nodes (l = 2)"],
		category: "Orbitals",
	},
	{
		name: "f-Orbital",
		symbol: "4f, 5f, ...",
		description: "Complex, multi-lobed region, significant in lanthanides and actinides.",
		details: ["Can hold up to 14 electrons (7 orientations)", "Starts from n = 4", "Three angular nodes (l = 3)"],
		category: "Orbitals",
	},
	// Quantum Numbers
	{
		name: "Principal Quantum Number",
		symbol: "n",
		description: "Specifies the energy level and size of the orbital.",
		details: ["n = 1, 2, 3, ...", "Larger n means higher energy and larger orbital", "Determines the shell"],
		category: "Quantum Numbers",
	},
	{
		name: "Azimuthal Quantum Number",
		symbol: "l",
		description: "Specifies the shape of the orbital.",
		details: ["l = 0 (s), 1 (p), 2 (d), 3 (f)", "For each n, l = 0 to n-1", "Determines subshell"],
		category: "Quantum Numbers",
	},
	{
		name: "Magnetic Quantum Number",
		symbol: "mₗ",
		description: "Specifies the orientation of the orbital in space.",
		details: ["mₗ = -l to +l", "Number of values = 2l + 1", "Determines the specific orbital"],
		category: "Quantum Numbers",
	},
	{
		name: "Spin Quantum Number",
		symbol: "mₛ",
		description: "Specifies the spin orientation of the electron.",
		details: [
			"mₛ = +1/2 or -1/2",
			"Each orbital can hold 2 electrons with opposite spins",
			"Explains Pauli exclusion principle",
		],
		category: "Quantum Numbers",
	},
	// Principles
	{
		name: "Pauli Exclusion Principle",
		symbol: "",
		description: "No two electrons in an atom can have the same set of four quantum numbers.",
		details: ["Limits 2 electrons per orbital", "Explains electron configuration", "Foundation of atomic structure"],
		category: "Principles",
	},
	{
		name: "Hund's Rule",
		symbol: "",
		description: "Electrons fill degenerate orbitals singly before pairing up.",
		details: ["Maximizes total spin", "Reduces electron repulsion", "Explains magnetic properties"],
		category: "Principles",
	},
	{
		name: "Aufbau Principle",
		symbol: "",
		description: "Electrons occupy the lowest energy orbitals first.",
		details: ["Order: 1s < 2s < 2p < 3s ...", "Explains periodic table structure", "Predicts electron configuration"],
		category: "Principles",
	},
];

interface QuantumChemistryProps {
	theme: string;
}

// Material 3 Expressive Design styles for cards, buttons, and scrollbars
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
		  background: #fdf6e3;
		  z-index: 1100;
		}
		::-webkit-scrollbar-thumb {
		  background: linear-gradient(135deg, #b58900 0%, #268bd2 100%);
		  border-radius: 12px;
		  border: 3px solid #fdf6e3;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: linear-gradient(135deg, #268bd2 0%, #b58900 100%);
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

// Material 3 Expressive animations and components for Quantum Chemistry
const styles = `
/* ---- Cards & Grid ---- */
.compound-card {
  position: relative;
  transition: transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.35s cubic-bezier(0.25, 0.8, 0.25, 1), border-color 0.3s;
  will-change: transform, box-shadow, border-color;
  border-radius: 2.5rem;
  box-shadow: 0 4px 32px 0 rgba(60, 60, 90, 0.10), 0 1.5px 6px 0 rgba(60, 60, 90, 0.08);
  border: 2.5px solid var(--m3-outline, #e0e0e0);
  padding: 3.25rem 2.75rem 2.75rem 2.75rem; /* More padding */
  margin-bottom: 0.5rem;
  min-height: 540px; /* Taller like other pages */
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
.compound-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 4.5rem 4.5rem;
  align-items: stretch;
  margin-bottom: 0.5rem;
}
/* Icon and badge like other pages */
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

/* Buttons */
.m3-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 2.4rem;
  border-radius: 2rem;
  font-size: 1.05rem;
  font-weight: 600;
  background: linear-gradient(90deg, #6750a4 0%, #a084e8 100%);
  color: #fff;
  box-shadow: 0 2px 8px 0 rgba(103, 80, 164, 0.18);
  border: none;
  outline: none;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
}
.m3-button:hover, .m3-button:focus {
  background: linear-gradient(90deg, #7c5fd3 0%, #b39ddb 100%);
  box-shadow: 0 6px 18px 0 rgba(103, 80, 164, 0.26);
  transform: translateY(-2px) scale(1.03);
}

/* Toolbar */
.qc-toolbar {
  position: sticky;
  top: 72px;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 1.2rem;
  border-radius: 1.25rem;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0,0,0,0.06);
}
.dark .qc-toolbar {
  background: rgba(23,23,23,0.6);
  border-color: rgba(255,255,255,0.08);
}

/* Dialog */
.qc-dialog-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); z-index: 50;
  display: flex; align-items: center; justify-content: center; padding: 1rem;
  animation: fadeIn 200ms ease-out;
}
.qc-dialog {
  width: min(720px, 92vw);
  border-radius: 1.75rem;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0,0,0,0.25);
  transform: translateY(4px);
}
.qc-dialog-header { padding: 1.25rem 1.5rem; border-bottom: 1px solid rgba(0,0,0,0.06); display:flex; align-items:center; justify-content:space-between; gap:.75rem; }
.qc-dialog-title { display:flex; align-items:center; gap:.75rem; }
.qc-divider { height:1px; background: rgba(0,0,0,0.06); margin:.5rem -1.5rem 1rem; }
.dark .qc-divider { background: rgba(255,255,255,0.08); }
.qc-dialog-body { padding: 1.25rem 1.5rem; }
.qc-dialog-actions { display:flex; justify-content:flex-end; gap:0.5rem; padding: 1rem 1.5rem; border-top: 1px solid rgba(0,0,0,0.06); position: sticky; bottom: 0; background: transparent; }

/* Chips & badges */
.m3-chip { appearance:none; border:none; cursor:pointer; padding:.6rem 1rem; border-radius:9999px; font-weight:600; font-size:.95rem; background: rgba(103,80,164,0.08); color:#4b5563; transition: all .18s ease; box-shadow: 0 1px 2px rgba(0,0,0,0.06) inset; }
.m3-chip:hover { transform: translateY(-1px); box-shadow: 0 2px 6px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.06) inset; }
.m3-chip.active { color: white; background: linear-gradient(90deg, #6750a4 0%, #a084e8 100%); box-shadow: 0 6px 16px rgba(103,80,164,0.28); }
.dark .m3-chip { background: rgba(255,255,255,0.08); color:#e5e7eb; }
.m3-badge { display:inline-flex; align-items:center; gap:.5rem; padding:.4rem .75rem; border-radius:9999px; font-size:.85rem; font-weight:600; background: rgba(103,80,164,0.12); color:#4b5563; }
.dark .m3-badge { background: rgba(255,255,255,0.08); color:#e5e7eb; }

/* Utilities */
@keyframes fadeIn { from { opacity: 0; transform: translateY(4px);} to { opacity: 1; transform: translateY(0);} }
@media (max-width: 1200px) { .compound-grid { gap: 3rem 3rem; } }
@media (max-width: 900px) { .compound-grid { gap: 2.2rem 2.2rem; } }
@media (max-width: 600px) {
  .compound-grid { gap: 1.2rem 1.2rem; grid-template-columns: 1fr; }
  .compound-card { padding: 1.2rem; min-height: 420px; }
  .qc-toolbar { top: 64px; }
}
`;

const getThemeClasses = (theme: string) => {
	const baseClasses = "min-h-screen transition-all duration-300 overflow-auto";
	switch (theme) {
		case "dark":
			return `${baseClasses} bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white`;
		case "light":
			return `${baseClasses} bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900`;
		default:
			return `${baseClasses} bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900`;
	}
};

const getCardClasses = (theme: string) => {
	switch (theme) {
		case "dark":
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-[#181c2a] via-[#232946] to-[#1a1a2e] text-white rounded-3xl animate-fade-in";
		case "light":
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 rounded-[2.5rem] animate-fade-in";
		default:
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 rounded-[2.5rem] animate-fade-in";
	}
};

// New: theme-aware modal styles for Filters popup
const getModalStyles = (theme: string): React.CSSProperties => {
	switch (theme) {
		case "dark":
		case "night":
		case "dracula":
		case "forest":
		case "dark-glass":
			return {
				background: "linear-gradient(180deg, rgba(24,28,42,0.96) 0%, rgba(24,28,42,0.88) 100%)",
				border: "1px solid rgba(255,255,255,0.08)",
			};
		case "cyberpunk":
			return {
				background: "linear-gradient(180deg, rgba(15,0,38,0.96) 0%, rgba(15,0,38,0.88) 100%)",
				border: "1px solid rgba(255,0,204,0.35)",
				boxShadow: "0 24px 64px rgba(255,0,204,0.25)",
			};
		case "win98":
			return { background: "#e0e0e0", border: "2px solid #808080", boxShadow: "3px 3px 0 #000" };
		case "pastel":
			return {
				background: "linear-gradient(180deg, rgba(252,231,243,0.95) 0%, rgba(224,242,254,0.9) 100%)",
				border: "1px solid rgba(236,72,153,0.25)",
			};
		case "peach":
			return {
				background: "linear-gradient(180deg, rgba(255,247,237,0.95) 0%, rgba(254,243,199,0.9) 100%)",
				border: "1px solid rgba(251,146,60,0.25)",
			};
		case "high-contrast":
			return { background: "#000", border: "3px solid #FFD600" };
		case "amoled":
			return {
				background: "linear-gradient(180deg, rgba(0,0,0,0.96) 0%, rgba(10,10,10,0.9) 100%)",
				border: "1px solid #222",
			};
		case "solarized":
			return {
				background: "linear-gradient(180deg, rgba(253,246,227,0.95) 0%, rgba(238,232,213,0.9) 100%)",
				border: "1px solid rgba(181,137,0,0.25)",
			};
		case "light":
		default:
			return {
				background: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)",
				border: "1px solid rgba(0,0,0,0.06)",
			};
	}
};

const QuantumChemistry: React.FC<QuantumChemistryProps> = ({ theme }) => {
	// Page state: dialog and filters modal
	const [dialogOpen, setDialogOpen] = React.useState(false);
	const [selectedConcept, setSelectedConcept] = React.useState<QuantumConcept | null>(null);
	const [filterOpen, setFilterOpen] = React.useState(false);
	const [enabledSections, setEnabledSections] = React.useState<Record<string, boolean>>({
		Orbitals: true,
		"Quantum Numbers": true,
		Principles: true,
	});

	// New: icons for categories and active count for filters summary
	const categoryIcons: Record<string, string> = {
		Orbitals: "🌀",
		"Quantum Numbers": "🔢",
		Principles: "📜",
	};
	const activeCount = Object.values(enabledSections).filter(Boolean).length;

	React.useEffect(() => {
		const handler = () => setFilterOpen(true);
		window.addEventListener("open-page-filters", handler);
		return () => window.removeEventListener("open-page-filters", handler);
	}, []);

	const toggleSection = (key: string) => setEnabledSections((s) => ({ ...s, [key]: !s[key] }));
	const setAll = (val: boolean) => setEnabledSections({ Orbitals: val, "Quantum Numbers": val, Principles: val });
	const openDialog = (concept: QuantumConcept) => {
		setSelectedConcept(concept);
		setDialogOpen(true);
	};
	const closeDialog = () => {
		setDialogOpen(false);
		setSelectedConcept(null);
	};

	// Theme-based color maps for each section (Quantum Chemistry palette)
	const getSectionTheme = (sectionTitle: string) => {
		const themeKey =
			theme === "dark" || theme === "night" || theme === "dracula" || theme === "forest" || theme === "dark-glass"
				? "dark"
				: theme === "amoled"
				? "amoled"
				: theme === "high-contrast"
				? "highContrast"
				: "light";
		const map = {
			Orbitals: {
				light: {
					bg: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)",
					shadow: "0 0 32px 12px #60a5fa33",
					badgeBg: "linear-gradient(90deg, #60a5fa 0%, #2563eb 100%)",
					badgeShadow: "0 0 24px 8px #2563eb22",
				},
				dark: {
					bg: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
					shadow: "0 0 32px 12px #1e40af33",
					badgeBg: "linear-gradient(90deg, #2563eb 0%, #1e40af 100%)",
					badgeShadow: "0 0 24px 8px #1e40af22",
				},
				amoled: {
					bg: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
					shadow: "0 0 32px 12px #1e40af33",
					badgeBg: "linear-gradient(90deg, #2563eb 0%, #1e40af 100%)",
					badgeShadow: "0 0 24px 8px #1e40af22",
				},
				highContrast: {
					bg: "linear-gradient(135deg, #FFD600 0%, #FFB300 100%)",
					shadow: "0 0 32px 12px #FFD60044",
					badgeBg: "linear-gradient(90deg, #FFD600 0%, #FFB300 100%)",
					badgeShadow: "0 0 24px 8px #FFD60033",
				},
			},
			"Quantum Numbers": {
				light: {
					bg: "linear-gradient(135deg, #fb7185 0%, #f43f5e 100%)",
					shadow: "0 0 32px 12px #f43f5e33",
					badgeBg: "linear-gradient(90deg, #fb7185 0%, #f43f5e 100%)",
					badgeShadow: "0 0 24px 8px #f43f5e22",
				},
				dark: {
					bg: "linear-gradient(135deg, #be185d 0%, #f43f5e 100%)",
					shadow: "0 0 32px 12px #be185d33",
					badgeBg: "linear-gradient(90deg, #be185d 0%, #f43f5e 100%)",
					badgeShadow: "0 0 24px 8px #be185d22",
				},
				amoled: {
					bg: "linear-gradient(135deg, #be185d 0%, #f43f5e 100%)",
					shadow: "0 0 32px 12px #be185d33",
					badgeBg: "linear-gradient(90deg, #be185d 0%, #f43f5e 100%)",
					badgeShadow: "0 0 24px 8px #be185d22",
				},
				highContrast: {
					bg: "linear-gradient(135deg, #FFD600 0%, #FFB300 100%)",
					shadow: "0 0 32px 12px #FFD60044",
					badgeBg: "linear-gradient(90deg, #FFD600 0%, #FFB300 100%)",
					badgeShadow: "0 0 24px 8px #FFD60033",
				},
			},
			Principles: {
				light: {
					bg: "linear-gradient(135deg, #6ee7b7 0%, #059669 100%)",
					shadow: "0 0 32px 12px #05966933",
					badgeBg: "linear-gradient(90deg, #6ee7b7 0%, #059669 100%)",
					badgeShadow: "0 0 24px 8px #05966922",
				},
				dark: {
					bg: "linear-gradient(135deg, #059669 0%, #065f46 100%)",
					shadow: "0 0 32px 12px #065f4633",
					badgeBg: "linear-gradient(90deg, #059669 0%, #065f46 100%)",
					badgeShadow: "0 0 24px 8px #065f4622",
				},
				amoled: {
					bg: "linear-gradient(135deg, #059669 0%, #065f46 100%)",
					shadow: "0 0 32px 12px #065f4633",
					badgeBg: "linear-gradient(90deg, #059669 0%, #065f46 100%)",
					badgeShadow: "0 0 24px 8px #065f4622",
				},
				highContrast: {
					bg: "linear-gradient(135deg, #FFD600 0%, #FFB300 100%)",
					shadow: "0 0 32px 12px #FFD60044",
					badgeBg: "linear-gradient(90deg, #FFD600 0%, #FFB300 100%)",
					badgeShadow: "0 0 24px 8px #FFD60033",
				},
			},
		} as const;
		return map[sectionTitle as keyof typeof map][themeKey as keyof (typeof map)["Orbitals"]];
	};

	const sections = [
		{
			title: "Orbitals",
			subtitle: "Regions in atoms where electrons are likely to be found",
			icon: "🌀",
			color: "from-blue-400 to-blue-700",
			concepts: quantumConcepts.filter((c) => c.category === "Orbitals"),
		},
		{
			title: "Quantum Numbers",
			subtitle: "Numbers that describe the unique quantum state of an electron",
			icon: "🔢",
			color: "from-pink-500 to-red-600",
			concepts: quantumConcepts.filter((c) => c.category === "Quantum Numbers"),
		},
		{
			title: "Principles",
			subtitle: "Fundamental rules governing electron arrangement",
			icon: "📜",
			color: "from-green-400 to-green-700",
			concepts: quantumConcepts.filter((c) => c.category === "Principles"),
		},
	];

	const displayedSections = sections.filter((s) => enabledSections[s.title as keyof typeof enabledSections]);

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
.m3-chip { display:inline-flex; align-items:center; gap:.55rem; }
.chip-indicator { width: 1.1rem; height: 1.1rem; border-radius: 9999px; border: 2px solid rgba(103,80,164,0.45); display:inline-flex; align-items:center; justify-content:center; font-weight:800; line-height:1; font-size:.8rem; color:#fff; background: transparent; }
.m3-chip.active .chip-indicator { background: #7c5fd3; border-color: #7c5fd3; box-shadow: 0 0 0 3px rgba(124,95,211,0.25); }
/* Larger badge option for Learn More */
.m3-badge-lg { padding:.5rem 1rem; font-size:1rem; }
`}
			</style>
			{/* Custom Scrollbar Styles for Theme */}
			<style>{getScrollbarStyles(theme)}</style>

			{/* Hero Section */}
			<section className="relative overflow-hidden pt-24" style={{ marginTop: "75px" }}>
				<div className="max-w-5xl mx-auto px-[5vw] py-10 text-center">
					<div className="space-y-6">
						<div className="flex justify-center pt-2">
							<div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
						</div>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<div className="max-w-6xl mx-auto px-[5vw] pb-24">
				{displayedSections.map((section) => (
					<section key={section.title} className="mb-20">
						{/* Section Header */}
						<div
							className="text-center mb-12"
							style={["Quantum Numbers", "Principles"].includes(section.title) ? { marginTop: "3%" } : {}}
						>
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
								<div className={`w-20 h-1 bg-gradient-to-r ${section.color} rounded-full`} />
							</div>
						</div>
						{/* Concepts Grid */}
						<div className="compound-grid">
							{section.concepts.map((concept) => {
								const sTheme = getSectionTheme(section.title);
								return (
									<div
										key={concept.name}
										className={getCardClasses(theme) + " mt-0"}
										style={{ position: "relative", top: "5%" }}
									>
										<div className="flex items-center justify-between mb-10">
											<div
												className="card-icon w-24 h-24"
												style={{ background: sTheme.bg, boxShadow: sTheme.shadow }}
											>
												<span className="text-white text-5xl drop-shadow-[0_2px_12px_rgba(80,80,255,0.45)]">
													{concept.symbol || section.icon}
												</span>
											</div>
											<span
												className="card-badge text-white"
												style={{ background: sTheme.badgeBg, boxShadow: sTheme.badgeShadow }}
											>
												{section.title}
											</span>
										</div>
										<div className="relative z-10 flex flex-col flex-grow">
											<div className="flex-grow">
												<div className="mb-8">
													<h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
														{concept.name}
													</h3>
													<div className="text-2xl font-mono font-black text-purple-700 dark:text-purple-300 mb-8">
														{concept.symbol}
													</div>
												</div>
												<p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-5">
													{concept.description}
												</p>
												<ul className="mt-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
													{concept.details.map((d, i) => (
														<li key={i}>{d}</li>
													))}
												</ul>
											</div>
											<div className="mt-8">
												<button
													className="m3-button"
													onClick={() => openDialog(concept)}
													aria-label={`Learn more about ${concept.name}`}
												>
													Learn More
												</button>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</section>
				))}
			</div>

			{/* Filters Modal (popup) */}
			{filterOpen && (
				<div className="qc-dialog-overlay" onClick={() => setFilterOpen(false)} aria-hidden={false}>
					<div
						className="qc-dialog"
						style={getModalStyles(theme)}
						onClick={(e) => e.stopPropagation()}
						role="dialog"
						aria-modal="true"
						aria-label="Filters"
					>
						<div className="qc-dialog-header">
							<div className="qc-dialog-title">
								<span className="m3-badge">Filters</span>
								<span className="text-sm text-gray-500 dark:text-gray-400">Organize visible categories</span>
							</div>
							<button className="m3-button" onClick={() => setFilterOpen(false)} aria-label="Close Filters">
								Close
							</button>
						</div>
						<div className="qc-divider" />
						<div className="qc-dialog-body">
							<p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
								Choose which sections to display. Showing <span className="font-semibold">{activeCount}</span> of
								3.
							</p>
							<div className="chip-grid">
								{Object.keys(enabledSections).map((key) => {
									const active = !!enabledSections[key];
									return (
										<button
											key={key}
											type="button"
											className={`m3-chip ${active ? "active" : ""}`}
											onClick={() => toggleSection(key)}
											aria-pressed={active}
										>
											<span className="chip-indicator" aria-hidden="true">
												{active ? "✓" : ""}
											</span>
											<span>
												{categoryIcons[key] || ""} {key}
											</span>
										</button>
									);
								})}
							</div>
						</div>
						<div className="qc-dialog-actions">
							<div className="flex items-center justify-between w-full">
								<div className="flex items-center gap-2">
									<button className="m3-button" onClick={() => setAll(false)}>
										Clear All
									</button>
									<button className="m3-button" onClick={() => setAll(true)}>
										Select All
									</button>
								</div>
								<div className="flex items-center gap-3">
									<span className="text-sm text-gray-500 dark:text-gray-400">{activeCount} selected</span>
									<button className="m3-button" onClick={() => setFilterOpen(false)}>
										Apply
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Details Modal (Learn More) */}
			{dialogOpen && selectedConcept && (
				<div
					className="qc-dialog-overlay"
					role="dialog"
					aria-modal="true"
					aria-label={`${selectedConcept.name} details`}
					onClick={closeDialog}
				>
					<div className="qc-dialog" style={getModalStyles(theme)} onClick={(e) => e.stopPropagation()}>
						<div className="qc-dialog-header">
							<div className="qc-dialog-title">
								<h4 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
									{selectedConcept.name}
								</h4>
								{selectedConcept.symbol && <span className="m3-badge m3-badge-lg">{selectedConcept.symbol}</span>}
							</div>
							<button className="m3-button" onClick={closeDialog}>
								Close
							</button>
						</div>
						<div className="qc-divider" />
						<div className="qc-dialog-body space-y-6 text-lg md:text-xl leading-relaxed">
							<p className="text-gray-700 dark:text-gray-300">{selectedConcept.description}</p>
							<h5 className="text-sm font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">
								Key points
							</h5>
							<ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-2 text-base md:text-lg">
								{selectedConcept.details.map((d, i) => (
									<li key={i}>{d}</li>
								))}
							</ul>
						</div>
						{/* Removed bottom Close to keep a single Close button at top-right */}
					</div>
				</div>
			)}
		</div>
	);
};

export default QuantumChemistry;
