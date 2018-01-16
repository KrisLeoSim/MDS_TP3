function populate(){
    if(quizm.isEnded()){
        
		
		
		localStorage.setItem('quizm', String(quizm.score * 20));
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
    new Question("Quais são os 4 passos que constituem a fase de Continuous Integration? (atenção à ordem)",
        ["Commit, Build, Testes Manuais, Implementação", "Commit, Build, Implementação, Testes Automáticos", "Commit, Build, Implementação, Testes Manuais", "Commit, Build, Testes Automáticos, Implementação"],
        "Commit, Build, Testes Automáticos, Implementação"),
    new Question("A criação dos testes automáticos permitem aos desenvolvedores analisarem os erros de integração. Uma boa prática é a utilização de frameworks XUnits. Quais das relações framework XUnit/linguagem de programação esta correta?",
        ["PHPUnit / C++","CppUnit / C++","JUnit / PHP","CppUnit / Java"],
        "CppUnit / C++"),
    new Question("Os testes _____ concentram-se numa única “unidade de código”, geralmente uma função de um objecto ou módulo.",
        ["de integração","funcionais","unitários","de aceitação"],
        "unitários"),
    new Question("Ao usar o BDD como cenário de teste, a equipa tem a possibilidade de manter a documentação viva, obter o feedback rápido e alinhar a comunicação com a equipa e com o cliente. Para escrever bons cenários, "
        ["A equipa deve ser envolvida no processo","Devem descrever o comportamento passo a passo","Os cenários devem ser dependentes","Não se deve seguir a linguagem da história do utilizador"],
        "A equipa deve ser envolvida no processo"),
    new Question("TDD (Test Driven Development) é um desenvolvimento orientado por _____ , isto é, depois de efectuar a implementação da/do _____  cria-se a/o _____ .",
        ["funcionalidades,teste,funcionalidade","testes,teste,funcionalidade","testes,funcionalidade,teste","funcionalidades,funcionalidade,teste"],
        ""),
];

var quizm = new QuizM(questions);



populate();