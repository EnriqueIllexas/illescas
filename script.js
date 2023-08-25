const sectionContant = document.querySelector(".section-contact")
const buttonContanct = document.querySelector(".button-contact")
const closeSectionContact = document.querySelector(".close-contact")

buttonContanct.addEventListener("click", abrirSecctionContact);
closeSectionContact.addEventListener("click", closeSecctionContact);

function abrirSecctionContact(){
    sectionContant.classList.remove("inactive")
}
function closeSecctionContact(){
    sectionContant.classList.add("inactive")
}
/*
let displayIdioma = sectionInicioIdiomas.style.display = 'block';
sectionInicioEspañol.style.display = "none";
sectionInicioIngles.style.display = "none";
sectionInicioFrances.style.display = "none";
var sectionInicioIdiomas = document.getElementById("section-idiomas")

var sectionInicioEspañol = document.getElementById("section-español")

var sectionInicioIngles = document.getElementById("section-ingles")

var sectionInicioFrances = document.getElementById("section-frances")

var buttonSeccionEspañol = document.getElementById("buton-español")
buttonSeccionEspañol.addEventListener("click", buttonEspañol)

var buttonSeccionIngles = document.getElementById("buton-ingles")
buttonSeccionIngles.addEventListener("click", buttonIngles)

var buttoSeccionFrances = document.getElementById("buton-frances")
buttoSeccionFrances.addEventListener("click", buttonFrances)

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', iniciarPortafolio)
 */