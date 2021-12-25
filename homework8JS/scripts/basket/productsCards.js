'use strict';
const pathToImages = 'img';
const pathToProductsImages = `${pathToImages}`;
const featuredItemsEl = document.querySelector('.products-list');

/**
 * Эта функция принимает один из объектов из массива products в файле products.js.
 * @param {ProductDTO} product объект с информацией о продукте
 * @returns {string} html-разметка карточки товара
 */
 function getProductMarkup(product) {
    return `
        <li class="products-item">
        <div class="products-overlay">
                    <button class="btn-add" data-productId="${product.id}">
                    <img class="btn-add-img" src="${pathToImages}/basket_white.svg" alt="">
                    Add to Cart
                    </button>
                    </div>
        
        <img src="${pathToProductsImages}/${product.image}" alt="${product.name}">
                            
                <h3 class="products-name">
                    ${product.name}
                </h3>
                <p class="products-text">
                    ${product.description}
                </p>
                <p class="products-price">
                    $${product.price}
                </p>
                

        </li>
    `;
}

/**
 * Функция вставляет карточки товаров в страницу.
 * @param {ProductDTO[]} products массив товаров из файла products.js
 * @param {HTMLDivElement} featuredItemsEl элемент с классом .featuredItems
 */
function insertProductsIntoPage(products, featuredItemsEl) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getProductMarkup(product);
    }
    featuredItemsEl.insertAdjacentHTML('afterbegin', productsMarkup);
}
/**
 * Функция назначает обработку клика на все кнопки "Add to cart".
 */
function addEventListenersForAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('button[data-productId]');
    addToCartBtns.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    })
}

/**
 * Функция-обработчик события клика по кнопке "Add to cart".
 * @param {MouseEvent} event
 */
function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
}

insertProductsIntoPage(products, featuredItemsEl);
addEventListenersForAddToCartButtons();
