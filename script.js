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
            "https://images.prom.ua/3247220200_derevyana-lavka-kim.jpg",
            "https://images.prom.ua/3247224895_derevyana-lavka-kim.jpg",
            "https://images.prom.ua/3247171662_derevyana-lavka-kim.jpg"
        ]
    },
    lavka2: {
        name: "Лавка номер 2",
        price: "1 350 грн",
        description: "Сучасна лавка з покриттям для вулиці.",
        images: [
            "https://images.prom.ua/3247175368_derevyana-lavka-kim.jpg",
            "https://images.prom.ua/3247220200_derevyana-lavka-kim.jpg",
            "https://images.prom.ua/3247224895_derevyana-lavka-kim.jpg",
            "https://images.prom.ua/3247171662_derevyana-lavka-kim.jpg"
        ]
    },
    lavka3: {
        name: "Лавка номер 3",
        price: "5 350 грн",
        description: "Афігена лавка для вулиці.",
        images: [
            "https://images.prom.ua/3247175368_derevyana-lavka-kim.jpg",
            "https://images.prom.ua/3247220200_derevyana-lavka-kim.jpg",
            "https://images.prom.ua/3247224895_derevyana-lavka-kim.jpg",
            "https://images.prom.ua/3247171662_derevyana-lavka-kim.jpg"
        ]
    },
    lavka4: {
        name: "Лавка номер 4",
        price: "5 350 грн",
        description: "лавка на якій можна файно посидіти, хаха.",
        images: [
            "https://images.prom.ua/3247175368_derevyana-lavka-kim.jpg",
            "https://images.prom.ua/3247220200_derevyana-lavka-kim.jpg",
            "https://images.prom.ua/3247224895_derevyana-lavka-kim.jpg",
            "https://images.prom.ua/3247171662_derevyana-lavka-kim.jpg"
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
    document.getElementById('mainImage').src = product.images[0];

    const gallery = document.getElementById('gallery');
    product.images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.onclick = () => document.getElementById('mainImage').src = img;
        gallery.appendChild(thumb);
    });
} else {
    document.querySelector('.product-container').innerHTML = '<p>Товар не знайдено</p>';
}