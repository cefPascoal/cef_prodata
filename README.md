# CEF ProData

Professional portfolio of **Claudio Pascoal** — Data Engineering, Data Integration,
ETL and Data Platforms. Built with **React + Vite + TypeScript + Tailwind CSS**, ready
to deploy for free on **GitHub Pages**.

---

## About this project

A static site (no backend, no database) built to answer three questions quickly for
recruiters and technical readers: who I am, what I do, and how I work — with an honest
positioning around Data Engineering / Data Integration / Data Platforms, and Data
Analytics explicitly shown as an area currently in development, not a specialty.

## Stack

| Layer      | Technology                                  |
|------------|-----------------------------------------------|
| Framework  | React 19 + Vite                               |
| Language   | TypeScript                                    |
| Styling    | Tailwind CSS v4 (`@tailwindcss/vite`)         |
| Icons      | lucide-react                                  |
| Lint       | oxlint (fast linter shipped with the Vite template) |
| Deploy     | GitHub Actions → GitHub Pages                 |

Fully static — no database, no server of its own, no API keys or secrets in the frontend.

---

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Outputs the production build to `dist/`.

```bash
npm run preview
```

Serves the build locally to check it before publishing.

## Lint

```bash
npm run lint
```

---

## Integrating into the existing `cef_prodata` repository

This project was built as a standalone folder and does **not** contain a `.git`
directory — it was intentionally **not** initialized with `git init`, and no remote
was touched, since the repository already exists.

To bring these files into your existing repository:

1. Copy the contents of this folder into your local clone of `cef_prodata`
   (everything except this note applies — merge `src/`, `public/`, `.github/`,
   config files and `README.md`).
2. From inside your existing `cef_prodata` clone, check what changed:

   ```bash
   git status
   ```

3. Review the diff carefully to confirm no secrets or confidential data were
   introduced, then commit and push:

   ```bash
   git add .
   git commit -m "feat: create CEF ProData portfolio"
   git push origin main
   ```

The existing remote (`git@github.com:cefPascoal/cef_prodata.git`) is left untouched —
this project never runs `git init`, `git remote add`, or any other remote-changing
command.

### Enabling GitHub Pages

- In the repository: **Settings → Pages**
- Under **Source**, choose **GitHub Actions** (not "Deploy from a branch")
- Push to `main` — the included workflow (`.github/workflows/deploy.yml`) builds and
  publishes automatically
- Track progress under the **Actions** tab; once green, the site is live at the URL
  shown in **Settings → Pages**

> **Note on the repository name:** `vite.config.ts` uses `base: './'` (relative paths),
> so the build works regardless of the repository name — nothing to adjust there.

---

## Project structure

```
src/
├── components/     # Reusable components (Navbar, ProjectCard, ContactForm, ...)
├── sections/       # One section per file (Hero, About, Approach, Skills, ...)
├── data/           # Site content, kept separate from the UI
│   ├── profile.ts        # Name, brand, bio, links, positioning
│   ├── skills.ts          # Skill categories + "Currently Learning" (kept separate)
│   ├── expertise.ts       # Areas of Expertise + Learning Journey path
│   ├── approach.ts        # "How I Work" pipeline steps
│   ├── projects.ts        # Case-study structured projects
│   └── experience.ts      # Experience, education, certifications
├── hooks/          # useTheme (dark/light), useActiveSection (scroll-spy)
├── App.tsx
├── main.tsx
└── index.css       # Design tokens (colors, fonts, animations) in Tailwind v4
```

---

## Customization — what to edit first

| What you want to change             | File                                    |
|---------------------------------------|-------------------------------------------|
| Name, brand, bio, links, email        | `src/data/profile.ts`                   |
| Skills / "Currently Learning"         | `src/data/skills.ts`                    |
| Areas of Expertise / Learning Journey | `src/data/expertise.ts`                 |
| "How I Work" pipeline steps           | `src/data/approach.ts`                  |
| Projects                              | `src/data/projects.ts`                  |
| Experience, education, certifications | `src/data/experience.ts`                |
| CV (PDF)                              | Place file at `public/cv.pdf` (see `public/CV_PLACEHOLDER.txt`) |
| Title, description, social meta (SEO) | `index.html`                            |
| Contact form (optional Formspree)     | `src/components/ContactForm.tsx` (`FORMSPREE_ENDPOINT` constant) |

### Information you still need to fill in (marked with `[ ]`)

Search the project for these markers and replace with your real data:

- `[CITY, COUNTRY]`, `[EMAIL]`, `[LINKEDIN_URL]` — in `src/data/profile.ts`
- `[ROLE]`, `[COMPANY]`, `[PERIOD]` — in `src/data/experience.ts`
- `[DEGREE / COURSE]`, `[INSTITUTION]`, `[CERTIFICATION]` — in `src/data/experience.ts`
- `[ADD INFORMATION: ...]` — free text to complete honestly
- `[PROJECT_GITHUB_URL]` — real project link
- `[SITE_URL]` — in `public/robots.txt` and `public/sitemap.xml`
- The main project in `src/data/projects.ts` has `status: "placeholder"` — replace its
  details with your real project once ready
- The remaining projects have `status: "planned"` — these are intentionally shown as
  future/in-development work; keep them that way until they're real, finished projects

### Positioning — please keep this in mind when editing

The brief behind this build is explicit: **do not present yourself as a BI/Analytics
specialist.** Power BI, DAX, Data Analytics and similar items live in `currentlyLearning`
(`src/data/skills.ts`) precisely so they stay visually and semantically separate from
consolidated Data Engineering skills. If you add real experience later, move items
from "Currently Learning" into the main skill categories only once they reflect
genuine, practical competency.

### Contact form

The site is fully static, so the form has no backend of its own. Two options:

1. **Formspree** (recommended): create a free account at
   [formspree.io](https://formspree.io), copy your form endpoint, and paste it into
   `src/components/ContactForm.tsx`, in the `FORMSPREE_ENDPOINT` constant.
2. **No external service** (default): leave `FORMSPREE_ENDPOINT` empty. The submit
   button opens the visitor's email client with the message pre-filled (`mailto:`).

### Dark / light mode

Dark mode is the default. The navbar toggle switches to light mode; the choice is
saved in the visitor's `localStorage`.

---

## Final checklist before publishing

- [ ] Replace all `[...]` markers in `src/data/` and `index.html`
- [ ] Add `public/cv.pdf` (or remove the download button, if you prefer)
- [ ] Replace the placeholder project with your real project details
- [ ] Fill in real experience, education and certifications
- [ ] Check every link (LinkedIn, GitHub, project links)
- [ ] Set up Formspree, if using a working contact form
- [ ] Run `npm run build` and confirm there are no errors
- [ ] Run `npm run lint`
- [ ] Test on mobile (320px–768px) and desktop
- [ ] Run `git status` before committing — confirm no secrets or confidential data
- [ ] Push to `main` and confirm the deploy under **Actions**
- [ ] Confirm the site loads correctly at the GitHub Pages URL
