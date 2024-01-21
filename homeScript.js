// JS para login

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe por defecto

        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        // Verifica las credenciales
        if (enteredUsername === 'Valivan' && enteredPassword === 'tqm12345678') {
            // Credenciales correctas, redirige a la página de lista de citas
            window.location.href = 'catalog.html';
        } else {
            // Credenciales incorrectas, podrías mostrar un mensaje de error
            alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
        }
    });
});
