# Yasir Khan Portfolio

A modern personal portfolio for Yasir Khan, built with React and Vite. The site presents frontend and WordPress development services, skills, portfolio projects, and contact details in a responsive single-page experience.

## Overview

This portfolio is designed to be fast, lightweight, and easy to deploy on Vercel. It includes smooth section navigation, responsive layouts, dark/light theme support, animated stats, skill filters, portfolio cards, and a validated contact form UI.

The larger HTML/CSS/JavaScript demo collection is intentionally kept outside this repository to keep the portfolio small for GitHub and Vercel uploads. Portfolio buttons now link to the external source repository instead of bundling every demo project locally.

External project collection:
[15 Days 15 Projects using HTML, CSS and JavaScript](https://github.com/yasir50233/15-days-15-projects-using-html-css-and-javaScript)

## Features

- Responsive single-page portfolio layout
- Hero section with social links and call-to-action buttons
- About section with animated statistics
- Skill section with category filters and animated meters
- Portfolio section with external GitHub source links
- Contact section with client-side form validation
- Dark and light theme toggle with saved user preference
- Lightweight Vite build setup for fast deployment

## Tech Stack

- React
- Vite
- JavaScript
- HTML5
- CSS3
- Font Awesome icons

## Project Structure

```text
.
├── docs/
│   └── Yasir-Khan-Portfolio-Documentation.pdf
├── public/
│   └── logo.png
├── scripts/
├── src/
│   ├── components/
│   ├── data/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── styles.css
└── vite.config.js
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment on Vercel

Recommended Vercel settings:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Vercel will install dependencies during deployment, so `node_modules` should not be uploaded to GitHub.

## Repository Size Note

This repository excludes generated and heavy local folders:

- `node_modules/`
- `dist/`
- local log files
- the external 15-project demo collection

That keeps the source repository small while still allowing anyone to install, build, and deploy the portfolio normally.

## Contact

- GitHub: [@yasir50233](https://github.com/yasir50233)
- LinkedIn: [yasir-khan-it](https://www.linkedin.com/in/yasir-khan-it)
- Email: [yasirkhan9850233@gmail.com](mailto:yasirkhan9850233@gmail.com)
