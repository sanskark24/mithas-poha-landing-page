# Mithas Poha Website

## Run locally

Install dependencies, then start the development server:

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). The server reloads as you edit files.

## Production build

```bash
npm run build
```

The production site is written to `dist/`.

## Deploy to GitHub Pages

In the repository settings, open **Pages** and set the source to **GitHub Actions**. Push changes to the `production` branch to run `.github/workflows/deploy-pages.yml`; the workflow builds and deploys the site automatically.

The site will be available at [https://sanskark24.github.io/mithas-poha-landing-page/](https://sanskark24.github.io/mithas-poha-landing-page/).

## Deploy to Hostinger

Run `npm run build` locally, then upload the contents of `dist/` to Hostinger's `public_html` directory. The copied `public/.htaccess` file keeps product detail URLs working when opened directly.
