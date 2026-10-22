/* =========================================================
   Publications page renderer
   Data lives in /assets/data/publications.json — edit that file to
   add or update papers. Categories:
     first  : first- and second-author papers
     sig    : co-author with significant contribution
     other  : other co-author papers
     nonref : non-refereed / proceedings
     prep   : in preparation
   ========================================================= */
(function () {
  "use strict";
  const root = document.getElementById("pub-root");
  if (!root) return;

  const ME = /Abdurro[’']uf/;
  const esc = (s) => String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function authorsHTML(str, id) {
    const list = str.split(/,\s*/).filter(Boolean);
    const mark = (a) => esc(a).replace(/Abdurro[’']uf/g, (m) => `<span class="me">${m}</span>`);
    if (list.length <= 10) return list.map(mark).join(", ");
    const myIdx = list.findIndex((a) => ME.test(a));
    let shown = list.slice(0, 6).map(mark).join(", ");
    if (myIdx >= 6) shown += `, …, ${mark(list[myIdx])}`;
    const full = list.map(mark).join(", ");
    return `<span class="short">${shown}, et al.</span><span class="full" hidden>${full}</span>` +
      `<span class="toggle" data-t="${id}">[+${list.length - 6} authors]</span>`;
  }

  function statusClass(s) { return s.replace(/\s+/g, "-"); }

  function item(p, i, opts) {
    const id = `p${opts.prefix}${i}`;
    const star = opts.markFirst && p.category === "first" ? `<span class="chip cyan" title="First- or second-author">★ lead</span>` : "";
    const link = p.ads
      ? `<a class="pub-link" href="${esc(p.ads)}" target="_blank" rel="noopener">SciX ↗</a>`
      : `<span></span>`;
    return `<li class="pub" data-search="${esc((p.title + " " + p.authors + " " + p.venue + " " + (p.year || "")).toLowerCase())}">
      <div class="pub-year">${esc(p.year || "—")}</div>
      <div>
        <div class="pub-title">${esc(p.title)}</div>
        <div class="pub-authors" id="${id}">${authorsHTML(p.authors, id)}</div>
        <div class="pub-venue">${esc(p.venue)}
          <span class="status ${statusClass(p.status)}">${esc(p.status)}</span>${star}
          ${p.note ? `<span class="pub-note">${esc(p.note)}</span>` : ""}
        </div>
      </div>
      ${link}
    </li>`;
  }

  function section(key, title, desc, papers, opts, adsLink) {
    return `<div class="pub-section" id="${key}">
      <div class="pub-section-head">
        <div><h2>${title}</h2>${desc ? `<p style="margin:.4rem 0 0;font-size:.92rem">${desc}</p>` : ""}</div>
        <div style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap">
          <span class="count">${papers.length} entries</span>
          ${adsLink ? `<a class="pub-link" href="${adsLink}" target="_blank" rel="noopener">${opts.adsLabel || "Open in SciX"} ↗</a>` : ""}
        </div>
      </div>
      <ul class="pub-list">${papers.map((p, i) => item(p, i, opts)).join("")}</ul>
    </div>`;
  }

  fetch(root.dataset.src)
    .then((r) => r.json())
    .then((data) => {
      const P = data.papers;
      const by = (c) => P.filter((p) => p.category === c);
      const first = by("first");
      const refAll = P.filter((p) => ["first", "sig", "other"].includes(p.category))
        .map((p, i) => ({ p, i }))
        .sort((a, b) => (parseInt(b.p.year) || 0) - (parseInt(a.p.year) || 0) || a.i - b.i)
        .map((x) => x.p);

      root.innerHTML =
        section("lead", "First- &amp; second-author publications",
          "Papers I led or co-led — spatially resolved SED fitting, JWST spectroscopy of the earliest galaxies, Euclid preparation, and forward modeling.",
          first, { prefix: "a" }, data.links.ads_first_second) +
        section("all", "All publications",
          "Complete list of refereed and submitted papers, newest first. ★ marks first- and second-author papers.",
          refAll, { prefix: "b", markFirst: true, adsLabel: "Full list in SciX" }, data.links.ads_all) +
        section("nonref", "Research notes &amp; proceedings", "", by("nonref"), { prefix: "c" }) +
        section("prep", "In preparation", "", by("prep"), { prefix: "d" });

      // author toggles
      root.addEventListener("click", (e) => {
        const t = e.target.closest(".toggle");
        if (!t) return;
        const box = document.getElementById(t.dataset.t);
        const s = box.querySelector(".short"), f = box.querySelector(".full");
        const open = f.hidden;
        f.hidden = !open; s.hidden = open;
        t.textContent = open ? "[show less]" : t.dataset.orig;
      });
      root.querySelectorAll(".toggle").forEach((t) => (t.dataset.orig = t.textContent));

      // search filter
      const input = document.getElementById("pub-filter");
      if (input) {
        input.addEventListener("input", () => {
          const q = input.value.trim().toLowerCase();
          root.querySelectorAll(".pub-section").forEach((sec) => {
            let n = 0;
            sec.querySelectorAll(".pub").forEach((li) => {
              const hit = !q || li.dataset.search.includes(q);
              li.style.display = hit ? "" : "none";
              if (hit) n++;
            });
            sec.querySelector(".count").textContent = `${n} entries`;
            sec.style.display = n ? "" : "none";
          });
        });
      }
      // stats
      const st = data.stats;
      document.querySelectorAll("[data-stat]").forEach((el) => {
        const k = el.dataset.stat;
        if (st[k] !== undefined) el.textContent = st[k];
      });
    })
    .catch(() => {
      root.innerHTML = `<p>Could not load the publication list. Please see the
        <a href="https://scixplorer.org/search?p=1&q=author:%22Abdurro%27uf%22&sort=entry_date+desc&sort=date+desc&d=general" target="_blank" rel="noopener">full list on SciX</a>.</p>`;
    });
})();
