import React, { useState } from "react";
import "./SearchBar.css";

interface SearchBarProps {
	onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [query, setQuery] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		onSearch(e.target.value);
	};

	return (
		<div className="search-bar">
			<input
				type="text"
				placeholder="Search elements..."
				value={query}
				onChange={handleChange}
				aria-label="Search elements"
			/>
		</div>
	);
};

export default SearchBar;
