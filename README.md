# JSant Portfolio

Personal portfolio website for **Jonash Santiago** — Technical Support specialist turned web developer. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

🌐 **Live site:** [jsant-portfolio.vercel.app](https://jsant-portfolio.vercel.app)

---

## ✨ Features

- **Hero** — Full-screen intro with animated marquee ticker and parallax orbs
- **About** — Bio, skills, animated counting stats, and process steps
- **Projects** — Horizontal-scroll gallery of 7 real projects with live screenshot previews
- **Certificates** — Modal popup with live PDF previews of ZTM Academy certifications
- **Contact** — Validated contact form powered by [Resend](https://resend.com) — messages deliver straight to inbox
- **Project Detail Pages** — SSG-generated pages for each project with full description, tech stack, and related projects
- Fully **responsive** — mobile, tablet, and desktop
- **Accessible** — semantic HTML, ARIA roles, keyboard navigation
- **Scroll-reveal animations** via IntersectionObserver

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript 5 |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Fonts | Geist Sans + Geist Mono |
| Email | [Resend](https://resend.com) |
| Deployment | [Vercel](https://vercel.com) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/jsant04/jsant-portfolio.git
cd jsant-portfolio
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key_here
```

Get a free API key at [resend.com](https://resend.com).

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
app/
  globals.css           # Tailwind v4 base + custom animations
  layout.tsx            # Root layout with SEO metadata
  page.tsx              # Home page (all sections composed here)
  projects/[slug]/      # SSG project detail pages
  api/contact/          # POST handler — sends email via Resend
components/
  Nav.tsx               # Fixed top navigation with scroll blur
  Hero.tsx              # Full-screen hero with marquee + orbs
  About.tsx             # Bio, skills, animated stats, process steps
  ProjectCard.tsx       # Project card with screenshot preview
  Projects.tsx          # Horizontal-scroll gallery + certificates CTA
  CertificatesModal.tsx # Full-screen modal with live PDF previews
  ContactForm.tsx       # Validated contact form
  Footer.tsx            # Social links + auto year
lib/
  projects.ts           # All project data (single source of truth)
  certificates.ts       # All certificate data
public/
  certificates/         # PDF files served statically
```

---

## 📬 Contact Form Setup

The contact form uses [Resend](https://resend.com) to deliver messages to the owner's inbox.

To enable it in production:
1. Sign up at [resend.com](https://resend.com) and generate an API key
2. In your Vercel project → **Settings → Environment Variables** → add `RESEND_API_KEY`
3. Redeploy

---

## 📜 License

MIT — feel free to use this as inspiration for your own portfolio.

---

Built with ☕ and a lot of vibe coding by [Jonash Santiago](https://github.com/jsant04)
