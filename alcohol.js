// Seleccionamos los elementos del DOM necesarios
const images3 = document.querySelectorAll('.paleta-alcohol');
const nextBtn3 = document.querySelector('#right-button-alcohol');
const prevBtn3 = document.querySelector('#left-button-alcohol');
const numItems3 = images3.length;
const perPage3 = 5;
let currentPage3 = 1;

// Función para mostrar las imágenes correspondientes a la página actual de la segunda lista
function showPage3(page3) {
    const startIndex3 = (page3 - 1) * perPage3;
    const endIndex3 = startIndex3 + perPage3;

    // Oculta todas las imágenes de la segunda lista
    images3.forEach(image3 => {
        image3.parentElement.parentElement.style.display = 'none';
    });

    // Muestra las imágenes de la página actual de la segunda lista
    for (let i = startIndex3; i < endIndex3 && i < numItems3; i++) {
        images3[i].parentElement.parentElement.style.display = 'block';
    }
}

// Función para avanzar a la siguiente página de la segunda lista
function nextPage3() {
    currentPage3 += 1;

    // Si se llegó al final de la segunda lista, volver a la página 1
    if (currentPage3 > Math.ceil(numItems3 / perPage3)) {
        currentPage3 = 1;
    }

    showPage3(currentPage3);
}

// Función para retroceder a la página anterior de la segunda lista
function prevPage3() {
    currentPage3 -= 1;

    // Si se está en la primera página de la segunda lista, saltar a la última
    if (currentPage3 < 1) {
        currentPage3 = Math.ceil(numItems3 / perPage3);
    }

    showPage3(currentPage3);
}

// Agregamos los listeners para los botones de navegación de la segunda lista
nextBtn3.addEventListener('click', nextPage3);
prevBtn3.addEventListener('click', prevPage3);

// Función para el desplazamiento automático cada 3 segundos
function autoScroll() {
    setInterval(() => {
        nextPage3();
    }, 3000);
}

// Inicia el desplazamiento automático
autoScroll();