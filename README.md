# 🚀 Aun Abbas | Full Stack Developer Portfolio

Welcome to my personal portfolio repository! This is a modern, high-performance web application built with **Next.js 16 (Turbopack)**, **TypeScript**, and **Tailwind CSS**. It showcases my projects, skills, and professional journey with a focus on clean UI/UX and fluid animations.

![Portfolio Preview](/public/image.png)

## ✨ Key Features

-   **⚡ High Performance:** Built with Next.js 16 and Turbopack for lightning-fast builds and page loads.
-   **🌓 Dynamic Theming:** Full support for System, Dark, and Light modes using `next-themes`.
-   **🎨 Fluid Animations:** Powered by `framer-motion` for a premium feel (scroll reveals, 3D card effects, and custom cursors).
-   **📱 Fully Responsive:** Optimized for all devices, from mobile phones to ultra-wide monitors.
-   **🤖 AI Integration:** Showcasing projects built with generative AI and LLM APIs.
-   **🏗️ Scalable Architecture:** Clean project structure with reusable UI components and typed data models.
-   **📦 Bun Powered:** Using Bun as the primary package manager for ultra-fast dependency management.

## 🛠️ Tech Stack

### Frontend
-   **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)

### Backend & Infrastructure
-   **Database/Auth:** [Supabase](https://supabase.com/) (PostgreSQL)
-   **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
-   **Emails:** [EmailJS](https://www.emailjs.com/)
-   **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

This project uses [Bun](https://bun.sh/) for dependency management.

### Prerequisites
-   [Bun installed](https://bun.sh/docs/installation) on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AunMohammad254/My-Porfolio.git
    cd My-Porfolio
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root directory and add your credentials:
    ```env
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4.  **Run the development server:**
    ```bash
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
src/
├── app/            # Next.js App Router (Layouts & Pages)
├── components/     # Reusable UI & Section components
│   ├── layout/     # Navbar, Footer, Providers
│   ├── sections/   # Main page sections (Hero, About, etc.)
│   └── ui/         # Atomic UI elements (Buttons, Cards)
├── data/           # Static data for projects, skills, etc.
├── hooks/          # Custom React hooks
├── lib/            # Utilities and animation configs
└── public/         # Static assets (Images, Icons)
```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Aun Abbas](https://github.com/AunMohammad254)
