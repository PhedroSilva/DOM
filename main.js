function inicio() {

    let msgMes
    var mes = 0;
    let nome = window.prompt('Qual é o seu nome?')
    let resnome = window.document.getElementById('resultado')
    var mes = parseInt(prompt('Qual é o mês do seu aniversário?'))
    var resmes = window.document.getElementById('resultado1')
   
    resnome.innerHTML = `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! &#x1F596;`
   
        if(mes==1){
        mes = "janeiro"
        msgMes = "Seja você o seu próprio incentivo!"
    }
    else if(mes==2){
        mes = "fevereiro"
        msgMes = "Ao menos tente. Se der certo, você leva o resultado. Se não der, você ganha aprendizado.!"
    }
        if(mes==3){
        mes = "março"
        msgMes = "Viva hoje enquanto está vivo"
    }
    else if(mes==4){
        mes = "abril"
        msgMes = "Transforme suas dificuldades em oportunidades."
    }
    else if(mes==5){
        mes = "maio"
        msgMes = " Encontre a sua melhor versão e invista todos os dias nela."
    }
    else if(mes==6){
        mes = "junho"
        msgMes = "a fé tornas as coisas possíveis, não fáceis."
    }  
    else if(mes==7){
        mes = "julho"
        msgMes = "Há uma força que ninguém é capaz de tirar de você: a sua fé."
    }
    else if(mes==8){
        mes = "agosto"
        msgMes = "Vão dizer que foi sorte, sem saberem o quanto você orou."
    }
    else if(mes==9){
        mes = "setembro"
        msgMes = "A gratidão te faz entender que tudo o que aconteceu foi necessário para você chegar até aqui"
    }
    else if(mes==10){
        mes = "outubro"
        msgMes = " Sigo acreditando que tudo vai melhorar e a fase ruim vai passar. Agradeço pelo que está por vir!"
    }
    else if(mes==11){
        mes = "novembro"
        msgMes = "Entrego, confio, aceito e agradeço."
    }
    else if(mes==12){
        mes = "dezembro"
        msgMes = "Inicio meus dias com gratidão, sabendo que serão lindos. Porque o pensamento atrai e as ações realizam!"
    }
    else{

    }
    resmes.innerHTML = `<p><strong>${mes}</strong>! Mensagem do mês:<p><h1>${msgMes}</h1>`
   
}