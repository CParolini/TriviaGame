var questions = [question1 = new question("Which team is not in the NFC East?", "New England Patriots", "Dallas Cowboys", "Philadelphia Eagles", "Washington Redskins", "New England Patriots", "New England Patriots are a member of the AFC North. The last remaining team of the NFC East is the New York Giants."), question2 = new question("Who is the all time leading rusher in the NFL?", "Walter Payton", "Emmitt Smith", "Barry Sanders", "Curtis Martin", "Emmitt Smith", "Smith was also a member of the Dallas Cowboys who won 3 super bowls in the mid to late 1990's."), question3 = new question("Who is currently the NFL Commissioner?", "Jason Garrett", "Robert Kraft", "Roger Goodell", "Tom Brady", "Roger Goodell", "Goodell became the NFL Commissioner in 2006. He's been a controversial commissioner since his inception because of his handling of off the field and on the field issues with players and coaches."), question4 = new question("Who is the winningest coach in NFL history?", "Curly Lambeau", "Don Shula", "Tom Landry", "George Halas", "Don Shula", "Don Shula only coached one team in his career of 25 years, the Miami Dolphins. He was the coach of the only undefeated team in NFL history in 1972.")]

for (var i = 0; i < questions.length; i++) {
    console.log(questions[i]);
}

function(){
  
}

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            // alert("Game Over!");
        }
    }, 1000);
}

window.onload = function() {
    var fiveMinutes = 60 * .25,
        display = document.querySelector('#display');
    startTimer(fiveMinutes, display);
};

function question(q, a1, a2, a3, a4, c1, ex1) {
    this.question = q;
    this.answer1 = a1;
    this.answer2 = a2;
    this.answer3 = a3;
    this.answer4 = a4;
    this.correctAnswer = c1;
    this.explanation = ex1;
}
