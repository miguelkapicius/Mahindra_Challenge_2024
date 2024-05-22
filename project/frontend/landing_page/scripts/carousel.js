document.addEventListener('DOMContentLoaded', function() {
    var images = ['assets/bg-1.png', 'assets/bg-2.png', 'assets/bg-3.png']; // Adicione o caminho das suas imagens aqui
    var currentIndex = 0;
    var carousel = document.querySelector('.carousel');

    function changeBackground() {
        carousel.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Altera a imagem a cada 5 segundos (5000 milissegundos)
    setInterval(changeBackground, 5000);

    // Inicializa o carrossel com a primeira imagem
    changeBackground();
});
