#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate the standalone website reference document.

    python3 tools/codex/build.py

Reads the image files straight out of public/ and inlines every one of them
as a compressed data: URI, so the finished page renders identically with no
network access at all - which is the whole reason it exists. Editorial
content (what each page is for, the quoted copy, canon rules) lives in
content.py next door; update that, re-run this, republish.

Requires Pillow:  pip install Pillow
"""
import base64
import io
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
PUBLIC = os.path.join(ROOT, 'public')
DEST = os.path.join(ROOT, 'aurelia-website-codex.html')
DEST_MD = os.path.join(ROOT, 'aurelia-website-codex.md')
DEST_PDF = os.path.join(ROOT, 'aurelia-website-codex.pdf')

sys.path.insert(0, HERE)
from content import (CANON, CHANNELS, CHARACTERS, COUNTS, DOWNLOADS, NAV_PRIMARY,
                     NAV_UNIVERSE, PAGES, PALETTE, PALETTE_LEGACY, SHOT_SLUGS, SUBPAGES,
                     SNAPSHOT_DATE, SPA_TERMS_AVOID, SPA_TERMS_USE, STACK,
                     STYLE_RULES, TYPE_ROLES, UTILITIES, VIDEO)

from PIL import Image

THUMB_WIDTH = 320
THUMB_QUALITY = 70

ORBIT = [
    ('ChatGPT', 'Co-writing &amp; Reflection'),
    ('Gemini', 'Visuals, Video &amp; Prompt-editing'),
    ('Vibe', 'Character arcs'),
    ('Grok', 'Reality check &amp; Personal Feedback'),
    ('Claude', 'Website &amp; Consistency checks'),
]


def wanted_images():
    """Every image path the document needs, in one flat set."""
    paths = set()
    for p in PAGES:
        paths.update(p.get('images', []))
    paths.update(path for _n, _r, path in CHARACTERS)
    paths.update(path for _n, path in VIDEO['spotlights'])
    # Sanctum Spa shows whatever is in its folder.
    spa = os.path.join(PUBLIC, 'images', 'sanctum-spa')
    if os.path.isdir(spa):
        paths.update(f'/images/sanctum-spa/{f}' for f in os.listdir(spa)
                     if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')))
    return paths


def build_thumbs():
    """Shrink each source image and return it as a data: URI."""
    out = {}
    for rel in sorted(wanted_images()):
        src = os.path.join(PUBLIC, rel.lstrip('/'))
        if not os.path.isfile(src):
            print(f'  missing: {rel}')
            continue
        im = Image.open(src).convert('RGB')
        w, h = im.size
        if w > THUMB_WIDTH:
            im = im.resize((THUMB_WIDTH, max(1, round(h * THUMB_WIDTH / w))), Image.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, 'JPEG', quality=THUMB_QUALITY, optimize=True, progressive=True)
        out[rel] = {'data': 'data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode(),
                    'dims': f'{w}x{h}'}
    return out


SHOT_DIR = os.path.join(HERE, 'pageshots')
SHOT_W_DESKTOP = 620
SHOT_W_MOBILE = 200
SHOT_MAX_H = 1500   # full-page desktop captures get cropped, not squashed


def build_pageshots():
    """Embed the page captures. Desktop shots are long - crop rather than
    shrink them to nothing, so the top of each page stays readable."""
    out = {}
    if not os.path.isdir(SHOT_DIR):
        return out
    for slug in sorted(set(SHOT_SLUGS.values())):
        pair = {}
        for tag, width in (('desktop', SHOT_W_DESKTOP), ('mobile', SHOT_W_MOBILE)):
            src = os.path.join(SHOT_DIR, f'{slug}-{tag}.jpg')
            if not os.path.isfile(src):
                continue
            im = Image.open(src).convert('RGB')
            w, h = im.size
            im = im.resize((width, max(1, round(h * width / w))), Image.LANCZOS)
            cropped = False
            if im.size[1] > SHOT_MAX_H:
                im = im.crop((0, 0, width, SHOT_MAX_H))
                cropped = True
            buf = io.BytesIO()
            im.save(buf, 'JPEG', quality=72, optimize=True, progressive=True)
            pair[tag] = {'data': 'data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode(),
                         'dims': f'{w}x{h}', 'cropped': cropped}
        if pair:
            out[slug] = pair
    return out


print('Building thumbnails...')
THUMBS = build_thumbs()
print('Embedding page captures...')
SHOTS = build_pageshots()
SPA_IMAGES = sorted(k for k in THUMBS if k.startswith('/images/sanctum-spa/'))


def img(path, caption=None):
    """One thumbnail tile. Missing images degrade to a labelled slot."""
    t = THUMBS.get(path)
    name = path.rsplit('/', 1)[-1]
    if not t:
        return (f'<figure class="shot shot--missing"><div class="shot__slot">not embedded</div>'
                f'<figcaption>{caption or name}</figcaption></figure>')
    return (f'<figure class="shot"><img src="{t["data"]}" alt="{caption or name}" loading="lazy" '
            f'width="320" decoding="async">'
            f'<figcaption>{caption or name}<span class="shot__dim">{t["dims"]}</span></figcaption></figure>')


def page_block(p):
    parts = [f'<article class="page" id="page-{p["route"].strip("/").replace("/", "-") or "home"}">']
    parts.append('<header class="page__head">')
    parts.append(f'<code class="route">{p["route"]}</code>')
    parts.append(f'<h3>{p["title"]}</h3>')
    parts.append('</header>')
    parts.append(f'<p class="page__purpose">{p["purpose"]}</p>')

    if p.get('copy'):
        parts.append('<dl class="copy">')
        for label, text in p['copy']:
            parts.append(f'<dt>{label}</dt><dd>{text}</dd>')
        parts.append('</dl>')

    if p.get('note'):
        parts.append(f'<p class="note">{p["note"]}</p>')

    shot = SHOTS.get(SHOT_SLUGS.get(p['route'], ''))
    if shot:
        parts.append('<div class="views">')
        if shot.get('desktop'):
            d = shot['desktop']
            tail = ' - top of page' if d['cropped'] else ''
            parts.append(f'<figure class="view view--desktop"><img src="{d["data"]}" '
                         f'alt="{p["title"]} on desktop" loading="lazy" decoding="async">'
                         f'<figcaption>Desktop 1440px{tail}</figcaption></figure>')
        if shot.get('mobile'):
            m = shot['mobile']
            parts.append(f'<figure class="view view--mobile"><img src="{m["data"]}" '
                         f'alt="{p["title"]} on mobile" loading="lazy" decoding="async">'
                         f'<figcaption>Mobile 390px</figcaption></figure>')
        parts.append('</div>')

    if p.get('orbit'):
        parts.append('<div class="orbit">')
        for name, role in ORBIT:
            parts.append(f'<div class="orbit__item"><strong>{name}</strong><span>{role}</span></div>')
        parts.append('</div>')

    images = list(p.get('images', []))
    if p.get('spa'):
        images += SPA_IMAGES
    if images:
        parts.append(f'<div class="shots" data-count="{len(images)}">')
        parts.extend(img(i) for i in images)
        parts.append('</div>')

    if p.get('characters'):
        parts.append('<div class="shots shots--people">')
        parts.extend(img(path, name) for name, _role, path in CHARACTERS)
        parts.append('</div>')

    parts.append('</article>')
    return '\n'.join(parts)


CSS = """
:root{
  --ground:#0b0e14; --surface:#131823; --surface-2:#1a2130; --line:#252d3d;
  --ink:#ece9e4; --ink-dim:#98a0b0; --ink-faint:#6b7385;
  --amber:#ff6b35; --holo:#00d9ff; --gold:#d4a017;
  --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  --mono:ui-monospace,SFMono-Regular,"SF Mono",Menlo,Consolas,"Liberation Mono",monospace;
  --measure:68ch;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:2rem}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{animation:none!important;transition:none!important}}
