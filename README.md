# Mike's site

Plain HTML/CSS, no build step. Six pages sharing one `style.css`:
`index.html`, `gallery.html`, `chinese.html`, `values.html`, `anime.html`, `resume.html`.

## Get it live on GitHub Pages

You have two options — pick whichever repo name you want the site to live at.

**Option A — user site, cleanest URL (`rows-sherpa-picnic3400.github.io`)**
1. On GitHub, create a **new repository** named exactly `rows-sherpa-picnic3400.github.io`.
2. Upload every file in this folder to the root of that repo (drag-and-drop on github.com works,
   or `git push` if you're comfortable with that).
3. Go to the repo's **Settings → Pages**, and under "Build and deployment" set Source to
   **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. Wait a minute or two, then visit `https://rows-sherpa-picnic3400.github.io/`.

**Option B — project site in an existing repo (`.../repo-name/`)**
1. Create or pick a repo (e.g. `personal-site`), upload these files to its root.
2. Settings → Pages → Source → Deploy from a branch → `main` → `/ (root)`.
3. Site will be at `https://rows-sherpa-picnic3400.github.io/personal-site/`.

Either way, GitHub Pages auto-builds nothing here — it just serves the files as-is, so there's
no Hugo/Jekyll step to worry about.

## Adding your images and the GIF

1. Put your files in the `images/` folder, keeping the folder structure.
2. In `gallery.html`, update:
   - `images/featured.gif` → your actual GIF filename
   - `images/drawing-01.jpg`, `-02`, `-03` → your Krita exports (duplicate the `<figure>` block
     for more drawings)
3. A note on the 27MB GIF: GitHub's hard limit is 100MB per file, so it'll upload fine, but a
   27MB GIF will be slow to load on mobile/weak connections. Two options if you want it faster
   later:
   - Convert it to an `.mp4`/`.webm` with `<video autoplay loop muted playsinline>` instead of
     `<img>` — video compresses far better than GIF for the same visual, often 5-10x smaller.
   - Or keep the GIF but add a static poster/first-frame image that loads instantly, with the GIF
     itself lazy-loaded below the fold (already using `loading="lazy"` on all gallery images).

## Editing the placeholder sections

- **`chinese.html`** and **`values.html`** are marked "in progress" with a plan and a small visual
  mock. When you're ready to build the real interactive versions, ping me — happy to build either
  as a working page (plain JS) or a small app.
- **`anime.html`** has a hand-editable table. Duplicate a `<tr>` per title and fill in real data —
  I couldn't pull your Archive.org list contents automatically (it's not fetchable the way I
  browse), so the rows are placeholders for you to replace.
- **`resume.html`** links straight to your LinkedIn and has three short summary blocks you can
  edit, delete, or expand with real dates/employers.

## Structure

```
index.html      home — bio row, social links, hub tiles
gallery.html    GIF + Krita drawings
chinese.html    Chinese character drills — placeholder/plan
values.html     "values join" decision tool — placeholder/plan
anime.html      anime favourites table
resume.html     resume summary + LinkedIn link
style.css       shared styles for all pages
images/         put your gif + drawings here
```
