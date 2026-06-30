# Stir Up — Install Instructions

Static GitHub Pages site explaining how to add the **Stir Up** web app to a
phone's home screen.

Flow: pick language (English / Español) → 18+ age gate → game teaser → pick
**iPhone** or **Android** → step-by-step instruction image. An **Open Stir Up**
link points at the production app.

## Files
- `index.html` — single-page markup, one `<section>` per step.
- `styles.css` — app theme (red `#DC2626`, slate `#1E293B`, gold, flame).
- `app.js` — step navigation + copy (EN/ES). `APP_URL` = production app link.
- `images/stir-up-<ios|android>-instructions-<en|es>.png` — instruction images.

## Local preview
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Updating the app link
Edit `APP_URL` in `app.js` if the production URL changes (e.g. a `stirup.app`
custom domain replaces the EAS Hosting alias).
