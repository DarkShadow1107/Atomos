import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavbarRouter, PeriodicTable, ElementModal, OrganicCompounds, InorganicCompounds } from "./components";
import QuantumChemistry from "./components/QuantumChemistry";
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

	return (
		<Router>
			<div className={`app-container theme-${resolvedTheme}`}>
				<NavbarRouter theme={theme} setTheme={setTheme} themeOptions={themeOptions} />

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/organic-compounds" element={<OrganicCompounds theme={resolvedTheme} />} />
					<Route path="/inorganic-compounds" element={<InorganicCompounds theme={resolvedTheme} />} />
					<Route path="/quantum-chemistry" element={<QuantumChemistry theme={resolvedTheme} />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
