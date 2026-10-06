console.log("CookieLab iniciado");

// Función para leer una cookie por su nombre
function leerCookie(nombre) {
    let cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        let partes = cookie.split("=");

        if (partes[0] === nombre) {
            return partes[1];
        }
    }

    return null;
}

// Comprobamos si existe la cookie usuario
let usuario = leerCookie("usuario");

if (usuario === null) {
    // Primera visita
    usuario = prompt("¿Cómo te llamas?");

    document.cookie = "usuario=" + usuario + "; max-age=" + (30 * 24 * 60 * 60);

    alert("¡Bienvenido, " + usuario + "!");
} else {
    // Visitas posteriores
    document.getElementById("saludo").textContent = "Hola de nuevo, " + usuario;
}