body{
  margin:0;background:var(--ground);color:var(--ink);
  font-family:var(--sans);font-size:16px;line-height:1.65;
  -webkit-font-smoothing:antialiased;
}
h1,h2,h3,h4{line-height:1.15;text-wrap:balance;margin:0}
a{color:var(--amber);text-decoration:none;border-bottom:1px solid rgba(255,107,53,.3)}
a:hover{border-bottom-color:var(--amber)}
a:focus-visible,button:focus-visible{outline:2px solid var(--holo);outline-offset:3px;border-radius:2px}
code{font-family:var(--mono);font-size:.86em}

/* ---------- shell ---------- */
.wrap{max-width:1240px;margin:0 auto;padding:0 1.5rem}
.masthead{
  border-bottom:1px solid var(--line);
  background:linear-gradient(180deg,rgba(255,107,53,.07),transparent 70%);
  padding:4.5rem 0 3rem;
}
.eyebrow{
  font-family:var(--mono);font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;
  color:var(--amber);margin:0 0 1.1rem;
}
.masthead h1{font-size:clamp(2.3rem,6vw,3.9rem);font-weight:700;letter-spacing:-.028em}
.masthead h1 em{font-style:normal;color:var(--amber)}
.lede{max-width:var(--measure);color:var(--ink-dim);font-size:1.08rem;margin:1.3rem 0 0}
.meta{
  display:flex;flex-wrap:wrap;gap:.55rem 1.6rem;margin-top:2rem;
  font-family:var(--mono);font-size:.76rem;color:var(--ink-faint);
}
.meta b{color:var(--ink-dim);font-weight:400}

/* ---------- layout ---------- */
/* minmax(0,...) and min-width:0 let the wide tables scroll inside their own
   container instead of stretching the grid track and the whole page. */
.shell{display:grid;grid-template-columns:minmax(0,1fr);gap:3rem;padding:3rem 0 6rem}
.shell>main{min-width:0}
@media (min-width:1020px){
  .shell{grid-template-columns:186px minmax(0,1fr);gap:4rem}
  .toc{position:sticky;top:2rem;align-self:start;max-height:calc(100vh - 4rem);overflow-y:auto}
}
.toc ol{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.1rem}
.toc a{
  display:block;padding:.34rem 0;color:var(--ink-faint);border:0;
  font-size:.8rem;letter-spacing:.01em;
}
.toc a:hover{color:var(--ink)}
.toc__label{
  font-family:var(--mono);font-size:.66rem;letter-spacing:.16em;text-transform:uppercase;
  color:var(--ink-faint);padding-bottom:.6rem;border-bottom:1px solid var(--line);margin-bottom:.7rem;
}
@media (max-width:1019px){.toc{display:none}}

section{scroll-margin-top:1.5rem}
section+section{margin-top:4.5rem}
.sec__head{border-bottom:1px solid var(--line);padding-bottom:.9rem;margin-bottom:1.9rem}
.sec__head h2{font-size:clamp(1.5rem,3vw,2rem);font-weight:700;letter-spacing:-.02em}
.sec__head p{margin:.6rem 0 0;color:var(--ink-dim);max-width:var(--measure);font-size:.95rem}

