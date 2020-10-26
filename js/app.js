const operators = ['+', '-', '*', '/'];
const maxNum = 10;

const userInput = document.querySelector("#guessNumb");
const submitBtn = document.querySelector("#guessSubmit");
const statsBtn = document.querySelector("#resetStats");
const primNumb = document.querySelector("#primaryNumber");
const secNumb = document.querySelector("#secondaryNumber");
const mathOp = document.querySelector("#mathOperator");
const gameHistoryW = document.querySelector("#gameHistoryWins");
const gameHistoryL = document.querySelector("#gameHistoryLoses");
const correctHTML = document.querySelector(".correctCount");
const incorrectHTML = document.querySelector(".incorrectCount");

let opindex;
let firstNumber;
let secondNumber;

let result;
let correctCount = 0;
let incorrectCount = 0;

window.onload = (event) => {
    generate();
    updateDisplay();
    submitBtn.addEventListener("click", function() {
        event.preventDefault();
        checkAnswer(userInput.value);
    });
    statsBtn.addEventListener("click", function() {
        event.preventDefault();
        resetStatistics();
    });
};

function updateDisplay() {
    userInput.value = "";
    primNumb.innerHTML = firstNumber;
    secNumb.innerHTML = secondNumber;
    mathOp.innerHTML = operators[opindex];
}

function updateStatistics(ans) {
    let dispStr = `<li>${firstNumber} ${operators[opindex]} ${secondNumber} = ${userInput.value}`
    if (ans === "correct") {
        gameHistoryW.insertAdjacentHTML('afterbegin', `${dispStr} <span>Correct</span></li>`);
        correctCount++;
        correctHTML.innerHTML = `Correct answers: ${correctCount}`;
    } else if (ans === "incorrect") {
        gameHistoryL.insertAdjacentHTML('afterbegin', `${dispStr} <span>Incorrect</span></li>`);
        incorrectCount++;
        incorrectHTML.innerHTML = `Incorrect answers: ${incorrectCount}`;
    }
}

function resetStatistics() {
    correctCount = 0;
    incorrectCount = 0;
    gameHistoryW.innerHTML = "";
    gameHistoryL.innerHTML = "";
    correctHTML.innerHTML = `Correct answers: ${correctCount}`;
    incorrectHTML.innerHTML = `Incorrect answers: ${incorrectCount}`;
}

function checkAnswer(answer) {
    switch (opindex) {
        case 0:
            result = firstNumber + secondNumber;
            break;
        case 1:
            result = firstNumber - secondNumber;
            break;
        case 2:
            result = firstNumber * secondNumber;
            break;
        case 3:
            result = firstNumber / secondNumber;
            break;
    }
    if (parseInt(answer) === result) {
        updateStatistics("correct");
        generate();
        updateDisplay();
    } else {
        updateStatistics("incorrect");
        generate();
        updateDisplay();
    }
}

function generate() {
    firstNumber = Math.floor((Math.random() * maxNum) + 1);
    secondNumber = Math.floor((Math.random() * maxNum) + 1);
    opindex = Math.floor((Math.random() * 2) + 1);
}