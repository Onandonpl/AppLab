const testimonials = async () => {
  const testimonialsContainer = document.querySelector(
    ".testimonials__opinions"
  );
  const buttonNext = document.querySelector(".testimonials__next");
  const buttonPrev = document.querySelector(".testimonials__prev");

  const apiAddress = "https://randomuser.me/api/?results=7";

  let testimonialndex = 0;

  const fetchRandomTestimonials = async (url = "") => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      return data.results;
    } catch (err) {
      console.error(err);
    }
  };

  const responseTestimonials = await fetchRandomTestimonials(apiAddress);

  const testimonialTemplate = (arr, index) => {
    return ` 
<div class="client">
<div class="client__stars">XXXXX</div>
<div class="client__title">User friendly & Customizable</div>
<div class="client__review">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
  at voluptate quisquam nobis sequi officia, magni error modi
  maxime similique repellendus, enim porro aspernatur, aliquam
  dolor quas debitis doloribus quibusdam.
</div>
<div class="client__info">
  <img
    src="${arr[index].picture.thumbnail}"
    alt=""
    class="client__image"
  />
  <div class="client__personal">
    <div class="client__name">${arr[index].name.first} ${arr[index].name.last}</div>
    <div class="client__status">CEO of Pixler Lab</div>
  </div>
</div>
</div> 
`;
  };

  const updateTestimonialsContainer = (arr, index) => {
    testimonialsContainer.innerHTML = testimonialTemplate(arr, index);
  };

  const changeIndexByDirection = (direction) => {
    if (direction === "next") {
      testimonialndex += 1;
    }
    if (direction === "prev") {
      testimonialndex -= 1;
    }
  };

  const handleCheckIndex = () => {
    if (testimonialndex > responseTestimonials.length - 1) {
      testimonialndex = 0;
    }
    if (testimonialndex < 0) {
      testimonialndex = responseTestimonials.length - 1;
    }
  };

  const handleChangeTestimonial = (direction) => {
    const client = document.querySelector(".client");

    changeIndexByDirection(direction);
    handleCheckIndex();
    client.classList.toggle("exit");

    setTimeout(() => {
      updateTestimonialsContainer(responseTestimonials, testimonialndex);
    }, 650);
  };

  updateTestimonialsContainer(responseTestimonials, testimonialndex);

  buttonNext.addEventListener("click", () => {
    handleChangeTestimonial("next");
  });

  buttonPrev.addEventListener("click", () => {
    handleChangeTestimonial("prev");
  });
};
export default testimonials;
