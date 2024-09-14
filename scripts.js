
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o container do banner onde o banner será inserido
    const bannerContainer = document.getElementById('info-banner-container');
    
    const phrases = [
        'Promoção Especial! 20% de desconto em todos os produtos.',
        'Não perca! Compre 1, leve 2 em produtos selecionados.',
        'Frete grátis para compras acima de R$100!',
        'Oferta relâmpago: 30% de desconto em nossa nova coleção!'
    ];
    
    // Cria o elemento do banner
    const infoBanner = document.createElement('div');
    infoBanner.className = 'info-banner'; // Adiciona a classe de estilo
    
    // Função para alterar o texto do banner
    function updateBannerText() {
        // Escolhe uma frase aleatória da lista
        const randomIndex = Math.floor(Math.random() * phrases.length);
        infoBanner.innerHTML = phrases[randomIndex];
    }
    
    // Define o banner inicial
    updateBannerText();
    
    // Atualiza o banner a cada 5 segundos
    setInterval(updateBannerText, 5000);
    
    // Insere o banner no container
    bannerContainer.appendChild(infoBanner);
});
