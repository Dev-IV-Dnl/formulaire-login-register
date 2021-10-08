let lr = document.querySelector(".divLR");
let btnLogin = document.querySelector(".btnLogIn");
let btnRegister = document.querySelector(".btnRegister");
let ovale = document.querySelector(".ovale");
let divLogin = document.querySelector(".divLogIn");
let divRegister = document.querySelector(".divRegister");
let lCheck = document.querySelector(".Lcheck")


btnRegister.addEventListener("click",()=>{
    console.log('Je clique sur le couton Register !');
    ovale.style.left = "50%";
    lr.style.marginLeft = "-100%";
    btnLogin.style.color = "#333";
    btnRegister.style.color = "#F1F1F1";
    // lr[i].style.transform = 'translate(0px, -'+(i*600)+'px)';
})

btnLogin.addEventListener("click", () => {
    console.log('Je clique sur le couton Login !');
    ovale.style.left = "0px";
    lr.style.marginLeft = "0%";
    btnRegister.style.color = "#333";
    btnLogin.style.color = "#F1F1F1";
    // lr[i].style.transform = 'translate(0px, ' + (i * 600) + 'px)';
})