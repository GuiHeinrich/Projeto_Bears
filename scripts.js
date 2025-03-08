
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


document.addEventListener('DOMContentLoaded', () => {
    let boxBuscar = document.querySelector('.searchBox');
    let lupa = document.querySelector('.lupaSearch');
    let btnFechar = document.querySelector('.buttonClose');

    boxBuscar.style.backgroundColor = "#2C1105";
    boxBuscar.style.color = "#2C1105";

    lupa.addEventListener('click', () => {
        boxBuscar.classList.add('ativar');
        boxBuscar.style.backgroundColor = "#fff"; 
        boxBuscar.style.color = "#2C1105"; 
    });

    btnFechar.addEventListener('click', () => {
        boxBuscar.classList.remove('ativar');

        boxBuscar.addEventListener('transitionend', () => {
            boxBuscar.style.backgroundColor = "#2C1105"; 
            boxBuscar.style.color = "#2C1105";
        }, { once: true });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const mainLogin = document.querySelector('.main-login');
    const registerLink = document.querySelectorAll('.register-link');
    const openPopupButton = document.getElementById('openPopup');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');

    openPopupButton.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    registerLink.forEach(link => {
        link.addEventListener('click', () => {
            mainLogin.classList.toggle('flip');
        });
    });
});

document.addEventListener("wheel", function (event) {
    if (event.ctrlKey && event.deltaY > 0) { // Só bloqueia zoom out
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener("keydown", function (event) {
    if ((event.ctrlKey || event.metaKey) && (event.key === "-" || event.key === "0")) {
        event.preventDefault();
    }
});

const track = document.querySelector(".carousel-track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
const totalImages = document.querySelectorAll(".carousel-track img").length;
const visibleImages = 4;

prevBtn.addEventListener("click", () => {
  index = index > 0 ? index - 1 : totalImages - visibleImages;
  track.style.transform = `translateX(-${index * (100 / visibleImages)}%)`;
});

nextBtn.addEventListener("click", () => {
  index = index < totalImages - visibleImages ? index + 1 : 0;
  track.style.transform = `translateX(-${index * (100 / visibleImages)}%)`;
});

