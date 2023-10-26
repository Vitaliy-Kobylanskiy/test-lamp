import { exploreAllBtn, exploreSaleBtn, exploreItems } from './variables.js';

export const switchProduct = () => {
    exploreSaleBtn.addEventListener('click', e => {
        const target = e.target;

        exploreItems.forEach(item => {
            if (item.dataset.category !== target.dataset.category) {
                item.classList.add('hide-product');
            }
        });
    });

    exploreAllBtn.addEventListener('click', e => {
        const target = e.target;

        exploreItems.forEach(item => {
            if (item.dataset.category === target.dataset.category) {
                item.classList.remove('hide-product');
            }
        });
    });
};

