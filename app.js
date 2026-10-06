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

// Función para guardar una cookie
function guardarCookie(nombre, valor, segundos) {
    document.cookie = nombre + "=" + valor + "; max-age=" + segundos;
}

// Comprobamos si existe la cookie usuario
let usuario = leerCookie("usuario");

if (usuario === null) {
    usuario = prompt("¿Cómo te llamas?");

    guardarCookie("usuario", usuario, 30 * 24 * 60 * 60);

    alert("¡Bienvenido, " + usuario + "!");
}

// Elementos de los desplegables
let selectorTema = document.getElementById("tema");
let selectorIdioma = document.getElementById("idioma");

// Leer preferencias guardadas
let temaGuardado = leerCookie("tema");
let idiomaGuardado = leerCookie("idioma");

// Aplicar tema guardado
if (temaGuardado === "claro") {
    document.body.classList.add("claro");
    selectorTema.value = "claro";
} else {
    selectorTema.value = "oscuro";
}

// Aplicar idioma guardado
if (idiomaGuardado === "en") {
    selectorIdioma.value = "en";
    document.getElementById("saludo").textContent = "Hello again, " + usuario;
} else {
    selectorIdioma.value = "es";
    document.getElementById("saludo").textContent = "Hola de nuevo, " + usuario;
}

// Cambiar el tema
selectorTema.addEventListener("change", function () {
    guardarCookie("tema", selectorTema.value, 30 * 24 * 60 * 60);

    if (selectorTema.value === "claro") {
        document.body.classList.add("claro");
    } else {
        document.body.classList.remove("claro");
    }
});

// Cambiar el idioma
selectorIdioma.addEventListener("change", function () {
    guardarCookie("idioma", selectorIdioma.value, 30 * 24 * 60 * 60);

    if (selectorIdioma.value === "en") {
        document.getElementById("saludo").textContent = "Hello again, " + usuario;
    } else {
        document.getElementById("saludo").textContent = "Hola de nuevo, " + usuario;
    }
});