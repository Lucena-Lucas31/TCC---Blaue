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
