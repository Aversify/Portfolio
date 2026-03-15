# Portfolio

## Struktur

- `index.html`: Forside.
- `projekt.html`: Projektdetaljeside.
- `assets/`: Delte statiske assets.
  - `assets/css/`: Stylesheets.
  - `assets/images/`: Billeder, ikoner og video.
- `data/`: Side-data (fx project-cases).
- `scripts/`: Side-specifik JavaScript-logik.

## Konventioner

- Hold assets i `assets/` og data i `data/`.
- Undgå inline scripts i HTML; læg logik i `scripts/`.
- Brug relative paths med korrekt case (vigtigt på Linux/Vercel).

## Git hygiene

`.gitignore` udelukker build/dependency artefakter:

- `node_modules/`
- `dist/`
- `.vercel/`
