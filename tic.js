let lastValue = "O";
let display = document.getElementById('display');
display.textContent = "player 1's turn to play";
// get all buttons
let buttons = document.querySelectorAll(".box");
console.log(buttons);
for (let button of buttons) {
    button.addEventListener('click', () => {
        if (button.textContent !== "") {
            return
        };

        if (lastValue === "O") {
            button.textContent = "X";
            lastValue = "X";
            display.textContent = "player 2's turn to play"
            checkGameStatus()
            checkDraw();
        } else {
            button.textContent = "O";
            lastValue = "O"
            display.textContent = "player 1's turn to play ";
            checkGameStatus();
            checkDraw();
        };
    });
};

let controlBtn = document.getElementById('controlBtn');
controlBtn.addEventListener('click', () => {
    window.location.href = 'tic.html'
})
