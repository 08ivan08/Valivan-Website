const symbols = ['🍒', '🍊', '🍇', '🍋', '🍎'];
let bonoCounter = parseInt(localStorage.getItem('bonoCounter')) || 0;

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spinReels() {
    // Restablece el color de los bordes a rosa antes de girar los reels
    resetBorders();

    // Elimina el mensaje anterior si existe
    const previousMessage = document.querySelector('.win-message');
    if (previousMessage) {
        previousMessage.remove();
    }

    const reels = document.querySelectorAll('.reel');
    
    reels.forEach((reel, index) => {
        setTimeout(() => {
            const symbol = getRandomSymbol();
            reel.textContent = symbol;
            reel.classList.add('green-border'); // Añade la clase para el cambio de color del borde
        }, index * 500); // Añade un retardo para un efecto de giro escalonado
    });

    // Simula la lógica de ganar bono cuando las tres frutas son iguales
    setTimeout(() => {
        const symbolsArray = Array.from(reels).map(reel => reel.textContent);

        if (symbolsArray.every(symbol => symbol === symbolsArray[0])) {
            bonoCounter++;
            updateWinCounter();
            showWinMessage();
        }

        // Vuelve a poner el borde en rosa después de que cambien las frutas
        resetBorders();
    }, reels.length * 500 + 500); // Añade un retardo adicional para verificar el resultado
}

function showWinMessage() {
    const winMessage = document.createElement('div');
    winMessage.textContent = '¡Ganaste un bono! 🍦';
    winMessage.classList.add('win-message'); // Agrega una clase al mensaje
    winMessage.style.color = '#66cc66'; // Color verde
    winMessage.style.fontSize = '1.5em';
    document.body.appendChild(winMessage);

    // Oculta el mensaje después de 3 segundos
    setTimeout(() => {
        document.body.removeChild(winMessage);
    }, 3000);

    // Guarda la cantidad actualizada en el almacenamiento local
    localStorage.setItem('bonoCounter', bonoCounter.toString());
}

function updateWinCounter() {
    const winCounter = document.getElementById('winCounter');
    winCounter.textContent = bonoCounter;
}

function removeBono() {
    if (bonoCounter > 0) {
        bonoCounter--;
        updateWinCounter();
        // Guarda la cantidad actualizada en el almacenamiento local
        localStorage.setItem('bonoCounter', bonoCounter.toString());
    }
}

function resetBorders() {
    // Vuelve a poner el borde en rosa
    const reels = document.querySelectorAll('.reel');
    reels.forEach((reel) => {
        reel.classList.remove('green-border');
    });
}

// Al cargar la página, actualiza el contador con el valor almacenado localmente
updateWinCounter();
