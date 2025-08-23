import React from "react";

interface FilterModalProps {
	isOpen: boolean;
	onClose: () => void;
	enabledSections: Record<string, boolean>;
	toggleSection: (key: string) => void;
	setAll: (value: boolean) => void;
	categoryIcons: Record<string, string>;
	theme: string;
	totalSections?: number;
}

// Modal styling function that adapts to all themes
const getModalStyles = (theme: string): React.CSSProperties => {
	switch (theme) {
		case "dark":
		case "night":
		case "dracula":
		case "forest":
		case "dark-glass":
			return {
				background: "linear-gradient(180deg, rgba(24,28,42,0.96) 0%, rgba(24,28,42,0.88) 100%)",
				border: "1px solid rgba(255,255,255,0.08)",
			};
		case "cyberpunk":
			return {
				background: "linear-gradient(180deg, rgba(15,0,38,0.96) 0%, rgba(15,0,38,0.88) 100%)",
				border: "1px solid rgba(255,0,204,0.35)",
				boxShadow: "0 24px 64px rgba(255,0,204,0.25)",
			};
		case "win98":
			return { background: "#e0e0e0", border: "2px solid #808080", boxShadow: "3px 3px 0 #000" };
		case "pastel":
			return {
				background: "linear-gradient(180deg, rgba(252,231,243,0.95) 0%, rgba(224,242,254,0.9) 100%)",
				border: "1px solid rgba(236,72,153,0.25)",
			};
		case "peach":
			return {
				background: "linear-gradient(180deg, rgba(255,247,237,0.95) 0%, rgba(254,243,199,0.9) 100%)",
				border: "1px solid rgba(251,146,60,0.25)",
			};
		case "high-contrast":
			return { background: "#000", border: "3px solid #FFD600" };
		case "amoled":
			return {
				background: "linear-gradient(180deg, rgba(0,0,0,0.96) 0%, rgba(10,10,10,0.9) 100%)",
				border: "1px solid #222",
			};
		case "solarized":
			return {
				background: "linear-gradient(180deg, rgba(253,246,227,0.95) 0%, rgba(238,232,213,0.9) 100%)",
				border: "1px solid rgba(181,137,0,0.25)",
			};
		case "light":
		default:
			return {
				background: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)",
				border: "1px solid rgba(0,0,0,0.06)",
			};
	}
};

