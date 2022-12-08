export const displayFunc = (data) => {
    data.leftDice.setAttribute('src', `images/dice${data.randomNumber1}.png`);
    data.rightDice.setAttribute('src', `images/dice${data.randomNumber2}.png`);
    if(data.randomNumber1 > data.randomNumber2){
        data.display.innerHTML = "Player 1 wins!";
    } else if (data.randomNumber2 > data.randomNumber1){
        data.display.innerHTML = "Player 2 wins!";
    } else {
        data.display.innerHTML = "It's a tie!";
    }
}