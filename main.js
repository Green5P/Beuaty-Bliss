let navbar = document.querySelector(".nav-pages");
let cartItems = 0;

document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
};

const buttons = document.querySelectorAll(".buy");
const numberDisplay = document.querySelector("#cart_total");

buttons.forEach((button) => {
  button.onclick = () => {
    cartItems += 1;
    numberDisplay.textContent = cartItems;
  };
});
