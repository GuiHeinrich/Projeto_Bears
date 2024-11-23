
document.addEventListener('DOMContentLoaded', () => {
    
    const bannerContainer = document.getElementById('info-banner-container');
    
    const phrases = [
        'Promoção Especial! 20% de desconto em todos os produtos.',
        'Não perca! Compre 1, leve 2 em produtos selecionados.',
        'Frete grátis para compras acima de R$100!',
        'Oferta relâmpago: 30% de desconto em nossa nova coleção!'
    ];
    
    const infoBanner = document.createElement('div');
    infoBanner.className = 'info-banner';
    
    function updateBannerText() {
        
        const randomIndex = Math.floor(Math.random() * phrases.length);
        infoBanner.innerHTML = phrases[randomIndex];
    }
    
    updateBannerText();
    
    setInterval(updateBannerText, 5000);
    
    bannerContainer.appendChild(infoBanner);
});


let boxBuscar = document.querySelector('.searchBox');
let lupa = document.querySelector('.lupaSearch');
let btnFechar = document.querySelector('.buttonClose');
let buttonConfirm = false;

lupa.addEventListener('click', ()=>{
    boxBuscar.classList.add('ativar')
    buttonConfirm = false;
})

btnFechar.addEventListener('click', ()=>{
    boxBuscar.classList.remove('ativar')
    buttonConfirm = true;
})


const openPopupButton = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("closePopup");


openPopupButton.addEventListener("click", () => {
    popup.style.display = "flex"; // Exibe o popup
});


closePopupButton.addEventListener("click", () => {
    popup.style.display = "none"; // Fecha o popup
});