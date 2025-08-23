import React from "react";

interface DetailModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	subtitle?: string;
	description: string;
	theme: string;
	children?: React.ReactNode;
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

const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, title, subtitle, description, theme, children }) => {
	// Enhanced keyboard navigation
	const handleKeyDown = React.useCallback(
		(e: KeyboardEvent) => {
			if (!isOpen) return;

			if (e.key === "Escape") {
				onClose();
			}
		},
		[isOpen, onClose]
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

	return (
		<>
			<style>
				{`
/* Enhanced DetailModal styles with modern improvements */
.detail-modal-dialog {
  width: min(880px, 94vw);
  max-height: 88vh;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 32px 96px rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.15);
  transform: translateY(0);
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.detail-modal-dialog:hover {
  box-shadow: 0 40px 120px rgba(0,0,0,0.35), 0 12px 40px rgba(0,0,0,0.2);
}

.detail-modal-header { 
  padding: 2rem 2.5rem 1.5rem; 
  border-bottom: 1px solid rgba(0,0,0,0.08); 
  display: flex; 
  align-items: flex-start; 
  justify-content: space-between; 
  gap: 1.5rem;
  flex-shrink: 0;
  background: rgba(255,255,255,0.02);
  backdrop-filter: blur(20px);
}

.detail-modal-title { 
  display: flex; 
  flex-direction: column;
  gap: 0.75rem; 
  flex: 1;
}

.detail-modal-title h4 {
  font-size: 1.75rem;
  font-weight: 800;
  margin: 0;
  color: inherit;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.detail-modal-divider { 
  height: 1px; 
  background: linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 50%, transparent 100%); 
  margin: 0; 
}

.dark .detail-modal-divider { 
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%); 
}

.detail-modal-body { 
  padding: 2.5rem;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
  scrollbar-width: thin;
}

.detail-modal-body::-webkit-scrollbar {
  width: 6px;
}

.detail-modal-body::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.05);
  border-radius: 10px;
}

.detail-modal-body::-webkit-scrollbar-thumb {
  background: rgba(103,80,164,0.4);
  border-radius: 10px;
}

.detail-modal-body::-webkit-scrollbar-thumb:hover {
  background: rgba(103,80,164,0.6);
}

.detail-modal-description {
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: inherit;
  opacity: 0.9;
}

.detail-m3-button { 
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  gap: 0.5rem; 
  padding: 1rem 2rem; 
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
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.detail-m3-button::before {
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

.detail-m3-button:hover::before {
  width: 300px;
  height: 300px;
}

.detail-m3-button:hover, .detail-m3-button:focus { 
  background: linear-gradient(135deg, #7c5fd3 0%, #b39ddb 100%); 
  box-shadow: 0 8px 24px rgba(103, 80, 164, 0.35), 0 4px 8px rgba(0,0,0,0.15); 
  transform: translateY(-1px) scale(1.02); 
}

.detail-m3-button:focus {
  outline: 3px solid rgba(103,80,164,0.3);
  outline-offset: 2px;
}

.detail-m3-badge { 
  display: inline-flex; 
  align-items: center; 
  gap: 0.5rem; 
  padding: 0.75rem 1.25rem; 
  border-radius: 1.5rem; 
  font-size: 0.875rem; 
  font-weight: 700; 
  background: linear-gradient(135deg, rgba(103,80,164,0.15) 0%, rgba(160,132,232,0.1) 100%); 
  color: #6750a4;
  border: 1px solid rgba(103,80,164,0.2);
  backdrop-filter: blur(10px);
}

.dark .detail-m3-badge { 
  background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(160,132,232,0.1) 100%); 
  color: #a084e8;
  border: 1px solid rgba(255,255,255,0.1);
}

.detail-section-title {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #6750a4;
  margin-bottom: 1.25rem;
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.detail-section-title::before {
  content: '';
  width: 3px;
  height: 1.25rem;
  background: linear-gradient(180deg, #6750a4 0%, #a084e8 100%);
  border-radius: 2px;
}

.detail-section-title:first-of-type {
  margin-top: 1.5rem;
}

.dark .detail-section-title {
  color: #a084e8;
}

.dark .detail-section-title::before {
  background: linear-gradient(180deg, #a084e8 0%, #c4b5fd 100%);
}

/* Enhanced content styling */
.detail-content {
  line-height: 1.8;
  font-size: 1rem;
}

.detail-content h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 2rem 0 1rem;
  color: inherit;
}

.detail-content h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 1.5rem 0 0.75rem;
  color: inherit;
}

.detail-content p {
  margin-bottom: 1.5rem;
  color: inherit;
  opacity: 0.9;
}

.detail-content ul, .detail-content ol {
  margin: 1.5rem 0;
  padding-left: 2rem;
}

.detail-content li {
  margin-bottom: 0.75rem;
  color: inherit;
  opacity: 0.9;
}

.detail-content strong {
  font-weight: 600;
  color: #6750a4;
}

.dark .detail-content strong {
  color: #a084e8;
}

/* Grid layouts for structured content */
.detail-properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.detail-property-item {
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(103,80,164,0.05);
  border: 1px solid rgba(103,80,164,0.1);
  transition: all 0.25s ease;
}

.detail-property-item:hover {
  background: rgba(103,80,164,0.08);
  border-color: rgba(103,80,164,0.15);
  transform: translateY(-1px);
}

.dark .detail-property-item {
  background: rgba(255,255,255,0.05);
  border-color: rgba(255,255,255,0.1);
}

.dark .detail-property-item:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.15);
}

.detail-property-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #6750a4;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.dark .detail-property-label {
  color: #a084e8;
}

.detail-property-value {
  font-size: 1.125rem;
  font-weight: 700;
  color: inherit;
}

/* Enhanced animations */
@keyframes detailFadeIn { 
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

.detail-modal-overlay {
  position: fixed; 
  inset: 0; 
  background: linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%); 
  backdrop-filter: blur(12px); 
  z-index: 60;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  padding: 1rem;
  animation: backdropFade 300ms ease-out;
}

.detail-modal-dialog {
  animation: detailFadeIn 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive improvements */
@media (max-width: 768px) {
  .detail-modal-dialog {
    width: 96vw;
    max-height: 92vh;
    border-radius: 1.5rem;
  }
  
  .detail-modal-header {
    padding: 1.75rem 2rem 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .detail-modal-body {
    padding: 2rem;
  }
  
  .detail-modal-title h4 {
    font-size: 1.5rem;
  }
  
  .detail-properties-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .detail-property-item {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .detail-modal-header {
    padding: 1.5rem 1.5rem 1rem;
  }
  
  .detail-modal-body {
    padding: 1.5rem;
  }
  
  .detail-modal-title h4 {
    font-size: 1.375rem;
  }
}
				`}
			</style>

			<div className="detail-modal-overlay" onClick={onClose} aria-hidden={false}>
				<div
					className={`detail-modal-dialog ${theme}`}
					style={getModalStyles(theme)}
					onClick={(e) => e.stopPropagation()}
					role="dialog"
					aria-modal="true"
					aria-label={`${title} details`}
					aria-describedby="detail-description"
				>
					<div className="detail-modal-header">
						<div className="detail-modal-title">
							<h4>{title}</h4>
							{subtitle && <div className="detail-m3-badge">📋 {subtitle}</div>}
						</div>
						<button className="detail-m3-button" onClick={onClose} aria-label="Close details" tabIndex={0}>
							✕ Close
						</button>
					</div>

					<div className="detail-modal-divider" />

					<div className="detail-modal-body">
						<p id="detail-description" className="detail-modal-description">
							{description}
						</p>
						<div className="detail-content">{children}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DetailModal;
