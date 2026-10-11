(() => {
  "use strict";

  const sidebar = document.querySelector("#sidebar");
  const toggle = document.querySelector("#mobileToggle");
  const jumpButtons = [...document.querySelectorAll("[data-jump-category]")];
  const sections = [...document.querySelectorAll("[data-category-section]")];

  function setSidebar(open) {
    sidebar?.classList.toggle("open", open);
    toggle?.setAttribute("aria-expanded", String(open));
    toggle?.setAttribute("aria-label", open ? "關閉分類選單" : "開啟分類選單");
  }

  function setActiveCategory(category) {
    jumpButtons.forEach((button) => {
      const active = button.dataset.jumpCategory === category;
      button.classList.toggle("active", active);
      button.setAttribute("aria-current", active ? "true" : "false");
    });
  }

  jumpButtons.forEach((button) => {
    const category = button.dataset.jumpCategory;
    const section = sections.find((item) => item.dataset.categorySection === category);
    if (!section) return;

    const itemCount = section.querySelectorAll(".resource-card, .game-card").length;
    const count = button.querySelector(".category-count");
    if (count) count.textContent = itemCount;

    button.addEventListener("click", () => {
      setActiveCategory(category);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.innerWidth <= 720) setSidebar(false);
    });
  });

  if (sections.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveCategory(visible[0].target.dataset.categorySection);
    }, { rootMargin: "-12% 0px -72% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }

  toggle?.addEventListener("click", () => setSidebar(!sidebar?.classList.contains("open")));

  document.querySelectorAll(".resource-card").forEach((card) => {
    const link = card.querySelector(".card-link[href]");
    if (link && !card.dataset.href) {
      card.dataset.href = link.getAttribute("href");
      if (link.target === "_blank") card.dataset.target = "_blank";
      link.remove();
    }
    if (!card.dataset.href || card.classList.contains("is-placeholder")) return;

    const title = card.querySelector("h2")?.textContent.trim() || "教材";
    card.tabIndex = 0;
    card.setAttribute("role", "link");
    card.setAttribute("aria-label", `開啟${title}`);

    const openResource = () => {
      if (card.dataset.target === "_blank") window.open(card.dataset.href, "_blank", "noopener");
      else window.location.href = card.dataset.href;
    };
    card.addEventListener("click", (event) => {
      if (!event.target.closest("a, input, select, textarea")) openResource();
    });
    card.addEventListener("keydown", (event) => {
      if (event.target !== card || (event.key !== "Enter" && event.key !== " ")) return;
      event.preventDefault();
      openResource();
    });
  });

  if (jumpButtons[0]) setActiveCategory(jumpButtons[0].dataset.jumpCategory);
})();
