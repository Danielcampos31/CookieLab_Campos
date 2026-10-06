console.log("CookieLab iniciado");

let nombre = prompt("¿Cómo te llamas?");

document.cookie = "usuario=" + nombre + "; max-age=" + (30 * 24 * 60 * 60);

alert("¡Bienvenido, " + nombre + "!");