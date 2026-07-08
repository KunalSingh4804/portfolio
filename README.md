# Premium Developer Portfolio

A responsive, SEO-friendly portfolio site built with React, Vite, React Router DOM, Framer Motion, React Icons, and CSS Modules.

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run test`
- `npm run deploy`

## GitHub Pages Deployment

The site deploys automatically to **https://kunalsingh4804.github.io/portfolio/** when you push to `main`.

### First-time setup

1. Sign in to GitHub CLI:
   ```bash
   gh auth login
   ```
2. Run the deploy script from the project root:
   ```powershell
   powershell -ExecutionPolicy Bypass -File scripts/deploy-github.ps1
   ```
3. In GitHub repo **Settings → Pages**, confirm the source is **GitHub Actions**.

### Manual deploy (alternative)

```bash
npm run deploy
```

This publishes the built `dist` folder to the `gh-pages` branch.
