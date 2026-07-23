# Ibrahim Al-Atyan — Portfolio

Personal portfolio for an AI Engineer / Data Scientist: projects, experience, skills, and certifications — built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and a custom canvas particle field.

**Bilingual** (English / Arabic with full RTL support) · **Dark & Light themes**

## Tech stack

| Layer    | Libraries                          |
| -------- | ----------------------------------- |
| Core     | React 18, TypeScript, Vite          |
| Styling  | Tailwind CSS                        |
| Motion   | Framer Motion                       |
| Graphics | Custom HTML5 Canvas particle field  |
| Icons    | lucide-react + custom brand icons   |

## Project structure

```
portfolio/
├── public/
│   ├── certificates/     # certificate images
│   ├── profile/          # portrait
│   ├── projects/         # project screenshots
│   ├── favicon.svg       # custom monogram logo
│   └── resume.pdf
├── src/
│   ├── components/       # Navbar, Hero, About, Experience, Projects,
│   │                       Skills, Certificates, Contact, Footer,
│   │                       ParticleField, BrandIcons
│   ├── context/          # SiteContext (language + theme)
│   ├── data/             # content.ts — ALL editable text/data lives here
│   └── App.tsx
└── .github/workflows/deploy.yml   # auto-deploy to GitHub Pages
```

## Editing your content

Everything — your name, roles, summary, experience, projects, skills, and
certificates — lives in **`src/data/content.ts`**. Edit that one file to
update the site; no need to touch components for text changes.

To add/replace images: drop files into `public/certificates`,
`public/profile`, or `public/projects`, then reference the path
(e.g. `/certificates/my-cert.jpg`) in `content.ts`.

## Local development

**Requirements:** Node.js 20+

```bash
npm install
npm run dev       # http://localhost:5173/Portfolio/
npm run build     # type-check + production build → dist/
npm run preview   # serve dist/ locally
```

## Deploying to GitHub Pages

1. Create a repo named **`Portfolio`** on GitHub (or update `base` in
   `vite.config.ts` to match your repo name).
2. Push this project to the `main` branch.
3. In the repo settings → **Pages**, set the source to **GitHub Actions**.
4. Every push to `main` will automatically build and deploy via
   `.github/workflows/deploy.yml`.

Your site will be live at:
`https://<your-username>.github.io/Portfolio/`

## License

MIT
