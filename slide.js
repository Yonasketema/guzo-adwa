const nextbtn = document.querySelector(".--next");
const destination__box = document.querySelectorAll(".destination__box");

let vaule = 10;

nextbtn.addEventListener("click", () => {
  vaule = vaule - 10;
  destination__box.forEach((box) => {
    box.style.transform = `translateX(${vaule}%)`;
  });
});