const FilterModal: React.FC<FilterModalProps> = ({
	isOpen,
	onClose,
	enabledSections,
	toggleSection,
	setAll,
	categoryIcons,
	theme,
	totalSections,
}) => {
	// Enhanced keyboard navigation
	const handleKeyDown = React.useCallback(
		(e: KeyboardEvent) => {
			if (!isOpen) return;

			if (e.key === "Escape") {
				onClose();
			}

			// Quick actions with keyboard shortcuts
			if (e.ctrlKey || e.metaKey) {
				if (e.key === "a") {
					e.preventDefault();
					setAll(true);
				} else if (e.key === "d") {
					e.preventDefault();
					setAll(false);
				}
			}
		},
		[isOpen, onClose, setAll]
	);

	React.useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyDown]);

	React.useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const activeCount = Object.values(enabledSections).filter(Boolean).length;
	const total = totalSections || Object.keys(enabledSections).length;
	const progressPercentage = Math.round((activeCount / total) * 100);

	return (
		<>
			<style>
				{`
/* Enhanced FilterModal styles with modern improvements */
.filter-modal-dialog {
  width: min(992px, 97vw);
  max-height: 85vh;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 32px 96px rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.15);
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.filter-modal-dialog:hover {
  box-shadow: 0 40px 120px rgba(0,0,0,0.35), 0 12px 40px rgba(0,0,0,0.2);
}

.filter-modal-header { 
  padding: 1.5rem 2rem 1rem; 
  border-bottom: 1px solid rgba(0,0,0,0.08); 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  gap: 1rem; 
  background: rgba(255,255,255,0.02);
  backdrop-filter: blur(20px);
}

.filter-modal-title { 
  display: flex; 
  align-items: center; 
  gap: 1rem; 
  flex: 1;
}

.filter-modal-title h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: inherit;
}

.filter-modal-subtitle {
  font-size: 0.875rem;
  opacity: 0.7;
  font-weight: 500;
}

.filter-modal-divider { 
  height: 1px; 
  background: linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 50%, transparent 100%); 
  margin: 0; 
}

.dark .filter-modal-divider { 
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%); 
}

.filter-modal-body { 
  padding: 2rem; 
  max-height: calc(85vh - 200px);
  overflow-y: auto;
  scrollbar-width: thin;
}

.filter-modal-body::-webkit-scrollbar {
  width: 6px;
}

.filter-modal-body::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.05);
  border-radius: 10px;
}

.filter-modal-body::-webkit-scrollbar-thumb {
  background: rgba(103,80,164,0.4);
  border-radius: 10px;
}

.filter-modal-body::-webkit-scrollbar-thumb:hover {
  background: rgba(103,80,164,0.6);
}

.dark .filter-modal-body::-webkit-scrollbar-track {
  background: rgba(255,255,255,0.05);
}

.dark .filter-modal-body::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.2);
}

.dark .filter-modal-body::-webkit-scrollbar-thumb:hover {
  background: rgba(255,255,255,0.35);
}

.filter-modal-actions { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  gap: 1rem; 
  padding: 1.5rem 2rem; 
  border-top: 1px solid rgba(0,0,0,0.08); 
  position: sticky; 
  bottom: 0; 
  background: linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(248,250,252,0.95) 100%);
  backdrop-filter: blur(20px);
}

.dark .filter-modal-actions {
  background: linear-gradient(180deg, rgba(30,35,48,0.85) 0%, rgba(24,28,42,0.95) 100%);
  border-top: 1px solid rgba(255,255,255,0.08);
}

.cyberpunk .filter-modal-actions {
  background: linear-gradient(180deg, rgba(20,5,45,0.85) 0%, rgba(15,0,38,0.95) 100%);
  border-top: 1px solid rgba(255,0,204,0.15);
}

.pastel .filter-modal-actions {
  background: linear-gradient(180deg, rgba(254,242,255,0.85) 0%, rgba(252,231,243,0.95) 100%);
  border-top: 1px solid rgba(236,72,153,0.15);
}

.peach .filter-modal-actions {
  background: linear-gradient(180deg, rgba(255,252,245,0.85) 0%, rgba(255,247,237,0.95) 100%);
  border-top: 1px solid rgba(251,146,60,0.15);
}

.win98 .filter-modal-actions {
  background: #f0f0f0;
  border-top: 2px solid #808080;
}

.amoled .filter-modal-actions {
  background: linear-gradient(180deg, rgba(15,15,15,0.85) 0%, rgba(0,0,0,0.95) 100%);
  border-top: 1px solid #333;
}

.solarized .filter-modal-actions {
  background: linear-gradient(180deg, rgba(250,245,235,0.85) 0%, rgba(253,246,227,0.95) 100%);
  border-top: 1px solid rgba(181,137,0,0.15);
}

.high-contrast .filter-modal-actions {
  background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.95) 100%);
  border-top: 3px solid #FFD600;
}

.forest .filter-modal-actions {
  background: linear-gradient(180deg, rgba(30,35,48,0.85) 0%, rgba(24,28,42,0.95) 100%);
  border-top: 1px solid rgba(34,197,94,0.15);
}

.dracula .filter-modal-actions {
  background: linear-gradient(180deg, rgba(30,35,48,0.85) 0%, rgba(24,28,42,0.95) 100%);
  border-top: 1px solid rgba(139,69,193,0.15);
}

.night .filter-modal-actions {
  background: linear-gradient(180deg, rgba(30,35,48,0.85) 0%, rgba(24,28,42,0.95) 100%);
  border-top: 1px solid rgba(96,165,250,0.15);
}

.dark-glass .filter-modal-actions {
  background: linear-gradient(180deg, rgba(30,35,48,0.8) 0%, rgba(24,28,42,0.9) 100%);
  backdrop-filter: blur(32px);
  border-top: 1px solid rgba(255,255,255,0.05);
}

/* Enhanced progress indicator */
.filter-progress-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

.filter-progress-bar {
  width: 120px;
  height: 6px;
  background: rgba(103,80,164,0.15);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.filter-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #6750a4 0%, #a084e8 100%);
  border-radius: 10px;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.filter-progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.filter-progress-text {
  font-size: 0.75rem;
  font-weight: 600;
  color: #6750a4;
}

/* Refined chip grid with better responsive design */
.filter-chip-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); 
  gap: 1rem; 
  margin-bottom: 2.5rem; 
}

.filter-m3-chip { 
  appearance: none; 
  border: none; 
  cursor: pointer; 
  padding: 1rem 1.5rem; 
  border-radius: 1.25rem; 
  font-weight: 600; 
  font-size: 0.95rem; 
  background: rgba(103,80,164,0.08); 
  color: #4b5563; 
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); 
  box-shadow: 0 2px 8px rgba(0,0,0,0.08); 
  display: inline-flex; 
  align-items: center; 
  gap: 0.75rem; 
  position: relative;
  overflow: hidden;
}

.filter-m3-chip::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%);
  transition: left 0.5s ease;
}

.filter-m3-chip:hover::before {
  left: 100%;
}

.filter-m3-chip:hover { 
  transform: translateY(-2px) scale(1.02); 
  box-shadow: 0 8px 24px rgba(103,80,164,0.2), 0 4px 8px rgba(0,0,0,0.1); 
}

.filter-m3-chip:focus {
  outline: 3px solid rgba(103,80,164,0.3);
  outline-offset: 2px;
}

.filter-m3-chip.active { 
  color: white; 
  background: linear-gradient(135deg, #6750a4 0%, #a084e8 100%); 
  box-shadow: 0 8px 24px rgba(103,80,164,0.35), 0 0 0 1px rgba(255,255,255,0.1) inset; 
  transform: scale(1.02);
}

.filter-m3-chip.active::before {
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
}

.dark .filter-m3-chip { 
  background: rgba(255,255,255,0.08); 
  color: #e5e7eb; 
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.filter-chip-indicator { 
  width: 1.25rem; 
  height: 1.25rem; 
  border-radius: 50%; 
  border: 2px solid rgba(103,80,164,0.4); 
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  font-weight: 800; 
  line-height: 1; 
  font-size: 0.75rem; 
  color: #fff; 
  background: transparent; 
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
}

.filter-m3-chip.active .filter-chip-indicator { 
  background: #6750a4; 
  border-color: #6750a4; 
  box-shadow: 0 0 0 2px rgba(103,80,164,0.2); 
  transform: rotate(360deg);
}

.filter-m3-button { 
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  gap: 0.5rem; 
  padding: 0.875rem 1.75rem; 
  border-radius: 1.75rem; 
  font-size: 0.95rem; 
  font-weight: 600; 
  background: linear-gradient(135deg, #6750a4 0%, #a084e8 100%); 
  color: #fff; 
  box-shadow: 0 4px 12px rgba(103, 80, 164, 0.25), 0 2px 4px rgba(0,0,0,0.1); 
  border: none; 
  outline: none; 
  cursor: pointer; 
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); 
  position: relative;
  overflow: hidden;
}

.filter-m3-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease;
}

.filter-m3-button:hover::before {
  width: 300px;
  height: 300px;
}

.filter-m3-button:hover, .filter-m3-button:focus { 
  background: linear-gradient(135deg, #7c5fd3 0%, #b39ddb 100%); 
  box-shadow: 0 8px 24px rgba(103, 80, 164, 0.35), 0 4px 8px rgba(0,0,0,0.15); 
  transform: translateY(-1px) scale(1.02); 
}

.filter-m3-button:focus {
  outline: 3px solid rgba(103,80,164,0.3);
  outline-offset: 2px;
}

.filter-m3-button.secondary {
  background: rgba(103,80,164,0.1);
  color: #6750a4;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.filter-m3-button.secondary:hover {
  background: rgba(103,80,164,0.15);
  color: #5a4fcf;
}

.dark .filter-m3-button.secondary {
  background: rgba(255,255,255,0.1);
  color: #a084e8;
}

.filter-m3-badge { 
  display: inline-flex; 
  align-items: center; 
  gap: 0.5rem; 
  padding: 0.5rem 1rem; 
  border-radius: 1.5rem; 
  font-size: 0.875rem; 
  font-weight: 700; 
  background: linear-gradient(135deg, rgba(103,80,164,0.15) 0%, rgba(160,132,232,0.1) 100%); 
  color: #6750a4; 
  border: 1px solid rgba(103,80,164,0.2);
}

.dark .filter-m3-badge { 
  background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(160,132,232,0.1) 100%); 
  color: #a084e8; 
  border: 1px solid rgba(255,255,255,0.1);
}

/* Enhanced animations */
@keyframes filterFadeIn { 
  from { 
    opacity: 0; 
    transform: translateY(20px) scale(0.95); 
    filter: blur(5px);
  } 
  to { 
    opacity: 1; 
    transform: translateY(0) scale(1); 
    filter: blur(0);
  } 
}

@keyframes backdropFade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.filter-modal-overlay {
  position: fixed; 
  inset: 0; 
  background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%); 
  backdrop-filter: blur(8px); 
  z-index: 50;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  padding: 1rem;
  animation: backdropFade 250ms ease-out;
}

.filter-modal-dialog {
  animation: filterFadeIn 350ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive improvements */
@media (max-width: 640px) {
  .filter-modal-dialog {
    width: 98vw;
    max-height: 90vh;
    border-radius: 1.5rem;
  }
  
  .filter-modal-header,
  .filter-modal-body,
  .filter-modal-actions {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  
  .filter-chip-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .filter-modal-actions {
    flex-direction: column;
    gap: 1rem;
  }
  
  .filter-modal-actions > div {
    width: 100%;
    justify-content: center;
  }
}

/* Keyboard shortcuts hint */
.filter-shortcuts {
  font-size: 0.875rem;
  opacity: 0.6;
  font-style: italic;
  margin-top: 0.5rem;
}
				`}
			</style>

			<div className="filter-modal-overlay" onClick={onClose} aria-hidden={false}>
				<div
					className={`filter-modal-dialog ${theme}`}
					style={{
						...getModalStyles(theme),
					}}
					onClick={(e) => e.stopPropagation()}
					role="dialog"
					aria-modal="true"
					aria-label="Filter Categories"
					aria-describedby="filter-description"
				>
					<div className="filter-modal-header">
						<div className="filter-modal-title">
							<span className="filter-m3-badge">🔍 Filters</span>
							<div>
								<h3>Category Selection</h3>
								<div className="filter-modal-subtitle">Organize and customize your view</div>
							</div>
						</div>
						<button
							className="filter-m3-button secondary"
							onClick={onClose}
							aria-label="Close Filter Modal"
							tabIndex={0}
						>
							✕ Close
						</button>
					</div>

					<div className="filter-modal-divider" />

					<div className="filter-modal-body">
						<p
							id="filter-description"
							className="text-sm text-gray-600 dark:text-gray-300 mb-6"
							style={{ marginBottom: "1.4rem" }}
						>
							Choose which sections to display in your periodic table view. Use keyboard shortcuts:
							<strong> Ctrl+A</strong> (Select All) or <strong>Ctrl+D</strong> (Clear All).
						</p>

						<div className="filter-chip-grid">
							{Object.keys(enabledSections).map((key, index) => {
								const active = !!enabledSections[key];
								return (
									<button
										key={key}
										type="button"
										className={`filter-m3-chip ${active ? "active" : ""}`}
										onClick={() => toggleSection(key)}
										aria-pressed={active}
										aria-describedby={`chip-${key}-desc`}
										tabIndex={0}
										style={{ animationDelay: `${index * 50}ms` }}
									>
										<span className="filter-chip-indicator" aria-hidden="true">
											{active ? "✓" : ""}
										</span>
										<span>
											{categoryIcons[key] || "📦"} {key}
										</span>
									</button>
								);
							})}
						</div>

						<div className="filter-shortcuts">
							💡 Tip: Use Escape to close, Ctrl+A to select all, Ctrl+D to clear all
						</div>
					</div>

					<div className="filter-modal-actions">
						<div className="flex items-center" style={{ gap: "1rem" }}>
							<button
								className="filter-m3-button secondary"
								onClick={() => setAll(false)}
								aria-label="Clear all categories"
								tabIndex={0}
							>
								🗑️ Clear All
							</button>
							<button
								className="filter-m3-button secondary"
								onClick={() => setAll(true)}
								aria-label="Select all categories"
								tabIndex={0}
							>
								✅ Select All
							</button>
						</div>

						<div className="flex items-center" style={{ gap: "1rem" }}>
							<div className="filter-progress-container">
								<div className="filter-progress-bar">
									<div
										className="filter-progress-fill"
										style={{ width: `${progressPercentage}%` }}
										aria-label={`${progressPercentage}% of categories selected`}
									/>
								</div>
								<span className="filter-progress-text">
									{activeCount} of {total} active ({progressPercentage}%)
								</span>
							</div>

							<button
								className="filter-m3-button"
								onClick={onClose}
								aria-label="Apply filters and close"
								tabIndex={0}
							>
								🎯 Apply Filters
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FilterModal;
