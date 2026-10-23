# Dhairya Khemot: Portfolio

Plain HTML, CSS, and JavaScript. No build step, no dependencies.

## Files
- `index.html`: page structure and content
- `style.css`: styles (palette: #e63946, #f1faee, #a8dadc, #457b9d, #1d3557) with light and dark themes
- `script.js`: theme toggle, mobile menu, scroll reveal
- `assets/resume.pdf`: **you add this** (copy your résumé and rename it)
- `assets/profile.jpg`: optional photo; initials are shown if missing

## Test locally
1. Copy your résumé PDF to `assets/resume.pdf`.
2. Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit http://localhost:8000.
3. Check: theme toggle, mobile menu (narrow the window below ~830px), résumé download, and the GitHub link.

## Deploy on GitHub Pages
1. Create a repository (e.g. `portfolio`) and push these files to the `main` branch, with `index.html` at the repo root.
2. In the repository go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute your site appears at `https://dhairyakhemot07-creator.github.io/portfolio/`. All asset paths are relative, so the project URL works.

## Things to update when ready
- **SGPA (8.8):** not shown on the site. Add it only after confirming it is current.
- **LinkedIn:** add a link in the footer (see the comment in `index.html`) once you have the real URL.
- **More projects:** copy the `<article class="project reveal">` block. Add a Live Demo button only with a real deployed URL.
- **Experience and certifications:** replace the placeholder entries when you have real ones.
