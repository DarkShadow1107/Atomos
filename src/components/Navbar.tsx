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
	const [isFullscreen, setIsFullscreen] = useState(false);
	const currentTheme = themeOptions.find((opt) => opt.value === theme) || themeOptions[0];

	const toggleFullscreen = async () => {
		try {
			if (!document.fullscreenElement) {
				await document.documentElement.requestFullscreen();
				setIsFullscreen(true);
			} else {
				await document.exitFullscreen();
				setIsFullscreen(false);
			}
		} catch (error) {
			console.error("Fullscreen error:", error);
		}
	};

	// Listen for fullscreen changes
	React.useEffect(() => {
		const handleFullscreenChange = () => {
			setIsFullscreen(!!document.fullscreenElement);
		};

		document.addEventListener("fullscreenchange", handleFullscreenChange);
		return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
	}, []);

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
				<li>
					<div
						className="theme-toggle custom-dropdown"
						onMouseEnter={() => setDropdownOpen(true)}
						onMouseLeave={() => setDropdownOpen(false)}
					>
						<div className="dropdown-wrapper">
							<button
								className="dropdown-trigger"
								aria-label="Theme toggle"
								onClick={() => setDropdownOpen(!dropdownOpen)}
							>
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
				</li>
				<li>
					<button
						className="fullscreen-button"
						onClick={toggleFullscreen}
						aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
						title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
					>
						{isFullscreen ? (
							<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
								<path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
							</svg>
						) : (
							<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
								<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
							</svg>
						)}
					</button>
				</li>
			</ul>
			<div className="navbar-search">{/* SearchBar will be rendered here by App */}</div>
		</nav>
	);
};

export default Navbar;
