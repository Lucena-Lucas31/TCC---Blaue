function openForm(){
    document.getElementById("signinOverlay").style.display="block";

}


function closeForm(){
    document.getElementById("signinOverlay").style.display="none";
    
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