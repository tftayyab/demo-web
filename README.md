# finguard

React + Vite landing page for finguard.

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Netlify

Config is in `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node:** 22

### Deploy

1. Push this repo to GitHub
2. In [Netlify](https://app.netlify.com): **Add new site → Import an existing project**
3. Pick the GitHub repo — settings are read from `netlify.toml` automatically
4. Deploy

Or drag-and-drop the `dist` folder after `npm run build`.
