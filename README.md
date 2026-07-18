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

## Adding your images

Put these exact files in the `images/` folder — `gallery.html` already points to them by name:

- `gift-100days-gesture.mp4` — featured animation (converted from GIF to keep file size down)
- `krita7 Automata scene.png`
- `krita3 - magic.png`
- `krita5 - Sargent white cloaked lady.png`

Filenames with spaces are referenced in the HTML with `%20` in place of spaces (e.g.
`krita7%20Automata%20scene.png`) — that's just URL-encoding, upload the file with its normal
name including spaces and it'll resolve correctly.

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
index.html      home — bio row, icon social links, hub tiles
gallery.html    featured animation + Krita drawings + Inspiration list
chinese.html    Chinese drills — sentence patterns + roadmap for the interactive build
spanish.html    Spanish reading — recommended beginner book
values.html     "values join" index (Fear / Adamance / Belief) + roadmap for the interactive build
anime.html      anime list — Top / Almost Top / Good-OK tiers
resume.html     resume summary + LinkedIn link
style.css       shared styles for all pages
.gitignore      keeps OS/editor/Krita junk out of the repo
images/         put your animation + drawings here (see filenames above)
```

## Icons in the footer

The footer uses small generic outline icons (pen, book, play, camera, briefcase, code brackets)
rather than the official WordPress/YouTube/Instagram/LinkedIn/GitHub logos, since those are
trademarked marks. They're plain inline SVG, so you can recolor or swap them for real logo PNGs
later if you'd rather — just replace the `<svg>...</svg>` inside each `.icon-link` with an
`<img src="images/your-logo.png">`.
