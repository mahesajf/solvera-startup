# Solvera Technology Labs — Official Website

Production-ready multi-page company website for **Solvera Technology Labs**, an IT solutions company delivering DevOps and Web Development for startups and SMEs. Built for review in early-stage technology startup program applications.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The site runs at `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```

---

## 🎨 Brand System & Design Tokens

- **Primary Color:** `#FF4D00` (Electric Safety Orange)
- **Secondary Color:** `#F5E5CC` (Warm Sand / Parchment)
- **Neutral Dark:** `#141210` (Warm Near-Black) — achieves 5.2:1 contrast against `#FF4D00` (WCAG AA Compliant)
- **Canvas / Background:** `#FAF8F5` (Warm Off-White)
- **Headings Font:** `Rethink Sans` (Google Fonts, preconnected and preloaded)
- **Body & UI Font:** `Poppins` (Google Fonts)

Theme tokens are defined in `src/index.css`.

---

## 📁 File Structure

```
├── index.html                     # HTML entry point, Google Fonts, base SEO & favicon
├── metadata.json                  # AI Studio project descriptor
├── package.json
├── public/
│   ├── robots.txt                 # Search engine crawler permissions
│   └── sitemap.xml                # Canonical XML sitemap with all 5 routes
├── src/
│   ├── App.tsx                    # Clean URL client-side router & scroll restoration
│   ├── index.css                  # Tailwind CSS variables & fluid type scale
│   ├── main.tsx                   # React 19 root mount
│   ├── types.ts                   # TypeScript interfaces
│   ├── data/
│   │   └── companyData.ts         # Company copy, tech stack, team, FAQs, LinkedIn
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx         # Accessible WCAG AA button tokens
│   │   │   ├── FaqAccordion.tsx   # Interactive + / - accordion
│   │   │   ├── Footer.tsx         # Global footer with Jakarta location & LinkedIn
│   │   │   ├── Header.tsx         # Sticky 3-zone header with STL logo & LinkedIn
│   │   │   ├── Logo.tsx           # Official STL 8-petal asterisk emblem
│   │   │   ├── HeroStarburstGraphic.tsx # 3D amber starburst vector composition
│   │   │   └── SEO.tsx            # Dynamic title, OG tags, canonical & JSON-LD
│   │   └── home/
│   │       ├── HomeHero.tsx       # Value proposition, CTAs & partner strip
│   │       ├── ProcessSection.tsx # Dark container with 3 workflow cards
│   │       ├── PillarsSection.tsx # 3 core alignment columns with icons
│   │       ├── EngagementModelsSection.tsx # Standard Sprint & Dedicated Pod cards
│   │       ├── WhySolveraSection.tsx # Concrete technical standards
│   │       └── CtaBanner.tsx      # Dark rounded callout banner
│   └── pages/
│       ├── HomePage.tsx           # Home route (/)
│       ├── ServicesPage.tsx       # Services route (/services)
│       ├── AboutPage.tsx          # About route (/about)
│       └── ContactPage.tsx        # Contact route (/contact)
└── README.md
```

---

## ✏️ Where to Edit Copy & Replace Placeholders

All core business data is centralized in **`src/data/companyData.ts`**:

1. **Company Details:** Edit `COMPANY_INFO` (`email`, `location`, `tagline`).
2. **Projects & Case Studies:** Edit `PROJECTS_DATA` to replace `[PROJECT 1]`, `[PROJECT 2]`, and `[RESULT]` with real case studies.
3. **Team Members:** Edit `TEAM_MEMBERS` to replace `[NAME]` and `[ROLE]` with real founders/engineers.
4. **Services & Deliverables:** Modify `SERVICES_DATA` to tailor DevOps or Web offerings.
5. **Contact Form Endpoint:** In `src/pages/ContactPage.tsx`, look for `handleSubmit` where comments explain how to hook into Formspree or Resend.

---

## 🌐 How to Deploy

### Deploying to Vercel
1. Push this repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Framework preset: **Vite**.
4. Set Build Command to `npm run build` and Output Directory to `dist`.
5. Ensure rewrite rule in `vercel.json` for SPA routing:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Deploying to Netlify
1. Connect repository in [Netlify](https://netlify.com).
2. Set Build command: `npm run build` and Publish directory: `dist`.
3. Add a `public/_redirects` file with:
```
/*    /index.html   200
```
