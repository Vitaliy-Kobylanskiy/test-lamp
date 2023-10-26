import {
    menuList, layoutRedHeader, layoutBlueHeader, layoutRedMain, closeMenuBtnRed,
    layoutBlueMain, closeMenuBtn, headerBtnBlue, headerBtnRed, menuListRed
} from './variables.js';

export const hideMenuBlue = () => {
    closeMenuBtn.addEventListener('click', () => {
        menuList.classList.add('invisible');
        layoutBlueHeader.classList.remove('blue');
        layoutBlueMain.classList.remove('blue');
    });

    document.addEventListener('click', (e) => {
        if (!menuList.contains(e.target) && e.target !== headerBtnBlue) {
            menuList.classList.add('invisible');
            layoutBlueHeader.classList.remove('blue');
            layoutBlueMain.classList.remove('blue');
        }
    });
};

export const hideMenuRed = () => {
    closeMenuBtnRed.addEventListener('click', () => {
        menuListRed.classList.add('invisible');
        layoutRedHeader.classList.remove('red');
        layoutRedMain.classList.remove('red');
    });

    document.addEventListener('click', (e) => {
        if (!menuListRed.contains(e.target) && e.target !== headerBtnRed) {
            menuListRed.classList.add('invisible');
            layoutRedHeader.classList.remove('red');
            layoutRedMain.classList.remove('red');
        }
    });
};


