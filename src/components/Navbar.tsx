import React, { useState } from "react";
import "./Navbar.css";

interface NavbarProps {
	theme: string;
	setTheme: (t: string) => void;
	themeOptions: { value: string; label: string }[];
}

const AtomLogo: React.FC = () => (
	<span className="atom-logo" aria-label="Atomos logo">
		<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="24" cy="24" r="7" fill="#2ecdc0" stroke="#537dc1" strokeWidth="2.5" />
			<ellipse cx="24" cy="24" rx="18" ry="7.5" stroke="#2ecdc0" strokeWidth="2" fill="none" />
			<ellipse cx="24" cy="24" rx="7.5" ry="18" stroke="#537dc1" strokeWidth="2" fill="none" />
			<ellipse
				cx="24"
				cy="24"
				rx="15"
				ry="5.5"
				stroke="#f9cb41"
				strokeWidth="1.5"
				fill="none"
				transform="rotate(45 24 24)"
			/>
			<circle cx="38" cy="24" r="2.2" fill="#fff" stroke="#2ecdc0" strokeWidth="1.2" />
			<circle cx="24" cy="8.5" r="1.7" fill="#fff" stroke="#537dc1" strokeWidth="1.2" />
			<circle cx="24" cy="39.5" r="1.7" fill="#fff" stroke="#f9cb41" strokeWidth="1.2" />
		</svg>
	</span>
);

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
