import React from "react";
import type { Element } from "../data/elements";
import "./ElementCard.css";

interface ElementCardProps {
	element: Element;
	onClick: (atomicNumber: number) => void;
}

// List of radioactive element symbols (all actinides, some lanthanides, and others)
const RADIOACTIVE_SYMBOLS = [
	"Tc",
	"Pm",
	"Po",
	"At",
	"Rn",
	"Fr",
	"Ra",
	"Ac",
	"Th",
	"Pa",
	"U",
	"Np",
	"Pu",
	"Am",
	"Cm",
	"Bk",
	"Cf",
	"Es",
	"Fm",
	"Md",
	"No",
	"Lr",
	"Rf",
	"Db",
	"Sg",
	"Bh",
	"Hs",
	"Mt",
	"Ds",
	"Rg",
	"Cn",
	"Nh",
	"Fl",
	"Mc",
	"Lv",
	"Ts",
	"Og",
];

const RadioactiveIcon: React.FC = () => (
	<span className="radioactive-symbol" title="Radioactive">
		<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="10" cy="10" r="9" stroke="#f9cb41" strokeWidth="2" fill="#232526" />
			<circle cx="10" cy="10" r="2.2" fill="#f9cb41" />
			<path d="M10 3.5a6.5 6.5 0 0 1 5.63 3.25l-3.13 1.8A3.5 3.5 0 0 0 10 7.5V3.5Z" fill="#f9cb41" />
			<path d="M16.13 13.25A6.5 6.5 0 0 1 10 16.5v-3.5a3.5 3.5 0 0 0 2.5-1.3l3.63 1.55Z" fill="#f9cb41" />
			<path d="M3.87 13.25A6.5 6.5 0 0 0 10 16.5v-3.5a3.5 3.5 0 0 1-2.5-1.3l-3.63 1.55Z" fill="#f9cb41" />
			<path d="M4.37 6.75A6.5 6.5 0 0 1 10 3.5v4a3.5 3.5 0 0 0-2.5 1.3l-3.13-1.8Z" fill="#f9cb41" />
		</svg>
	</span>
);

const ElementCard: React.FC<ElementCardProps> = ({ element, onClick }) => {
	const isRadioactive = RADIOACTIVE_SYMBOLS.includes(element.symbol);
	return (
		<div className={`element-card ${element.category}`} title={element.name} onClick={() => onClick(element.atomicNumber)}>
			{isRadioactive && <RadioactiveIcon />}
			<div className="atomic-number">{element.atomicNumber}</div>
			<div className="symbol">{element.symbol}</div>
			<div className="name">{element.name}</div>
		</div>
	);
};

export default ElementCard;
