# aabdurrouf.github.io

Personal research website of Dr. Abdurro’uf, Sullivan Prize Fellow, Indiana University.
It is a plain static site (HTML + CSS + JavaScript) served by GitHub Pages. There is no build step and no Jekyll.

## Structure

```
index.html                     Home: hero, about, research loop, theme cards, publications/software/CV teasers
research/index.html            Research program overview, the "Pixels to Physics" loop, future thrusts and roadmap
research/early-universe/       Theme 01
research/structural-evolution/ Theme 02
research/forward-modeling/     Theme 03
research/machine-learning/     Theme 04
publications/index.html        Publication list, rendered from assets/data/publications.json
software/index.html            GalSyn, piXedfit, piXedfit2, GalSyn-SBI, AHC
cv/index.html                  Brief CV, with a link to the full CV PDF on Google Drive
full_publications/index.html   Redirect from the old URL to /publications/
404.html                       Not-found page
assets/css/style.css           Theme (colors and fonts are set in :root at the top)
assets/js/main.js              Navigation, scroll animations, figure lightbox, animated hero galaxy
assets/js/publications.js      Publication list renderer with search filter
assets/data/publications.json  Publication data (edit this to add papers)
assets/img/                    Images (WebP)
.nojekyll                      Tells GitHub Pages to serve the files as-is
```

## Common updates

* **Add a paper:** add an entry to `assets/data/publications.json`. Use `"category"`: `first` (first or second author), `sig`, `other`, `nonref`, or `prep`. Entries are shown in file order within each section, and the "All publications" list is sorted by year.
* **Update the CV PDF:** replace the file on Google Drive in place (Manage versions > Upload new version) so the shared link stays the same.
* **Add news:** edit the "Recent news" list near the bottom of `index.html`.
* **Change colors:** edit the CSS variables in `:root` in `assets/css/style.css`.

## Preview locally

The pages use root-relative links (`/assets/...`), so preview them through a local server instead of double-clicking the files:

```bash
cd aabdurrouf.github.io
python3 -m http.server 8000
# then open http://localhost:8000
```
