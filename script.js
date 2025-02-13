// Carrossel de Depoimentos
let currentIndex = 0;
const depoimentos = document.querySelectorAll(".depoimento-card");
const totalDepoimentos = depoimentos.length;
const depoimentosPorVez = 3;

function mostrarDepoimentos() {
    depoimentos.forEach((depoimento, i) => {
        depoimento.classList.toggle("active", i >= currentIndex && i < currentIndex + depoimentosPorVez);
    });

    currentIndex = (currentIndex + depoimentosPorVez) % totalDepoimentos;
}

mostrarDepoimentos();
setInterval(mostrarDepoimentos, 5999);

// FAQ Toggle
document.querySelectorAll(".faq-pergunta").forEach(item => {
    item.addEventListener("click", () => {
        item.closest(".faq-item").classList.toggle("ativo");
    });
});

// Menu Mobile
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
;




new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});