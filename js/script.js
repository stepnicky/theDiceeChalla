import { displayFunc } from "./function.js";

const button = document.querySelector('.playButton');

button.addEventListener('click', () => {
    const data = {
        randomNumber1: Math.floor(Math.random()*6) + 1,
        randomNumber2: Math.floor(Math.random()*6) + 1,
        leftDice: document.querySelector('.img1'),
        rightDice: document.querySelector('.img2'),
        display: document.querySelector('h1')
    };
    displayFunc(data);
});