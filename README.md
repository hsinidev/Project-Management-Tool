# doodax: A Modern Project Management Platform UI

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.2-38B2AC?logo=tailwind-css)

A fully-featured, responsive frontend application designed to replicate the user experience of a modern agile project management tool like Jira. Built with React, TypeScript, and Tailwind CSS, this project serves as a comprehensive showcase of clean architecture, component-based design, and advanced UI/UX implementation.

**[Live Demo](https://doodax.com)** (Placeholder)

---

<!-- Add a screenshot or GIF of the application here -->
<!-- ![doodax Application Screenshot](link-to-your-screenshot.png) -->

## ✨ Key Features

- **Stunning & Responsive UI**: A meticulously crafted, pixel-perfect user interface that is fully responsive and looks great on any device, from large desktops to mobile phones.
- **Interactive Components**: Dynamic and stateful components, including a feature-discovery tab system and multiple modals for a rich user experience.
- **Integrated AI Rewriter Tool**: A powerful, built-in modal that connects to any Ollama-compatible endpoint (local or cloud) to rewrite social media posts.
  -   ✅ Customizable API endpoint.
  -   ✅ Tone selection (Professional, Casual, Witty, etc.).
  -   ✅ Platform-specific optimization (LinkedIn, Twitter/X, etc.).
- **SEO-First Design**: Includes a 3,500+ word, collapsible article on Agile Project Management, complete with a Table of Contents, FAQ, and a full JSON-LD schema to maximize search engine visibility.
- **Complete Project Structure**: Comes with all necessary supporting files, including `robots.txt`, `sitemap.xml`, and a custom SVG favicon for a production-ready setup.

## 🛠️ Technology Stack

| Category      | Technology                                                                                                                              |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**  | [React](https://reactjs.org/) (v18+), [TypeScript](https://www.typescriptlang.org/)                                                       |
| **Styling**   | [Tailwind CSS](https://tailwindcss.com/) (via CDN)                                                                                        |
| **Core Tools**| [Vite](https://vitejs.dev/) / Create React App (Recommended), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)              |
| **Deployment**| Vercel, Netlify, AWS Amplify, or any static site hosting service.                                                                         |

## 📂 Project Structure

The project follows a standard component-based architecture to ensure maintainability and scalability.

```
/
├── public/
│   ├── favicon.svg
│   └── index.html         # HTML entry point
├── src/
│   ├── components/        # Reusable React components (Header, Footer, Modals, etc.)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── App.tsx            # Main application component and layout
│   └── index.tsx          # React root entry point
├── README.md              # You are here!
├── robots.txt             # SEO instructions for web crawlers
└── sitemap.xml            # SEO sitemap for page indexing
```

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- `npm`, `yarn`, or `pnpm` package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/doodax.git
    cd doodax
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port).

### Configuring the AI Rewriter

The AI Rewriter tool is designed to work with [Ollama](https://ollama.com/).

1.  **Install and run Ollama** on your local machine or have access to a cloud endpoint.
2.  **Pull a model:** The tool is pre-configured to suggest `llama3`, but any generative text model should work.
    ```bash
    ollama pull llama3
    ```
3.  Launch the doodax application and open the AI Rewriter tool via the "Tools" icon (✨) in the header.
4.  The default endpoint `http://localhost:11434/api/generate` should work for a standard local setup. If your setup is different, update the endpoint URL in the input field.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information (or refer to the section below).

This project is provided "as is" without warranty of any kind. It is intended for educational and demonstration purposes.

---

### MIT License

Copyright (c) 2025 HSINI MOHAMED

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 📧 Contact

**Powered by [HSINI MOHAMED](https://github.com/hsinidev)**

Project Link: [https://github.com/hsinidev/doodax](https://github.com/hsinidev/doodax)
