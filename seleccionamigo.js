let nombres = [];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("agregarBtn").addEventListener("click", agregarNombre);
    document.getElementById("elegirBtn").addEventListener("click", elegirAleatorio);
    document.getElementById("reiniciarBtn").addEventListener("click", reiniciarJuego);
});

function agregarNombre() {
    let input = document.getElementById("nombreInput");
    let nombre = input.value.trim();

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ][A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/.test(nombre)) {
        alert("El nombre debe comenzar con una letra y no contener números o caracteres especiales.");
        return;
    }

    if (nombres.includes(nombre)) {
        alert("El nombre ya ha sido ingresado.");
    } else {
        nombres.push(nombre);
        actualizarLista();
    }

    input.value = "";
    input.focus();
}

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function elegirAleatorio() {
    if (nombres.length === 0) {
        alert("No hay nombres en la lista.");
        return;
    }
    let randomIndex = Math.floor(Math.random() * nombres.length);
    let resultado = document.getElementById("resultado");
    resultado.textContent = `Seleccionado: ${nombres[randomIndex]}`;
    resultado.style.color = "red";
    resultado.style.fontSize = "24px";
    resultado.style.fontWeight = "bold";
    resultado.style.border = "2px solid red";
    resultado.style.padding = "10px";
    resultado.style.marginTop = "20px";
    resultado.style.backgroundColor = "#ffe6e6";
    resultado.style.display = "inline-block";
}

function reiniciarJuego() {
    nombres = [];
    actualizarLista();
    let resultado = document.getElementById("resultado");
    resultado.textContent = "";
    resultado.style.border = "none";
    resultado.style.backgroundColor = "transparent";
}

