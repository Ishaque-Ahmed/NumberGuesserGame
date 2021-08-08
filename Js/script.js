let startBtn = document.querySelector('#start');

startBtn.addEventListener('click', guesserGame);

function guesserGame(e) {

        let low = 1;
        let high = 10;

        let correctAnswer = Math.floor((Math.random() * high) + low);

        let i = 0;
        let chance = 2;

        while (i < 3) {

                let input = parseInt(prompt("Enter A number (1-10)"));

                if (input === correctAnswer) {
                        alert("You Win");
                        break;
                }
                else if (input < correctAnswer) {
                        if (i == 2) { alert("you Lose"); }
                        else {
                                alert("Correct answer's greater!\nChances Remaining " + chance);
                        }

                }
                else {
                        if (i == 2) { alert("you Lose"); }
                        else {
                                alert("Correct answer's smaller\n!Chances Remaing " + chance);
                        }

                }
                i++;
                chance--;
        }
        startBtn.innerHTML = "Restart";
}

