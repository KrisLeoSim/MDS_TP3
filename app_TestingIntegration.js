function populate(){
    if(quizm.isEnded()){
        
		
		
		localStorage.setItem('quizm', String(quizm.score));
        location.href="Resultados.html";

    }
    else{
        //show question
        var element = document.getElementById("question");
        element.innerHTML=quizm.getQuestionIndex().text;

        // show choices
        var choices = quizm.getQuestionIndex().choices;
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
        quizm.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quizm.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quizm.questions.length;
}

function imprimeresm(){
    var element = document.getElementById("pmaster");    
	var valor = null;
    
	if (localStorage.getItem('quizm')) {
        valor = parseInt(localStorage.getItem('quizm'));
   

    element.innerHTML = "" + valor + "%";
   }else{
	  
    element.innerHTML = "" + "N/A"+ ""; 
	   
   }
};


var questions = [
    new Question("Testing + Integration Como se chama a mãe do kris ?",
        ["El poderosa", "gutchigutchi", "el comandante", "Rosa a poderosa"],"Rosa a poderosa"),
  
];

var quizm = new QuizM(questions);



populate();