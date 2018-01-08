function populate(){
    if(quiz.isEnded()){
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
        quiz.guess(guess);
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
    new Question("'Continuous integration' é o processo que permite integrar alterações parciais de forma frequente ao longo do desenvolvimento do código, com o objetivo de _____ a entrega do software e _____ os tempos de integração.",
        ["acelerar, aumentar", "acelerar, diminuir", "atrasar, diminuir", "atrasar, aumentar"],"acelerar, diminuir"),
    new Question("A integração contínua é necessária?",
        ["Não, pois aumenta a possibilidade de deslizes na entrega", "Não, pois é feita em grandes intervalos de tempo", "Sim, pois ajuda a identificar bugs e a tomar decisões apropriadas", "Sim, pois exige intervenção humana em grande parte do processo"], "Sim, pois ajuda a identificar problemas e a tomar decisões apropriadas"),
    new Question("O sistema de controlo de versões resolve alguns problemas quando trabalhamos em equipa?",
        ["Não, pois partilha informações de forma a ter a última versão válida","Não, pois não previne que os developers refaçam o trabalho já desenvolvido","Sim, pois previne que os developers refaçam o trabalho já desenvolvido","Sim, pois partilha informações de forma a ter a primeira versão válida"], "Sim, pois previne que os developers refaçam o trabalho já desenvolvido"),
   /* new Question("pergunta 4 ... ?",["RespA","RespB","RespC","RespD"], "RespD"),
    new Question("pergunta 5 ... ?",["RespA","RespB","RespC","RespD"], "RespA")*/
];

var quiz = new Quiz(questions);

populate();