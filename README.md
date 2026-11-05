# Providelabs website

A complete redesign of the supplied Providelabs website, ready to use as a static website. Website design is now a main service, alongside consultancy, software, IT infrastructure, and construction.

## Review it

Open `index.html` in a browser after extracting this folder. All pages, fonts, photos, the brochure, application forms, and the payment QR are included locally.

The separate `Providelabs-Website-Preview.html` deliverable is an all-in-one offline preview. Open it in a desktop browser to explore every page without extracting the website folder. Its top bar is for reviewing the site and is not included in the live website.

For a local HTTP preview, run this from the extracted website folder if Python is installed:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish to the existing GitHub Pages site

The supplied project was `ldg2700.github.io-main`, with `www.providelabscorp.com` in its CNAME file. The redesign preserves that domain file and the original main page addresses.

1. Keep a copy or a commit of the existing repository so you can return to it if needed.
2. Put the **contents of this folder** in the existing repository's publishing folder. `index.html` should be at the publishing root, alongside `assets`, `downloads`, and `CNAME`; do not add another nested `providelabs-website` folder above them.
3. Commit and push the changes to the branch already used by GitHub Pages. If the repository uses branch-based publishing, verify **Settings → Pages → Build and deployment → Deploy from a branch**, with the correct branch and folder. Keep the existing custom-domain setting `www.providelabscorp.com`.
4. After deployment completes, open the site on desktop and on a phone. Check the navigation, inquiry draft, brochure download, client form downloads, and QR image saving. Confirm that the payment app displays the correct merchant before accepting real payments.

The project requires no package installation, build service, server application, or API key. There is no need to change a working domain/DNS setup just for this redesign.

The live repository and domain were not changed as part of preparing these files. The new brochure's links to `website-design.html` and `payments.html` become available online when these files are published.

Current GitHub documentation:

- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

## What is included

| Page | Purpose |
| --- | --- |
| `index.html` | Main introduction, website design, other services, company story, process, brochure and payment links |
| `website-design.html` | Dedicated website-design service, scope options, illustrative concepts, deliverables and questions |
| `services.html` | Consultancy, software, white-label platforms, IT infrastructure, construction and design |
| `about.html` | Company history, authentic portfolio photographs and specific FiNext 2024 recognition |
| `contact.html` | Contact details, email brief composer, and the original fillable application forms |
| `payments.html` | The original QR Ph asset, save/open links, payment instructions and reference-email link |
| `website-notes.html` | Plain-language notes on inquiries, documents, payments and sample visuals |
| `404.html` | Custom not-found page for the existing domain root |

Shared presentation is in `assets/css/style.css`. Navigation and the inquiry composer are in `assets/js/main.js`. All text can be edited directly in the HTML files. The font files and their licenses are in `assets/fonts`.

## Inquiry behavior

The inquiry form **prepares an email; it does not send it automatically**. Visitors must press Send in their email app. The site also exposes a copyable draft, a retry link, and a clipboard fallback. It does not claim that an inquiry was sent. Without JavaScript, the form uses a plain-text email action, and a direct email link is shown.

The current public inquiry inbox is `contact@providelabscorp.com`, matching the supplied home, service and contact pages. The telephone number is `+63 916 622 0701`, from the supplied company introduction. The different older direct email was standardized to the public inbox.

If you later want inquiries to arrive through a hosted form rather than the visitor's email app, connect a real form service or backend and update the visitor-facing explanation accordingly. No unconfigured form service is included.

## QR Ph behavior

`assets/images/providelabs-qr-ph.jpg` is byte-identical to the supplied payment image. The payment page frames the merchant-and-code region using CSS, while **Open original QR** and **Save QR image** provide the complete original file. The QR has not been redrawn, recolored or regenerated.

The site does not initiate, verify, or reconcile transactions. The customer pays in a supported bank or wallet app, checks the recipient and agreed amount, and sends a reference to your team. No transaction was attempted during preparation.

Original QR SHA-256:

```text
e13f58563ecaddda972353ece8c4919b995366cb0b8f167fca64e850df4ffdf5
```

## Brochure and forms

The new eight-page brochure is in `downloads/Providelabs-Company-Brochure.pdf`. The separate editable brochure source package includes its authoring code, assets and font licenses.

Both blank application forms remain the original interactive PDFs. They have not been flattened or combined. Visitors are directed to ask their Providelabs contact which form to use and how to return sensitive documents.

## Verification and practical limits

The package was checked for local links, anchors, assets, HTML page structure, JavaScript syntax, inquiry and navigation logic, image dimensions, font availability, and original QR/form integrity. The brochure was rendered and inspected on every page.

A browser engine could not be installed in the authoring environment, so full browser screenshot, real-device, live-domain, email delivery, and payment-app tests remain to be performed. The responsive rules, menu behavior, keyboard focus, reduced-motion handling, and no-JavaScript fallbacks are implemented, but this is not a claim of a complete accessibility audit or live payment verification.

## Content and image sources

See `CONTENT-AND-CREDITS.md` for the source decisions, original imagery, concept labels and font notices.
