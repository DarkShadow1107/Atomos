import React from "react";

// Material 3 Expressive Design styles for cards and buttons
const styles = `
.compound-card {
  position: relative;
  transition: transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.35s cubic-bezier(0.25, 0.8, 0.25, 1), border-color 0.3s;
  will-change: transform, box-shadow, border-color;
  border-radius: 2.5rem;
  /* background removed to ensure only theme-specific backgrounds are used via getCardClasses(theme) */
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
`;

// Compound data with detailed information
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
	// Medicine & Pharmaceuticals
	{
		name: "Aspirin",
		formula: "C₉H₈O₄",
		description:
			"Aspirin (acetylsalicylic acid) is a widely used medication for pain relief, fever reduction, and inflammation. It is also used for cardiovascular protection.",
		molecularWeight: "180.16 g/mol",
		meltingPoint: "135°C",
		boilingPoint: "140°C (decomposes)",
		category: "Medicine",
		uses: ["Pain relief", "Anti-inflammatory", "Fever reducer", "Blood thinner"],
		structure: "Benzene ring with acetyl and carboxyl functional groups",
	},
	{
		name: "Caffeine",
		formula: "C₈H₁₀N₄O₂",
		description:
			"Caffeine is a central nervous system stimulant and the world's most widely consumed psychoactive drug. It is naturally found in coffee, tea, and chocolate.",
		molecularWeight: "194.19 g/mol",
		meltingPoint: "235°C",
		boilingPoint: "178°C (sublimes)",
		category: "Medicine",
		uses: ["Stimulant beverages", "Medications", "Cosmetics", "Research"],
		structure: "Purine derivative with methylxanthine structure",
	},
	{
		name: "Morphine",
		formula: "C₁₇H₁₉NO₃",
		description:
			"Morphine is a powerful opioid analgesic derived from opium. It is used medically for severe pain management in hospitals and palliative care.",
		molecularWeight: "285.34 g/mol",
		meltingPoint: "254°C",
		boilingPoint: "Decomposes",
		category: "Medicine",
		uses: ["Pain management", "Anesthesia", "Palliative care", "Surgery"],
		structure: "Complex alkaloid with phenanthrene core",
	},
	{
		name: "Penicillin G",
		formula: "C₁₆H₁₈N₂O₄S",
		description:
			"Penicillin G is a β-lactam antibiotic that was the first antibiotic to be discovered. It revolutionized medicine by treating bacterial infections.",
		molecularWeight: "334.39 g/mol",
		meltingPoint: "214°C (decomposes)",
		boilingPoint: "Decomposes",
		category: "Medicine",
		uses: ["Antibiotic", "Bacterial infections", "Strep throat", "Pneumonia"],
		structure: "β-lactam ring fused to thiazolidine ring",
	},

	// Energy & Fuels
	{
		name: "Methane",
		formula: "CH₄",
		description:
			"Methane is the simplest alkane and the main component of natural gas. It is a colorless, odorless, and highly flammable gas at room temperature and standard pressure.",
		molecularWeight: "16.04 g/mol",
		meltingPoint: "-182.5°C",
		boilingPoint: "-161.5°C",
		category: "Energy",
		uses: ["Natural gas fuel", "Chemical feedstock", "Hydrogen production", "Energy generation"],
		structure: "Tetrahedral with sp³ hybridization",
	},
	{
		name: "Ethanol",
		formula: "C₂H₅OH",
		description:
			"Ethanol is a clear, colorless liquid with a characteristic pleasant odor and burning taste. It is the alcohol found in alcoholic beverages and is widely used in industry.",
		molecularWeight: "46.07 g/mol",
		meltingPoint: "-114.1°C",
		boilingPoint: "78.3°C",
		category: "Energy",
		uses: ["Biofuel", "Fuel additive", "Alcoholic beverages", "Industrial solvent"],
		structure: "Primary alcohol with hydroxyl functional group",
	},
	{
		name: "Octane",
		formula: "C₈H₁₈",
		description:
			"Octane is a hydrocarbon and alkane with the chemical formula C₈H₁₈. It is a key component of gasoline and is used as a fuel and solvent.",
		molecularWeight: "114.23 g/mol",
		meltingPoint: "-56.8°C",
		boilingPoint: "125.7°C",
		category: "Energy",
		uses: ["Gasoline component", "Fuel standard", "Solvent", "Chemical synthesis"],
		structure: "Straight-chain saturated hydrocarbon",
	},
	{
		name: "Propane",
		formula: "C₃H₈",
		description:
			"Propane is a three-carbon alkane gas that is commonly used as fuel for heating, cooking, and vehicles. It is stored as a liquid under pressure.",
		molecularWeight: "44.10 g/mol",
		meltingPoint: "-187.7°C",
		boilingPoint: "-42.1°C",
		category: "Energy",
		uses: ["Heating fuel", "Cooking gas", "Vehicle fuel", "Refrigerant"],
		structure: "Three-carbon chain alkane",
	},

	// Industrial Solvents
	{
		name: "Acetone",
		formula: "C₃H₆O",
		description:
			"Acetone is a colorless, volatile, flammable liquid. It is the simplest ketone and is widely used as a solvent and in chemical synthesis.",
		molecularWeight: "58.08 g/mol",
		meltingPoint: "-94.7°C",
		boilingPoint: "56.1°C",
		category: "Solvent",
		uses: ["Nail polish remover", "Paint thinner", "Laboratory solvent", "Plastic production"],
		structure: "Carbonyl group (C=O) flanked by two methyl groups",
	},
	{
		name: "Benzene",
		formula: "C₆H₆",
		description:
			"Benzene is a colorless, highly flammable liquid with a sweet odor. It is a fundamental aromatic compound and an important industrial solvent and precursor.",
		molecularWeight: "78.11 g/mol",
		meltingPoint: "5.5°C",
		boilingPoint: "80.1°C",
		category: "Solvent",
		uses: ["Chemical synthesis", "Solvent", "Plastic production", "Pharmaceutical intermediates"],
		structure: "Planar hexagonal ring with delocalized π electrons",
	},
	{
		name: "Toluene",
		formula: "C₇H₈",
		description:
			"Toluene is an aromatic hydrocarbon widely used as an industrial feedstock and solvent. It has a sweet, pungent benzene-like odor.",
		molecularWeight: "92.14 g/mol",
		meltingPoint: "-95°C",
		boilingPoint: "110.6°C",
		category: "Solvent",
		uses: ["Paint thinner", "Adhesives", "Chemical synthesis", "Gasoline additive"],
		structure: "Benzene ring with methyl substituent",
	},
	{
		name: "Dichloromethane",
		formula: "CH₂Cl₂",
		description:
			"Dichloromethane is a colorless, volatile liquid with a mildly sweet aroma. It is widely used as a solvent in various industrial applications.",
		molecularWeight: "84.93 g/mol",
		meltingPoint: "-96.7°C",
		boilingPoint: "39.6°C",
		category: "Solvent",
		uses: ["Paint stripper", "Degreasing agent", "Extraction solvent", "Aerosol propellant"],
		structure: "Tetrahedral carbon with two chlorine atoms",
	},

	// Biochemistry & Nutrition
	{
		name: "Glucose",
		formula: "C₆H₁₂O₆",
		description:
			"Glucose is a simple sugar (monosaccharide) and is the most abundant monosaccharide. It is essential for cellular metabolism and energy production.",
		molecularWeight: "180.16 g/mol",
		meltingPoint: "146°C",
		boilingPoint: "Decomposes",
		category: "Biochemistry",
		uses: ["Energy metabolism", "Food industry", "Medical treatments", "Fermentation"],
		structure: "Six-carbon aldohexose with multiple hydroxyl groups",
	},
	{
		name: "Acetic Acid",
		formula: "CH₃COOH",
		description:
			"Acetic acid is a colorless liquid organic compound with a pungent smell and sour taste. It is the main component of vinegar and an important chemical reagent.",
		molecularWeight: "60.05 g/mol",
		meltingPoint: "16.6°C",
		boilingPoint: "118.1°C",
		category: "Biochemistry",
		uses: ["Food preservative", "Chemical synthesis", "Solvent", "Textile industry"],
		structure: "Carboxyl functional group attached to a methyl group",
	},
	{
		name: "Cholesterol",
		formula: "C₂₇H₄₆O",
		description:
			"Cholesterol is a sterol lipid essential for cell membrane structure and hormone synthesis. It plays crucial roles in biological processes.",
		molecularWeight: "386.65 g/mol",
		meltingPoint: "148°C",
		boilingPoint: "Decomposes",
		category: "Biochemistry",
		uses: ["Cell membranes", "Hormone synthesis", "Bile acids", "Vitamin D production"],
		structure: "Steroid backbone with hydroxyl group",
	},
	{
		name: "Vitamin C",
		formula: "C₆H₈O₆",
		description:
			"Vitamin C (ascorbic acid) is an essential nutrient involved in collagen synthesis, immune function, and antioxidant protection.",
		molecularWeight: "176.12 g/mol",
		meltingPoint: "190°C (decomposes)",
		boilingPoint: "Decomposes",
		category: "Biochemistry",
		uses: ["Antioxidant", "Collagen synthesis", "Immune support", "Food additive"],
		structure: "Lactone with enediol functional group",
	},
];

