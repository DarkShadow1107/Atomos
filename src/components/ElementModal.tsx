import React from "react";
import type { Element } from "../data/elements";
import "./ElementModal.css";

interface ElementModalProps {
	element: Element;
	onClose: () => void;
}

function renderElectronConfig(config?: string) {
	if (!config) return null;
	// Example: [Ar] 3d10 4s2 => [Ar] <span>3d<sup>10</sup></span> <span>4s<sup>2</sup></span>
	const parts = config.split(/\s+/);
	return (
		<span className="electron-config">
			{parts.map((part, i) => {
				if (/^[\[]/.test(part)) return <span key={i}>{part} </span>;
				const match = part.match(/^(\d+)([spdfg])(\d+)$/);
				if (match) {
					return (
						<span className="ec-orbital" key={i}>
							{match[1]}
							{match[2]}
							<span className="ec-sup">{match[3]}</span>{" "}
						</span>
					);
				}
				return <span key={i}>{part} </span>;
			})}
		</span>
	);
}

function getAllProperties(element: Element) {
	const props: { label: string; value: React.ReactNode }[] = [];
	props.push({ label: "Atomic Number", value: element.atomicNumber });
	props.push({ label: "Group", value: `group ${element.group}` });
	props.push({ label: "Period", value: `period ${element.period}` });
	if (element.block) props.push({ label: "Block", value: element.block });
	if (element.electronConfiguration)
		props.push({ label: "Electron configuration", value: renderElectronConfig(element.electronConfiguration) });
	if (element.electronsPerShell) props.push({ label: "Electrons per shell", value: element.electronsPerShell.join(", ") });
	if (element.physical?.phase) props.push({ label: "Phase at STP", value: element.physical.phase });
	if (element.physical?.meltingPoint) props.push({ label: "Melting point", value: element.physical.meltingPoint });
	if (element.physical?.boilingPoint) props.push({ label: "Boiling point", value: element.physical.boilingPoint });
	if (element.physical?.density) props.push({ label: "Density (at 20°C)", value: element.physical.density });
	if (element.physical?.densityLiquid) props.push({ label: "when liquid (at m.p.)", value: element.physical.densityLiquid });
	if (element.physical?.heatOfFusion) props.push({ label: "Heat of fusion", value: element.physical.heatOfFusion });
	if (element.physical?.heatOfVaporization)
		props.push({ label: "Heat of vaporization", value: element.physical.heatOfVaporization });
	if (element.physical?.molarHeatCapacity)
		props.push({ label: "Molar heat capacity", value: element.physical.molarHeatCapacity });
	if (element.atomic?.oxidationStates) props.push({ label: "Oxidation states", value: element.atomic.oxidationStates });
	if (element.atomic?.electronegativity) props.push({ label: "Electronegativity", value: element.atomic.electronegativity });
	if (element.atomic?.ionizationEnergies && element.atomic.ionizationEnergies.length > 0)
		props.push({
			label: "Ionization energies",
			value: (
				<>
					{element.atomic.ionizationEnergies.map((e, i) => (
						<span key={i}>
							{e}
							<br />
						</span>
					))}
				</>
			),
		});
	if (element.atomic?.atomicRadius) props.push({ label: "Atomic radius", value: element.atomic.atomicRadius });
	if (element.atomic?.covalentRadius) props.push({ label: "Covalent radius", value: element.atomic.covalentRadius });
	if (element.atomic?.vanDerWaalsRadius) props.push({ label: "Van der Waals radius", value: element.atomic.vanDerWaalsRadius });
	if (element.other?.naturalOccurrence) props.push({ label: "Natural occurrence", value: element.other.naturalOccurrence });
	if (element.other?.crystalStructure) props.push({ label: "Crystal structure", value: element.other.crystalStructure });
	if (element.other?.latticeConstants) props.push({ label: "Lattice constants", value: element.other.latticeConstants });
	if (element.other?.thermalExpansion) props.push({ label: "Thermal expansion", value: element.other.thermalExpansion });
	if (element.other?.thermalConductivity)
		props.push({ label: "Thermal conductivity", value: element.other.thermalConductivity });
	if (element.other?.electricalResistivity)
		props.push({ label: "Electrical resistivity", value: element.other.electricalResistivity });
	if (element.other?.magneticOrdering) props.push({ label: "Magnetic ordering", value: element.other.magneticOrdering });
	if (element.other?.molarMagneticSusceptibility)
		props.push({ label: "Molar magnetic susceptibility", value: element.other.molarMagneticSusceptibility });
	if (element.other?.youngModulus) props.push({ label: "Young's modulus", value: element.other.youngModulus });
	if (element.other?.shearModulus) props.push({ label: "Shear modulus", value: element.other.shearModulus });
	if (element.other?.bulkModulus) props.push({ label: "Bulk modulus", value: element.other.bulkModulus });
	if (element.other?.speedOfSound) props.push({ label: "Speed of sound thin rod", value: element.other.speedOfSound });
	if (element.other?.poissonRatio) props.push({ label: "Poisson ratio", value: element.other.poissonRatio });
	if (element.other?.mohsHardness) props.push({ label: "Mohs hardness", value: element.other.mohsHardness });
	if (element.other?.brinellHardness) props.push({ label: "Brinell hardness", value: element.other.brinellHardness });
	if (element.other?.casNumber) props.push({ label: "CAS Number", value: element.other.casNumber });
	return props;
}

const ElementModal: React.FC<ElementModalProps> = ({ element, onClose }) => {
	const props = getAllProperties(element);
	const columns = 3;
	const perCol = Math.ceil(props.length / columns);
	const colProps = [props.slice(0, perCol), props.slice(perCol, 2 * perCol), props.slice(2 * perCol)];
	return (
		<div className="modal-backdrop" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="close-btn" onClick={onClose}>
					&times;
				</button>
				<h2>
					{element.name} ({element.symbol})
				</h2>
				<div className="modal-sections">
					{colProps.map((col, i) => (
						<div className="modal-section" key={i}>
							{col.map((item, j) => (
								<p key={j}>
									<strong>{item.label}:</strong> {item.value}
								</p>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ElementModal;
