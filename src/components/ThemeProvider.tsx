import React from "react";

interface ThemeProviderProps {
	children: React.ReactNode;
	theme?: string;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme = "light" }) => {
	return (
		<>
			<style>
				{`
/* Enhanced Theme Provider with comprehensive theme support */

/* Light theme (default) */
.theme-light {
  --scrollbar-track: rgba(0,0,0,0.05);
  --scrollbar-thumb: rgba(103,80,164,0.4);
  --scrollbar-thumb-hover: rgba(103,80,164,0.6);
  --scrollbar-width: 6px;
  --scrollbar-border-radius: 10px;
  --scrollbar-color: rgba(103,80,164,0.4) rgba(0,0,0,0.05);
}

/* Dark themes */
.theme-dark,
.theme-night,
.theme-dracula,
.theme-forest,
.theme-dark-glass,
.theme-amoled {
  --scrollbar-track: rgba(255,255,255,0.05);
  --scrollbar-thumb: rgba(255,255,255,0.2);
  --scrollbar-thumb-hover: rgba(255,255,255,0.35);
  --scrollbar-width: 6px;
  --scrollbar-border-radius: 10px;
  --scrollbar-color: rgba(255,255,255,0.2) rgba(255,255,255,0.05);
}

/* AMOLED specific adjustments */
.theme-amoled {
  --scrollbar-track: #111;
  --scrollbar-thumb: #333;
  --scrollbar-thumb-hover: #555;
}

/* Cyberpunk theme */
.theme-cyberpunk {
  --scrollbar-track: rgba(255,0,204,0.1);
  --scrollbar-thumb: rgba(255,0,204,0.5);
  --scrollbar-thumb-hover: rgba(255,0,204,0.7);
  --scrollbar-width: 6px;
  --scrollbar-border-radius: 10px;
  --scrollbar-color: rgba(255,0,204,0.5) rgba(255,0,204,0.1);
}

/* Win98 theme */
.theme-win98 {
  --scrollbar-track: #c0c0c0;
  --scrollbar-thumb: #c0c0c0;
  --scrollbar-thumb-hover: #a0a0a0;
  --scrollbar-width: 16px;
  --scrollbar-border-radius: 0px;
  --scrollbar-border: 1px solid #808080;
  --scrollbar-box-shadow: inset 1px 1px 0 #fff, inset -1px -1px 0 #808080;
}

/* Pastel theme */
.theme-pastel {
  --scrollbar-track: rgba(236,72,153,0.1);
  --scrollbar-thumb: rgba(236,72,153,0.4);
  --scrollbar-thumb-hover: rgba(236,72,153,0.6);
  --scrollbar-width: 6px;
  --scrollbar-border-radius: 10px;
  --scrollbar-color: rgba(236,72,153,0.4) rgba(236,72,153,0.1);
}

/* Peach theme */
.theme-peach {
  --scrollbar-track: rgba(251,146,60,0.1);
  --scrollbar-thumb: rgba(251,146,60,0.4);
  --scrollbar-thumb-hover: rgba(251,146,60,0.6);
  --scrollbar-width: 6px;
  --scrollbar-border-radius: 10px;
  --scrollbar-color: rgba(251,146,60,0.4) rgba(251,146,60,0.1);
}

/* High contrast theme */
.theme-high-contrast {
  --scrollbar-track: #000;
  --scrollbar-thumb: #FFD600;
  --scrollbar-thumb-hover: #FFED4E;
  --scrollbar-width: 6px;
  --scrollbar-border-radius: 10px;
  --scrollbar-border: 2px solid #FFD600;
  --scrollbar-thumb-border: 1px solid #000;
  --scrollbar-color: #FFD600 #000;
}

/* Solarized theme */
.theme-solarized {
  --scrollbar-track: rgba(181,137,0,0.1);
  --scrollbar-thumb: rgba(181,137,0,0.4);
  --scrollbar-thumb-hover: rgba(181,137,0,0.6);
  --scrollbar-width: 6px;
  --scrollbar-border-radius: 10px;
  --scrollbar-color: rgba(181,137,0,0.4) rgba(181,137,0,0.1);
}

/* Universal scrollbar styles using CSS variables */
.themed-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-color);
}

.themed-scrollbar::-webkit-scrollbar {
  width: var(--scrollbar-width);
}

.themed-scrollbar::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
  border-radius: var(--scrollbar-border-radius);
  border: var(--scrollbar-border, none);
}

.themed-scrollbar::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
  border-radius: var(--scrollbar-border-radius);
  transition: background 0.2s ease;
  border: var(--scrollbar-thumb-border, none);
  box-shadow: var(--scrollbar-box-shadow, none);
}

.themed-scrollbar::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover);
}

/* Modal and component theme support */
.theme-container {
  /* Modal backgrounds */
  --modal-bg-light: linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%);
  --modal-border-light: 1px solid rgba(0,0,0,0.06);
  
  --modal-bg-dark: linear-gradient(180deg, rgba(24,28,42,0.96) 0%, rgba(24,28,42,0.88) 100%);
  --modal-border-dark: 1px solid rgba(255,255,255,0.08);
  
  --modal-bg-cyberpunk: linear-gradient(180deg, rgba(15,0,38,0.96) 0%, rgba(15,0,38,0.88) 100%);
  --modal-border-cyberpunk: 1px solid rgba(255,0,204,0.35);
  --modal-shadow-cyberpunk: 0 24px 64px rgba(255,0,204,0.25);
  
  --modal-bg-win98: #e0e0e0;
  --modal-border-win98: 2px solid #808080;
  --modal-shadow-win98: 3px 3px 0 #000;
  
  --modal-bg-pastel: linear-gradient(180deg, rgba(252,231,243,0.95) 0%, rgba(224,242,254,0.9) 100%);
  --modal-border-pastel: 1px solid rgba(236,72,153,0.25);
  
  --modal-bg-peach: linear-gradient(180deg, rgba(255,247,237,0.95) 0%, rgba(254,243,199,0.9) 100%);
  --modal-border-peach: 1px solid rgba(251,146,60,0.25);
  
  --modal-bg-high-contrast: #000;
  --modal-border-high-contrast: 3px solid #FFD600;
  
  --modal-bg-amoled: linear-gradient(180deg, rgba(0,0,0,0.96) 0%, rgba(10,10,10,0.9) 100%);
  --modal-border-amoled: 1px solid #222;
  
  --modal-bg-solarized: linear-gradient(180deg, rgba(253,246,227,0.95) 0%, rgba(238,232,213,0.9) 100%);
  --modal-border-solarized: 1px solid rgba(181,137,0,0.25);
}

/* Apply theme classes automatically */
.theme-container.light { background: var(--modal-bg-light); border: var(--modal-border-light); }
.theme-container.dark,
.theme-container.night,
.theme-container.dracula,
.theme-container.forest,
.theme-container.dark-glass { 
  background: var(--modal-bg-dark); 
  border: var(--modal-border-dark); 
}
.theme-container.cyberpunk { 
  background: var(--modal-bg-cyberpunk); 
  border: var(--modal-border-cyberpunk); 
  box-shadow: var(--modal-shadow-cyberpunk);
}
.theme-container.win98 { 
  background: var(--modal-bg-win98); 
  border: var(--modal-border-win98); 
  box-shadow: var(--modal-shadow-win98);
}
.theme-container.pastel { 
  background: var(--modal-bg-pastel); 
  border: var(--modal-border-pastel); 
}
.theme-container.peach { 
  background: var(--modal-bg-peach); 
  border: var(--modal-border-peach); 
}
.theme-container.high-contrast { 
  background: var(--modal-bg-high-contrast); 
  border: var(--modal-border-high-contrast); 
}
.theme-container.amoled { 
  background: var(--modal-bg-amoled); 
  border: var(--modal-border-amoled); 
}
.theme-container.solarized { 
  background: var(--modal-bg-solarized); 
  border: var(--modal-border-solarized); 
}
				`}
			</style>
			<div className={`theme-container theme-${theme}`}>{children}</div>
		</>
	);
};

export default ThemeProvider;
