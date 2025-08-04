import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavbarRouter, PeriodicTable, ElementModal, OrganicCompounds } from "./components";
import elementsData, { periodicTableRows } from "./data/elements";
import "./App.css";

const themeOptions = [
	{ value: "system", label: "System" },
	{ value: "dark", label: "Dark" },
	{ value: "light", label: "Light" },
	{ value: "solarized", label: "Solarized" },
	{ value: "pastel", label: "Pastel" },
	{ value: "high-contrast", label: "High Contrast" },
	{ value: "night", label: "Night" },
	{ value: "amoled", label: "AMOLED" },
	{ value: "dracula", label: "Dracula" },
	{ value: "cyberpunk", label: "Cyberpunk" },
	{ value: "forest", label: "Forest" },
	{ value: "peach", label: "Peach" },
	{ value: "win98", label: "Windows 98" },
	{ value: "dark-glass", label: "Dark Glass" },
];

const getSystemTheme = () => {
	if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
		return "dark";
	}
	return "light";
};

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

// Main App component with routing
function App() {
	const [selected, setSelected] = useState<number | null>(null);
	const [search, setSearch] = useState("");
	const [theme, setTheme] = useState<string>(() => "system");
	const [resolvedTheme, setResolvedTheme] = useState<string>(getSystemTheme());

	useEffect(() => {
		if (theme === "system") {
			const updateTheme = () => setResolvedTheme(getSystemTheme());
			window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateTheme);
			setResolvedTheme(getSystemTheme());
			return () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", updateTheme);
		} else {
			setResolvedTheme(theme);
		}
	}, [theme]);

	const filteredRows =
		search.trim() === ""
			? periodicTableRows
			: periodicTableRows.map((row) => ({
					cells: row.cells.map((cell) => {
						if (cell.type === "element" && cell.element) {
							const match =
								cell.element.name.toLowerCase().includes(search.toLowerCase()) ||
								cell.element.symbol.toLowerCase().includes(search.toLowerCase());
							return match
								? cell
								: ({
										type: "empty",
										colspan: cell.colspan,
										className: cell.className,
								  } as import("./data/elements").TableCell);
						}
						return cell;
					}),
			  }));

	const selectedElement = elementsData.find((el) => el.atomicNumber === selected) || null;

	// Home page component with periodic table
	const HomePage = () => (
		<>
			<div className="navbar-search">
				<div className="search-bar" style={{ position: "relative" }}>
					<input
						type="text"
						placeholder="Search elements..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						style={{ paddingLeft: "2.2em" }}
					/>
					<svg className="search-icon" viewBox="0 0 24 24">
						<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z" />
					</svg>
				</div>
			</div>
			<main>
				<PeriodicTable onElementClick={setSelected} rows={filteredRows} />
				{selectedElement && <ElementModal element={selectedElement} onClose={() => setSelected(null)} />}
			</main>
		</>
	);

	// Placeholder components for other pages
	const InorganicCompounds = () => (
		<div className={getThemeClasses(resolvedTheme)}>
			<div className="max-w-7xl mx-auto px-6 py-16 min-h-screen">
				<div className="text-center mb-20">
					<h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent leading-tight">
						Inorganic Compounds
					</h1>
					<div className="w-24 h-1 bg-gradient-to-r from-red-400 to-yellow-600 mx-auto rounded-full mb-8"></div>
					<p className="text-xl md:text-3xl max-w-5xl mx-auto leading-relaxed opacity-90 font-light">
						Discover the world of inorganic chemistry - from simple salts to complex coordination compounds.
						<br className="hidden md:block" />
						The building blocks of minerals, metals, and advanced materials.
					</p>
				</div>

				{/* Coming Soon Card */}
				<div className="max-w-4xl mx-auto">
					<div className="rounded-3xl p-16 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
						<div className="text-center">
							<div className="text-8xl mb-8">🧪</div>
							<h2 className="text-4xl font-bold mb-6">Coming Soon</h2>
							<p className="text-xl opacity-80 leading-relaxed mb-8">
								We're working on bringing you comprehensive information about inorganic compounds, including
								salts, acids, bases, metals, and coordination complexes. Stay tuned for detailed compound
								profiles, properties, and applications.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								{["Salts", "Acids & Bases", "Metals", "Coordination Compounds", "Minerals", "Semiconductors"].map(
									(topic) => (
										<span
											key={topic}
											className="px-4 py-2 rounded-full bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 text-red-700 dark:text-red-300 font-medium"
										>
											{topic}
										</span>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	const QuantumChemistry = () => (
		<div className={getThemeClasses(resolvedTheme)}>
			<div className="max-w-7xl mx-auto px-6 py-16 min-h-screen">
				<div className="text-center mb-20">
					<h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent leading-tight">
						Quantum Chemistry
					</h1>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-600 mx-auto rounded-full mb-8"></div>
					<p className="text-xl md:text-3xl max-w-5xl mx-auto leading-relaxed opacity-90 font-light">
						Explore the quantum mechanical foundations of chemical bonding and molecular behavior.
						<br className="hidden md:block" />
						Where physics meets chemistry at the atomic and molecular level.
					</p>
				</div>

				{/* Coming Soon Card */}
				<div className="max-w-4xl mx-auto">
					<div className="rounded-3xl p-16 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
						<div className="text-center">
							<div className="text-8xl mb-8">⚛️</div>
							<h2 className="text-4xl font-bold mb-6">Coming Soon</h2>
							<p className="text-xl opacity-80 leading-relaxed mb-8">
								We're developing comprehensive content on quantum chemistry, including molecular orbitals,
								electronic structure calculations, spectroscopy, and computational chemistry methods. Experience
								the fascinating intersection of quantum physics and chemistry.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								{[
									"Molecular Orbitals",
									"DFT Calculations",
									"Spectroscopy",
									"Wave Functions",
									"Quantum Mechanics",
									"Computational Methods",
								].map((topic) => (
									<span
										key={topic}
										className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 font-medium"
									>
										{topic}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<Router>
			<div className={`app-container theme-${resolvedTheme}`}>
				<NavbarRouter theme={theme} setTheme={setTheme} themeOptions={themeOptions} />

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/organic-compounds" element={<OrganicCompounds theme={resolvedTheme} />} />
					<Route path="/inorganic-compounds" element={<InorganicCompounds />} />
					<Route path="/quantum-chemistry" element={<QuantumChemistry />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
