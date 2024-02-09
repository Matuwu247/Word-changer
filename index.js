const texto = document.getElementById("texto");
const correjido = document.getElementById("texto-correjido");
const ingresar = document.getElementById("ingresar");
const change = document.getElementById("change");
const buscar = document.getElementById("search");

texto.addEventListener('keyup', actualizarTexto);
ingresar.addEventListener('click', reemplazar);

function actualizarTexto(event) {
    const term = escapeHTML(event.target.value.trim().toLowerCase());
    correjido.innerHTML = `<p>${term}</p>`;
    correjido.style.height = 'auto';
}

function ingresarTexto() {
    const term = escapeHTML(texto.value.trim().toLowerCase());
    correjido.innerHTML = `<p>${term}</p>`;
    correjido.style.height = 'auto';
}

function reemplazar() {
    const term = escapeHTML(texto.value.trim().toLowerCase());
    const palabraBuscar = escapeHTML(buscar.value.trim().toLowerCase());
    const palabraReemplazar = escapeHTML(change.value.trim().toLowerCase());

    const regex = new RegExp("\\b" + palabraBuscar + "\\b", "gi");
    const textoReemplazado = term.replace(regex, `<span class="resaltado">${palabraReemplazar}</span>`);

    correjido.innerHTML = `<p>${textoReemplazado}</p>`;
}
const textoInput = document.getElementById("texto");

textoInput.addEventListener('input', function() {
    const maxLength = 29; // Establece el límite de caracteres
    if (textoInput.value.length >= maxLength) {
        // Cambia el estilo para hacer que el input se mueva a una nueva línea
        textoInput.style.display = 'block';
        textoInput.style.width = '100%';
        textoInput.style.marginBottom = '10px'; // Añade espacio entre los inputs
    } else {
        // Restaura el estilo predeterminado si no se supera el límite
        textoInput.style.display = 'inline-block';
        textoInput.style.width = 'auto';
        textoInput.style.marginBottom = '0';
    }
});

function escapeHTML(texto) {
    return texto.replace(/[&<>"']/g, function(match) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[match];
    });
}
