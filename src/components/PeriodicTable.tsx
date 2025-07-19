import React from "react";
import type { TableRow } from "../data/elements";
import ElementCard from "./ElementCard";
import "./PeriodicTable.css";

interface PeriodicTableProps {
	rows: TableRow[];
	onElementClick: (atomicNumber: number) => void;
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({ rows, onElementClick }) => (
	<div className="periodic-table-wrapper">
		<table className="periodic-table-html">
			<tbody>
				{rows.map((row, i) => (
					<tr key={i}>
						{row.cells.map((cell, j) => {
							if (cell.type === "empty") {
								return <td key={j} colSpan={cell.colspan || 1} className="none"></td>;
							}
							if (cell.type === "label") {
								return (
									<td key={j} colSpan={cell.colspan || 1} className={cell.className}>
										{cell.label}
									</td>
								);
							}
							if (cell.type === "element" && cell.element) {
								return (
									<td key={j} className={cell.className}>
										<ElementCard element={cell.element} onClick={onElementClick} />
									</td>
								);
							}
							return null;
						})}
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

export default PeriodicTable;
