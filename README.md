# E-profile Seyba

Personal developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **React Router**. Content is mostly static sections plus project detail pages driven by `apps/web/src/data/projectsData.js`.

## Requirements

- **Node.js** 
- **npm**

## Install

From the repository root:

```bash
npm install
```

This installs root tooling (e.g. `concurrently`) and workspace dependencies under `apps/web`.

## Scripts (run from the repo root)

| Command        | Description                                      |
|----------------|--------------------------------------------------|
| `npm run dev`  | Start the Vite dev server (default: port 3000)   |
| `npm run build`| Production build → `apps/web/dist`               |
| `npm run start`| Preview the production build (after `build`)     |
| `npm run lint` | Run ESLint in `apps/web`                         |

## Project layout

```text
e-profile-seyba/
├── apps/web/           # Vite + React app
│   ├── public/         # Static assets (favicon, profile photo, …)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/       # `projectsData.js` — featured projects
│   │   └── …
│   ├── index.html
│   ├── vite.config.js
│   └── .env.example    # Optional env template
├── package.json        # Workspace root
└── README.md
```

## Contact form (mailto)

The contact section opens the visitor’s email client with a **mailto:** draft. Configure the recipient either:

- **`apps/web/.env`**: `VITE_CONTACT_EMAIL=your@email.com` (restart dev server after changes), or  
- **`CONTACT_EMAIL_FALLBACK`** in `apps/web/src/components/ContactForm.jsx`.

See `apps/web/.env.example`.

## Deploy (Vercel)

This project is set up for **Vercel** only (no separate static host required). After connecting the Git repo:

1. **Root Directory** — either leave it as the **repository root**, or set it to **`apps/web`** (both work).
2. Config is in **`vercel.json`** at the repo root and in **`apps/web/vercel.json`**; Vercel uses the file that matches your chosen root.
3. Production output is **`apps/web/dist`** (from `npm run build`).

Push to your default branch; Vercel runs install + build automatically.

## Optional: local-only file

`apps/web/src/components/StatsSection.jsx` is listed in `.gitignore` on purpose so it stays local-only; clones will not include that file.

## License

All rights reserved unless you add a license file.
