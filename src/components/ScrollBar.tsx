import React from "react";

interface ScrollBarProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	theme?: string;
	maxHeight?: string;
}

const ScrollBar: React.FC<ScrollBarProps> = ({
	children,
	className = "",
	style = {},
	theme = "light",
	maxHeight = "calc(85vh - 200px)",
}) => {
	return (
		<>
			<style>
				{`
/* Enhanced ScrollBar component with theme support */
.custom-scrollbar {
  max-height: ${maxHeight};
  overflow-y: auto;
  scrollbar-width: thin;
}
				`}
			</style>
			<div className={`custom-scrollbar themed-scrollbar theme-${theme} ${className}`} style={style}>
				{children}
			</div>
		</>
	);
};

export default ScrollBar;
