function populate(){
    if(quizt.isEnded()){
        
		localStorage.setItem('quizt', String(quizt.score));
        location.href="Resultados.html";
     
    }
    else{
        //show question
        var element = document.getElementById("question");
        element.innerHTML=quizt.getQuestionIndex().text;

        // show choices
        var choices = quizt.getQuestionIndex().choices;
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
        quizt.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quizt.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quizt.questions.length;
}


function imprimerest(){
    var element = document.getElementById("ptesting");
    var valor = null;
    
	if (localStorage.getItem('quizt')) {
        valor = localStorage.getItem('quizt');
   

    element.innerHTML = "" + valor + "%";
   }else{
	  
    element.innerHTML = "" + "N/A"+ ""; 
	   
   }
};

var questions = [
    new Question("Testing: que posição +e esta _/''''\º ?",
        ["de 2 ", "de 3", "de 4", "de 5"],"de 4"),
   
];





var quizt = new QuizT(questions);



populate();