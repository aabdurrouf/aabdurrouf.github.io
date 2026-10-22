/* =========================================================
   Abdurro'uf — site scripts
   - navigation (scroll state + mobile toggle)
   - reveal-on-scroll
   - figure lightbox
   - hero canvas: simulated galaxy (particles) -> "observed" pixels
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Navigation ---------- */
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const toggle = nav.querySelector(".nav-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.querySelectorAll(".nav-links a").forEach((a) =>
        a.addEventListener("click", () => nav.classList.remove("open"))
      );
    }
  }

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Lightbox for figures ---------- */
  const figs = document.querySelectorAll(".figure img");
  if (figs.length) {
    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = '<img alt="">';
    document.body.appendChild(lb);
    const lbImg = lb.querySelector("img");
    figs.forEach((img) =>
      img.addEventListener("click", () => {
        lbImg.src = img.currentSrc || img.src;
        lbImg.alt = img.alt;
        lb.classList.add("open");
      })
    );
    lb.addEventListener("click", () => lb.classList.remove("open"));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") lb.classList.remove("open");
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll(".js-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Hero galaxy canvas ---------- */
  const canvas = document.getElementById("galaxy-canvas");
  if (canvas) initGalaxy(canvas);

  function initGalaxy(cv) {
    const ctx = cv.getContext("2d");
    const off = document.createElement("canvas"); // low-res "detector"
    const octx = off.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const PIX = 9; // detector pixel size in CSS px
    let W, H, DPR, cx, cy, R, stars, bg;

    function rand(a, b) { return a + Math.random() * (b - a); }
    function gauss() { let u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }

    function build() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * DPR; cv.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      off.width = Math.ceil(W / PIX); off.height = Math.ceil(H / PIX);

      const mobile = W < 820;
      cx = mobile ? W * 0.5 : W * 0.7;
      cy = mobile ? H * 0.32 : H * 0.5;
      R = Math.min(mobile ? W * 0.55 : W * 0.3, H * 0.42);

      const N = mobile ? 3000 : 6500;
      stars = [];
      const arms = 2;
      for (let i = 0; i < N; i++) {
        const t = Math.random();
        let r, th, col, size, a;
        if (t < 0.22) { // bulge
          r = Math.abs(gauss()) * R * 0.13;
          th = rand(0, Math.PI * 2);
          col = [255, rand(190, 225), rand(120, 160)];
          size = rand(0.8, 1.8); a = rand(0.4, 0.95);
        } else if (t < 0.9) { // spiral arms
          const arm = Math.floor(Math.random() * arms);
          r = Math.pow(Math.random(), 0.85) * R;
          const pitch = 0.32;
          th = arm * (Math.PI * 2 / arms) + Math.log(1 + r / (R * 0.08)) / Math.tan(pitch) * 0.55 + gauss() * (0.13 + 0.08 * (1 - r / R));
          const young = Math.random() < 0.12;
          col = young ? [244, 114, 182] : (Math.random() < 0.5 ? [94, 231, 255] : [167, 160, 250]);
          size = young ? rand(1.2, 2.4) : rand(0.7, 1.7);
          a = rand(0.35, 1) * (1 - 0.45 * r / R);
        } else { // diffuse disk / halo
          r = Math.pow(Math.random(), 0.6) * R * 1.15;
          th = rand(0, Math.PI * 2);
          col = [180, 190, 255];
          size = rand(0.4, 0.9); a = rand(0.08, 0.3);
        }
        // differential rotation speed (flat-ish rotation curve)
        const w = 0.00007 * (1 + 0.15 * Math.random()); // near-rigid pattern rotation keeps arms
        stars.push({ r, th, col, size, a, w });
      }
      // static background starfield
      bg = [];
      const nb = Math.floor((W * H) / 5200);
      for (let i = 0; i < nb; i++) bg.push({ x: rand(0, W), y: rand(0, H), s: rand(0.3, 1.1), a: rand(0.15, 0.6), tw: rand(0, Math.PI * 2) });
    }

    const tilt = 0.52, rot = -0.42; // projection: inclination + position angle
    const cosR = Math.cos(rot), sinR = Math.sin(rot);
    function project(s) {
      const x = s.r * Math.cos(s.th), y = s.r * Math.sin(s.th) * tilt;
      return [cx + x * cosR - y * sinR, cy + x * sinR + y * cosR];
    }

    let t0 = performance.now();
    function frame(now) {
      const dt = Math.min(now - t0, 50); t0 = now;
      ctx.clearRect(0, 0, W, H);

      // background stars
      for (const b of bg) {
        b.tw += dt * 0.0015;
        ctx.globalAlpha = b.a * (0.7 + 0.3 * Math.sin(b.tw));
        ctx.fillStyle = "#cfd6ff";
        ctx.fillRect(b.x, b.y, b.s, b.s);
      }
      ctx.globalAlpha = 1;

      // diffuse disk glow
      ctx.save();
      ctx.translate(cx, cy); ctx.rotate(rot); ctx.scale(1, tilt);
      const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, R * 1.05);
      glow.addColorStop(0, "rgba(255,214,170,0.35)");
      glow.addColorStop(0.12, "rgba(200,170,255,0.16)");
      glow.addColorStop(0.5, "rgba(94,160,255,0.06)");
      glow.addColorStop(1, "rgba(94,160,255,0)");
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.arc(0, 0, R * 1.05, 0, Math.PI * 2); ctx.fill();
      ctx.restore();

      // scan line position sweeps across the galaxy
      const span = R * 0.6;
      const scanX = cx + Math.sin(now * 0.00022) * span;

      // update + draw particles (crisp "simulation" side, left of scan)
      octx.clearRect(0, 0, off.width, off.height);
      octx.globalCompositeOperation = "lighter";
      ctx.save();
      ctx.beginPath(); ctx.rect(0, 0, scanX, H); ctx.clip();
      ctx.globalCompositeOperation = "lighter";
      for (const s of stars) {
        if (!reduce) s.th += s.w * dt;
        const p = project(s);
        ctx.fillStyle = `rgba(${s.col[0]},${s.col[1]},${s.col[2]},${s.a})`;
        ctx.fillRect(p[0], p[1], s.size, s.size);
        if (p[0] > scanX - PIX) {
          octx.fillStyle = `rgba(${s.col[0]},${s.col[1]},${s.col[2]},${s.a * 0.55})`;
          octx.fillRect(Math.floor(p[0] / PIX), Math.floor(p[1] / PIX), 1, 1);
        }
      }
      ctx.restore();

      // pixelated "observation" side, right of scan
      ctx.save();
      ctx.beginPath(); ctx.rect(scanX, 0, W - scanX, H); ctx.clip();
      ctx.imageSmoothingEnabled = false;
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(off, 0, 0, off.width * PIX, off.height * PIX);
      // detector grid
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = "rgba(94,231,255,0.05)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      const gx0 = Math.floor(scanX / PIX) * PIX, top = cy - R, bot = cy + R;
      for (let x = gx0; x < cx + R * 1.3; x += PIX) { ctx.moveTo(x + 0.5, top); ctx.lineTo(x + 0.5, bot); }
      for (let y = Math.floor(top / PIX) * PIX; y < bot; y += PIX) { ctx.moveTo(scanX, y + 0.5); ctx.lineTo(cx + R * 1.3, y + 0.5); }
      ctx.stroke();
      ctx.restore();

      // scan line
      const g = ctx.createLinearGradient(0, cy - R * 0.9, 0, cy + R * 0.9);
      g.addColorStop(0, "rgba(94,231,255,0)");
      g.addColorStop(0.5, "rgba(94,231,255,0.75)");
      g.addColorStop(1, "rgba(94,231,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(scanX - 0.5, cy - R * 0.9, 1.5, R * 1.8);

      if (!reduce) requestAnimationFrame(frame);
    }

    build();
    let rt;
    window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(build, 150); });
    requestAnimationFrame(frame);
  }
})();
