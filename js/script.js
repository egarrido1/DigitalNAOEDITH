// archivo script.js

// Función para validar el formulario
function validateForm(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener el valor del campo de correo electrónico
    var emailInput = document.getElementById('email').value;
    var emailError = document.getElementById('email-error');

    // Expresión regular para verificar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar si el campo de correo electrónico está vacío o no cumple con el formato válido
    if (emailInput === '' || !emailRegex.test(emailInput)) {
        emailError.textContent = 'Por favor, introduce un correo electrónico válido.';
    } else {
        emailError.textContent = ''; // Borrar el mensaje de error si el correo electrónico es válido
        // Aquí puedes agregar código adicional para enviar el formulario o realizar otras acciones
        alert('¡Formulario enviado correctamente!');
    }
}

// Agregar un evento de escucha para el envío del formulario
var form = document.getElementById('signup-form');
form.addEventListener('submit', validateForm);
