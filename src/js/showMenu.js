import {
    menuList, layoutRedHeader, layoutBlueHeader, layoutRedMain,
    layoutBlueMain, headerBtnBlue, headerBtnRed, menuListRed
} from './variables.js';

export const showMenuBlue = () => {
    headerBtnBlue.addEventListener('click', () => {
        menuList.classList.toggle('invisible');
        layoutBlueHeader.classList.toggle('blue');
        layoutBlueMain.classList.toggle('blue');
    });
};

export const showMenuRed = () => {
    headerBtnRed.addEventListener('click', () => {
        menuListRed.classList.toggle('invisible');
        layoutRedHeader.classList.toggle('red');
        layoutRedMain.classList.toggle('red');
    });
};










