function desbloqueia(){
var resultadoT = 100;
var resultadoI = 100;

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