// Seleccionamos los elementos del DOM necesarios
const images = document.querySelectorAll('.paleta-crema');
const nextBtn = document.querySelector('#right-button-crema');
const prevBtn = document.querySelector('#left-button-crema');
const numItems = images.length;
const perPage = 5;
let currentPage = 1;

// Función para mostrar las imágenes correspondientes a la página actual
function showPage(page) {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    // Oculta todas las imágenes
    images.forEach(image => {
        image.parentElement.parentElement.style.display = 'none';
    });

    // Muestra las imágenes de la página actual
    for (let i = startIndex; i < endIndex && i < numItems; i++) {
        images[i].parentElement.parentElement.style.display = 'block';
    }
}

// Función para avanzar a la siguiente página
function nextPage() {
    currentPage += 1;

    // Si se llegó al final, volver a la página 1
    if (currentPage > Math.ceil(numItems / perPage)) {
        currentPage = 1;
    }

    showPage(currentPage);
}

// Función para retroceder a la página anterior
function prevPage() {
    currentPage -= 1;

    // Si se está en la primera página, saltar a la última
    if (currentPage < 1) {
        currentPage = Math.ceil(numItems / perPage);
    }

    showPage(currentPage);
}

// Agrega listeners a los botones de navegación
nextBtn.addEventListener('click', nextPage);
prevBtn.addEventListener('click', prevPage);

// Función para el desplazamiento automático cada 3 segundos
function autoScroll() {
    setInterval(() => {
        nextPage();
    }, 3000);
}

// Inicia el desplazamiento automático
autoScroll();