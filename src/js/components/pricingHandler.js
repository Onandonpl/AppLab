const pricingHandler = () => {
  const pricingCheckbox = document.querySelector(".switch__input");
  const pricingAmount = document.querySelector(".price__change");
  const pricingRangeText = document.querySelector(".range__change");
  const pricingYear = "399";
  const pricingMonth = "99";

  const handlePricingContent = () => {
    if (pricingCheckbox.checked) {
      pricingAmount.innerHTML = pricingYear;
      pricingRangeText.innerHTML = "/year";
    } else {
      pricingAmount.innerHTML = pricingMonth;
      pricingRangeText.innerHTML = "/month";
    }
  };

  pricingCheckbox.addEventListener("change", handlePricingContent);
};
export default pricingHandler;
