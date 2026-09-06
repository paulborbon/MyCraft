# Paul Remote Tech Portfolio Website

## Folder structure

- `index.html` — Profile page and Bootstrap Canva carousel.
- `pages/` — One HTML file per portfolio tab.
- `css/style.css` — Shared light/dark theme and layout.
- `js/script.js` — Theme toggle and original hover/out/click UI sounds.
- `assets/images/` — Put your own Canva and certificate images here.

## Put your images here

Place these files directly in `assets/images/`:

- `canva page 1.png`
- `canva page 2.png`
- `canva page 3.png`
- `canva page 4.png`
- `canva page 5.png`
- `canva page 6.png`
- `canva page 7.png`
- `canva page 8.png`
- `DOST 1.png`
- `DOST 2.png`

The website intentionally does **not** bundle your Canva/certificate images. It references those filenames so you can copy them into the folder yourself.

The Certifications page currently uses `canva page 1.png` as the slot for **M365 Certified: Fundamentals**. If your M365 certificate is a different image, change that filename in `pages/certifications.html`.

## Testing

1. Extract the ZIP.
2. Open the folder in VS Code.
3. Put your PNG files in `assets/images/`.
4. Open `index.html` with Live Server, or double-click it.
5. Use the **LIGHT / DARK** button at the upper-right of every page.

## GitHub Pages later

```text
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```
