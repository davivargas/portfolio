# Portfolio

Davi Vargas's personal portfolio, live at https://davivargas.github.io/portfolio/.

Single page built with Vite, React, TypeScript, Tailwind, and shadcn/ui.

## Development

```sh
npm install
npm run dev      # dev server on http://localhost:8080
npm run lint
npm run test
npm run build    # static build in dist/
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which tests, builds, and publishes `dist/` to GitHub Pages.
