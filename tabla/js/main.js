const modalrol = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const openModal = document.getElementById("openModal");
const modal = (a, b) => {
  a.classList.toggle("modal--open");
  b.classList.toggle("modal__content--open");
};
const modalClose = (a, b) => {
  a.addEventListener("click", (e) => {
    if (e.target.classList.contains("closeModal")) {
      modal(a, b);
    }
  });
};
openModal.addEventListener("click", (e) => {
  e.preventDefault;
  modal(modalrol, modalContent);
});
modalClose(modalrol, modalContent);

// ========================================================================
const modalPreferencia = document.getElementById("modalPreferencia");
const modalContentPreferencia = document.getElementById(
  "modalContentPreferencia"
);
const tableRoles = document.getElementById("tableRoles");
tableRoles.addEventListener("click", (e) => {
  if (e.target.classList.contains("tabla__btn-action--roltarea")) {
    modal(modalPreferencia, modalContentPreferencia);
  }
});
modalClose(modalPreferencia, modalContentPreferencia);
// ============================================c
console.log(tableRoles);
