// JS para DATE LIST

document.addEventListener('DOMContentLoaded', function () {
    const datesList = document.getElementById('dates-list');
    let dateItems = getStoredItems();

    function getDefaultItems() {
        return [
            { text: "1. Ir al cine", completed: false },
            { text: "2. Salir a comer", completed: false },
            {text: "3. Ir al parque", completed: false},
            {text: "4. Día de Picnic", completed: false},
            {text: "5. Cenar en un restaurante bonito", completed: false},
            {text: "6. Roadtrip", completed: false},
            {text: "7. Ir a un museo", completed: false},
            {text: "8. Pedir comida en casa", completed: false},
            {text: "9. Armar un rompecabezas", completed: false},
            {text: "10. Preparar un postre", completed: false},
            {text: "11. Pintar un cuadro", completed: false},
            {text: "12. Armar legos", completed: false},
            {text: "13. Hacer galletas", completed: false},
            {text: "14. Maratón de series o películas", completed: false},
            {text: "15. Ir a la playa", completed: false},
            {text: "16. Ir a un concierto", completed: false},
            {text: "17. Ir a un mirador", completed: false},
            {text: "18. Ir a un zoológico", completed: false},
            {text: "19. Ir de compras", completed: false},
            {text: "20. Hacer paddle", completed: false},
            {text: "21. Ir a un tour gastronómico", completed: false},
            {text: "22. Ir a un circo", completed: false},
            {text: "23. Ir a una fiesta", completed: false},
            {text: "24. Ir a Zero Gravity", completed: false},
            {text: "25. Ir por un helado", completed: false},
            {text: "26. Ir a un cumpleaños", completed: false},
            {text: "27. Ir a los karts", completed: false},
            {text: "28. Ir a una boda", completed: false},
            {text: "29. Ir a una cascada", completed: false},
            {text: "30. Ir al estadio", completed: false},
            {text: "31. Cocinar juntos", completed: false},
            {text: "32. Ir a acampar", completed: false},
            {text: "33. Ver un atardecer", completed: false},
            {text: "34. Ver una película", completed: false},
            {text: "35. Desayunar juntos", completed: false},
            {text: "36. Ver una serie completa", completed: false},
            {text: "37. Hacer origami", completed: false},
            {text: "38. Leer un libro", completed: false},
            {text: "39. Hacer una fogata", completed: false},
            {text: "40. Dibujar algo", completed: false},
            {text: "41. Cultivar una planta", completed: false},
            {text: "42. Ir al teatro", completed: false},
            {text: "43. Vestir iguales", completed: false},
            {text: "44. Disfrazarnos en pareja", completed: false},
            {text: "45. Jugar un videojuego", completed: false},
            {text: "46. Celebrar año nuevo", completed: false},
            {text: "47. Hacer skincare", completed: false},
            {text: "48. Bailar", completed: false},
            {text: "49. Ver un documental", completed: false},
            {text: "50. Escuchar música", completed: false},
            {text: "51. Ir a un festival", completed: false},
            {text: "52. Volar una cometa", completed: false},
            {text: "53. Probar comer algo nuevo", completed: false},
            {text: "54. Pijamada", completed: false},
            {text: "55. Observar las estrellas", completed: false},
            {text: "56. Hacer una cita con temática", completed: false},
            {text: "57. Pasear a nuestras mascotas", completed: false},
            {text: "58. Salir a caminar", completed: false},
            {text: "59. Pasear en cuatrimoto", completed: false},
            {text: "60. Hacer una sesión de fotos", completed: false},
            {text: "61. Hacer una manualidad", completed: false},
            {text: "62. Jugar un juego de mesa", completed: false},
            {text: "63. Escribir un deseo en un globo", completed: false},
            {text: "64. Comer donas", completed: false},
            {text: "65. Pedir pizza", completed: false},
            {text: "66. Ir a un buffet", completed: false},
            {text: "67. Hacer una caja de ahorro", completed: false},
            {text: "68. Hacer una carta", completed: false},
            {text: "69. Ver la luna", completed: false},
            {text: "70. Hacernos un tatuaje", completed: false},
            {text: "71. Ir a un spa", completed: false},
            {text: "72. Ir a un pueblito mágico", completed: false},
            {text: "73. Probar cócteles", completed: false},
            {text: "74. Ir por hamburguesas", completed: false},
            {text: "75. Irnos de paseo", completed: false},
            {text: "76. Viajar en avión", completed: false},
            {text: "77. Salir con amigos", completed: false},
            {text: "78. Hacer panqueques", completed: false},
            {text: "79. Ir a cenar tacos", completed: false},
            {text: "80. Ir a una feria", completed: false},
            {text: "81. Sacar un peluche de una maquina", completed: false},
            {text: "82. Ir a un parque acuático", completed: false},
            {text: "83. Ir a jugar bolos", completed: false},
            {text: "84. Patinar en hielo", completed: false},
            {text: "85. Paseo en bicicleta", completed: false},
            {text: "86. Pasear en moto", completed: false},
            {text: "87. Ir al gimnasio juntos", completed: false},
            {text: "88. Noche de pasta", completed: false},
            {text: "89. Ir por un café", completed: false},
            {text: "90. Pasear en bote", completed: false},
            {text: "91. Salir a correr juntos", completed: false},
            {text: "92. Hacer trekking", completed: false},
            {text: "93. Hacer cerámica", completed: false},
            {text: "94. Barra libre de makis", completed: false},
            {text: "95. Ir a una librería", completed: false},
            {text: "96. Glamping", completed: false},
            {text: "97. Ir a un bar", completed: false},
            {text: "98. Ir a un arcade", completed: false},
            {text: "99. Jugar Paintball", completed: false},
            {text: "100. Ir a un jardín botánico", completed: false}
              
            // ... (añadir el resto de los elementos)
        ];
    }

    function getStoredItems() {
        const storedItems = JSON.parse(localStorage.getItem('dateItems'));
        return storedItems || getDefaultItems();
    }

    function updateStoredItems() {
        localStorage.setItem('dateItems', JSON.stringify(dateItems));
    }

    function renderList() {
        datesList.innerHTML = "";

        if (!dateItems || dateItems.length === 0) {
            dateItems = getDefaultItems();
            updateStoredItems();
        }

        dateItems.forEach((item, index) => {
            const listItem = document.createElement('li');
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `date${index + 1}`;
            checkbox.checked = item.completed;
            
            const label = document.createElement('label');
            label.setAttribute('for', `date${index + 1}`);
            label.textContent = item.text;

            listItem.appendChild(checkbox);
            listItem.appendChild(label);
            
            datesList.appendChild(listItem);

            // Agregar o quitar la clase 'completed' para activar la animación CSS
            listItem.classList.toggle('completed', checkbox.checked);

            // Manejar el evento de tachar/destachar al hacer clic en el checkbox
            checkbox.addEventListener('change', function () {
                item.completed = checkbox.checked;
                updateStoredItems();
                listItem.classList.toggle('completed', checkbox.checked);
            });
        });
    }

    renderList();
});
