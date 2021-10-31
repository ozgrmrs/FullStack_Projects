let count_guess = 0;
let guessed_num = [];
let number = Math.floor(Math.random()* 100 + 1);

document.getElementById("button").onclick = () => {
    var input = document.getElementById("guess").ariaValueMax;

    if (input === ""){
        alert("You must enter a number!");
    }
    if (input <= 0 || input > 100) {
        alert("Please enter a number between 1-100");
    }
    if (isNaN(input)){
        document.getElementById("span1").innerText = "Please try again!";
        document.getElementById("span1").style.color = "green";
        alert("Please enter a number:");
        document.getElementById("guess").value = "";
        }
        if (!isNaN(input)&& input !== " "){
            guessed_num.push(input);
        }
        
    if (input > number){
        count_guess++;
        document.getElementById("span1").innerText = "Please enter a lower number.";
        document.getElementById("span2").innerText = `Number of attempts is ${count_guess}`;
        document.getElementById("span3").innerText = `Tried numbers: ${ count_guess }`;
    }  
    if (input < number){
        count_guess++;
        document.getElementById("span1").innerText = "Please enter a higher number.";
        document.getElementById("span2").innerText = `Number of attempts is ${ count_guess }`;
        document.getElementById("span3").innerText = `Tried numbers:${ count_guess }`;
    }  
    if (input == number){
        count_guess++;
        document.getElementById("span1").innerText = "You are Genious!!! Well Done.";
        document.getElementById("span2").innerText = `You guessed the number at${ count_guess + 1 }attempts`;
        document.getElementById("span3").innerText = `Want to play again click "PLAY AGAIN";
        stopProgress();
    }  
   document.getElementById("guess).value = '';
}
document.getElementById("reset").onclick = function () {
    location.reload();
}
document.getElementById("guess").addEventListener('keyup', function (event){
    if (event.code === 'Enter') {
        event.preventDefault();
        document.getElementById('button').click();
        document.getElementById('guess').valıe = '';
    }
});

function stopProgress(){
    let my_button = document.getElementById('button');
    let guess = document.getElementById('guess');
    my_button.style.display= 'none';
    guess.disabled = true;
    guess.placeholder = 'YOU WIN';
};