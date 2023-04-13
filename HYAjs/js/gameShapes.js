const grid = document.querySelector('.grid'); /*SELECIONA TODOS SEUS FILHOS*/ 

/*ARRAY PARA ARMAZENAR AS IMAGENS*/ 
const shapes = [
    'gato1',
    'gato2',
    'gato3',
    'gato4',
    'gato5',
    'gato6',
];

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
        alert('PARABÉNS MEU REI, VOCÊ É MUITO ESPERTO!!!'+ '\n' + 'VOCÊ ESTÁ DANDO UMA SURRA NO ALZHEIMER' + '\n' + 'おめでとうございます')
    }
}

/*VERIFICAÇÃO DE PARES */
const checkCards = () => {
    const firstShape = firstCard.getAttribute('data-shape'); /*FUNÇÃO PARA PEGAR O ATRIBUTO DA PRIMEIRA CARTA*/ 
    const secondShape = secondCard.getAttribute('data-shape');

    if(firstShape == secondShape){

        firstCard.firstChild.classList.add('disable-card');   /*DEIXA A CARTA DESABILITADA (escura)*/ 
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';
        
        checkEndGame();

    }
    else{
        setTimeout(() => { /*DELAY PARA DESVIRAR AS CARTAS */

            firstCard.classList.remove('reveal-card'); /*REMOVER A CLASSE 'reavel-card' DA PRIMEIRA CARTA (desvirar a carta)*/
            secondCard.classList.remove('reveal-card'); 

            firstCard = '';
            secondCard = '';

        }, 1500);
    }
}

/*FUNÇÃO PARA REVELAR A CARTA QUANDO CLICA (é o que vai acontecer) */
const revealCard = ({target}) => { /*target: diz o alvo em que você clicou*/

    if(target.parentNode.className.includes('reveal-card')){ /*Se o card que você clicou já foi atribuido o reavel-card (se vc clicou em uma carta não pode clicar de novo)*/
        return;
    }  

    /*RESTRIÇÃO DE QUANTAS CARTAS POSSO CLICAR E SALVAMENTO DAS CARTAS NAS VARIÁVEIS */
    if(firstCard == ''){
        target.parentNode.classList.add('reveal-card'); /*parentNode: chamar o pai da tag, adiciona uma classList(acessa a lista de classes do css), 'reavel-card': nome da classe*/ 
        firstCard = target.parentNode;
    } 
    else if(secondCard == '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }
}


/*FUNÇÃO PARA CRIAR AS CARTAS AUTOMATICAMENTE*/ 
const createCard = (shape) =>{
    const card = createElement('div', 'card');     /*RECEBE 2 PARÂMETROS*/     
    const front = createElement('div', 'face front'); 
    const back = createElement('div', 'face back'); 

    front.style.backgroundImage = `url('../images/gameShapes${shape}.jpg')`; /*PARA NÃO REPETIR IMAGENS IGUAIS, ` e ${}: PARA CONSEGUIR PASSSAR VARIÁVEIS DENTRO DE STRING */ 

    card.appendChild(front);  /* DAR UM FILHO PARA A DIV (colocar uma div dentro da outra / no caso front está dentro do card)*/
    card.appendChild(back);

    card.addEventListener('click', revealCard);  /*EVENTO DO CARD, parâmetro de click e o que vai acontecer*/
    card.setAttribute('data-shape', shape) /*CONFIGURA UM ATRIBUTO DE ACORDO COM CADA CARTA (no caso é o nome dela que nós demos no array)*/ 

    return card;
}

/*FUNÇÃO PARA CARREGAR O JOGO*/ 
const loadGame = () => {

    const duplicateShapes = [...shapes, ...shapes];  /*COLOCAR UMA LISTA DENTRO DA OUTRA E DUPLICAR*/ 

    const shuffledArray = duplicateShapes.sort(() => Math.random() - 0.5); /*RANDOMIZAR AS CARTAS, sort: precisa de números positivos ou negativos para randomizar, Math.random(): gera somente números entre 0 e 1 (mas não chega a ser 1), -0.5: para conseguir gerar números negativos */

    shuffledArray.forEach((shape) => {    /*forEach: PARA PERCORRER TODOS OS ELEMENTOS DO ARRAY*/

        const card = createCard(shape);
        grid.appendChild(card);

    });  
}

loadGame();