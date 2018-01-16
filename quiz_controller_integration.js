function QuizI(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

QuizI.prototype.getQuestionIndex = function(){
    return this.questions[this.questionIndex];
}

QuizI.prototype.isEnded = function(){
    return this.questions.length === this.questionIndex;
}

QuizI.prototype.guess = function(answer){
    if(this.getQuestionIndex().correctAnswer(answer)){
        this.score++;
        alert("Resposta Correta!");
    }
    else{
        alert("Resposta Incorreta!");
    }

    this.questionIndex++;
}
