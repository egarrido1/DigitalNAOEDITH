// archivo script.js
/**
 * @fileoverview Este archivo contiene el script principal para validar un formulario.
 * Proporciona funciones para validar los campos del formulario y manejar el envío del formulario.
 * Este script utiliza expresiones regulares para la validación de campos.
 */

// Función para validar el formulario
// Esta función recibe un objeto evento que representa este evento de envío.
// Esta función no devuelve ningún valor explícito. En su lugar,
// su comportamiento se basa en manipular el DOM y envía mensajes 
// error si  los campos del formulario no cumplan con las validaciones
// establecidas. Sin embargo, si todos los campos del formulario son válidos,
// la función realiza una redirección a una página de agradecimiento 
// thankyou.html.
function validateForm(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores de los campos del formulario
    var nombreInput = document.getElementById('nombre').value;
    var apellidoInput = document.getElementById('apellido').value;
    var telefonoInput = document.getElementById('telefono').value;
    var emailInput = document.getElementById('email').value;

    // Expresiones regulares para verificar los formatos de los campos
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telefonoRegex = /^\d{10}$/;

    // Mensajes de error
    var nombreError = document.getElementById('nombre-error');
    var apellidoError = document.getElementById('apellido-error');
    var telefonoError = document.getElementById('telefono-error');
    var emailError = document.getElementById('email-error');

    // Validar nombre
    if (nombreInput.trim() === '') {
        nombreError.textContent = 'Por favor, introduce tu nombre.';
    } else {
        nombreError.textContent = '';
    }

    // Validar apellido
    if (apellidoInput.trim() === '') {
        apellidoError.textContent = 'Por favor, introduce tu apellido.';
    } else {
        apellidoError.textContent = '';
    }

    // Validar teléfono
    if (!telefonoRegex.test(telefonoInput)) {
        telefonoError.textContent = 'Por favor, introduce un número de teléfono válido.';
    } else {
        telefonoError.textContent = '';
    }

    // Validar correo electrónico
    if (emailInput.trim() === '' || !emailRegex.test(emailInput)) {
        emailError.textContent = 'Por favor, introduce un correo electrónico válido.';
    } else {
        emailError.textContent = '';
    }

    // Comprobar si todos los campos son válidos
    if (nombreInput.trim() !== '' && apellidoInput.trim() !== '' && telefonoRegex.test(telefonoInput) && emailRegex.test(emailInput)) {
        // Redirigir a la página de agradecimiento
        window.location.href = "thankyou.html";
    }
}

// Agregar un evento de escucha para el envío del formulario
var form = document.getElementById('registro-form');
form.addEventListener('submit', validateForm);