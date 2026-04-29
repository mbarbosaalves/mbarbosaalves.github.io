# mbarbosaalves.github.io — redesigned prototype

A clean, hand-crafted static site to replace the current Plain Academic / Bootstrap 3 build. No framework, no jQuery, no Jekyll. Three files do the work.

## What's here

```
website-prototype/
├── index.html         <- bio + news + research (single landing page)
├── teaching.html      <- separate teaching page
├── README.md          <- this file
└── assets/
    ├── css/style.css  <- the only stylesheet
    ├── pictures/      <- copy your photo here (pic_suit_2.jpeg)
    └── drafts/        <- copy your paper PDFs here
```

## Preview locally

```bash
cd website-prototype
python3 -m http.server 8000
# open http://localhost:8000
```

Or with any other static server (`npx serve`, `caddy file-server`, etc.).

## Things you need to fill in

Search the HTML for `[placeholder]`, `[Replace with…]`, and `YOUR_ID` and replace with real content. Specifically:

1. **Profile-link URLs** in `index.html` (Google Scholar `user=` ID, ORCID, RePEc, GitHub username, LinkedIn slug). The icons are inline SVG, no external dependency.
2. **Email address.** I used `mauricio.alves@uky.edu` as a guess — change to your real one.
3. **Paper abstracts.** Each `<details class="paper__abstract-toggle">` block has a placeholder paragraph.
4. **Paper links.** PDF / Slides / BibTeX / Replication / NBER WP — replace `href="#"` with real URLs or remove rows that don't exist yet.
5. **Coauthor URLs.** Names are correct (Bianchi & Sosa-Padilla on the QJE paper; Braulio Britos at IMF on both climate papers; Luis Araujo at MSU and Vladimir Kuhl Teles at FGV-EESP on the bank capital paper). Verify the Bianchi/Sosa-Padilla URLs I guessed and fill in the `href="#"` placeholders for Britos, Araujo, and Kuhl Teles when you have their pages. Note: confirm Vladimir Kuhl Teles's first name — I assumed it from the original site.
6. **News items.** I added one real entry (the QJE acceptance) and three plausible placeholders. Edit dates and content.
7. **Teaching course descriptions.** Especially the FGV-EESP block.
8. **Office address** in the contact section.

## Deploying to GitHub Pages

GitHub Pages serves whatever's at the root of `mbarbosaalves.github.io`. To deploy:

```bash
# from your local clone of mbarbosaalves.github.io
# (back up your current files first if you want to keep them)
cp -r website-prototype/* /path/to/mbarbosaalves.github.io/
cd /path/to/mbarbosaalves.github.io
git add .
git commit -m "Redesign: rebuild on plain HTML/CSS"
git push
```

The old `research.html` will become orphaned (research is now on `index.html#research`). You can delete it, or keep it with a meta-refresh redirect:

```html
<meta http-equiv="refresh" content="0; url=index.html#research">
```

## Design choices, briefly

- **Two pages, not three.** Bio + research + news on one landing page; teaching gets its own page. Same pattern as Werning, Costinot, Itskhoki, Stantcheva, etc.
- **Crimson Pro for headings, system sans for body.** Crimson Pro is a contemporary academic serif and loads from Google Fonts. Body uses the OS default sans for speed and consistency.
- **Light + dark mode.** Driven by `prefers-color-scheme`. No JS, no toggle — follows the OS.
- **QJE paper is featured.** Yellow-bordered card at the top of the research section, with a "Quarterly Journal of Economics" badge. The acceptance is also the top news item.
- **Paper cards are real cards.** Each has a status badge (Forthcoming, Under review, Working paper), authors, an expandable abstract, and a row of compact link chips (PDF/Slides/BibTeX/Replication).
- **No Bootstrap, no jQuery.** Just one ~400-line CSS file. Loads in well under a second.
- **Accessible.** Skip-link to main, semantic landmarks (`<nav>`, `<main>`, `<section>`, `<article>`), `aria-label`s on icon links, proper heading hierarchy.
- **SEO + social.** Meta description, canonical URL, Open Graph card pointing at your photo.

## What I deliberately did not add

- **A blog.** Only worth adding if you'll actually update it; if you do, switch to Jekyll or 11ty later.
- **Citation counts.** Volatile, low signal-to-noise. Google Scholar link is enough.
- **A "talks" section.** Folded into News. Promote to its own section if it grows past ~6 entries.
- **Analytics.** Add Plausible or Cloudflare Web Analytics if you want traffic stats — both privacy-respecting, no cookie banner needed in the EU.
