// ─── aria-current="page" ─────────────────────────────────────────────────────
// Normalise trailing slashes so "/" and "/guestsignal" both match cleanly.
const currentPath = window.location.pathname.replace(/\/?$/, "/");
document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = (link.getAttribute("href") || "").replace(/\/?$/, "/");
  if (!href || href.startsWith("#")) return;
  const isCurrent =
    href === currentPath ||
    (href !== "/" && currentPath.startsWith(href));
  if (isCurrent) link.setAttribute("aria-current", "page");
});

// ─── Mobile navigation ───────────────────────────────────────────────────────
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

// ─── Hero background split ────────────────────────────────────────────────────
// The CSS gradient uses --hero-split to divide the dark pine left panel from
// the cream right panel.  We compute where the hero-copy column actually ends
// so the split tracks the real layout column boundary rather than a hard-coded
// viewport percentage.
function updateHeroSplit() {
  const heroCopy = document.querySelector(".hero-home .hero-copy");
  if (!heroCopy) return;
  const rect = heroCopy.getBoundingClientRect();
  const pct = ((rect.right / window.innerWidth) * 100).toFixed(2);
  document.documentElement.style.setProperty("--hero-split", `${pct}%`);
}

updateHeroSplit();
window.addEventListener("resize", updateHeroSplit);

// ─── Scroll reveals (staggered siblings) ─────────────────────────────────────
// Siblings inside the same parent that share the .reveal class stagger in
// 90 ms apart so grids and step-lists animate as a sequence, not a pop.
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const siblings = [
            ...entry.target.parentElement.querySelectorAll(".reveal"),
          ];
          const index = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 90}ms`;
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  // Fallback: show everything immediately if IntersectionObserver is absent.
  revealElements.forEach((el) => el.classList.add("visible"));
}

// ─── Active section nav highlighting ─────────────────────────────────────────
const sections = document.querySelectorAll("section[id]");
const pageNavLinks = document.querySelectorAll(".nav-links a[href^='#']");

if ("IntersectionObserver" in window && sections.length && pageNavLinks.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          pageNavLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { rootMargin: "-35% 0px -55% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
