const navSlide = () => {
  const daddy = document.querySelector(".dropdown");
  const mummy = document.querySelector(".nav");

  daddy.addEventListener("click", () => {
    mummy.classList.toggle("nav-active");
    daddy.classList.toggle("toggle");
  });
};

navSlide();
