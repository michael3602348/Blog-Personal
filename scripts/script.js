// *DOM
const abrirMenu = document.getElementById("abrir");
const cerrarMenu = document.getElementById("cerrar");

const navCelular = document.getElementById("nav-celular");
const footer = document.getElementById("footer");
const aFooter = document.getElementById("a-footer");

const btnInicio = document.getElementById("btn-inicio");
const btnArticulos = document.getElementById("btn-articulos");
const btnFinal = document.getElementById("btn-final");
const btnContacto = document.getElementById("btn-contacto");


// *Abrir menu
abrirMenu.addEventListener("click", function () {
    abrirMenu.style.display = "none";
    navCelular.style.display = "flex";
    footer.style.width = "50vw";
    aFooter.style.display = "none";

});

// *Cerrar menu
cerrarMenu.addEventListener("click", function () {
    abrirMenu.style.display = "flex";
    navCelular.style.display = "none";
    footer.style.width = "auto";
    aFooter.style.display = "flex";
});

// *Click inicio
btnInicio.addEventListener("click", function () {
    abrirMenu.style.display = "flex";
    navCelular.style.display = "none";
    footer.style.width = "auto";
    aFooter.style.display = "flex";
});

// *Click articulos
btnArticulos.addEventListener("click", function () {
    abrirMenu.style.display = "flex";
    navCelular.style.display = "none";
    footer.style.width = "auto";
    aFooter.style.display = "flex";
});

// *Click final
btnFinal.addEventListener("click", function () {
    abrirMenu.style.display = "flex";
    navCelular.style.display = "none";
    footer.style.width = "auto";
    aFooter.style.display = "flex";
});

// *Click contacto
btnContacto.addEventListener("click", function () {
    abrirMenu.style.display = "flex";
    navCelular.style.display = "none";
    footer.style.width = "auto";
    aFooter.style.display = "flex";
});