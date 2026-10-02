# LunaVal — Website

This folder contains your finished website, ready to host for free with GitHub Pages.

## How to put it on GitHub Pages

1. Go to https://github.com/new and create a new repository (any name, e.g. `lunaval`). Set it to Public.
2. On the repository page, click **uploading an existing file** (or "Add file → Upload files").
3. Upload **everything inside this folder** — `index.html`, `404.html`, `robots.txt`, `favicon.ico`, `placeholder.svg`, and the entire `assets` folder. Keep the same structure (do not upload the folder itself, upload its contents).
4. Click **Commit changes**.
5. Go to **Settings → Pages**.
6. Under "Build and deployment", set Source to **Deploy from a branch**, then choose branch **main** and folder **/ (root)**. Click Save.
7. Wait 1–2 minutes. Your site will be live at:
   `https://YOUR-USERNAME.github.io/lunaval/`

## Notes

- If someone visits a page link that doesn't exist, they are automatically sent to the homepage.
- To update the site later, edit the files and upload them again (replace the old ones).
- Want a custom domain (like lunaval.com)? In Settings → Pages, enter your domain under "Custom domain", then point your domain's DNS to GitHub:
  - A records → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
  - CNAME record for `www` → YOUR-USERNAME.github.io
