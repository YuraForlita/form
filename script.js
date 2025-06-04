function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('active');
}

const products = {
    lavka1: {
        name: "Лавка номер 1",
        price: "1 200 грн",
        description: "Міцна дерев’яна лавка з натурального дерева.",
        images: [
            "https://images.prom.ua/3247175368_derevyana-lavka-kim.jpg",
            "https://images.prom.ua/3247175368_derevyana-lavka-kim.jpg"
        ]
    },
    lavka2: {
        name: "Лавка номер 2",
        price: "1 350 грн",
        description: "Сучасна лавка з покриттям для вулиці.",
        images: [
            "https://images.prom.ua/3247220200_derevyana-lavka-kim.jpg"
        ]
    }
};

// Отримуємо ID товару з URL
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const product = products[productId];

if (product) {
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('productDescription').textContent = product.description;
    const swiperWrapper = document.getElementById('swiperWrapper');
product.images.forEach((img) => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = `<img src="${img}" alt="Фото товару">`;
    swiperWrapper.appendChild(slide);
});

// ініціалізація Swiper
new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
} else {
    document.querySelector('.product-container').innerHTML = '<p>Товар не знайдено</p>';
}