/* ---------- counts ---------- */
.counts{display:grid;grid-template-columns:repeat(auto-fit,minmax(104px,1fr));gap:1px;background:var(--line);border:1px solid var(--line)}
.counts div{background:var(--surface);padding:1.15rem .9rem;text-align:center}
.counts b{display:block;font-size:1.75rem;font-weight:700;letter-spacing:-.03em;font-variant-numeric:tabular-nums;color:var(--amber)}
.counts span{font-size:.72rem;color:var(--ink-dim);letter-spacing:.05em;text-transform:uppercase}

/* ---------- tables ---------- */
.tablewrap{overflow-x:auto;border:1px solid var(--line);background:var(--surface)}
table{width:100%;border-collapse:collapse;font-size:.88rem;min-width:440px}
th,td{text-align:left;padding:.72rem 1rem;border-bottom:1px solid var(--line);vertical-align:top}
th{
  font-family:var(--mono);font-size:.68rem;letter-spacing:.13em;text-transform:uppercase;
  color:var(--ink-faint);font-weight:400;background:var(--surface-2);
}
tr:last-child td{border-bottom:0}
td b{font-weight:600}
td code{color:var(--holo)}
.td-dim{color:var(--ink-dim)}

/* ---------- palette ---------- */
.palette{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:1rem}
.sw{border:1px solid var(--line);background:var(--surface);display:flex;flex-direction:column}
.sw__chip{height:74px;border-bottom:1px solid var(--line)}
.sw__body{padding:.8rem .9rem}
.sw__body strong{display:block;font-size:.94rem;font-weight:600}
.sw__hex{font-family:var(--mono);font-size:.78rem;color:var(--amber);letter-spacing:.02em}
.sw__token{font-family:var(--mono);font-size:.7rem;color:var(--ink-faint);display:block;margin-top:.15rem}
.sw__use{font-size:.8rem;color:var(--ink-dim);margin:.5rem 0 0;line-height:1.5}
.palette--small{grid-template-columns:repeat(auto-fill,minmax(148px,1fr))}
.palette--small .sw__chip{height:40px}

/* ---------- type specimens ---------- */
.type{display:flex;flex-direction:column;gap:1px;background:var(--line);border:1px solid var(--line)}
.type__row{background:var(--surface);padding:1.2rem 1.3rem}
.type__name{display:flex;flex-wrap:wrap;gap:.7rem;align-items:baseline}
.type__name strong{font-size:1.2rem;font-weight:700;letter-spacing:-.02em}
.type__role{
  font-family:var(--mono);font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;
  color:var(--holo);border:1px solid rgba(0,217,255,.28);padding:.15rem .5rem;
}
.type__use{color:var(--ink-dim);font-size:.88rem;margin:.5rem 0 0}
.type__spec{font-family:var(--mono);font-size:.74rem;color:var(--ink-faint);margin:.4rem 0 0}

/* ---------- nav map ---------- */
.navmap{display:grid;gap:1.4rem;grid-template-columns:repeat(auto-fit,minmax(258px,1fr))}
.navmap__col{border:1px solid var(--line);background:var(--surface);padding:1.1rem 1.2rem}
.navmap__col h4{
  font-family:var(--mono);font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;
  color:var(--ink-faint);font-weight:400;margin-bottom:.8rem;
}
.navmap ul{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:.4rem}
.navmap li{
  font-size:.84rem;padding:.28rem .62rem;border:1px solid var(--line);
  background:var(--surface-2);color:var(--ink-dim);
}
.navmap li.is-primary{border-color:rgba(255,107,53,.35);color:var(--ink)}

/* ---------- page entries ---------- */
.page{border-top:1px solid var(--line);padding:2.1rem 0 .4rem}
.page:first-of-type{border-top:0;padding-top:0}
.page__head{display:flex;flex-wrap:wrap;align-items:baseline;gap:.9rem;margin-bottom:.75rem}
.page__head h3{font-size:1.4rem;font-weight:700;letter-spacing:-.02em}
.route{
  font-family:var(--mono);font-size:.78rem;color:var(--holo);
  border:1px solid rgba(0,217,255,.25);padding:.16rem .5rem;background:rgba(0,217,255,.05);
}
.page__purpose{max-width:var(--measure);color:var(--ink-dim);margin:0 0 1.2rem;font-size:.95rem}
.copy{display:grid;grid-template-columns:1fr;gap:.1rem;margin:0 0 1.2rem;max-width:var(--measure)}
@media (min-width:680px){.copy{grid-template-columns:142px minmax(0,1fr);gap:.55rem 1.3rem}}
.copy dt{
  font-family:var(--mono);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;
  color:var(--amber);padding-top:.28rem;
}
.copy dd{margin:0 0 .7rem;font-size:.93rem;color:var(--ink)}
@media (min-width:680px){.copy dd{margin-bottom:0}}
.note{
  max-width:var(--measure);font-size:.86rem;color:var(--ink-dim);
  border-left:2px solid var(--gold);padding:.5rem 0 .5rem .9rem;margin:0 0 1.3rem;
}

/* ---------- page views (desktop + mobile side by side) ---------- */
.views{
  display:grid;grid-template-columns:1fr;gap:1rem;margin:1.4rem 0;
  align-items:start;
}
@media (min-width:640px){.views{grid-template-columns:minmax(0,1fr) auto}}
.view{margin:0;background:var(--surface);border:1px solid var(--line);overflow:hidden}
.view img{display:block;width:100%;height:auto}
.view--mobile{max-width:200px}
.view figcaption{
  font-family:var(--mono);font-size:.64rem;color:var(--ink-faint);
  padding:.4rem .55rem;border-top:1px solid var(--line);letter-spacing:.04em;
}

