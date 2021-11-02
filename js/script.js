// Carrossel

let lista = [];
	lista.push("imagens/lampadas.jpg");
	lista.push("imagens/notebook.jpg");
    lista.push("imagens/trabalho.jpg");

let textH3 = [];
    textH3.push("Coloque sua Idéia em Prática.");
    textH3.push("Técnologia de ponta.");
    textH3.push("Relaxe, nós fazemos por você.");

let textP = [];
    textP.push("Colocamos suas idéias em execução da melhor e mais eficiente forma possível.");
    textP.push("As mais modernas tecnologias para atender sua nescessidade.");
    textP.push("Uma equipe focada em solucionar o seu problema.");

	let i = 0;

	function anterior() {
		if(i == 0){
			i = lista.length-1;
		} else {
			i--;
		}
		document.getElementById("imgCarrossel").src = lista[i];
        document.getElementById("textH3").innerHTML = textH3[i];
        document.getElementById("textP").innerHTML = textP[i];
	}

	function proximo() {
		if (i == lista.length-1) {
			i = 0;
		} else {
			i++;
		}
		document.getElementById("imgCarrossel").src = lista[i];
        document.getElementById("textH3").innerHTML = textH3[i];
        document.getElementById("textP").innerHTML = textP[i];
	}

    // Curriculo

    function validandoTexto(texto) {
        let aux = document.getElementById(texto).value;
        if (aux == null || aux == ""){
            document.getElementById(texto).style.borderBottomColor = "red";
        } else{

            aux = aux.trim();

            while(aux.includes("  ")) {
                aux = aux.replace("  ", " ");
            }

            if(verSeLetra(aux)){
                document.getElementById(texto).value = aux;
                document.getElementById(texto).style.borderBottomColor = "green";
            }else{
            alert("Favor verificar o Campo, pode estar com caracter indesejado.");
            document.getElementById(texto).style.borderBottomColor = "red";
            }

        }
    }//fim da fun��o tratamento


    function verSeLetra(letra){
       while(letra.includes(" ")) {//retirando os espa�o entre as palavras
            letra = letra.replace(" ", "");
        }
        letra = letra.toUpperCase();

        let alfabeto = "ABCDEFGHIJKLMNOPQRSTUWXYabcdefghijklmnopqrstuwxyz";
        for (let i =0; i<alfabeto.length; i++){

          while(letra.includes(alfabeto.charAt(i))){
               letra = letra.replace(alfabeto.charAt(i), "");
          }//fim while

        }//fim do for

        if(letra.length==0){
            return true;
        }else{
            return false;
        }

    }//fim da funcao se Letras

    function analiseEmail() {

        let email = document.getElementById("Email").value;

        if (email == null || email == ""){
            document.getElementById("Email").style.borderBottomColor = "red";
        } else{
            let emailAux = email.toLowerCase().trim();
            while(emailAux.includes(" ")) {
                emailAux = emailAux.replace(" ", "");
            }

            let com = emailAux.indexOf(".com");
            let arroba = emailAux.indexOf("@");

            if (arroba==-1 || com==-1) {
                document.getElementById("Email").style.borderBottomColor = "red";

            } else if(verSeEmail(emailAux)){
                    document.getElementById('Email').value = emailAux;
                    document.getElementById("Email").style.borderBottomColor = "green";
                }else{
                    document.getElementById("Email").style.borderBottomColor = "red";
                }
        }
    } //fim func analiseEmail

    function verSeEmail(letra){
        while(letra.includes(" ")) {
             letra = letra.replace(" ", "");
         }

         let alfabeto = "ABCDEFGHIJKLMNOPQRSTUWXYabcdefghijklmnopqrstuwxyz.@_1234567890";
         for (let i =0; i<alfabeto.length; i++){

           while(letra.includes(alfabeto.charAt(i))){
                letra = letra.replace(alfabeto.charAt(i), "");
           }//fim while

         }//fim do for

         if(letra.length==0){
             return true;
         }else{
             return false;
         }

     }//fim da funcao se Letras

     function verificarRG(){
        let aux =  document.getElementById("irg").value;
        aux = aux.trim();

        if(aux.length==12){
            aux = aux.replace(".", "");
            aux = aux.replace(".", "");
            aux = aux.replace("-", "");
        }

        if(aux.length==9 && verSeNumero(aux)){
            let rgFormat = aux.substring(0, 2) + "." + aux.substring(2, 5) + "." + aux.substring(5, 8) +
            "-" + aux.substring(8);
            document.getElementById("irg").value = rgFormat;
            document.getElementById("irg").style.borderBottomColor = "green";
        }else{
            document.getElementById("irg").style.borderBottomColor = "red";
        }
    }//fim fun��o RG

    function verificarCPF(){
        let aux =  document.getElementById("icpf").value;
        aux = aux.trim();

        if(aux.length==14){
            aux = aux.replace(".", "");
            aux = aux.replace(".", "");
            aux = aux.replace("-", "");
        }

        if(aux.length==11 && verSeNumero(aux)){
            let cpfFormat = aux.substring(0, 3) + "." + aux.substring(3, 6) + "." + aux.substring(6, 9) +
            "-" + aux.substring(9);
            document.getElementById("icpf").value = cpfFormat;
            document.getElementById("icpf").style.borderBottomColor = "green";
        }else{
            document.getElementById("icpf").style.borderBottomColor = "red";
        }
    }//fim fun��o CPF

    function verificarTel(numero){
        let aux =  document.getElementById(numero).value;
        aux = aux.trim();

        if(aux.length==14){
            aux = aux.replace("(", "");
            aux = aux.replace(")", "");
            aux = aux.replace("-", "");
        }

        if(aux.length==11 && verSeNumero(aux)){
            let telFormat = "(" + aux.substring(0, 2) + ")" + aux.substring(2, 7) + "-" + aux.substring(7, 11);
            document.getElementById(numero).value = telFormat;
            document.getElementById(numero).style.borderBottomColor = "green";
        }else{
            document.getElementById(numero).style.borderBottomColor = "red";
        }
    }

    function verSeNumero(valor){
       let numero = "0123456789";
       for (let i =0; i<numero.length; i++){
         while(valor.includes(numero.charAt(i))){
              valor = valor.replace(numero.charAt(i), "");
         } // fim do while
       } // fim do for

       if(valor.length==0){
           return true;
       }else{
           return false;
       }
    }//fim fun��o N�mero

    function seVazio(id) {
        let conteudo = document.getElementById(id).value;

        if (conteudo == null || conteudo == "") {
            document.getElementById("labelTextArea").style.color = "red";
        }else{
            document.getElementById("labelTextArea").style.color = "green";
        }
    }

    function enviar(){
        alert("Enviado com Sucesso!.");
    }

    function somarChk() {
        let chk1 = document.getElementsByName('1');
        let chk2 = document.getElementsByName('2');
        let chk3 = document.getElementsByName('3');
        let chk4 = document.getElementsByName('4');
        let chk5 = document.getElementsByName('5');
        let chk6 = document.getElementsByName('6');
        let chk7 = document.getElementsByName('7');
        let chk8 = document.getElementsByName('8');
        let chk9 = document.getElementsByName('9');
        let chk10 = document.getElementsByName('10');
        let chk11 = document.getElementsByName('11');
        let total=0;
        for (let i = 0; i < chk1.length; i++) {
            if(chk1[i].checked){
                total += parseInt(chk1[i].value);
            }
        }
        for (let i = 0; i < chk2.length; i++) {
            if(chk2[i].checked){
                total += parseInt(chk2[i].value);
            }
        }
        for (let i = 0; i < chk3.length; i++) {
            if(chk3[i].checked){
                total += parseInt(chk3[i].value);
            }
        }
        for (let i = 0; i < chk4.length; i++) {
            if(chk4[i].checked){
                total += parseInt(chk4[i].value);
            }
        }
        for (let i = 0; i < chk5.length; i++) {
            if(chk5[i].checked){
                total += parseInt(chk5[i].value);
            }
        }
        for (let i = 0; i < chk6.length; i++) {
            if(chk6[i].checked){
                total += parseInt(chk6[i].value);
            }
        }
        for (let i = 0; i < chk7.length; i++) {
            if(chk7[i].checked){
                total += parseInt(chk7[i].value);
            }
        }
        for (let i = 0; i < chk8.length; i++) {
            if(chk8[i].checked){
                total += parseInt(chk8[i].value);
            }
        }
        for (let i = 0; i < chk9.length; i++) {
            if(chk9[i].checked){
                total += parseInt(chk9[i].value);
            }
        }
        for (let i = 0; i < chk10.length; i++) {
            if(chk10[i].checked){
                total += parseInt(chk10[i].value);
            }
        }
        for (let i = 0; i < chk11.length; i++) {
            if(chk11[i].checked){
                total += parseInt(chk11[i].value);
            }
        }
        document.getElementById("iPontos").innerHTML = total;

        if (total < 45) {
            document.getElementById("iPontos").style.height = "180px";
            document.getElementById("iPontos").style.backgroundColor = "red";
        } else if(total >= 45 && total < 89) {
            document.getElementById("iPontos").style.height = "280px";
            document.getElementById("iPontos").style.backgroundColor = "blue";
        } else{
            document.getElementById("iPontos").style.height = "380px";
            document.getElementById("iPontos").style.backgroundColor = "green";
        }
    }
