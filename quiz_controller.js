function Quiz(questions) {
    this.scoretesting = 0;
    this.scoreintegration = 0;
    this.scoremaster = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function(){
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guesstesting = function(answer){
    if(this.getQuestionIndex().correctAnswer(answer)){
        alert("chegou ao testing")
        this.scoretesting++;
        alert("Resposta Correta!");
    }
    else{
        alert("Resposta Incorreta!");
    }

    this.questionIndex++;
}

Quiz.prototype.guessintegration = function(answer){
    if(this.getQuestionIndex().correctAnswer(answer)){
        this.scoreintegration++;
        alert("Resposta Correta!");
    }
    else{
        alert("Resposta Incorreta!");
    }

    this.questionIndex++;
}

Quiz.prototype.guessmaster = function(answer){
    if(this.getQuestionIndex().correctAnswer(answer)){
        this.scoremaster++;
        alert("Resposta Correta!");
    }
    else{
        alert("Resposta Incorreta!");
    }

    this.questionIndex++;
}