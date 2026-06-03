# Shiva Mottu — Portfolio Website

A modern, premium, recruiter-focused personal portfolio for **Shiva Mottu**, Senior Software Engineer with 8+ years of experience.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- **Modern SaaS-inspired design** — Clean typography, glassmorphism cards, subtle gradients
- **Smooth animations** — Framer Motion scroll-triggered animations throughout
- **Dark / Light mode** — System-aware with manual toggle
- **Fully responsive** — Mobile, Tablet, Desktop
- **SEO optimized** — Metadata, Open Graph, Twitter cards
- **EmailJS contact form** — Real email delivery, no backend needed
- **Particle background** — Interactive animated particles with WebGL-like canvas
- **Animated counters** — Stats that count up on scroll into view
- **Type animation** — Rotating job titles in the hero
- **Accessibility compliant** — ARIA labels, semantic HTML, focus states

---

## 🗂 Project Structure

```
├── app/
│   ├── globals.css          # Tailwind + custom CSS
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Home page (all sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky nav with mobile menu + theme toggle
│   │   └── Footer.tsx       # Footer with social links
│   ├── providers/
│   │   └── ThemeProvider.tsx
│   ├── sections/
│   │   ├── Hero.tsx         # Hero with code window, type animation, particles
│   │   ├── About.tsx        # Bio, counters, highlight cards
│   │   ├── Skills.tsx       # Animated skill bars by category
│   │   ├── Experience.tsx   # Vertical timeline
│   │   ├── Projects.tsx     # Project cards with GitHub / Live Demo
│   │   ├── Education.tsx    # Degrees + certifications
│   │   └── Contact.tsx      # EmailJS contact form + contact info
│   └── ui/
│       ├── AnimatedCounter.tsx
│       ├── ParticleBackground.tsx
│       └── SectionHeading.tsx
├── hooks/
│   ├── useScrollspy.ts
│   └── useAnimatedCounter.ts
├── lib/
│   └── utils.ts
├── types/
│   └── index.ts
└── public/
    └── resume.pdf           # Add your resume here
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 📧 EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create a **Service** (Gmail, Outlook, etc.)
3. Create an **Email Template** with variables: `{{user_name}}`, `{{user_email}}`, `{{message}}`
4. Get your **Public Key** from Account → API Keys

Update `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

---

## 📄 Adding Your Resume

Place your resume PDF at:
```
public/resume.pdf
```

The "Download Resume" button in the hero and footer will automatically link to it.

---

## ☁️ Vercel Deployment

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shiva-portfolio.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"** → Import your GitHub repo
3. Framework preset will auto-detect **Next.js**
4. Add environment variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
5. Click **Deploy**

### Custom Domain

1. In Vercel project → Settings → Domains
2. Add your domain (e.g., `shivamottu.dev`)
3. Update your DNS provider with Vercel's nameservers or CNAME record

### Build Commands (auto-detected)

| Command | Value |
|---------|-------|
| Build   | `npm run build` |
| Output  | `.next` |
| Install | `npm install` |

---

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` — `brand` (blue) and `accent` (purple) palettes.

### Content
All content (experience, projects, skills) lives in the respective section components under `components/sections/`.

### Fonts
Change the `Inter` import in `app/layout.tsx` to any Google Font.

---

## 📜 License

© 2026 Shiva Mottu. All Rights Reserved.
