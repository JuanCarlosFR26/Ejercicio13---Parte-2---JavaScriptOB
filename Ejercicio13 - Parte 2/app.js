const respuestas = document.querySelector('.respuestas');
const respuestaCorrecta = document.querySelector('.correcta');
respuestas.addEventListener('copy', alertResultado);

function alertResultado(e) {
    if(e.target !== respuestaCorrecta) {
        alert("Prueba de nuevo")
    } else {
        alert("Acertaste!")
    }
}