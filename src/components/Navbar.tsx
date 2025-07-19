import React, { useState } from "react";
import AtomLogo from "./AtomLogo";
import "./Navbar.css";

interface NavbarProps {
	theme: string;
	setTheme: (t: string) => void;
	themeOptions: { value: string; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme, themeOptions }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const currentTheme = themeOptions.find((opt) => opt.value === theme) || themeOptions[0];

	return (
		<nav className="navbar">
			<div className="navbar-left">
				<span className="app-title">
					<AtomLogo /> Atomos
				</span>
			</div>
			<ul>
				<li>
					<a href="#">
						<i className="fas fa-flask" style={{ fontSize: 22, color: "#537dc1" }}></i>
					</a>
				</li>
				<li>
					<a href="#">Organic Compounds</a>
				</li>
				<li>
					<a href="#">Inorganic Compounds</a>
				</li>
				<li>
					<a href="#">Quantum Chemistry</a>
				</li>
			</ul>
			<div className="navbar-search">{/* SearchBar will be rendered here by App */}</div>
			<div
				className="theme-toggle custom-dropdown"
				onMouseEnter={() => setDropdownOpen(true)}
				onMouseLeave={() => setDropdownOpen(false)}
			>
				<label htmlFor="theme-select" style={{ marginRight: 8 }}>
					Theme:
				</label>
				<div className="dropdown-wrapper">
					<button className="dropdown-trigger" aria-label="Theme toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
						{currentTheme.label}
						<span className="dropdown-arrow">▼</span>
					</button>

					{/* Native select for fallback/accessibility */}
					<select
						id="theme-select"
						value={theme}
						onChange={(e) => setTheme(e.target.value)}
						aria-label="Theme toggle"
						style={{ opacity: 0, position: "absolute", pointerEvents: "none" }}
					>
						{themeOptions.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>

					{/* Custom dropdown menu */}
					<div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
						{themeOptions.map((opt) => (
							<button
								key={opt.value}
								className={`dropdown-item ${opt.value === theme ? "active" : ""}`}
								onClick={() => {
									setTheme(opt.value);
									setDropdownOpen(false);
								}}
							>
								{opt.label}
							</button>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
