document.addEventListener("DOMContentLoaded", function () {
    // Función para reiniciar la cuenta regresiva
    function restartCountdown() {
        // Incrementa la fecha objetivo al mes siguiente al mismo tiempo
        targetDate.setMonth(targetDate.getMonth() + 1, targetDate.getDate());
        // Reinicia el intervalo de actualización
        startCountdown();
    }

    // Función para iniciar la cuenta regresiva
    function startCountdown() {
        // Actualiza el countdown cada segundo
        countdownInterval = setInterval(function () {
            const currentDate = new Date().getTime();
            const timeDiff = targetDate - currentDate;

            if (timeDiff <= 0) {
                clearInterval(countdownInterval); // Detén la actualización si el tiempo ha llegado a cero
                showSpecialMessage();
                return;
            }

            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            updateCountdown('days', days);
            updateCountdown('hours', hours);
            updateCountdown('minutes', minutes);
            updateCountdown('seconds', seconds);

        }, 1000);
    }

    // Inicializa la fecha objetivo para el primer conteo
    let targetDate = new Date('2024-01-09T00:00:00');
    // Inicia el primer conteo
    startCountdown();

    // Función para mostrar el mensaje especial
    function showSpecialMessage() {
        const currentDate = new Date();
        // Verifica si es la fecha objetivo
        if (currentDate.getFullYear() === targetDate.getFullYear() &&
            currentDate.getMonth() === targetDate.getMonth() &&
            currentDate.getDate() === targetDate.getDate()) {
            const specialMessageElement = document.createElement('div');
            specialMessageElement.textContent = '¡Feliz Mes Te Quiero Muchoo! 🩷';
            specialMessageElement.classList.add('special-message'); // Agrega una clase al mensaje
            specialMessageElement.style.color = '#66cc66'; // Color rosa
            specialMessageElement.style.fontSize = '2em';
            specialMessageElement.style.position = 'absolute'; // Establece la posición absoluta
            specialMessageElement.style.bottom = '150px'; // Ajusta la posición desde abajo según sea necesario
            specialMessageElement.style.left = '50%'; // Centra horizontalmente
            specialMessageElement.style.transform = 'translateX(-50%)'; // Centra horizontalmente
            document.body.appendChild(specialMessageElement);

            // Espera hasta el final del día y luego reinicia la cuenta regresiva
            const endOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59);
            const timeUntilEndOfDay = endOfDay - currentDate;
            setTimeout(function () {
                document.body.removeChild(specialMessageElement);
                restartCountdown();
            }, timeUntilEndOfDay);
        } else {
            // Si no es la fecha objetivo, reinicia la cuenta regresiva directamente
            restartCountdown();
        }
    }

    // Función para actualizar el valor del contador
    function updateCountdown(unit, value) {
        const unitElement = document.getElementById(`countdown-${unit}`);
        unitElement.querySelector('.countdown-value').textContent = formatWithLeadingZero(value);
    }

    // Función para formatear los valores con un cero inicial
    function formatWithLeadingZero(value) {
        return value < 10 ? `0${value}` : `${value}`;
    }
});
