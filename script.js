// Função para detectar o scroll e aplicar a animação nas seções e imagens
window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('.section-hidden');
    let imagens = document.querySelectorAll('.imagens figure'); // Selecionando as imagens

    // Animar as seções
    sections.forEach(function(section) {
        let sectionTop = section.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) { // Quando a seção estiver visível
            section.classList.add('section-visible');
        }
    });

    // Animar as imagens na seção "Nossa História"
    imagens.forEach(function(imagem) {
        let imagemTop = imagem.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (imagemTop < windowHeight - 100) { // Quando a imagem estiver visível
            imagem.classList.add('visible');
        }
    });
});

// Adicionar a classe "section-hidden" ao carregar a página para inicializar
document.addEventListener('DOMContentLoaded', function() {
    // Inicializando as animações de todas as seções
    let sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.add('section-hidden');
    });

    // Inicializando a animação das imagens dentro da seção "Nossa História"
    let imagens = document.querySelectorAll('.imagens figure');
    imagens.forEach(function(imagem) {
        imagem.classList.add('section-hidden');  // Inicializa o estado oculto das imagens
    });

    // Definindo a visibilidade do conteúdo quando a página carregar
    document.body.classList.add('loaded');
});
