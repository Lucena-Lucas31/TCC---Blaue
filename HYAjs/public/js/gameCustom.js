document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8081/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));   
    
   })
   
   
   function loadHTMLTable(data){
       const table = document.querySelector('table tbody');
   
   
   
       if (data.lenght === 0){
          table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
       }
   
   var pr1 = data[0].parente1; //Grau de parentesco carta 1
   var pr2 = data[0].parente2; //Grau de parentesco carta 2
   var pr3 = data[0].parente3; //Grau de parentesco carta 3
   var pr4 = data[0].parente4; //Grau de parentesco carta 4
   var pr5 = data[0].parente5; //Grau de parentesco carta 5
   var pr6 = data[0].parente6; //Grau de parentesco carta 6
   
   var np1 = data[0].nome1; //nome parente carta 1
   var np2 = data[0].nome2; //nome parente carta 2
   var np3 = data[0].nome3; //nome parente carta 3
   var np4 = data[0].nome4; //nome parente carta 4
   var np5 = data[0].nome5; //nome parente carta 5
   var np6 = data[0].nome6; //nome parente carta 6
   
       console.log(pr1, pr2, pr3, pr4, pr5, pr6, np1, np2, np3, np4, np5, np6)
   
       document.getElementById('pr1').value = pr1;
       document.getElementById('pr2').value = pr2;
       document.getElementById('pr3').value = pr3;
       document.getElementById('pr4').value = pr4;
       document.getElementById('pr5').value = pr5;
       document.getElementById('pr6').value = pr6;
   
       document.getElementById('txtparente1').innerHTML = document.getElementById("pr1").value;
       document.getElementById('txtparente2').innerHTML = document.getElementById("pr2").value;
       document.getElementById('txtparente3').innerHTML = document.getElementById("pr3").value;
       document.getElementById('txtparente4').innerHTML = document.getElementById("pr4").value;
       document.getElementById('txtparente5').innerHTML = document.getElementById("pr5").value;
       document.getElementById('txtparente6').innerHTML = document.getElementById("pr6").value;
       
       document.getElementById('np1').value = np1;
       document.getElementById('np2').value = np2;
       document.getElementById('np3').value = np3;
       document.getElementById('np4').value = np4;
       document.getElementById('np5').value = np5;
       document.getElementById('np6').value = np6;
   
       document.getElementById('txtnp1').innerHTML = document.getElementById("np1").value;
       document.getElementById('txtnp2').innerHTML = document.getElementById("np2").value;
       document.getElementById('txtnp3').innerHTML = document.getElementById("np3").value;
       document.getElementById('txtnp4').innerHTML = document.getElementById("np4").value;
       document.getElementById('txtnp5').innerHTML = document.getElementById("np5").value;
       document.getElementById('txtnp6').innerHTML = document.getElementById("np6").value;
       
       
   
   }
   
   // ===================================================================================================================================================================
   
   const grid = document.querySelector('.grid'); /*SELECIONA TODOS SEUS FILHOS*/ 
   
   const timer = document.querySelector('.timer');  //
    
   
   const pontuacao = document.querySelector('.pontuacao');
   let pont = 0;
   
   let timerend = 0;
   
   
   /*ARRAY PARA ARMAZENAR AS IMAGENS*/ 
   const animals = [
       '0',
       '1',
       '2',
       '3',
       '4',
       '5',
   ];
   
   const animals2 = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',

   ];
   
   // const parente = [
   //     'card',
   //     'card',
   //     'card',
   //     'card',
   //     'card',
   //     'card',
   // ];
   
   /*FUNÇÃO PARA CRIAR OS ELEMENTOS AUTOMATICAMENTE*/
   const createElement = (tag, className) => {
       const element = document.createElement(tag);    /*PARA O JS CRIAR ELEMENTOS HTML*/
       element.className = className;                 /*ASSOCIAR A DIV COM SUA CLASSE (div card com classe card) */
       return element;
   }
   
   let firstCard = '';
   let secondCard = '';
   
   /*FUNÇÃO DE VERIFICAÇÃO DE FIM DE JOGO*/ 
   const checkEndGame = () => {
       const disableCards = document.querySelectorAll('.disable-card'); /*PROCURA TODAS AS CARTAS QUE TEM '.disable-card' ATIVADO, SALVA TODOS OS ELEMENTOS QUE TEM 'disable-card' NO ARRAY 'disableCards'*/
   
       if(disableCards.length == 12){
   
           timerend = `${timer.innerHTML}`;
   
           console.log (timerend);
           
   
           getAndSetText(); /*Define o valor da pontuacao para o formulario */
   
           
   
           setTimeout(() => { /*DELAY PARA DESVIRAR AS CARTAS */
   
           // alert(`Dados enviados para o banco`);
               openForm();
           
   
           }, 200);
          
           // PARABÉNS MEU REI, VOCÊ É MUITO ESPERTO!!!'+ '\n' + 'VOCÊ ESTÁ DANDO UMA SURRA NO ALZHEIMER' + '\n' + 'おめでとうございます' + '\n' +
       }
   }
   
   function getAndSetText(){
           document.getElementById('setText').value= pont;
           document.getElementById('modo').value= "Animais";
           document.getElementById('timer').value= timerend;
   
           }
   
   
   
   
   
   
   /*VERIFICAÇÃO DE PARES */
   const checkCards = () => {
       const firstAnimal = firstCard.getAttribute('data-animal'); /*FUNÇÃO PARA PEGAR O ATRIBUTO DA PRIMEIRA CARTA*/ 
       const secondAnimal = secondCard.getAttribute('data-animal');
   
    
   
   
       if(firstAnimal == secondAnimal){
           
           animation();
   
           firstCard.firstChild.classList.add('disable-card');   /*DEIXA A CARTA DESABILITADA (escura)*/ 
           secondCard.firstChild.classList.add('disable-card');
   
           firstCard = '';
           secondCard = '';
   
           pont = +pontuacao.innerHTML;
           pontuacao.innerHTML = pont += 3;
   
           checkEndGame();
   
   
       }
       else{
           setTimeout(() => { /*DELAY PARA DESVIRAR AS CARTAS */
   
               firstCard.classList.remove('reveal-card'); /*REMOVER A CLASSE 'reavel-card' DA PRIMEIRA CARTA (desvirar a carta)*/
               secondCard.classList.remove('reveal-card'); 
   
               firstCard = '';
               secondCard = '';

               if(pont > 0){
                pontuacao.innerHTML = pont += -1;
            }
            else{
                pontuacao.innerHTML = pont = pont;
            }
   
           }, 700);
       }
   }
   
   /*FUNÇÃO PARA REVELAR A CARTA QUANDO CLICA (é o que vai acontecer) */
   
   const revealCard = ({target}) =>{
       if(target.parentNode.className.includes("reveal-card")){
           return;
       }
       if(firstCard == "" && !target.parentNode.className.includes("grid")){
           target.parentNode.classList.add("reveal-card");
           firstCard = target.parentNode;
           console.log(target.parentNode)
       }else if(secondCard === "" && !target.parentNode.className.includes("grid")){
           target.parentNode.classList.add("reveal-card");
           secondCard = target.parentNode;
           console.log(target.parentNode)
   
           checkCards();
       }
   }
   
   // const revealCard = ({target}) => { /*target: diz o alvo em que você clicou*/
   
   //     if(target.parentNode.className.includes('reveal-card')){ /*Se o card que você clicou já foi atribuido o reavel-card (se vc clicou em uma carta não pode clicar de novo)*/
   //         return;
   //     }  
   
   //     /*RESTRIÇÃO DE QUANTAS CARTAS POSSO CLICAR E SALVAMENTO DAS CARTAS NAS VARIÁVEIS */
   //     if(firstCard == ''){
   //         target.parentNode.classList.add('reveal-card'); /*parentNode: chamar o pai da tag, adiciona uma classList(acessa a lista de classes do css), 'reavel-card': nome da classe*/ 
   //         firstCard = target.parentNode;
   //     } 
   //     else if(secondCard == '') {
   //         target.parentNode.classList.add('reveal-card');
   //         secondCard = target.parentNode;
   
   //         checkCards();
   //     }
   // }
   
   const createCard2 = (animal2) =>{
       const card2 = createElement('div', 'card');     /*RECEBE 2 PARÂMETROS*/     
       const front2 = createElement('div', 'face front'); 
       const back2 = createElement('div', 'face back'); 
   
        
    
        front2.style.backgroundImage = `url('../images/teste/${animal2}.jpg')`; /*PARA NÃO REPETIR IMAGENS IGUAIS, ` e ${}: PARA CONSEGUIR PASSSAR VARIÁVEIS DENTRO DE STRING */ 
        
        card2.appendChild(front2);  /* DAR UM FILHO PARA A DIV (colocar uma div dentro da outra / no caso front está dentro do card)*/
        card2.appendChild(back2);
    
        
        card2.addEventListener('click', revealCard);  /*EVENTO DO CARD, parâmetro de click e o que vai acontecer*/
        card2.setAttribute('data-animal', animal2) /*CONFIGURA UM ATRIBUTO DE ACORDO COM CADA CARTA (no caso é o nome dela que nós demos no array)*/  
    
        const p1 = card2.getAttribute('data-animal');
        // const br = document.createElement("br");
        if(p1 == 0){
           const nome1 = createElement('label', 'txtnome');
           nome1.setAttribute("id", "txtnp1");
           front2.appendChild(nome1);
           document.getElementById('txtnp1').innerHTML = document.getElementById("np1").value;
            
           
        }
        else if(p1 == 1){
            const nome2 = createElement('label', 'txtnome');
           nome2.setAttribute("id", "txtnp2");
           front2.appendChild(nome2);
           document.getElementById('txtnp2').innerHTML = document.getElementById("np2").value;
        }
        else if(p1 == 2){
            const nome3 = createElement('label', 'txtnome');
                nome3.setAttribute("id", "txtnp3");
                front2.appendChild(nome3);
                document.getElementById('txtnp3').innerHTML = document.getElementById("np3").value;
        }
        else if(p1 == 3){
                 const nome4 = createElement('label', 'txtnome');
           nome4.setAttribute("id", "txtnp4");
           front2.appendChild(nome4);
           document.getElementById('txtnp4').innerHTML = document.getElementById("np4").value;
        }
        else if(p1 == 4){
                 const nome5 = createElement('label', 'txtnome');
           nome5.setAttribute("id", "txtnp5");
           front2.appendChild(nome5);
           document.getElementById('txtnp5').innerHTML = document.getElementById("np5").value;
        }
        else if(p1 == 5){
                 const nome6 = createElement('label', 'txtnome');
                nome6.setAttribute("id", "txtnp6");
                front2.appendChild(nome6);
                document.getElementById('txtnp6').innerHTML = document.getElementById("np6").value
        }
        return card2;
   }
   
   /*FUNÇÃO PARA CRIAR AS CARTAS AUTOMATICAMENTE*/ 
   const createCard = (animal) =>{
       const card = createElement('div', 'card');     /*RECEBE 2 PARÂMETROS*/     
       const front = createElement('div', 'face front'); 
       const back = createElement('div', 'face back'); 
       
   
       front.style.backgroundImage = `url('../images/teste/${animal}.jpg')`; /*PARA NÃO REPETIR IMAGENS IGUAIS, ` e ${}: PARA CONSEGUIR PASSSAR VARIÁVEIS DENTRO DE STRING */ 
       
       card.appendChild(front);  /* DAR UM FILHO PARA A DIV (colocar uma div dentro da outra / no caso front está dentro do card)*/
       card.appendChild(back);
   
       
       card.addEventListener('click', revealCard);  /*EVENTO DO CARD, parâmetro de click e o que vai acontecer*/
       card.setAttribute('data-animal', animal) /*CONFIGURA UM ATRIBUTO DE ACORDO COM CADA CARTA (no caso é o nome dela que nós demos no array)*/  
   
       const p1 = card.getAttribute('data-animal');
       // const br = document.createElement("br");
      
   
   
       if(p1 == 0){
           const parente1 = createElement('label', 'txtparente');
           parente1.setAttribute("id", "txtparente1");
           front.appendChild(parente1);
           document.getElementById('txtparente1').innerHTML = document.getElementById("pr1").value;
           const a = parente1.getAttribute('id');
           
          
       }
       else if(p1 == 1){
           const parente2 = createElement('label', 'txtparente');
           parente2.setAttribute("id", "txtparente2");
           front.appendChild(parente2)
           document.getElementById('txtparente2').innerHTML = document.getElementById("pr2").value;
       }
       else if(p1 == 2){
           const parente3 = createElement('label', 'txtparente');
           parente3.setAttribute("id", "txtparente3");
           front.appendChild(parente3)
           document.getElementById('txtparente3').innerHTML = document.getElementById("pr3").value;
       }
       else if(p1 == 3){
           const parente4 = createElement('label', 'txtparente');
           parente4.setAttribute("id", "txtparente4");
           front.appendChild(parente4)
           document.getElementById('txtparente4').innerHTML = document.getElementById("pr4").value;
       }
       else if(p1 == 4){
           const parente5 = createElement('label', 'txtparente');
           parente5.setAttribute("id", "txtparente5");
           front.appendChild(parente5)
           document.getElementById('txtparente5').innerHTML = document.getElementById("pr5").value;
       }
       else if(p1 == 5){
           const parente6 = createElement('label', 'txtparente');
           parente6.setAttribute("id", "txtparente6");
           front.appendChild(parente6)
           document.getElementById('txtparente6').innerHTML = document.getElementById("pr6").value;
       }
       
   

   
       return card;
   }
   
   
   /*FUNÇÃO PARA CARREGAR O JOGO*/ 
   const loadGame = () => {
   
       const duplicateAnimals = [...animals];  /*COLOCAR UMA LISTA DENTRO DA OUTRA E DUPLICAR*/ 
   
       const shuffledArray = duplicateAnimals.sort(() => Math.random() - 0.5); /*RANDOMIZAR AS CARTAS, sort: precisa de números positivos ou negativos para randomizar, Math.random(): gera somente números entre 0 e 1 (mas não chega a ser 1), -0.5: para conseguir gerar números negativos */
   
       shuffledArray.forEach((animal) => {    /*forEach: PARA PERCORRER TODOS OS ELEMENTOS DO ARRAY*/
   
           const card = createCard(animal);
          
           grid.appendChild(card);
           
   
       });  

       shuffledArray.forEach((animal2) => {    /*forEach: PARA PERCORRER TODOS OS ELEMENTOS DO ARRAY*/

       const card2 = createCard2(animal2);
       grid.appendChild(card2);
           
   
       });  
       
   }
   
   // TIMER
   const startTimer = () => {
       
       // LOOPING
       this.loop = setInterval(() => {
           // innerHTML: retorna o conteúdo de um elemento HTML
           const currentTime = +timer.innerHTML; // +: converte a string em int para poder fazer cálculos
           timer.innerHTML = currentTime + 1;
   
       }, 1000); // 1000 = 1 seg
   }
   
   
   // ANIMAÇÃO DO ALZHY
   
   const animation = () => {
   
       document.getElementById("alzhyT").hidden = true;
       document.getElementById("alzhyS").hidden = false; 
   
       setTimeout(() => {  
           document.getElementById("alzhyH").hidden = false;
           document.getElementById("alzhyS").hidden = true;
   
               setTimeout(() => { 
                   document.getElementById("alzhyH").hidden = true;
                   document.getElementById("alzhyS").hidden = false;
   
                   setTimeout(() => { 
                       document.getElementById("alzhyH").hidden = false;
                       document.getElementById("alzhyS").hidden = true;
   
                       setTimeout(() => { 
                           document.getElementById("alzhyT").hidden = false;
                           document.getElementById("alzhyH").hidden = true;
                           
                   }, 500);
                       
               }, 500);
           }, 500);
       }, 500);
   }
   
   //LÓGICA DO OVERLAY
   function openForm(){
       document.getElementById("myOverlay").style.display = "block";
   }
   
   function closeForm(){
       document.getElementById("myOverlay").style.display = "none";
   }
   
   
   // Quando carregar todos os elementos, inicia o jogo
   window.onload = () => {
       startTimer();
       loadGame();
   }
   
   
   
   const btsaveg = document.getElementById(id= "savegame");
   
   btsaveg.onclick = function(){
       const pontuacao = document.getElementById("setText").value;
       const modo_jogo = "animais";
       const timer = document.getElementById("timer").value;
     
       fetch('http://localhost:8081/add', {
         headers: {
           'Content-type': 'application/json'
         },
         method: 'POST',
         body: JSON.stringify({ timer : timer, modo_jogo : modo_jogo, pontuacao : pontuacao})
       })
       .then(response => response.json())
       .then(data => insertRowIntoTable(data['data']));
     }
     
     function insertRowIntoTable(data){
       
     }
   
   
   
   
   const btsaveg2 = document.getElementById(id= "savegame2");
   
   btsaveg2.onclick = function(){
     const pontuacao = document.getElementById("setText").value;
     const modo_jogo = "animais";
     const timer = document.getElementById("timer").value;
   
     fetch('http://localhost:8081/add', {
       headers: {
         'Content-type': 'application/json'
       },
       method: 'POST',
       body: JSON.stringify({ timer : timer, modo_jogo : modo_jogo, pontuacao : pontuacao})
     })
     .then(response => response.json())
     .then(data => insertRowIntoTable(data['data']));
   }
   
   function insertRowIntoTable(data){
     
   }
   
   
   
   
   
   
   
   
   
   
   