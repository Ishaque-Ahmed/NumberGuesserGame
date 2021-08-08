let startBtn = document.querySelector('#start');

startBtn.addEventListener('click', guesserGame);

function guesserGame(e) {

        let low = 1;
        let high = 10;

        let correctAnswer = Math.floor((Math.random() * high) + low);

        let i = 0;
        let chance = 2;

        while (i < 3) {

                let input = prompt("Enter A number (1-10)");
                if (typeof (input) === 'object') {
                        alert("You Can Always Restart");
                        break;
                }

                else if (input !== '') {

                        input = parseInt(input);
                        console.log(input);

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
                } else {
                        alert("Enter Valid Input");
                        break;

                }


                i++;
                chance--;
        }
        startBtn.innerHTML = "Restart";
}

