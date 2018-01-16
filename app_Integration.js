function populate(){
    if(quizi.isEnded()){

		localStorage.setItem('quizi', String(quizi.score));
        location.href="Resultados.html";
		
    }
    else{
        //show question
        var element = document.getElementById("question");
        element.innerHTML=quizi.getQuestionIndex().text;

        // show choices
        var choices = quizi.getQuestionIndex().choices;
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
        quizi.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quizi.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quizi.questions.length;
}

function imprimeresi(){
	
	var element = document.getElementById("pintegration");
	var valor = null;
    
	if (localStorage.getItem('quizi')) {
        valor = localStorage.getItem('quizi');
   

    element.innerHTML = "" + valor + "%";
   }else{
	  
    element.innerHTML = "" + "N/A"+ ""; 
	   
   }
	
	

	
};

var questions = [
    new Question("'Continuous integration' é o processo que permite integrar alterações parciais de forma frequente ao longo do desenvolvimento do código, com o objetivo de _____ a entrega do software e _____ os tempos de integração.",
        ["acelerar, aumentar", "acelerar, diminuir", "atrasar, diminuir", "atrasar, aumentar"],"acelerar, diminuir"),
    new Question("A integração contínua é necessária?",
        ["Não, pois aumenta a possibilidade de deslizes na entrega", "Não, pois é feita em grandes intervalos de tempo", "Sim, pois ajuda a identificar problemas e a tomar decisões apropriadas", "Sim, pois exige intervenção humana em grande parte do processo"], "Sim, pois ajuda a identificar problemas e a tomar decisões apropriadas"),
    new Question("A integração pode ser _____, semanal, _____, sendo que deve ser feita, obviamente, de forma _____.",
        ["diária, noturna, contínua","diária, mensal, descontínua","mensal, anual, descontinua","diária , anual, contínua"], "diária, noturna, contínua"),
    new Question("O sistema de controlo de versões resolve alguns problemas quando trabalhamos em equipa?",
        ["Não, pois partilha informações de forma a ter a última versão válida","Não, pois não previne que os developers refaçam o trabalho já desenvolvido","Sim, pois previne que os developers refaçam o trabalho já desenvolvido","Sim, pois partilha informações de forma a ter a primeira versão válida"], "Sim, pois previne que os developers refaçam o trabalho já desenvolvido"),
    new Question("Para a integração contínua é importante que a equipa possa trabalhar em grupo, para isso é importante que se tenha um sistema de controlo de versões, que tem como benefícios:",
        ["Comparar código","Possibilidade de restauro de versões anteriores do sistema","Gerir as alterações efectuadas no sistema","Todas as anteriores"], "Todas as anteriores"),
];


var quizi = new QuizI(questions);



populate();