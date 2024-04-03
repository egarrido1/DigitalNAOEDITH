// archivo sctriptcarrusel.js
/**
 * @fileoverview Configuración y funcionalidad para un carrusel de imágenes.
 * Este script proporciona la lógica para desplazarse automáticamente al siguiente
 * elemento del carrusel cada cierto intervalo de tiempo.
 */

// Configuración del carrusel

// Selecciona el contenedor del carrusel
const carousel = document.querySelector('.carousel-inner');

// Selecciona todos los elementos del carrusel
const carouselItems = document.querySelectorAll('.carousel-item');

// Obtiene el número total de elementos del carrusel
const totalItems = carouselItems.length;

// Obtiene el ancho de un elemento del carrusel (se asume que todos los elementos tienen el mismo ancho)
const itemWidth = carouselItems[0].clientWidth;

// Índice del slide actual
let currentIndex = 0;

// Función para cambiar al siguiente elemento del carrusel
function nextSlide() {
    // Incrementa el índice del slide actual, asegurándose de que no exceda el número total de elementos
    currentIndex = (currentIndex + 1) % totalItems;

    // Aplica una transformación CSS para desplazar el carrusel horizontalmente
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Cambia al siguiente slide cada 3 segundos
setInterval(nextSlide, 3000);
