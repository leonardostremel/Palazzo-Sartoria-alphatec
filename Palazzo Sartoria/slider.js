let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const progressBar = document.querySelector('.progress');

// Função para mostrar o slide atual
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active')); // Esconde todos os slides
    slides[index].classList.add('active'); // Mostra o slide atual
    progressBar.style.width = '0'; // Reseta a barra de progresso
    setTimeout(() => {
        progressBar.style.width = '100%'; // Anima a barra
    }, 50); // Delay para iniciar a animação
}

// Função para avançar para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Inicia o slider
showSlide(currentSlide);

// Muda de slide a cada 10 segundos
setInterval(nextSlide, 10000);
