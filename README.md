# React-Work: Single-Domain Project Directory

This repository deploys all coursework projects under one Vercel domain with a central homepage directory.

## Homepage Directory

- `/` → project directory homepage
- Each card links to a project route on the same domain.

## Route Mapping

- `/currency-converter` → `currencyConverter`
- `/bg-color` → `bgColor`
- `/password-generator` → `PasswordGenerator`
- `/rtk-todo` → `RTKTodo`
- `/todos` → `TODos/TO DOs`
- `/theme-toggler` → `Theme Toggle/themeToggler`
- `/ecommerce` → `LastProject/Ecommerce/Ecommerce Frontend`

## Local Development

Run a project directly from its own folder:

```bash
cd /home/runner/work/React-Work/React-Work/currencyConverter
npm install
npm run dev
```

Repeat with any other project path from the mapping above.

## Local Build/Preview of Unified Deployment Output

From repository root:

```bash
cd /home/runner/work/React-Work/React-Work
npm install
npm run build
python3 -m http.server 4173 --directory dist
```

Then open `http://localhost:4173` and navigate using the homepage cards.

## Vercel Deployment

1. Import `suhaib-ilahi/React-Work` as a single Vercel project.
2. Keep root directory as repository root.
3. Vercel uses `vercel.json`:
   - `buildCommand`: `npm run build`
   - `outputDirectory`: `dist`
   - rewrites for project path SPA fallback.
4. Deploy.

## Notes / Constraints

- Existing project code is kept intact, with lightweight subpath integration.
- Each Vite app has a `base` configured for its assigned path.
- Ecommerce also uses `BrowserRouter` basename from `import.meta.env.BASE_URL` for deep-link compatibility under `/ecommerce`.
