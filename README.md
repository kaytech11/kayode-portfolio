# Portfolio

Pages use real routes via `react-router-dom` (`/`, `/work`, `/contact`) — the
browser's back/forward buttons and direct URLs both work.

## Structure

```
src/
  App.jsx                  Top-level shell: theme provider + <Routes>
  context/
    ThemeContext.jsx        Dark/light mode state + color tokens (edit colors here)
  data/
    site.js                 Your name, email, socials, résumé path, nav labels
    work.js                 Your projects — edit this to update the Work page
    skills.js                Your skills list
    testimonials.js          Testimonials
  components/
    Header.jsx               Nav bar, logo, theme toggle, mobile menu
    Footer.jsx                Bottom bar
    ProjectCard.jsx           A single clickable project card (used on Work page)
    SocialLinks.jsx           Reusable row of social icons
  pages/
    Home.jsx                  Hero + skills + testimonials + about
    Work.jsx                  Grid of ProjectCards
    Contact.jsx                Contact page
```

## What to edit for your own content

- **`data/site.js`** — your name, email, résumé link, and social URLs
- **`data/work.js`** — your real projects. Set `url` to a live link to make a
  card clickable; leave it `null` to show a "Not live yet" badge instead
- **`data/skills.js`** / **`data/testimonials.js`** — swap in your own
- **`context/ThemeContext.jsx`** — change the hex values in `themes.dark` /
  `themes.light` to adjust the color palette everywhere at once

## Adding a page

1. Create `pages/NewPage.jsx`
2. Add `{ key: "new", label: "New" }` to `PAGES` in `data/site.js`
3. Add `{page === "new" && <NewPage />}` in `App.jsx`

## Running it

```
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

To build for deployment:

```
npm run build
```

This outputs a `dist/` folder you can upload to Vercel, Netlify, GitHub Pages, etc.

## Requirements

- Node.js 18+ installed
- Everything else (React, Vite, Tailwind, `lucide-react`) is installed via `npm install` — see `package.json`
