# ARAPH Solutions — Website

A production-ready website for ARAPH Solutions, a premium digital growth partner for healthcare and businesses.

## Prerequisites

- Node.js 18+ and npm
- A code editor (VS Code recommended)

## Installation

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Visit `http://localhost:3000` to preview the site.

## Production Build

```bash
npm run build
```

The output will be in the `dist/` directory.

## Project Structure

```
araph-solutions/
├── public/
│   ├── favicon.svg          # Site favicon (replace with your own)
│   ├── robots.txt           # Search engine directives
│   └── images/              # Add your images here
├── src/
│   ├── components/          # Shared UI components (Navbar, Footer, Layout)
│   ├── config/
│   │   └── site.ts          # ★ CENTRAL CONFIG — Update all business info here
│   ├── data/
│   │   └── portfolio.ts     # Portfolio projects and services data
│   ├── pages/               # Page components (one per route)
│   ├── App.tsx              # Router setup
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind + custom styles
├── index.html               # HTML template with meta tags
├── package.json
├── tsconfig.json
├── vite.config.js
└── README.md
```

## How to Customize

### Change Logo
Replace `public/favicon.svg` with your logo file. Update `logoPath` in `src/config/site.ts`.

### Change Contact Information
Edit `src/config/site.ts`:
- `email` — Your business email
- `phone` — Your phone number
- `whatsapp` — WhatsApp number (no spaces/dashes, include country code)
- `linkedin` — LinkedIn profile URL
- `instagram` — Instagram profile URL
- `bookingUrl` — Calendly or other booking link

### Change Brand Colors
Edit the `colors` object in `src/config/site.ts` and update the `@theme` block in `src/index.css`.

### Change Text & Content
- Homepage: `src/pages/Home.tsx`
- Services: `src/data/portfolio.ts` (services array)
- Portfolio: `src/data/portfolio.ts` (portfolioProjects array)
- Other pages: respective files in `src/pages/`

### Add Images
Place images in `public/images/` and reference them as `/images/your-image.jpg`.

### Connect Contact Form
The contact form currently simulates submission. To connect it:
1. Sign up for [Formspree](https://formspree.io) (free tier available)
2. Get your form endpoint
3. Edit `src/pages/Contact.tsx` — replace the simulated submission with a `fetch()` call
4. See the comment in the code for an example

Alternatively, the WhatsApp link provides a direct enquiry channel.

## Deploy to GitHub

```bash
git init
git add .
git commit -m "Initial commit — ARAPH Solutions website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/araph-solutions.git
git push -u origin main
```

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" → Import your repository
4. Framework preset: Vite
5. Click "Deploy"

For SPA routing, add a `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in with GitHub
3. Click "New site from Git" → Select your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click "Deploy"

For SPA routing, add a `public/_redirects` file:
```
/*    /index.html   200
```

## Configure Custom Domain

After deployment:
1. In Vercel/Netlify dashboard, go to Domain Settings
2. Add your custom domain (e.g., araphsolutions.com)
3. Update DNS records as instructed
4. Update `baseUrl` in `src/config/site.ts` with your actual domain
5. Update the canonical URL in `index.html`

## Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services Overview |
| `/services/website-development` | Website Development |
| `/services/digital-marketing` | Digital Marketing |
| `/services/local-seo` | Local SEO |
| `/healthcare` | Healthcare Growth |
| `/services/branding-content` | Branding & Content |
| `/services/automation` | AI & Automation |
| `/work` | Portfolio / Selected Work |
| `/work/:slug` | Individual Project |
| `/about` | About ARAPH |
| `/contact` | Contact |
| `/privacy-policy` | Privacy Policy |

## Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- React Router v6
- Lucide React (icons)

## License

All rights reserved. © ARAPH Solutions.
