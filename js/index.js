// Variables pour le formulaire :
let lr = document.querySelector(".divLR");
let btnLogin = document.querySelector(".btnLogIn");
let btnRegister = document.querySelector(".btnRegister");
let ovale = document.querySelector(".ovale");
let divLogin = document.querySelector(".divLogIn");
let divRegister = document.querySelector(".divRegister");
let lCheck = document.querySelector(".Lcheck");

// Variables pour le Bouton Jour/nuit :
let jn = document.querySelector(".btnJN");
let cercle = document.querySelector(".cercle");
let body = document.body;


//Code animation formulaire :
btnRegister.addEventListener("click",()=>{
    console.log('Je clique sur le couton Register !');
    ovale.style.left = "50%";
    lr.style.marginLeft = "-100%";
    btnLogin.style.color = "var(--col2)";
    btnRegister.style.color = "var(--col3)";
    // lr[i].style.transform = 'translate(0px, -'+(i*600)+'px)';
})

btnLogin.addEventListener("click", () => {
    console.log('Je clique sur le couton Login !');
    ovale.style.left = "0px";
    lr.style.marginLeft = "0%";
    btnRegister.style.color = "var(--col2)";
    btnLogin.style.color = "var(--col3)";
    // lr[i].style.transform = 'translate(0px, ' + (i * 600) + 'px)';
})


// Code animation BTN J/N :
jn.addEventListener("click", () => {
    if(body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        cercle.style.left = "21px";
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        cercle.style.left = "2px";
    }
})