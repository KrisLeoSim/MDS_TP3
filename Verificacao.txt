function desbloqueia(){
var resultadoT = getResultadoT();
var resultadoI = getResultadoI();

	if((resultadoT + resultadoI) >= 100){
     window.location('TestingIntegrationConteudo_Slide1.html');
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