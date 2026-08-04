const galeria = document.querySelector('.grid-galeria');

let isDown = false;
let startX;
let scrollLeft;

galeria.addEventListener('mousedown', (e) => {
    isDown = true;
    galeria.style.cursor = 'grabbing';
    startX = e.pageX - galeria.offsetLeft;
    scrollLeft = galeria.scrollLeft;
});

galeria.addEventListener('mouseleave', () => {
    isDown = false;
    galeria.style.cursor = 'grab';
});

galeria.addEventListener('mouseup', () => {
    isDown = false;
    galeria.style.cursor = 'grab';
});

galeria.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - galeria.offsetLeft;
    const walk = x - startX;
    galeria.scrollLeft = scrollLeft - walk;
});