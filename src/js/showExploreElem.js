import { exploreItems } from './variables.js';

export const showExploreElem = () => {

    exploreItems.forEach(item => {
        const exploreHiddenBlock = item.querySelector('.explore__items-opportunities');

        item.addEventListener('mouseover', () => {
            exploreHiddenBlock.classList.add('visible-block');
            exploreHiddenBlock.classList.remove('hidden-block');
        });

        item.addEventListener('mouseout', () => {
            exploreHiddenBlock.classList.remove('visible-block');
            exploreHiddenBlock.classList.add('hidden-block');
        });
    });
};
