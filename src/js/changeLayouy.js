import {
    redBtn, blueBtn, layoutRedHeader, navigationToLeft,
    layoutBlueHeader, layoutRedMain, layoutBlueMain,
    btnToActiveBlue, btnToActiveRed, navigationToRight
} from './variables.js';

export const changeLayout = () => {
    document.addEventListener('click', (e) => {
        if (e.target === blueBtn) {
            layoutBlueHeader.classList.remove('hidden');
            layoutBlueMain.classList.remove('hidden');
            layoutRedHeader.classList.add('hidden');
            layoutRedMain.classList.add('hidden');
            btnToActiveBlue.classList.add('active');
        } else if (e.target === redBtn) {
            layoutRedHeader.classList.remove('hidden');
            layoutRedMain.classList.remove('hidden');
            layoutBlueHeader.classList.add('hidden');
            layoutBlueMain.classList.add('hidden');
            btnToActiveRed.classList.add('active');
        }
    });
};

export const navigationLayout = () => {
    document.addEventListener('click', (e) => {
        if (e.target === navigationToLeft) {
            layoutBlueHeader.classList.remove('hidden');
            layoutBlueMain.classList.remove('hidden');
            layoutRedHeader.classList.add('hidden');
            layoutRedMain.classList.add('hidden');
            btnToActiveBlue.classList.add('active');
        } else if (e.target === navigationToRight) {
            layoutRedHeader.classList.remove('hidden');
            layoutRedMain.classList.remove('hidden');
            layoutBlueHeader.classList.add('hidden');
            layoutBlueMain.classList.add('hidden');
            btnToActiveRed.classList.add('active');
        }
    });
};












