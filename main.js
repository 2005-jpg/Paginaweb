// ==========================
// main.js
// Gabby's Estilo Unisex
// ==========================

// Mensaje de bienvenida
window.onload = function () {
    console.log("Bienvenido a Gabby's Estilo Unisex");
};

// Confirmación para reservar una cita
function reservarCita() {

    const respuesta = confirm("¿Deseas agendar una cita por WhatsApp?");

    if (respuesta) {
        window.open(
            "https://wa.me/593991582124?text=Hola,%20quiero%20agendar%20una%20cita",
            "_blank"
        );
    }
}

function enviarWhatsApp(){

let nombre=document.getElementById("nombre").value;

let telefono=document.getElementById("telefono").value;

let mensaje=document.getElementById("mensaje").value;

let texto=
`Hola, soy ${nombre}.
Mi teléfono es ${telefono}.
${mensaje}`;

let url=
"https://wa.me/593991582124?text="+encodeURIComponent(texto);

window.open(url,"_blank");

}