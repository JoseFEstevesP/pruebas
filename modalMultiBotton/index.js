const con = document.getElementById("con");
const modal = document.querySelector(".modal");
const contentModal = document.querySelector(".modal__content");
// ======================
const modal2 = document.getElementById("modal2");
const contentModal2 = document.getElementById("contentModal2");
// ===============
const modalToggle = (a, b) => {
  a.classList.toggle("modal--opem");
  b.classList.toggle("modal__content--opem");
};
const modalClose = (a, b) => {
  a.addEventListener("click", (e) => {
    if (e.target.classList == "modal__close") {
      modalToggle(a, b);
    }
  });
};
con.addEventListener("click", (e) => {
  if (e.target.classList == "btnModal") {
    modalToggle(modal, contentModal);
  }
});
modalClose(modal, contentModal);

const btnModal2 = document
  .querySelector(".btnModal2")
  .addEventListener("click", () => {
    modalToggle(modal2, contentModal2);
  });
modalClose(modal2, contentModal2);
