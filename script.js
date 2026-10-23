(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------- Theme toggle ---------- */
  var themeBtn = document.getElementById("theme-toggle");
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeBtn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    if (themeMeta) themeMeta.setAttribute("content", theme === "dark" ? "#0f1d33" : "#f1faee");
  }

  applyTheme(currentTheme());

  themeBtn.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable */ }
  });

  /* ---------- Mobile navigation ---------- */
  var menuBtn = document.getElementById("menu-toggle");
  var nav = document.getElementById("site-nav");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  menuBtn.addEventListener("click", function () {
    setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      menuBtn.focus();
    }
  });

  window.matchMedia("(min-width: 52.01rem)").addEventListener("change", function (e) {
    if (e.matches) setMenu(false);
  });

  /* ---------- Open the case study when its link is used ---------- */
  function openCaseFromHash() {
    var el = location.hash ? document.querySelector(location.hash) : null;
    if (el && el.tagName === "DETAILS") el.open = true;
  }
  window.addEventListener("hashchange", openCaseFromHash);
  openCaseFromHash();

  /* ---------- Scroll reveal (content stays visible if JS fails) ---------- */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
