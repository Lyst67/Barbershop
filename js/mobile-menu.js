(() => {
  const refs = {
    openMenuBtn: document.querySelector(".js-menu-open"),
    closeMenuBtn: document.querySelector(".js-menu-close"),
    menu: document.querySelector(".js-mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
    refs.menu.classList.add("is-open");
  }

  // Add event listener for all anchor links on the page
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      // Check if the mobile menu is open
      if (refs.menu.classList.contains("is-open")) {
        // Close the mobile menu
        toggleMenu();
      }
    });
  });
})();
