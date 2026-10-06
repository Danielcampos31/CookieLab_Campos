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

// Contador de visitas
let visitas = leerCookie("visitas");

if (visitas === null) {
    visitas = 1;
} else {
    visitas = Number(visitas) + 1;
}

guardarCookie("visitas", visitas, 30 * 24 * 60 * 60);

// Mostrar el número de visitas
let mensajeVisitas = document.createElement("p");
mensajeVisitas.textContent = "Has visitado esta página " + visitas + " veces";
document.body.appendChild(mensajeVisitas);

// Botón para cambiar el nombre
document.getElementById("cambiarNombre").addEventListener("click", function () {
    let nuevoNombre = prompt("¿Cuál es tu nuevo nombre?");

    if (nuevoNombre !== null && nuevoNombre !== "") {
        usuario = nuevoNombre;

        guardarCookie("usuario", usuario, 30 * 24 * 60 * 60);

        if (idiomaGuardado === "en") {
            document.getElementById("saludo").textContent = "Hello again, " + usuario;
        } else {
            document.getElementById("saludo").textContent = "Hola de nuevo, " + usuario;
        }
    }
});

// Botón para olvidarme
document.getElementById("olvidarme").addEventListener("click", function () {
    let confirmar = confirm("¿Seguro que quieres borrar todos tus datos?");

    if (confirmar) {
        document.cookie = "usuario=; max-age=0";
        document.cookie = "tema=; max-age=0";
        document.cookie = "idioma=; max-age=0";
        document.cookie = "visitas=; max-age=0";

        alert("Tus datos han sido borrados.");
        location.reload();
    }
});