'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('.open'),
          products = document.querySelectorAll('.product'),
          btns = document.querySelectorAll('button');

    function createCart() { //создаем корзину
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');

        cart.classList.add('cart'); //добавляем классы
        field.classList.add('cart-field');
        closeBtn.classList.add('close');

        heading.textContent = 'В нашей корзине:';
        closeBtn.textContent = 'Закрыть';

        document.body.appendChild(cart); //помещаем корзину на сайт
        cart.appendChild(heading); //помещаем элементы
        cart.appendChild(field);
        cart.appendChild(closeBtn);
    }
    createCart();

    let cart = document.querySelector('.cart'),
        field = document.querySelector('.cart-field'),
        closeBtn = document.querySelector('.close');

    function openCart() {
        cart.classList.add('show');
        cart.classList.remove('hide');
    }
    function closeCart() {
        cart.classList.remove('show');
        cart.classList.add('hide');
    }
    
    openBtn.addEventListener('click', openCart);

    closeBtn.addEventListener('click', closeCart);

    btns.forEach((item, i) => {
        item.addEventListener('click', () => {
            let product = products[i].cloneNode(true), //создаем клона
                btn = product.querySelector('button'); //у клона находим конпку

            btn.remove();
            field.appendChild(product); //добавляем карточку товара в поле корзины
            products[i].remove(); //удаляем карточку
        });
    });
});