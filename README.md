# Atomos: A Modern & Interactive Periodic Table

Atomos is a visually stunning, highly interactive periodic table application built with React, TypeScript, and Vite. It provides a modern, responsive, and feature-rich experience for exploring chemical elements. The codebase is designed to be clean, modular, and easily extensible.

## Key Features

-   **Interactive Periodic Table**: A beautifully designed table with smooth animations and hover effects.
-   **Detailed Element View**: Click any element to open a modal with comprehensive details, including properties, history, and electron configuration.
-   **Dynamic Search & Filter**: Instantly find elements by name or symbol.
-   **Responsive Design**: Adapts to different screen sizes, with a mobile-friendly menu system.
-   **Theming Engine**: Switch between multiple themes, including dark, light, solarized, and more.
-   **Table Size Control**: Adjust the size of the periodic table with a convenient slider.
-   **TypeScript & Best Practices**: Built with type safety and modern development practices for a robust and maintainable codebase.

## Device Support & Responsiveness

Atomos is designed primarily for **large screens** such as desktops, laptops, and larger tablets. The experience is optimized for a minimum width of **1200px**.

-   **Desktop & Laptop**: Fully supported and provides the best experience.
-   **Tablets**: Works well on larger tablets in landscape mode. For the best experience on smaller tablets, it is recommended to use the browser's "Desktop site" feature.
-   **Mobile Phones**: Not officially supported. While the application is responsive and will render on mobile devices, the periodic table may be too small to be usable. For the best experience on mobile, it is recommended to use the browser's "Desktop site" feature.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v16 or later)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/DarkShadow1107/Atomos.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd Atomos
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Run the development server:
    ```sh
    npm run dev
    ```

Open [http://localhost:5173](http://localhost:5173) (or the port specified in your terminal) to view the app.

## Project Structure

The project follows a modular structure to keep the codebase organized and scalable.

```
/
├── public/              # Static assets (icons, fonts)
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/      # Reusable React components
│   │   ├── AtomLogo.tsx
│   │   ├── ElementCard.tsx
│   │   ├── ElementModal.tsx
│   │   ├── Navbar.tsx
│   │   ├── PeriodicTable.tsx
│   │   └── ...
│   ├── data/            # Element data and type definitions
│   │   └── elements.ts
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point of the application
│   └── ...
├── .eslintrc.cjs        # ESLint configuration
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Components Overview

-   `App.tsx`: The root component that manages the main state and layout.
-   `Navbar.tsx`: The top navigation bar, including the title, theme selector, and table size slider.
-   `PeriodicTable.tsx`: Renders the main periodic table grid.
-   `ElementCard.tsx`: Represents a single element cell in the periodic table.
-   `ElementModal.tsx`: A modal that displays detailed information about a selected element.

## Customization

### Adding a New Theme

1.  Add the theme name to the `themeOptions` array in `src/App.tsx`.
2.  Add the corresponding theme styles to `src/components/Navbar.css` and other relevant CSS files.

### Modifying Element Data

All element data is located in `src/data/elements.ts`. You can modify this file to update element properties or add new data.

## Technology Stack

-   **[Vite](https://vitejs.dev/)**: Next-generation front-end tooling.
-   **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
-   **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

This project was bootstrapped with [Vite](https://vitejs.dev/) and uses best practices for React and TypeScript.
