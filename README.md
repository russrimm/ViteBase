# ViteBase

A modern starter template for building React applications with Vite, TypeScript, and Tailwind CSS v4.

## Features

- ⚡️ **Vite** - Lightning-fast build tool
- ⚛️ **React 18** - Modern React with hooks
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework with latest version
- 📘 **TypeScript** - Type safety and better developer experience
- 🔍 **ESLint + Prettier** - Code quality and formatting
- 🏗️ **Component Architecture** - Modular component structure with barrel exports

## Getting Started

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js LTS](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)

### Installation

Open Visual Studio Code. Once open, go to **Terminal** → **New Terminal** to open a new terminal window.

Clone the repository to your machine:

```bash
git clone https://github.com/russrimm/ViteBase.git
cd ViteBase
```

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build

Build for production:

```bash
npm run build
```


## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button/         # Button component with barrel export
│   │   ├── Button.tsx
│   │   └── index.ts
├── assets/             # Static assets (images, SVGs)
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind imports
```

## GitHub Copilot Configuration

This template includes comprehensive GitHub Copilot configuration to enhance your AI-assisted development experience:

### Copilot Instructions
- **`.github/copilot-instructions.md`** - Main configuration file that provides Copilot with project-specific context, coding standards, and best practices for this Vite + React + Tailwind stack.

### Detailed Instructions
- **`.github/instructions/`** - Contains detailed instruction files for specific technologies and workflows:
  - Framework-specific best practices (React, TypeScript, Tailwind CSS, Vite)
  - CI/CD guidelines (GitHub Actions)
  - Power Apps code apps development standards
  - Azure Cosmos DB best practices (if using Azure)

### Skills
- **`.github/skills/`** - Domain-specific skills that extend Copilot's capabilities:
  - `web-design-reviewer` - Visual inspection tool for identifying and fixing design issues
  - Additional skills for specialized development tasks

### Additional Resources
For more instructions, skills, and agent files to enhance your GitHub Copilot experience, check out the [Awesome Copilot](https://github.com/github/awesome-copilot) repository.

These configurations help GitHub Copilot provide more accurate, context-aware suggestions that align with your project's architecture and coding standards.

## License

MIT
