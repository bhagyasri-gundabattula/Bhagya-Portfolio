# 🌟 Bhagya Portfolio — Cinematic Developer Portfolio

<div align="center">

  [![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
  [![EmailJS](https://img.shields.io/badge/EmailJS-Integrated-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](https://www.emailjs.com/)

  <p align="center">
    <strong>A luxury, cinematic developer portfolio crafted with modern web technologies, smooth micro-interactions, 3D perspective physics, and an editorial dark-gold aesthetic.</strong>
  </p>

  <p align="center">
    <a href="#overview">Overview</a> •
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#project-structure">Project Structure</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#about-developer">About Developer</a> •
    <a href="#license">License</a>
  </p>

</div>

---

<a id="overview"></a>
## 📖 Overview

**Bhagya Portfolio** is a bespoke personal portfolio website designed for **Bhagyasri Gundabattula** — Full Stack Developer, AI/ML Engineer, and Generative AI enthusiast. Moving away from standard portfolio templates, this website features an editorial dark aesthetic with gold accents, cinematic video blending, 3D cursor physics, Lenis smooth scrolling, and dynamic interactive sections.

---

<a id="features"></a>
## ✨ Key Features

- **Home page**:
  - Full-screen ambient video canvas seamlessly blended with edge gradients.
  - Bespoke spring-physics custom cursor tracking with dynamic hover expansion.
  - Floating insignia emblem with infinite breath micro-animation.
  - Editorial typography powered by *Bebas Neue*, *Montserrat*, and cursive accents.

- **💎 Interactive 3D "About Me" Card**:
  - Physics-based mouse tilt interaction using Framer Motion springs (`damping: 18`, `stiffness: 220`).
  - Dynamic radial spotlight reflection that follows mouse coordinates in real-time.
  - Clean display of career highlights, academic milestones, and accolades.

- **💼 Project Showcase (ScrollStack)**:
  - Interactive project cards highlighting flagship engineering feats such as:
    - **PennyWise AI Financial Assistant** (Full-Stack RAG with Gemini 1.5, LangChain & Pinecone).
    - **Object Detection with CNNs** (YOLOv8 real-time leaf disease diagnosis).
  - Direct links to GitHub repositories, technology tags, and key performance metrics.

- **⚡ Bento-Grid Skills Architecture**:
  - Grouped taxonomy covering Frontend, Backend & Databases, AI & Machine Learning, and Core Programming Tools.
  - Subtle interactive card hover elevation and glowing borders.

- **📜 Career Journey & Timeline**:
  - Interactive route-stop journey tracing industry internships (*PurpleLane*, *Aimer Society*) and academic milestones.
  - Dynamic SVG scroll progress tracking indicator.

- **🏅 Verifiable Certifications Grid**:
  - Catalog of industry simulations and credentials (NPTEL IoT, Deloitte Job Simulation, SmartBridge MEAN, MERN, Flutter, Cybersecurity) with direct verification links.

- **📟 Monolithic Terminal Contact Interface**:
  - Functional client-side dispatch powered by **EmailJS**.
  - Form validation with inline error messaging.
  - Animated submission states with success verification.

---

<a id="tech-stack"></a>
## 🛠 Tech Stack

### Core & Frameworks
| Technology | Description |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Modern component-driven UI architecture |
| **[TypeScript](https://www.typescriptlang.org/)** | Strict type safety and maintainable codebase |
| **[Vite](https://vitejs.dev/)** | Lightning-fast HMR and optimized bundler |

### Styling & Animation
| Technology | Description |
| :--- | :--- |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Utility-first, next-generation styling engine |
| **[Framer Motion](https://www.framer.com/motion/)** | Production-ready motion, gestures, and 3D spring physics |
| **[Lenis](https://lenis.darkroom.engineering/)** | Buttery smooth, momentum-based scrolling |
| **[Lucide React](https://lucide.dev/)** | Crisp, consistent icon system |

### Integrations & Utilities
| Technology | Description |
| :--- | :--- |
| **[@emailjs/browser](https://www.emailjs.com/)** | Direct client-to-inbox messaging service |
| **clsx & tailwind-merge** | Safe and dynamic class composition |
| **Oxlint** | High-performance linter for high code quality |

---

<a id="project-structure"></a>
## 📂 Project Structure

```text
Bhagyasri-portfolio/
├── public/
│   ├── favicon.svg             # Application favicon
│   └── videos/
│       └── hero.mp4            # Background cinematic hero video
├── src/
│   ├── assets/                 # Profile images, watermarks, graphics
│   ├── components/             # Reusable UI sections
│   │   ├── AboutSection.tsx        # 3D Tilt Card & Biography
│   │   ├── CertificatesSection.tsx # Verified credentials showcase
│   │   ├── ContactSection.tsx     # Terminal-styled EmailJS form
│   │   ├── ExperienceSection.tsx  # Scroll-progress timeline
│   │   ├── HeroSection.tsx        # Video canvas & custom cursor
│   │   ├── ProjectsSection.tsx    # Stacked project presentations
│   │   ├── ScrollStack.tsx        # Smooth scroll stacking container
│   │   ├── ScrollStack.css        # Scroll stack animations
│   │   └── SkillsSection.tsx      # Bento grid skills matrix
│   ├── data/
│   │   └── certificates.ts     # Centralized certification records
│   ├── App.tsx                 # Root layout & composition
│   ├── App.css                 # Base application styles
│   ├── index.css               # Global Tailwind CSS definitions
│   └── main.tsx                # React entry point
├── .env.example                # Template for environment credentials
├── index.html                  # HTML entry with preloaded Google Fonts
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

---

<a id="getting-started"></a>
## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine:

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.0.0 or higher recommended)
- **npm**, **pnpm**, or **yarn**

### 1. Clone the Repository

```bash
git clone https://github.com/bhagyasri-gundabattula/Bhagya-Portfolio.git
cd Bhagya-Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root based on [.env.example](.env.example):

```bash
cp .env.example .env
```

Open `.env` and fill in your [EmailJS](https://www.emailjs.com) credentials:

```env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here
VITE_CONTACT_EMAIL=your_email@example.com
```

> **Note**: The contact form will still render without EmailJS credentials, but message dispatch requires valid keys.

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser to explore the website.

### 5. Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🔧 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the local development server with Hot Module Replacement (HMR) |
| `npm run build` | Type-checks with `tsc` and creates an optimized production build in `dist/` |
| `npm run preview` | Locally serves the production bundle from `dist/` |
| `npm run lint` | Runs `oxlint` to detect potential syntax issues and lint errors |

---

<a id="about-developer"></a>
## 👩‍💻 About Bhagyasri Gundabattula

**Full Stack Developer & AI Enthusiast**  
🎓 B.Tech in Computer Science and Engineering — *Sasi Institute of Technology & Engineering* (CGPA: 8.62/10)  
🏆 1st Place — College Level MSME Project Evaluation  

- **Primary Focus**: MERN Stack Web Applications, Generative AI Systems, RAG Pipelines, Computer Vision with YOLO/CNNs.
- **Internships**: PurpleLane (MERN Stack & Gen AI), Aimer Society (AI & Deep Learning).

### 🌐 Connect & Links

- **GitHub**: [@bhagyasri-gundabattula](https://github.com/bhagyasri-gundabattula)
- **Featured Project**: [PennyWise AI Financial Assistant](https://github.com/bhagyasri-gundabattula/PennyWise-AI-Financial-Assistant)
- **Resume**: [View / Download Resume](https://drive.google.com/file/d/1Dq1Azu3EFnF1llBekrP6FqXlbJNlud8B/view?usp=sharing)

---

<a id="license"></a>
## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to explore, learn from, and adapt the code for your own personal projects.

---

<div align="center">
  <sub>Engineered with precision & artistic flair by <strong>Bhagyasri Gundabattula</strong>.</sub>
</div>