/* ---------- image grids ---------- */
.shots{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:.85rem;margin:1.3rem 0 .6rem}
@media (min-width:700px){.shots{grid-template-columns:repeat(auto-fill,minmax(178px,1fr))}}
.shot{margin:0;background:var(--surface);border:1px solid var(--line);overflow:hidden}
.shot img{display:block;width:100%;height:auto;aspect-ratio:16/10;object-fit:cover}
.shots--people .shot img{aspect-ratio:3/4}
.shot figcaption{
  font-family:var(--mono);font-size:.66rem;color:var(--ink-dim);padding:.45rem .55rem;
  border-top:1px solid var(--line);word-break:break-word;line-height:1.45;
}
.shot__dim{display:block;color:var(--ink-faint);font-size:.62rem;margin-top:.12rem}
.shot--missing .shot__slot{
  aspect-ratio:16/10;display:flex;align-items:center;justify-content:center;
  background:var(--surface-2);color:var(--ink-faint);font-family:var(--mono);font-size:.68rem;
}

/* ---------- orbit ---------- */
.orbit{display:grid;grid-template-columns:repeat(auto-fit,minmax(178px,1fr));gap:.7rem;margin:0 0 1.3rem}
.orbit__item{border:1px solid var(--line);background:var(--surface);padding:.7rem .85rem}
.orbit__item strong{display:block;color:var(--gold);font-size:.92rem}
.orbit__item span{font-size:.8rem;color:var(--ink-dim)}

/* ---------- lists ---------- */
.rules{list-style:none;margin:0;padding:0;counter-reset:r;display:flex;flex-direction:column;gap:.1rem}
.rules li{
  counter-increment:r;display:grid;grid-template-columns:2.1rem minmax(0,1fr);gap:.7rem;
  padding:.72rem .9rem;background:var(--surface);border-bottom:1px solid var(--line);
  font-size:.92rem;max-width:calc(var(--measure) + 3rem);
}
.rules li:first-child{border-top:1px solid var(--line)}
.rules li::before{
  content:counter(r,decimal-leading-zero);font-family:var(--mono);font-size:.72rem;
  color:var(--amber);padding-top:.15rem;font-variant-numeric:tabular-nums;
}
.defs{display:flex;flex-direction:column;gap:1px;background:var(--line);border:1px solid var(--line);max-width:calc(var(--measure) + 3rem)}
.defs__row{background:var(--surface);padding:.8rem 1rem}
.defs__row strong{display:block;font-size:.92rem;margin-bottom:.15rem}
.defs__row span{font-size:.86rem;color:var(--ink-dim)}

/* ---------- terms ---------- */
.terms{display:grid;gap:1.1rem;grid-template-columns:repeat(auto-fit,minmax(258px,1fr))}
.terms__box{border:1px solid var(--line);background:var(--surface);padding:1.1rem 1.2rem}
.terms__box h4{
  font-family:var(--mono);font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;
  font-weight:400;margin-bottom:.8rem;
}
.terms__box--use h4{color:var(--holo)}
.terms__box--avoid h4{color:var(--amber)}
.terms__box ul{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:.4rem}
.terms__box li{font-size:.84rem;padding:.24rem .6rem;border:1px solid var(--line);background:var(--surface-2);color:var(--ink-dim)}
.terms__box--avoid li{text-decoration:line-through;text-decoration-color:rgba(255,107,53,.5)}

/* ---------- footer ---------- */
.foot{border-top:1px solid var(--line);margin-top:4.5rem;padding:2.2rem 0 3.5rem;color:var(--ink-faint);font-size:.82rem}
.foot p{margin:0 0 .5rem;max-width:var(--measure)}

/* ---------- print / PDF ---------- */
/* Chromium prints at a wider viewport than the printable area, so everything
   is pinned to 100% width - without this the right edge is silently cropped. */
