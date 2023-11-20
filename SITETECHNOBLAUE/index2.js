function openForm(){
    document.getElementById("signinOverlay").style.display="block";

}

function closeForm(){
    document.getElementById("signinOverlay").style.display="none";
    
}

   function alertSob() {
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

btnmodo.onclick = function(){
  document.body.classList.toggle("dark-theme");

  if(document.body.classList.contains("dark-theme")){
    btnIcon.src = "images/lua.png";
    btnIcon.style.left = "4.7vw";
    btnIcon.style.width = "1.75vw";
    btnIcon.style.transition = "0.4s";
    logo.src = "images/logoborboletaclara.png";
    prancheta.src = "images/pranchetaescura.png";
    papel.src = "images/papelescuro.png";
    dr.src = "images/drescuro.png";
  }else{
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

/*OVERLAY PARA DESLOGAR */

function deslogOpen(){
  document.getElementById("deslogOverlay").style.display = "block";
  }
  function deslogClose(){
  document.getElementById("deslogOverlay").style.display = "none";
  }

  function toggle2(){
    const blur = document.getElementById('blur');
    blur.classList.toggle('active');
    const wrap = document.getElementById('content');
    content.classList.toggle('active');
    const blurbtn = document.getElementById('logout');
    blurbtn.classList.toggle('active');
}
