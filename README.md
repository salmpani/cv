# Sofia Almpani — Academic Portfolio

An accessible, mobile-friendly academic website built with plain HTML, CSS and JavaScript. No build tools or paid services are required.

## What is included

- `index.html` — content and navigation
- `styles.css` — visual design and responsive layout
- `script.js` — English/Greek toggle, publication filters, mobile navigation
- `favicon.svg` — site icon
- `Sofia_Almpani_CV.pdf` — downloadable English CV

## Publish for free with GitHub Pages

1. Create a free GitHub account at <https://github.com/> if you do not already have one.
2. Create a **public** repository named `YOUR-USERNAME.github.io`, replacing `YOUR-USERNAME` with your exact GitHub username.
3. Upload the **files inside this folder** into the repository root (do not upload the ZIP as a single file). Commit them to the `main` branch.
4. Open **Settings → Pages** in the repository. In **Build and deployment**, select **Deploy from a branch**, choose `main`, `/ (root)`, and save.
5. Your site will be available at `https://YOUR-USERNAME.github.io/` after GitHub publishes it. The first deployment may take a few minutes.

Documentation: <https://docs.github.com/en/pages/quickstart>

You can test the site locally by opening `index.html` in your browser. No internet service is needed for its interactive features.

## Before making the site public

- Review the downloadable PDF carefully: the CV supplied for this draft contains a **personal phone number**. Remove it from the PDF first if you do not want it publicly available.
- Check all dates, affiliations, publications and funding figures against your latest records.
- Replace or remove any project details that have not been approved for public dissemination.
- The site uses only an academic email, not the phone number, on its visible pages.
- Add a professional photo only if you want one; the current design works without a photo.

## Updating the website

Edit the text in `index.html`. For the corresponding Greek translation, update the `greek` dictionary in `script.js`. Re-upload the changed files and commit to `main`.

New publications can be added by copying an existing `<article class="publication">` block, updating the title, authors, DOI, year, and `data-category` (`reasoning`, `systems` or `education`).

## Notes

- This is a static website. It does not need a dedicated server, database or monthly hosting payment.
- External links are based on the user's supplied CV and should be reviewed before public launch.
- The GitHub Pages URL is free. A separately purchased custom domain is optional.