@page{size:A4;margin:12mm 10mm}
@media print{
  html,body{
    background:var(--ground) !important;width:100%;max-width:100%;margin:0;
    -webkit-print-color-adjust:exact;print-color-adjust:exact;
  }
  .toc{display:none}
  .shell{display:block;padding:.5rem 0 0;max-width:100%}
  .wrap{max-width:100%;padding:0}
  main,section,article,div,table,figure{max-width:100%}
  .masthead{padding:0 0 1.2rem;break-after:page}
  .lede,.page__purpose,.copy,.note,.sec__head p{max-width:100%}

  /* new page per major section, but entries may flow across pages -
     forcing whole entries to stay together left pages half empty */
  section{break-before:page}
  section:first-of-type{break-before:auto}
  .page{break-inside:auto;padding-top:1rem}
  .sec__head{break-after:avoid}
  h2,h3{break-after:avoid}
  .page__head{break-after:avoid}
  .views,.sw,.orbit__item,.terms__box,.type__row,.defs__row,figure,tr,.counts>div{break-inside:avoid}

  .tablewrap{overflow:visible}
  table{min-width:0;font-size:.8rem}
  th,td{padding:.5rem .6rem}
  a{color:var(--ink)}

  /* fixed column counts - auto-fill overflows the narrower print width */
  .shots{grid-template-columns:repeat(4,1fr);gap:.5rem}
  .shots--people{grid-template-columns:repeat(5,1fr)}
  .palette{grid-template-columns:repeat(2,1fr)}
  .palette--small{grid-template-columns:repeat(4,1fr)}
  .counts{grid-template-columns:repeat(6,1fr)}
  .navmap,.terms{grid-template-columns:repeat(2,1fr)}
  .orbit{grid-template-columns:repeat(3,1fr)}
  .sw__use{font-size:.72rem}
  .shot figcaption{font-size:.56rem;padding:.3rem .35rem}
  .view--mobile{max-width:150px}
  /* a full-page capture is taller than A4; crop it here so the desktop and
     mobile views stay side by side on one sheet. The HTML keeps the full run. */
  .view--desktop img{max-height:165mm;object-fit:cover;object-position:top center}
  .views{gap:.6rem}
}
"""


def build():
    h = []
    h.append(f'<title>Aurelia Website Codex</title>')
    h.append(f'<style>{CSS}</style>')

    # ---------------------------------------------------------- masthead --
    h.append('<header class="masthead"><div class="wrap">')
    h.append('<p class="eyebrow">Reference document</p>')
    h.append('<h1>The <em>Mission: Aurelia</em><br>website, page by page</h1>')
    h.append('<p class="lede">Everything the site is made of - structure, copy, colours, type and every '
             'visual in use - written down for anyone working on the project without access to the code. '
             'All images are embedded in this file: nothing loads from a server, so nothing can fail to load.</p>')
    h.append(f'<div class="meta"><span><b>Snapshot</b> {SNAPSHOT_DATE}</span>'
             f'<span><b>Site</b> missionaurelia.com</span>'
             f'<span><b>Creator</b> Julia Bremerich</span>'
             f'<span><b>Tagline</b> Consciousness. Family. Stars.</span></div>')
    h.append('</div></header>')

    h.append('<div class="wrap"><div class="shell">')

    # --------------------------------------------------------------- toc --
    toc = [('overview', 'At a glance'), ('design', 'Design system'), ('structure', 'Site structure'),
           ('pages', 'Pages in detail'), ('people', 'Characters'), ('video', 'Moving image'),
           ('channels', 'Channels &amp; files'), ('canon', 'Canon &amp; style')]
    h.append('<nav class="toc" aria-label="Contents"><p class="toc__label">Contents</p><ol>')
    for anchor, label in toc:
        h.append(f'<li><a href="#{anchor}">{label}</a></li>')
    h.append('</ol></nav>')

    h.append('<main>')

    # ---------------------------------------------------------- overview --
    h.append('<section id="overview"><div class="sec__head"><h2>At a glance</h2>'
             '<p>What the site contains today, and what it is built with.</p></div>')
    h.append('<div class="counts">')
    for n, label in COUNTS:
        h.append(f'<div><b>{n}</b><span>{label}</span></div>')
    h.append('</div>')
    h.append('<div class="tablewrap" style="margin-top:1.6rem"><table>'
             '<thead><tr><th>Layer</th><th>Choice</th><th>Notes</th></tr></thead><tbody>')
    for layer, choice, note in STACK:
        h.append(f'<tr><td class="td-dim">{layer}</td><td><b>{choice}</b></td><td class="td-dim">{note}</td></tr>')
    h.append('</tbody></table></div></section>')

    # ------------------------------------------------------------ design --
    h.append('<section id="design"><div class="sec__head"><h2>Design system</h2>'
             '<p>Defined once in <code>src/index.css</code> as Tailwind 4 theme tokens - '
             'there is no <code>tailwind.config.js</code>.</p></div>')

    h.append('<h3 style="font-size:1.05rem;margin-bottom:.9rem">Colour</h3><div class="palette">')
    for hexv, name, token, use in PALETTE:
        h.append(f'<div class="sw"><div class="sw__chip" style="background:{hexv}"></div>'
                 f'<div class="sw__body"><strong>{name}</strong>'
                 f'<span class="sw__hex">{hexv}</span>'
                 f'<code class="sw__token">{token}</code>'
                 f'<p class="sw__use">{use}</p></div></div>')
    h.append('</div>')

    h.append('<h3 style="font-size:1.05rem;margin:2rem 0 .9rem">Constellation colours '
             '<span style="color:var(--ink-faint);font-weight:400;font-size:.85rem">- defined, '
             'currently unused on public pages</span></h3><div class="palette palette--small">')
    for hexv, name, token in PALETTE_LEGACY:
        h.append(f'<div class="sw"><div class="sw__chip" style="background:{hexv}"></div>'
                 f'<div class="sw__body"><strong>{name}</strong><span class="sw__hex">{hexv}</span>'
                 f'<code class="sw__token">{token}</code></div></div>')
    h.append('</div>')

    h.append('<h3 style="font-size:1.05rem;margin:2rem 0 .9rem">Typefaces</h3>'
             '<p style="color:var(--ink-dim);font-size:.9rem;max-width:var(--measure);margin:0 0 1rem">'
             'Three families, loaded from Google Fonts in <code>index.html</code>. '
             'Shown here by name and specification - this document does not load them, '
             'so it cannot misrepresent them.</p><div class="type">')
    for name, role, use, spec in TYPE_ROLES:
        h.append(f'<div class="type__row"><div class="type__name"><strong>{name}</strong>'
                 f'<span class="type__role">{role}</span></div>'
                 f'<p class="type__use">{use}</p><p class="type__spec">{spec}</p></div>')
    h.append('</div>')

    h.append('<h3 style="font-size:1.05rem;margin:2rem 0 .9rem">Repeating styles</h3>'
             '<div class="tablewrap"><table><thead><tr><th>Utility</th><th>What it does</th>'
             '<th>Used for</th></tr></thead><tbody>')
    for util, what, used in UTILITIES:
        h.append(f'<tr><td><code>{util}</code></td><td class="td-dim">{what}</td><td class="td-dim">{used}</td></tr>')
    h.append('</tbody></table></div></section>')

    # --------------------------------------------------------- structure --
    h.append('<section id="structure"><div class="sec__head"><h2>Site structure</h2>'
             '<p>Seven items in the header. The Universe page opens onto seven further areas, '
             'which also sit in a dropdown.</p></div><div class="navmap">')
    h.append('<div class="navmap__col"><h4>Header navigation</h4><ul>')
    h.extend(f'<li class="is-primary">{i}</li>' for i in NAV_PRIMARY)
    h.append('</ul></div>')
    h.append('<div class="navmap__col"><h4>Universe dropdown</h4><ul>')
    h.extend(f'<li>{i}</li>' for i in NAV_UNIVERSE)
    h.append('</ul></div>')
    h.append('<div class="navmap__col"><h4>Not in navigation</h4><ul>'
             '<li>/spotlights</li><li>/science/mirida</li><li>/science/pn7</li>'
             '<li>/science/lysithea</li><li>/technology/ccm01</li><li>/technology/nova-ventis</li>'
             '<li>/technology/elara-projection</li><li>/philosophy/identity</li>'
             '<li>/philosophy/consciousness</li><li>/philosophy/ai-feelings</li></ul></div>')
    h.append('</div></section>')

    # ------------------------------------------------------------- pages --
    h.append('<section id="pages"><div class="sec__head"><h2>Pages in detail</h2>'
             '<p>Each entry gives the address, what the page is for, the copy that carries it, '
             'and every image it uses. Quoted lines are the live wording.</p></div>')
    h.extend(page_block(p) for p in PAGES)

    h.append('<h3 style="font-size:1.15rem;margin:2.6rem 0 .4rem;padding-top:1.8rem;'
             'border-top:1px solid var(--line)">Deep-dive pages</h3>'
             '<p style="color:var(--ink-dim);font-size:.92rem;max-width:var(--measure);margin:0 0 1.4rem">'
             'Reached from the Science, Technology and Philosophy hubs rather than the menu. '
             'Their content is summarised on the hub entries above.</p>')
    for route, title, line in SUBPAGES:
        h.append('<article class="page page--sub">')
        h.append(f'<header class="page__head"><code class="route">{route}</code>'
                 f'<h3>{title}</h3></header>')
        h.append(f'<p class="page__purpose">{line}</p>')
        shot = SHOTS.get(SHOT_SLUGS.get(route, ''))
        if shot:
            h.append('<div class="views">')
            if shot.get('desktop'):
                d = shot['desktop']
                tail = ' - top of page' if d['cropped'] else ''
                h.append(f'<figure class="view view--desktop"><img src="{d["data"]}" alt="{title} on desktop" '
                         f'loading="lazy" decoding="async">'
                         f'<figcaption>Desktop 1440px{tail}</figcaption></figure>')
            if shot.get('mobile'):
                h.append(f'<figure class="view view--mobile"><img src="{shot["mobile"]["data"]}" '
                         f'alt="{title} on mobile" loading="lazy" decoding="async">'
                         f'<figcaption>Mobile 390px</figcaption></figure>')
            h.append('</div>')
        h.append('</article>')
    h.append('</section>')

    # ------------------------------------------------------------ people --
    h.append('<section id="people"><div class="sec__head"><h2>Characters</h2>'
             '<p>Sixteen in the constellation. Portraits are AI-generated casting concepts - '
             'the site carries no casting disclaimer.</p></div>'
             '<div class="tablewrap"><table><thead><tr><th>Name</th><th>Role</th></tr></thead><tbody>')
    for name, role, _p in CHARACTERS:
        h.append(f'<tr><td><b>{name}</b></td><td class="td-dim">{role}</td></tr>')
    h.append('</tbody></table></div></section>')

    # ------------------------------------------------------------- video --
    h.append('<section id="video"><div class="sec__head"><h2>Moving image</h2>'
             '<p>Fifteen videos across the site, all behind click-to-load facades - '
             'no YouTube iframe loads until someone presses play.</p></div>')
    h.append('<div class="tablewrap"><table><thead><tr><th>Trailer</th><th>Year</th>'
             '<th>YouTube ID</th><th>Status</th></tr></thead><tbody>')
    for title, year, vid, status in VIDEO['trailers']:
        h.append(f'<tr><td><b>{title}</b></td><td class="td-dim">{year}</td>'
                 f'<td><code>{vid}</code></td><td class="td-dim">{status}</td></tr>')
    h.append('</tbody></table></div>')
    h.append('<div class="tablewrap" style="margin-top:1.2rem"><table><thead><tr>'
             '<th>Starlight Buffet</th><th>YouTube ID</th><th>Status</th></tr></thead><tbody>')
    for title, vid, status in VIDEO['buffet']:
        h.append(f'<tr><td><b>{title}</b></td><td><code>{vid}</code></td>'
                 f'<td class="td-dim">{status}</td></tr>')
    h.append('</tbody></table></div>')
    h.append('<h3 style="font-size:1.05rem;margin:1.8rem 0 .3rem">Character Spotlights</h3>'
             '<p style="color:var(--ink-dim);font-size:.9rem;margin:0 0 .6rem">'
             'Five published, hosted on YouTube and also present as local video files. '
             'Their thumbnails on the Watch page are the character portraits below.</p>')
    h.append('<div class="shots shots--people">')
    h.extend(img(path, name) for name, path in VIDEO['spotlights'])
    h.append('</div></section>')

    # ---------------------------------------------------------- channels --
    h.append('<section id="channels"><div class="sec__head"><h2>Channels &amp; files</h2>'
             '<p>Social links appear in two places - the site-wide footer and the Contact page.</p></div>')
    h.append('<div class="tablewrap"><table><thead><tr><th>Channel</th><th>Handle</th>'
             '<th>Address</th></tr></thead><tbody>')
    for plat, handle, url in CHANNELS:
        h.append(f'<tr><td><b>{plat}</b></td><td class="td-dim">{handle}</td><td><code>{url}</code></td></tr>')
    h.append('</tbody></table></div>')
    h.append('<div class="tablewrap" style="margin-top:1.2rem"><table><thead><tr><th>Download</th>'
             '<th>File</th><th>Size</th></tr></thead><tbody>')
    for title, fn, size in DOWNLOADS:
        h.append(f'<tr><td><b>{title}</b></td><td><code>{fn}</code></td>'
                 f'<td class="td-dim" style="font-variant-numeric:tabular-nums">{size}</td></tr>')
    h.append('</tbody></table></div></section>')

    # ------------------------------------------------------------- canon --
    h.append('<section id="canon"><div class="sec__head"><h2>Canon &amp; style</h2>'
             '<p>The facts and rules that hold across everything. Contradicting one of these '
             'breaks the world; the style rules keep the voice consistent.</p></div>')
    h.append('<h3 style="font-size:1.05rem;margin-bottom:.9rem">Non-negotiable facts</h3><ol class="rules">')
    h.extend(f'<li>{c}</li>' for c in CANON)
    h.append('</ol>')
    h.append('<h3 style="font-size:1.05rem;margin:2rem 0 .9rem">Writing rules</h3><div class="defs">')
    for rule, detail in STYLE_RULES:
        h.append(f'<div class="defs__row"><strong>{rule}</strong><span>{detail}</span></div>')
    h.append('</div>')
    h.append('<h3 style="font-size:1.05rem;margin:2rem 0 .9rem">Sanctum Spa vocabulary</h3>'
             '<p style="color:var(--ink-dim);font-size:.9rem;max-width:var(--measure);margin:0 0 1rem">'
             'This page has its own register. It is a worldbuilding portal, never a wellness brochure.</p>'
             '<div class="terms">')
    h.append('<div class="terms__box terms__box--use"><h4>Use</h4><ul>')
    h.extend(f'<li>{t}</li>' for t in SPA_TERMS_USE)
    h.append('</ul></div>')
    h.append('<div class="terms__box terms__box--avoid"><h4>Avoid</h4><ul>')
    h.extend(f'<li>{t}</li>' for t in SPA_TERMS_AVOID)
    h.append('</ul></div></div></section>')

    h.append('</main></div>')

    # ------------------------------------------------------------- foot --
    h.append('<footer class="foot"><div class="wrap">')
    h.append(f'<p>Snapshot of missionaurelia.com as it stood on {SNAPSHOT_DATE}. '
             'Written from the source, not from memory - every quoted line and image path was read '
             'out of the repository at that date.</p>')
    h.append('<p>Page captures were taken in a sandboxed browser without access to external '
         'services - third-party frames (the Spotify player on Story, the Tally feedback '
         'form in the footer) appear blank in captures but render on the live site.</p>')
    h.append('<p>Thumbnails are compressed and embedded directly in this file. '
             'The originals are larger and sharper; these exist so the document stays whole '
             'wherever it travels.</p>')
    h.append('<p>Mission: Aurelia - created in collaboration with AI.</p>')
    h.append('</div></footer>')

    return '\n'.join(h)




# ---------------------------------------------------------------------------
# Markdown edition
# ---------------------------------------------------------------------------
# The HTML above is for people: it carries the pictures. This plain-text
# edition is for AI collaborators working in a chat window, where embedded
# images would arrive as megabytes of unreadable base64. Same facts, image
# paths named rather than shown, small enough to paste into a conversation.

def strip(s):
    """HTML entities back to plain characters."""
    return (s.replace('&amp;', '&').replace('&middot;', '-')
             .replace('&rarr;', '->').replace('&nbsp;', ' '))


def build_markdown():
    m = []
    m.append('# Mission: Aurelia - Website Reference')
    m.append(f'\nSnapshot of missionaurelia.com, {SNAPSHOT_DATE}. '
             'Structure, copy, design system and canon, for collaborators without '
             'repository access. Image paths are named, not embedded - the '
             'illustrated edition is the HTML codex.\n')

    m.append('\n## At a glance\n')
    m.append(' | '.join(f'{n} {label}' for n, label in COUNTS))
    m.append('\n| Layer | Choice | Notes |\n| --- | --- | --- |')
    m.extend(f'| {a} | {b} | {c} |' for a, b, c in STACK)

    m.append('\n## Design system\n')
    m.append('Defined in `src/index.css` as Tailwind 4 theme tokens; there is no tailwind.config.js.\n')
    m.append('| Colour | Hex | Token | Used for |\n| --- | --- | --- | --- |')
    m.extend(f'| {name} | `{hexv}` | `{token}` | {strip(use)} |' for hexv, name, token, use in PALETTE)
    m.append('\nDefined but unused on public pages: '
             + ', '.join(f'{n} `{h}`' for h, n, _t in PALETTE_LEGACY) + '\n')
    m.append('| Typeface | Role | Used for | Scale |\n| --- | --- | --- | --- |')
    m.extend(f'| {n} | {r} | {strip(u)} | {strip(s)} |' for n, r, u, s in TYPE_ROLES)
    m.append('\n| Utility | Effect | Applied to |\n| --- | --- | --- |')
    m.extend(f'| `{u}` | {strip(w)} | {strip(uf)} |' for u, w, uf in UTILITIES)

    m.append('\n## Navigation\n')
    m.append(f'**Header:** {" - ".join(NAV_PRIMARY)}')
    m.append(f'\n**Universe dropdown:** {" - ".join(NAV_UNIVERSE)}')
    m.append('\n**Not in navigation:** /spotlights, the three /science/ deep-dives, '
             'the three /technology/ deep-dives, the three /philosophy/ essays\n')

    m.append('\n## Pages\n')
    for p in PAGES:
        m.append(f'\n### {p["title"]} - `{p["route"]}`\n')
        m.append(strip(p['purpose']) + '\n')
        for label, text in p.get('copy', []):
            m.append(f'- **{strip(label)}:** {strip(text)}')
        if p.get('note'):
            m.append(f'\n> {strip(p["note"])}')
        if p.get('orbit'):
            m.append('\nCreative Orbit 2026 - Julie at the centre, five companions around her:')
            m.extend(f'- **{n}** - {strip(r)}' for n, r in ORBIT)
        images = list(p.get('images', []))
        if p.get('spa'):
            images += SPA_IMAGES
        if images:
            m.append(f'\nImages ({len(images)}): ' + ', '.join(f'`{i}`' for i in images))

    m.append('\n### Deep-dive pages\n')
    m.append('Reached from the Science, Technology and Philosophy hubs rather than the menu.\n')
    m.extend(f'- **{t}** `{r}` - {strip(l)}' for r, t, l in SUBPAGES)

    m.append('\n## Characters\n')
    m.append('| Name | Role | Portrait |\n| --- | --- | --- |')
    m.extend(f'| {strip(n)} | {strip(r)} | `{p}` |' for n, r, p in CHARACTERS)

    m.append('\n## Moving image\n')
    m.append('All embeds are click-to-load facades - no YouTube iframe loads until play is pressed.\n')
    m.append('| Trailer | Year | YouTube ID | Status |\n| --- | --- | --- | --- |')
    m.extend(f'| {t} | {y} | `{v}` | {s} |' for t, y, v, s in VIDEO['trailers'])
    m.append('\n| Starlight Buffet | YouTube ID | Status |\n| --- | --- | --- |')
    m.extend(f'| {t} | `{v}` | {s} |' for t, v, s in VIDEO['buffet'])
    m.append('\nCharacter Spotlights: ' + ', '.join(n for n, _p in VIDEO['spotlights']))

    m.append('\n## Channels & files\n')
    m.append('| Channel | Handle | Address |\n| --- | --- | --- |')
    m.extend(f'| {c} | {h} | {u} |' for c, h, u in CHANNELS)
    m.append('\n| Download | File | Size |\n| --- | --- | --- |')
    m.extend(f'| {t} | `{f}` | {s} |' for t, f, s in DOWNLOADS)

    m.append('\n## Canon - non-negotiable\n')
    m.extend(f'{i}. {strip(c)}' for i, c in enumerate(CANON, 1))

    m.append('\n## Writing rules\n')
    m.extend(f'- **{strip(r)}** - {strip(d)}' for r, d in STYLE_RULES)

    m.append('\n## Sanctum Spa vocabulary\n')
    m.append('**Use:** ' + ', '.join(SPA_TERMS_USE))
    m.append('\n**Avoid:** ' + ', '.join(SPA_TERMS_AVOID))

    m.append('\n---\n\nMission: Aurelia - created in collaboration with AI.')
    return '\n'.join(m)


def write_pdf():
    """Print the HTML to PDF via headless Chromium, if one is available.

    The PDF is the edition for AI collaborators: unlike embedded base64 in
    HTML, a model reading a PDF sees the pictures as pictures.
    """
    import shutil
    import subprocess

    candidates = [
        os.environ.get('CHROMIUM_BIN'),
        '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
        shutil.which('chromium'),
        shutil.which('google-chrome'),
    ]
    chrome = next((c for c in candidates if c and os.path.isfile(c)), None)
    if not chrome:
        print('no chromium found - skipping PDF')
        return
    cmd = [chrome, '--headless', '--disable-gpu', '--no-sandbox',
           '--no-pdf-header-footer', f'--print-to-pdf={DEST_PDF}',
           f'file://{DEST}']
    subprocess.run(cmd, capture_output=True, timeout=300)
    if os.path.isfile(DEST_PDF):
        print(f'{os.path.relpath(DEST_PDF, ROOT)}: {os.path.getsize(DEST_PDF)/1024/1024:.2f} MB')


if __name__ == '__main__':
    html = build()
    with open(DEST, 'w') as f:
        f.write(html)
    print(f'{len(THUMBS)} images embedded')
    print(f'{os.path.relpath(DEST, ROOT)}: {len(html)/1024/1024:.2f} MB')

    md = build_markdown()
    with open(DEST_MD, 'w') as f:
        f.write(md)
    print(f'{os.path.relpath(DEST_MD, ROOT)}: {len(md)/1024:.0f} KB')

    write_pdf()
