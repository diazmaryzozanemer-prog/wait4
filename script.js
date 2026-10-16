// Shared JavaScript interactions for all portfolio pages
document.addEventListener("DOMContentLoaded", () => {
  // Automatically update the copyright year.
  document.querySelectorAll(".current-year").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });

  // Welcome message: shown on the home page.
  const welcome = document.getElementById("welcome-message");
  if (welcome) {
    const hour = new Date().getHours();
    let greeting = "Welcome";
    if (hour < 12) greeting = "Good morning";
    else if (hour < 18) greeting = "Good afternoon";
    else greeting = "Good evening";
    welcome.textContent = `${greeting}! Thanks for visiting my portfolio.`;
  }

  // Read More button: reveal and hide the extra biography.
  const readMoreButton = document.getElementById("read-more-btn");
  const moreAbout = document.getElementById("more-about");
  if (readMoreButton && moreAbout) {
    readMoreButton.addEventListener("click", () => {
      const expanded = readMoreButton.getAttribute("aria-expanded") === "true";
      readMoreButton.setAttribute("aria-expanded", String(!expanded));
      moreAbout.hidden = expanded;
      readMoreButton.textContent = expanded ? "Read More" : "Read Less";
    });
  }

  // Mobile navigation menu.
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");
  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  // Sticky Back-to-Top button: fixed in the lower-right corner while scrolling.
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    const updateBackToTop = () => {
      backToTop.classList.toggle("visible", window.scrollY > 250);
    };
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    updateBackToTop();
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
