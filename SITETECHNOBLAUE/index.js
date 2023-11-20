function openForm(){
    document.getElementById("signinOverlay").style.display="block";

}

function closeForm(){
    document.getElementById("signinOverlay").style.display="none";
    
}

   function alertSob() {
    alert("Faça login para acessar essa função");
  }

  function alertJog() {
    alert("Faça login para acessar essa função");
  }

function toggle (){
    const blur = document.getElementById('blur');
    blur.classList.toggle('active');
    const wrap = document.getElementById('wrap');
    wrap.classList.toggle('active');
    const blurbtn = document.getElementById('openbtn');
    blurbtn.classList.toggle('active');
}



function openRegisterForm(){
    document.getElementById("signinRegisterOverlay").style.display="block";

}

function closeRegisterForm(){
    document.getElementById("signinRegisterOverlay").style.display="none";
    
}

function openPsiForm(){
    document.getElementById("psi").style.display="block";

}

function closePsiForm(){
    document.getElementById("psi").style.display="none";
    
}

//ele muda de cor quando seleciona alguma coisa
document.getElementById("stage").addEventListener("change", function() {
    let allOptions= document.querySelectorAll(".estagioscadastro");
    var select = document.getElementById("stage");

    //Esse ele muda a cor de todas as opções pq quando vc altera uma ele altera todas
    for (let index = 0; index < allOptions.length; index++) {
    allOptions[index].style.color = "grey";
    }
    //aqui ele coloca a cor que vc quer e o x é igual ao value da opção selecionada no meu caso o 'Selecione um estado' retorna selecione
    x = this.value
    if(x == 'sel'){
      select.style.color = 'grey'
    }
    else{
      select.style.color = 'black'
    }

});

const maxChecks = 1
let selectedCount = 0

document.querySelector('div').addEventListener('click', event => {
  if (event.target.type === 'checkbox') {
    selectedCount = event.target.checked
      ? selectedCount + 1
      : selectedCount - 1
  }

  if (selectedCount >= maxChecks) {
    [...document.querySelectorAll('input:not(:checked)')].forEach(input => input.disabled = true)
  } else {
    [...document.querySelectorAll('input')].forEach(input => input.disabled = false)
  }
})


/*PARTE MODO ESCURO/CLARA */
let btn = document.getElementById("btnmodo");
let btnIcon = document.getElementById("btnIcon");
let logo = document.getElementById("logo");
let prancheta = document.getElementById("prancheta");
let papel = document.getElementById("papel");
let dr = document.getElementById("dr");

// Função para verificar a preferência do usuário no armazenamento local
function checkDarkModePreference() {
  return localStorage.getItem("darkMode") === "enabled";
}

// Função para aplicar o modo escuro com base na preferência do usuário
function applyDarkMode() {
  if (checkDarkModePreference()) {
    document.body.classList.add("dark-theme");
    btnIcon.src = "images/lua.png";
    btnIcon.style.left = "4.7vw";
    btnIcon.style.width = "1.75vw";
    btnIcon.style.transition = "0.4s";
    logo.src = "images/logoborboletaclara.png";
    prancheta.src = "images/pranchetaescura.png";
    papel.src = "images/papelescuro.png";
    dr.src = "images/drescuro.png";
    
  } else {
    document.body.classList.remove("dark-theme");
    btnIcon.src = "images/solzinho.png";
    btnIcon.style.left = "0.5vw";
    btnIcon.style.width = "2.5vw";
    btnIcon.style.transition = "0.4s";
    logo.src = "images/logo.png";
    prancheta.src = "images/prancheta.png";
    papel.src = "images/papelunifesp.png";
    dr.src = "images/dr.png";
  }
}

// Função para alternar entre o modo claro e escuro
function toggleDarkMode() {
  if (checkDarkModePreference()) {
    localStorage.setItem("darkMode", "disabled");
  } else {
    localStorage.setItem("darkMode", "enabled");
  }

  applyDarkMode();
}

// Adicione um ouvinte de eventos para o clique no botão
btn.onclick = function () {
  toggleDarkMode();
};

// Aplicar o modo escuro quando a página carrega
applyDarkMode();

function getAndSetText(){
  select = document.getElementById('stage').value;
  document.getElementById('estagio').value = select;
}

function getNomeLogin(){
  namep = document.getElementById('nameP').value;
}

function setNomeLogin(){
  document.getElementById('nomelogin').value = nameP;
}
