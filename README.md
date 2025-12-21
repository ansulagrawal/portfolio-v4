# Personal Portfolio (portfolio-v4)

A modern, windowed personal portfolio built with React, Vite and Tailwind.

## What the project does

This repo implements a desktop-like, windowed portfolio UI showcasing projects, a résumé, contact info, and interactive windows such as a Finder, Terminal, Image viewer, and embedded resume viewer. It's designed as a developer portfolio and UI demo that combines React, GSAP animations, and Tailwind CSS.

## Why this is useful

- Lightweight, Vite-powered React app for fast local development.
- Demonstrates windowed UI patterns (dock, window controls, window wrapper HOC).
- Good reference for combining React, Tailwind, GSAP and small state libraries (Zustand).

## Key features

- Multiple window types (Finder, Terminal, Safari, Image, Text, Resume, Contact).
- Mac-like Dock and window controls.
- Animated transitions with GSAP.
- Minimal global state via `zustand`.

## Tech stack

- React 19
- Vite
- Tailwind CSS
- GSAP
- Zustand
- React PDF

## Getting started

Prerequisites:

- Node.js (18+) or compatible runtime
- npm, yarn, or pnpm

Install and run locally:

```bash
# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

Default dev server: http://localhost:5173

## Project structure (high level)

- `src/` — app source
  - `components/` — shared UI pieces (Dock, Navbar, WindowControls)
  - `windows/` — per-window React components (Finder, Terminal, Resume...)
  - `hoc/WindowWrapper.jsx` — window container/HOC
  - `store/` — app state modules

## Usage notes

- The app is configured for development with Vite. Use `npm run dev` and open the local server.
- Customize content by editing the components in `src/windows` and `src/components`.

## Contributing

- Open an issue for bugs or feature requests.
- Send pull requests for fixes or improvements; keep changes small and focused.
- If you want a detailed contribution guide, add a `CONTRIBUTING.md` file and link it from this README.

## Where to get help

- File issues in the repository issue tracker.
- For quick questions, open a discussion or PR and tag the maintainers.

## Maintainers

Maintained by the repository owner. Contributions welcome.
