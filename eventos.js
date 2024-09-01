document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('botonSaludar');
    boton.addEventListener('click', () => {
        alert ('Hola!');
});

const divContainer = document.querySelector('.container');

divContainer.addEventListener('click', () => {

 alert('Hola! Soy el div');

});

});

