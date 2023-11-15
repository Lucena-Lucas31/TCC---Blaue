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
    'card0',
    'card1',
    'card2',
    'card3',
    'card4',
    'card5',
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

    if (firstAnimal == '0' && secondAnimal == 'card0'){

        animation();

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        pont = +pontuacao.innerHTML;
        pontuacao.innerHTML = pont += 5;

        checkEndGame();

    }
    else if(firstAnimal == 'card0' && secondAnimal == '0'){
        animation();

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        pont = +pontuacao.innerHTML;
        pontuacao.innerHTML = pont += 5;

        checkEndGame();
    }
    else if(firstAnimal == '1' && secondAnimal == 'card1'){
        animation();

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        pont = +pontuacao.innerHTML;
        pontuacao.innerHTML = pont += 5;

        checkEndGame();
    }
    else if(firstAnimal == 'card1' && secondAnimal == '1'){
        animation();

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        pont = +pontuacao.innerHTML;
        pontuacao.innerHTML = pont += 5;

        checkEndGame();
    }
    else if(firstAnimal == '2' && secondAnimal == 'card2'){
        animation();

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        pont = +pontuacao.innerHTML;
        pontuacao.innerHTML = pont += 5;

        checkEndGame();
    }
    else if(firstAnimal == 'card2' && secondAnimal == '2'){
        animation();

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        pont = +pontuacao.innerHTML;
        pontuacao.innerHTML = pont += 5;

        checkEndGame();
    }
    else if(firstAnimal == '3' && secondAnimal == 'card3'){
        animation();

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        pont = +pontuacao.innerHTML;
        pontuacao.innerHTML = pont += 5;

        checkEndGame();
    }
    else if(firstAnimal == 'card3' && secondAnimal == '3'){
        animation();

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        pont = +pontuacao.innerHTML;
        pontuacao.innerHTML = pont += 5;

        checkEndGame();
    }
    else if(firstAnimal == '4' && secondAnimal == 'card4'){
        animation();

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        pont = +pontuacao.innerHTML;
        pontuacao.innerHTML = pont += 5;

        checkEndGame();
    }
    else if(firstAnimal == 'card4' && secondAnimal == '4'){
        animation();

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        pont = +pontuacao.innerHTML;
        pontuacao.innerHTML = pont += 5;

        checkEndGame();
    }
    else if(firstAnimal == '5' && secondAnimal == 'card5'){
        animation();

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        pont = +pontuacao.innerHTML;
        pontuacao.innerHTML = pont += 5;

        checkEndGame();
    }
    else if(firstAnimal == 'card5' && secondAnimal == '5'){
        animation();

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        pont = +pontuacao.innerHTML;
        pontuacao.innerHTML = pont += 5;

        checkEndGame();
    }


    // if(firstAnimal == secondAnimal){
        
    //     animation();

    //     firstCard.firstChild.classList.add('disable-card');   /*DEIXA A CARTA DESABILITADA (escura)*/ 
    //     secondCard.firstChild.classList.add('disable-card');

    //     firstCard = '';
    //     secondCard = '';

    //     pont = +pontuacao.innerHTML;
    //     pontuacao.innerHTML = pont += 5;

    //     checkEndGame();


    // }
    else{
        setTimeout(() => { /*DELAY PARA DESVIRAR AS CARTAS */

            firstCard.classList.remove('reveal-card'); /*REMOVER A CLASSE 'reavel-card' DA PRIMEIRA CARTA (desvirar a carta)*/
            secondCard.classList.remove('reveal-card'); 

            firstCard = '';
            secondCard = '';

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


/*FUNÇÃO PARA CRIAR AS CARTAS AUTOMATICAMENTE*/ 
const createCard = (animal) =>{
    const card = createElement('div', 'card');     /*RECEBE 2 PARÂMETROS*/     
    const front = createElement('div', 'face front'); 
    const back = createElement('div', 'face back'); 

    // TENTATIVA DE COLOCAR O TEXTO
    const parente = createElement('p', 'txtparente');
    front.appendChild(parente)
    // parente.innerHTML = "<p> aaaaaaa </p>";

    front.style.backgroundImage = `url('../images/teste/${animal}.jpg')`; /*PARA NÃO REPETIR IMAGENS IGUAIS, ` e ${}: PARA CONSEGUIR PASSSAR VARIÁVEIS DENTRO DE STRING */ 

    card.appendChild(front);  /* DAR UM FILHO PARA A DIV (colocar uma div dentro da outra / no caso front está dentro do card)*/
    card.appendChild(back);

    
    card.addEventListener('click', revealCard);  /*EVENTO DO CARD, parâmetro de click e o que vai acontecer*/
    card.setAttribute('data-animal', animal) /*CONFIGURA UM ATRIBUTO DE ACORDO COM CADA CARTA (no caso é o nome dela que nós demos no array)*/  

    const p1 = card.getAttribute('data-animal');

    if(p1 == 'card0'){
        const parente = createElement('p', 'txtparente');
        front.appendChild(parente)
        parente.innerHTML = `<p> g1 </p>`;


    }
    else if(p1 == 'card1'){
        const parente = createElement('p', 'txtparente');
        front.appendChild(parente)
        parente.innerHTML = "<p> g2 </p>";
    }
    else if(p1 == 'card2'){
        const parente = createElement('p', 'txtparente');
        front.appendChild(parente)
        parente.innerHTML = "<p> g3 </p>";
    }
    else if(p1 == 'card3'){
        const parente = createElement('p', 'txtparente');
        front.appendChild(parente)
        parente.innerHTML = "<p> g4 </p>";
    }
    else if(p1 == 'card4'){
        const parente = createElement('p', 'txtparente');
        front.appendChild(parente)
        parente.innerHTML = "<p> g5 </p>";
    }
    else if(p1 == 'card5'){
        const parente = createElement('p', 'txtparente');
        front.appendChild(parente)
        parente.innerHTML = "<p> g6 </p>";
    }
    else{
        const parente = createElement('p', 'txtparente');
        front.appendChild(parente)
        parente.innerHTML = "<p> g7 </p>";

    }

    return card;
}

// const setParent = () =>{

//     const p1 = card.getAttribute('data-animal');

//     if(p1 == 'card0'){
//         const parente = createElement('p', 'txtparente');
//         front.appendChild(parente)
//         parente.innerHTML = "<p> aaaaaaa </p>";

//     }
//     else{
//         const parente = createElement('p', 'txtparente');
//         front.appendChild(parente)
//         parente.innerHTML = "<p> </p>";

//     }
// }

/*FUNÇÃO PARA CARREGAR O JOGO*/ 
const loadGame = () => {

    const duplicateAnimals = [...animals];  /*COLOCAR UMA LISTA DENTRO DA OUTRA E DUPLICAR*/ 

    const shuffledArray = duplicateAnimals.sort(() => Math.random() - 0.5); /*RANDOMIZAR AS CARTAS, sort: precisa de números positivos ou negativos para randomizar, Math.random(): gera somente números entre 0 e 1 (mas não chega a ser 1), -0.5: para conseguir gerar números negativos */

    shuffledArray.forEach((animal) => {    /*forEach: PARA PERCORRER TODOS OS ELEMENTOS DO ARRAY*/

        const card = createCard(animal);
        grid.appendChild(card);

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










