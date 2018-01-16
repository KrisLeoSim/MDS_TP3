function desbloqueia(){
var resultadoT = null;
var resultadoI = null;


    
	if (localStorage.getItem('quizi')) {
        resultadoI = parseInt(localStorage.getItem('quizi'));
		
	}else{
		resultadoI = 0;		
	}
	
	if (localStorage.getItem('quizt')) {
        resultadoT = parseInt(localStorage.getItem('quizt'));
		
	}else{
		resultadoT = 0;
		
	}


	if(resultadoT >= 50 && resultadoI >= 50){
     window.open('TestingIntegrationConteudo_Slide1.html');
	}else{

		if(resultadoT < 50 && resultadoI < 50){
		alert("Tem de ter pelo menos 50% no quiz testing e no quiz integration");
		}else{
			if(resultadoT < 50){
			alert("Tem de ter pelo menos 50% no quiz de testing");
			}else{
				if(resultadoI < 50)
				alert("Tem de ter pelo menos 50% no quiz de integration");
			}
		}

	}

}