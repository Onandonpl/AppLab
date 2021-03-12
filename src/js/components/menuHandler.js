const menuHandler = () => {
  const hamburgerButton = document.querySelector(".button-menu__toggler");
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu__link");
  const header = document.querySelector(".header");
  let lastScroll = 0;

  const handleMenuOpen = () => {
    const isOpened = hamburgerButton.getAttribute("aria-expanded") === "true";
    menu.classList.toggle("menu--open", !isOpened);
    hamburgerButton.classList.toggle("toggle", !isOpened);
    hamburgerButton.setAttribute("aria-expanded", String(!isOpened));
  };

  const handleMenuPosition = (scrollPos) => {
    header.classList.toggle("header__sticky", scrollPos > 0);
    header.classList.toggle(
      "header__sticky--visible",
      lastScroll > scrollPos && scrollPos != 0
    );
  };

  const handleScrollPosition = () => {
    const currentScroll = window.pageYOffset;
    handleMenuPosition(currentScroll);
    lastScroll = currentScroll;
  };

  window.addEventListener("scroll", handleScrollPosition);
  hamburgerButton.addEventListener("click", handleMenuOpen);
  [...menuLinks].map((link) => {
    link.addEventListener("click", handleMenuOpen);
  });
};

export default menuHandler;
