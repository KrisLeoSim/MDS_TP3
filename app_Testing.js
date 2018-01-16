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
    new Question("Agile Testing é um conjunto de práticas, seguindo o manifesto ágil, que incorpora todas as técnicas de teste, geralmente utilizadas por _____, tendo um grande foco nos testes _____.",
        ["programadores,manuais","testers,automáticos","programadores,automáticos","testers,manuais"],
        "testers,automáticos"),
    new Question("A principal função do testing é “criticar” o produto?",
        ["Não, pois não garante que o que está a ser especificado e desenvolvido atende às necessidades do cliente.","Sim, pois não garante que o que está a ser especificado e desenvolvido atende às necessidades do cliente.", "Sim, pois garante que o que está a ser especificado e desenvolvido atende às necessidades do cliente.", "Não, pois garante que o que está a ser especificado e desenvolvido atende às necessidades do cliente."],
        "Sim, pois garante que o que está a ser especificado e desenvolvido atende às necessidades do cliente."),
    new Question("Nos métodos tradicionais, o teste é realizado _____ a implementação, enquanto em Agile o teste é realizado _____ a implementação.",
        ["antes, após","durante, após","após, durante","antes, durante"],
        "após, durante"),
    new Question("Um dos princípios de Agile Testing é reduzir a documentação de teste?",
        ["Sim, utilizando uma checklist reutilizável, concentrada na essência e não nos detalhes","Não, pois exige documentação de teste bastante detalhada","Não, utilizando uma checklist reutilizável, concentrada na essência e não nos detalhes","Sim, utilizando uma checklist reutilizável, concentrada nos detalhes e não na essência"],
        "Sim, utilizando uma checklist reutilizável, concentrada na essência e não nos detalhes"),
    new Question("Durante a formação sobre Agile Testing foram apresentados os '10 Mandamentos do Agile Tester'. Das seguintes opções, qual é a resposta correta?",
        ["Um Agile Tester deve ignorar possíveis mudanças, ser auto-organizado e entregar valor ao cliente.", "Um Agile Tester não deve fornecer feedback, responder a possíveis mudanças e ser auto-organizado.", "Um Agile Tester deve fornecer feedback de forma contínua, responder a possíveis mudanças e ser auto-organizado.", "Nenhuma das oções anteriores está correcta."],
        "Um Agile Tester deve fornecer feedback de forma contínua, responder a possíveis mudanças e ser auto-organizado."),
    new Question("Quais das seguintes respostas não é um benefício do testing?",
        ["Melhorar a produtividade do developer","Documentação longa e detalhada","Economizar tempo e dinheiro","Feedback regular do utilizador final/cliente"],
        "Documentação longa e detalhada"),
];

var quizt = new QuizT(questions);

populate();