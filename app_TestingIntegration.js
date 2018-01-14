function populate(){
    if(quiz.isEnded()){
        location.href="Resultados.html";
        //showScores();
    }
    else{
        //show question
        var element = document.getElementById("question");
        element.innerHTML=quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i<choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id,guess) {
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guessmaster(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};


var questions = [
    new Question("Testing + Integration Como se chama a mãe do kris ?",
        ["El poderosa", "gutchigutchi", "el comandante", "Rosa a poderosa"],"Rosa a poderosa"),
  
];

var quiz = new Quiz(questions);



populate();