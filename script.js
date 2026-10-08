// ===== Año =====
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// ===== Loader =====
const loader = document.getElementById("loader");
if (loader) {
  addEventListener("load", () => {
    setTimeout(() => loader.classList.add("out"), 900);
  });
}

// ===== Bloqueo básico de inspección =====
// Esto solo desactiva accesos casuales desde la página; no sirve para ocultar el código
// de forma real porque el navegador puede mostrar el origen y el código fuente igual.
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("dragstart", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  const blockedKeys = ["f12", "f10", "u", "s", "c", "i", "g"];

  if (event.key === "F12" || event.key === "F10") {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  if ((event.ctrlKey || event.metaKey) && blockedKeys.includes(key)) {
    event.preventDefault();
    event.stopPropagation();
  }
});

// ===== Nav =====
const nav = document.querySelector(".nav");
if (nav) addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 20));

const burger = document.getElementById("burger");
const menu = document.querySelector(".nav nav");
if (burger && menu) {
  burger.addEventListener("click", () => menu.classList.toggle("open"));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));
}

// ===== Reveal =====
const io = new IntersectionObserver((es) => {
  es.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add("in"), i * 80);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ===== Contadores =====
const counters = new IntersectionObserver((es) => {
  es.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    let n = 0;
    const step = () => {
      n += Math.max(1, target / 40);
      el.textContent = n >= target ? target : Math.floor(n);
      if (n < target) requestAnimationFrame(step);
    };
    step();
    counters.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll("[data-count]").forEach((el) => counters.observe(el));

// ===== Parallax hero =====
const heroBg = document.querySelector(".hero-bg");
addEventListener("scroll", () => {
  if (heroBg) heroBg.style.transform = `scale(1.12) translate3d(0,${scrollY * 0.22}px,0)`;
});

// ===== Glitch aleatorio del título =====
const h1 = document.querySelector("h1.glitch");
if (h1) {
  setInterval(() => {
    if (!h1 || Math.random() > 0.35) return;
    h1.style.transform = `translate(${(Math.random() - 0.5) * 8}px,0) skewX(${(Math.random() - 0.5) * 6}deg)`;
    setTimeout(() => (h1.style.transform = ""), 90);
  }, 1800);
}

// ===== Partículas / chispas =====
const canvas = document.getElementById("fx");
let parts = [];
if (canvas) {
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = innerWidth * devicePixelRatio;
    canvas.height = innerHeight * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }
  resize();
  addEventListener("resize", resize);

  function make() {
    return {
      x: Math.random() * innerWidth,
      y: innerHeight + Math.random() * innerHeight,
      len: 6 + Math.random() * 22,
      sp: 0.6 + Math.random() * 2.4,
      op: 0.15 + Math.random() * 0.5,
      pink: Math.random() > 0.72,
    };
  }

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) {
    parts = Array.from({ length: innerWidth < 700 ? 26 : 52 }, make);
    requestAnimationFrame(loop);
  }

  function loop() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    parts.forEach((p) => {
      p.y -= p.sp;
      if (p.y < -40) Object.assign(p, make(), { y: innerHeight + 20 });
      ctx.strokeStyle = p.pink ? `rgba(255,30,122,${p.op})` : `rgba(61,255,46,${p.op})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x, p.y + p.len);
      ctx.stroke();
    });
    requestAnimationFrame(loop);
  }
}

// ===== Parallax bandas + sol =====
const paras = document.querySelectorAll("[data-para]");
const sun = document.getElementById("sun");
addEventListener("scroll", () => {
  paras.forEach((el) => {
    const r = el.parentElement.getBoundingClientRect();
    const off = (r.top + r.height / 2 - innerHeight / 2) * -(+el.dataset.para);
    el.style.transform = `translate3d(0,${off}px,0)`;
  });
  if (sun) sun.style.transform = `translate(-50%,calc(-50% + ${scrollY * 0.12}px))`;
}, { passive: true });
