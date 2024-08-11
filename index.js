function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''); // Elimina acentos
}

function actualizarImagen(src) {
    const muñeco = document.getElementById("muñeco");
    if (muñeco) {
        console.log(`Actualizando imagen a: ${src}`);
        muñeco.src = src;
    }
}

function encriptar() {
    const texto = normalizarTexto(document.getElementById("texto").value);
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");

    const textoCifrado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    if (texto.length !== 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        actualizarImagen("img/encriptado.jpg");
    } else {
        actualizarImagen("img/muñeco.jpg");
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function desencriptar() {
    const texto = normalizarTexto(document.getElementById("texto").value);
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");

    const textoCifrado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    if (texto.length !== 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        actualizarImagen("img/desencriptado.jpg");
    } else {
        actualizarImagen("img/muñeco.jpg");
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}
