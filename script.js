"use strict";

//--------------------------------------------------------------------function-------------------------------------------------------------------------------------

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden"); //La classList est une méhthodes qui permet de manipuler les classes de nos objet HTML.
  overlay.classList.remove("hidden");
};

// ----------------------------------------------------------- Initialization of variables --------------------------------------------------------------------------
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal"); //selectionner tout les éléments ayant la class "show-modal". Cela retourne un tableau. On peut donc itérer dessus pour donner le même comportement à toutes les valeurs(donc les trois boutons) de ce tableau.

//-----------------------------------------------------------------------Code-----------------------------------------------------------------------------------------
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  //en passant un paramètre de notre eventHandler, par exemple un "e", cela nous permet de donner à notre fonction l'objet qui est crée par le addEventListener et dans lequel se trouve tout les informations de l'évènements. A partir de là, on peut manipuler notre objet pour faire ce que l'on veut.
  console.log(e);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