interface OrganicCompoundsProps {
	theme: string;
}

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
		case "dracula":
			return `${baseClasses} bg-gradient-to-br from-[#282a36] via-[#44475a] to-[#6272a4] text-[#f8f8f2]`;
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
			return `${baseClasses} bg-gradient-to-br from-[#fdf6e3] via-[#eee8d5] to-[#93a1a1] text-[#657b83]`;
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
		case "dracula":
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-[#282a36] via-[#44475a] to-[#6272a4] text-[#f8f8f2] rounded-[2.25rem] shadow-[0_8px_40px_0_rgba(189,147,249,0.28)] hover:shadow-[0_16px_64px_0_rgba(255,121,198,0.38)] border-[#bd93f9]/70 hover:border-[#ff79c6]/90 animate-fade-in";
		case "forest":
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-[#0d261a] via-[#14532d] to-[#166534] text-green-100 rounded-[2.75rem] shadow-[0_8px_40px_0_rgba(16,185,129,0.28)] hover:shadow-[0_16px_64px_0_rgba(34,197,94,0.38)] border-green-700/80 hover:border-emerald-300/90 animate-fade-in";
		case "amoled":
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-black via-[#181818] to-[#232946] text-white rounded-[2.5rem] shadow-[0_8px_40px_0_rgba(59,130,246,0.28)] hover:shadow-[0_16px_64px_0_rgba(59,130,246,0.38)] border-white/60 hover:border-blue-400/90 animate-fade-in";
		case "night":
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-[#181c2a] via-[#232946] to-black text-white rounded-[2.5rem] shadow-[0_8px_40px_0_rgba(59,130,246,0.28)] hover:shadow-[0_16px_64px_0_rgba(59,130,246,0.38)] border-blue-700/80 hover:border-blue-400/90 animate-fade-in";
		case "high-contrast":
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
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-[#fdf6e3] via-[#eee8d5] to-[#93a1a1] text-[#657b83] rounded-[2.5rem] shadow-[0_6px_32px_0_rgba(181,137,0,0.10)] hover:shadow-[0_12px_48px_0_rgba(38,139,210,0.18)] border-[#b58900]/30 hover:border-[#268bd2]/70 animate-fade-in";
		default:
			return "compound-card flex flex-col relative overflow-hidden group border-2.5 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 rounded-[2.5rem] shadow-[0_6px_32px_0_rgba(60,60,90,0.10)] hover:shadow-[0_12px_48px_0_rgba(60,60,90,0.18)] border-gray-200/90 hover:border-blue-400/60 animate-fade-in";
	}
};

const OrganicCompounds: React.FC<OrganicCompoundsProps> = ({ theme }) => {
	return (
		<div className={getThemeClasses(theme) + " pt-24"}>
			{/* Add custom styles */}
			<style>{styles}</style>

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
				{/* Compounds Grid by Categories */}
				{[
					{
						title: "Medicine & Pharmaceuticals",
						subtitle: "Essential compounds for healthcare and treatment",
						icon: "💊",
						color: "from-red-500 to-pink-600",
						compounds: compounds.filter((c) => c.category === "Medicine"),
					},
					{
						title: "Energy & Fuels",
						subtitle: "Hydrocarbons powering our world",
						icon: "⚡",
						color: "from-orange-500 to-yellow-600",
						compounds: compounds.filter((c) => c.category === "Energy"),
					},
					{
						title: "Industrial Solvents",
						subtitle: "Chemical compounds for industrial processes",
						icon: "🧪",
						color: "from-blue-500 to-indigo-600",
						compounds: compounds.filter((c) => c.category === "Solvent"),
					},
					{
						title: "Biochemistry & Nutrition",
						subtitle: "Molecules essential for life and health",
						icon: "🧬",
						color: "from-green-500 to-emerald-600",
						compounds: compounds.filter((c) => c.category === "Biochemistry"),
					},
				].map((section) => (
					<section key={section.title} className="mb-20">
						{/* Section Header */}
						<div className="text-center mb-12">
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

						{/* Compounds Grid - Clean 4 per row layout */}
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
											// Theme-based color maps for each section
											const sectionColorMap = {
												"Medicine & Pharmaceuticals": {
													light: {
														bg: "linear-gradient(135deg, rgba(255,107,107,0.96) 0%, rgba(255,182,185,0.92) 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px rgba(255,80,80,0.22), 0 8px 32px 0 rgba(255,80,80,0.32)",
														badgeBg:
															"linear-gradient(90deg, rgba(255,107,107,0.96) 0%, rgba(255,182,185,0.92) 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px rgba(255,80,80,0.18), 0 4px 16px 0 rgba(255,80,80,0.28)",
													},
													dark: {
														bg: "linear-gradient(135deg, #ff6b6b 0%, #ffb6b9 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #ff6b6b44, 0 8px 32px 0 #ff6b6b66",
														badgeBg: "linear-gradient(90deg, #ff6b6b 0%, #ffb6b9 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #ff6b6b33, 0 4px 16px 0 #ff6b6b55",
													},
													amoled: {
														bg: "linear-gradient(135deg, #ff6b6b 0%, #ffb6b9 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #ff6b6b44, 0 8px 32px 0 #ff6b6b66",
														badgeBg: "linear-gradient(90deg, #ff6b6b 0%, #ffb6b9 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #ff6b6b33, 0 4px 16px 0 #ff6b6b55",
													},
													highContrast: {
														bg: "linear-gradient(135deg, #FFD600 0%, #FFB300 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #FFD60044, 0 8px 32px 0 #FFD60066",
														badgeBg: "linear-gradient(90deg, #FFD600 0%, #FFB300 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #FFD60033, 0 4px 16px 0 #FFD60055",
													},
												},
												"Energy & Fuels": {
													light: {
														bg: "linear-gradient(135deg, #ffb347 0%, #ffe259 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #ffb34744, 0 8px 32px 0 #ffb34766",
														badgeBg: "linear-gradient(90deg, #ffb347 0%, #ffe259 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #ffb34733, 0 4px 16px 0 #ffb34755",
													},
													dark: {
														bg: "linear-gradient(135deg, #ff9800 0%, #ffd740 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #ff980044, 0 8px 32px 0 #ff980066",
														badgeBg: "linear-gradient(90deg, #ff9800 0%, #ffd740 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #ff980033, 0 4px 16px 0 #ff980055",
													},
													amoled: {
														bg: "linear-gradient(135deg, #ff9800 0%, #ffd740 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #ff980044, 0 8px 32px 0 #ff980066",
														badgeBg: "linear-gradient(90deg, #ff9800 0%, #ffd740 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #ff980033, 0 4px 16px 0 #ff980055",
													},
													highContrast: {
														bg: "linear-gradient(135deg, #FFD600 0%, #FFB300 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #FFD60044, 0 8px 32px 0 #FFD60066",
														badgeBg: "linear-gradient(90deg, #FFD600 0%, #FFB300 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #FFD60033, 0 4px 16px 0 #FFD60055",
													},
												},
												"Industrial Solvents": {
													light: {
														bg: "linear-gradient(135deg, #42a5f5 0%, #7e57c2 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #42a5f544, 0 8px 32px 0 #42a5f566",
														badgeBg: "linear-gradient(90deg, #42a5f5 0%, #7e57c2 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #42a5f533, 0 4px 16px 0 #42a5f555",
													},
													dark: {
														bg: "linear-gradient(135deg, #1976d2 0%, #7e57c2 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #1976d244, 0 8px 32px 0 #1976d266",
														badgeBg: "linear-gradient(90deg, #1976d2 0%, #7e57c2 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #1976d233, 0 4px 16px 0 #1976d255",
													},
													amoled: {
														bg: "linear-gradient(135deg, #1976d2 0%, #7e57c2 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #1976d244, 0 8px 32px 0 #1976d266",
														badgeBg: "linear-gradient(90deg, #1976d2 0%, #7e57c2 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #1976d233, 0 4px 16px 0 #1976d255",
													},
													highContrast: {
														bg: "linear-gradient(135deg, #FFD600 0%, #FFB300 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #FFD60044, 0 8px 32px 0 #FFD60066",
														badgeBg: "linear-gradient(90deg, #FFD600 0%, #FFB300 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #FFD60033, 0 4px 16px 0 #FFD60055",
													},
												},
												"Biochemistry & Nutrition": {
													light: {
														bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #43e97b44, 0 8px 32px 0 #43e97b66",
														badgeBg: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #43e97b33, 0 4px 16px 0 #43e97b55",
													},
													dark: {
														bg: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #11998e44, 0 8px 32px 0 #11998e66",
														badgeBg: "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #11998e33, 0 4px 16px 0 #11998e55",
													},
													amoled: {
														bg: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
														shadow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px 12px #11998e44, 0 8px 32px 0 #11998e66",
														badgeBg: "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
														badgeShadow:
															"0 0 0 0 rgba(0,0,0,0), 0 0 24px 8px #11998e33, 0 4px 16px 0 #11998e55",
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
														<span className="text-white text-5xl drop-shadow-[0_2px_12px_rgba(255,80,80,0.45)]">
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
									{/* Main Content Wrapper */}
									<div className="relative z-10 flex flex-col flex-grow">
										{/* Main Content Area */}
										<div className="flex-grow">
											{/* Compound Header */}
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

											{/* Description */}
											<p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-5">
												{compound.description}
											</p>
										</div>

										{/* Properties Section at the bottom */}
										<div className="mt-auto pt-8 flex flex-col gap-4">
											<div className="bg-gray-100/90 dark:bg-gray-900/70 rounded-3xl p-7 border border-black/5 dark:border-white/5 shadow-md flex flex-col gap-2 animate-fade-in">
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
															{compound.boilingPoint}
														</span>
													</div>
												</div>
											</div>
											<button
												className="m3-button"
												tabIndex={0}
												aria-label={`Learn more about ${compound.name}`}
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
		</div>
	);
};

export default OrganicCompounds;
