# Providelabs corporate website - revised copy, November 2026

A static website for Providelabs Corporation. The homepage leads with management and consultancy; website design is one service within I.T.. No build tools, package installation, backend or external fonts are required.

## Files and pages

- `index.html`: consultancy-first homepage and five service areas.
- `services.html`: management and consultancy; fintech and gaming; regulatory coordination; I.T.; construction.
- `technology.html`: hardware procurement/deployment, software white labeling, websites, networks, security and support.
- `website-design.html`: website design as a supporting I.T. service; preserves the existing page address.
- `experience.html`: generic technical systems and infrastructure experience, business engagement and construction background.
- `about.html`: company story, history, recognition and one-paragraph leadership profiles.
- `community.html`: dated community activities and industry engagement.
- `contact.html`: email-draft inquiry form, contact details and original fillable application PDFs.
- `payments.html`: the original QR Ph poster and payment instructions.
- `website-notes.html`: inquiry and payment information, privacy and photo credits.
- `404.html`: a helpful fallback page.
- `assets/`: local images, one stylesheet and one JavaScript file.
- `downloads/`: the updated brochure and the original blank application forms.
- `CNAME`: `www.providelabscorp.com`, unchanged.
- `.nojekyll`: an empty marker for static publishing.

## Review first

Open `index.html` from the extracted folder in a browser, or use the separate self-contained website preview. Check the wording, service scope and photographs before publishing. The preview is for review, not the file to upload as your website.

Providelabs Management Consultancy is introduced through its purpose: serving the growing needs of Providelabs' clientele. Keep the contracting and payment entity explicit in each proposal and invoice.

## Publish using the browser workflow that worked for your repository

1. Keep a copy of the current website before updating it. Do not delete or recreate the repository.
2. On GitHub.com, open `ldg2700/ldg2700.github.io`. Start from the latest `main` branch, not an old local clone with unpushed commits.
3. Create a new review branch, for example `providelabs-copy-revision`.
4. On that branch, select **Add file > Upload files**.
5. Extract this ZIP. Open `providelabs-website` and upload its CONTENTS into the existing publishing folder. `index.html` must be at that folder's top level; do not add another enclosing folder.
6. Preserve `CNAME`, the current Pages settings and any unrelated repository configuration. Include the supplied `.nojekyll` marker. On macOS, Command + Shift + . shows hidden files in Finder.
7. Commit the upload to the review branch. Open a pull request into `main` and review the changed files. Confirm the brochure, photos, CSS, JavaScript and PDFs are included.
8. Merge only after review. Check **Actions** for a successful Pages deployment, then test the live site on desktop and mobile.
9. Do not force-push, reset existing history or change the custom domain to work around a deployment error. Inspect the actual error first.

Uploading replacement files does not remove old unused assets. Leave unrelated files alone; review any cleanup separately after the refreshed site is working. If your Pages source is not `main` / root, follow the existing configured source rather than changing it automatically.

Official GitHub publishing references:
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Inquiry form

The form does not submit to a database or server. It prepares an email draft and provides an **Open email app** link and a copyable fallback. The visitor must review and send the message in their email app. No API keys, analytics trackers or third-party form service are included.

## QR Ph payments

The file `assets/images/providelabs-qr-ph.jpg` is byte-identical to the supplied original. Do not redraw, recolor or regenerate the QR. The website does not accept card data or automatically confirm payments. Clients should verify Providelabs Corporation, the invoice and the amount in their payment app.

Use the QR only when the invoice or representative directs payment to Providelabs Corporation.

## Editing and maintenance

Edit the HTML directly. The shared presentation rules are in `assets/css/style.css`; interaction code is in `assets/js/main.js`. Navigation and footer are repeated in the HTML pages, so apply shared changes consistently. Do not upload completed client forms, bank records, IDs, the raw staff CV or private correspondence.

## Release checks

Confirm the contact details, leadership roles and scope wording. Confirm publication permissions for the leadership portraits and any third-party event photographs. Existing credits are retained, but a photo credit is not itself a publication license. The 2024 meeting photo is credited to Ralph Paladio / Gavin Ventures Inc.; the 2026 event photo is credited to SiGMA World.

Scan the displayed QR in a banking or wallet app and verify the recipient before making a deliberate test payment. A real transaction was not performed during preparation.

## Changes in this revision

- Generic technical project names replace named staff, organizations and employers.
- Company name corrected to Providelabs Management Consultancy.
- Company story explains the purpose of the consultancy, without repeated relationship labels.
- Leadership profiles refreshed, with a broader industry-based director profile.
- I.T. is used consistently for information technology.
- Unnecessary editorial captions removed; actual photo credits retained.
- The brochure included in downloads matches the revised PDF.

The live repository has not been changed by the preparation of this package. Upload the contents of this folder to a review branch using your established process.
