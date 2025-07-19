import React from "react";

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

export default AtomLogo;
