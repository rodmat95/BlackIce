// Seleccionamos los elementos del DOM necesarios
const images2 = document.querySelectorAll('.paleta-cheesecake');
const nextBtn2 = document.querySelector('#right-button-cheesecake');
const prevBtn2 = document.querySelector('#left-button-cheesecake');
const numItems2 = images2.length;
const perPage2 = 5;
let currentPage2 = 1;

// Función para mostrar las imágenes correspondientes a la página actual de la segunda lista
function showPage2(page2) {
    const startIndex2 = (page2 - 1) * perPage2;
    const endIndex2 = startIndex2 + perPage2;

    // Oculta todas las imágenes de la segunda lista
    images2.forEach(image2 => {
        image2.parentElement.parentElement.style.display = 'none';
    });

    // Muestra las imágenes de la página actual de la segunda lista
    for (let i = startIndex2; i < endIndex2 && i < numItems2; i++) {
        images2[i].parentElement.parentElement.style.display = 'block';
    }
}

// Función para avanzar a la siguiente página de la segunda lista
function nextPage2() {
    currentPage2 += 1;

    // Si se llegó al final de la segunda lista, volver a la página 1
    if (currentPage2 > Math.ceil(numItems2 / perPage2)) {
        currentPage2 = 1;
    }

    showPage2(currentPage2);
}

// Función para retroceder a la página anterior de la segunda lista
function prevPage2() {
    currentPage2 -= 1;

    // Si se está en la primera página de la segunda lista, saltar a la última
    if (currentPage2 < 1) {
        currentPage2 = Math.ceil(numItems2 / perPage2);
    }

    showPage2(currentPage2);
}

// Agregamos los listeners para los botones de navegación de la segunda lista
nextBtn2.addEventListener('click', nextPage2);
prevBtn2.addEventListener('click', prevPage2);

// Función para el desplazamiento automático cada 3 segundos
function autoScroll() {
    setInterval(() => {
        nextPage2();
    }, 3000);
}

// Inicia el desplazamiento automático
autoScroll();