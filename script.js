const sectionContant = document.querySelector(".section-contact")
const buttonContanct = document.querySelector(".button-contact")
const closeSectionContact = document.querySelector(".close-contact")
const buttonAlertContact = document.querySelector(".button-contact-pres")
buttonContanct.addEventListener("click", abrirSecctionContact);
closeSectionContact.addEventListener("click", closeSecctionContact);
buttonAlertContact.addEventListener("click", cargarAlertaContacto);

function abrirSecctionContact(){
    sectionContant.classList.remove("inactive")
}
function closeSecctionContact(){
    sectionContant.classList.add("inactive")
}
function cargarAlertaContacto(){
    let timerInterval
    Swal.fire({
    title: 'Auto close alert!',
    html: 'I will close in <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
    }
    })
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