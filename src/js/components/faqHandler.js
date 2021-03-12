const faqHandler = () => {
  const questionButtons = document.querySelectorAll(".question__expand");
  [...questionButtons].map((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("rotate");
      button.parentElement
        .querySelector(".question__content")
        .classList.toggle("collapsed");
    });
  });
};

export default faqHandler;
