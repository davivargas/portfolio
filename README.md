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

Every push to `main` triggers two independent deployments:

- **AWS:** CodePipeline builds, tests, and deploys the site to S3 behind CloudFront, live at https://d2hawg7iu43gf8.cloudfront.net. See [docs/aws-pipeline.md](docs/aws-pipeline.md) for the architecture, setup, maintenance, and troubleshooting.
- **GitHub Pages:** `.github/workflows/deploy.yml` tests, builds, and publishes `dist/` to GitHub Pages.
