// Link pagination
const pagAboutme = document.getElementById('pagAboutme');
const pagExperience = document.getElementById('pagExperience');
const pagPortfolio = document.getElementById('pagPortfolio');
const pagTech = document.getElementById('pagTech');

//Divs - páginas a carregar
const divAboutme = document.getElementById('aboutme');
const divExperience = document.getElementById('experience');
const divPortfolio = document.getElementById('portfolio');
const divTech = document.getElementById('tech');

//Listeners dos botões
pagAboutme.addEventListener('click', function(ev){
    //Mudando o que irá mostrar
    divAboutme.style.display = "block";
    divExperience.style.display = "none";
    divPortfolio.style.display = "none";
    divTech.style.display = "none";

    removeActive();

    //Alterando a cor de fundo
    pagAboutme.classList.add('active');
});

pagExperience.addEventListener('click', function(ev){
    //Mudando o qyue irá mopstrar
    divAboutme.style.display = "none";
    divExperience.style.display = "block";
    divPortfolio.style.display = "none";
    divTech.style.display = "none";

    removeActive();

    //Alterando a cor de fundo
    pagExperience.classList.add('active');
});

pagPortfolio.addEventListener('click', function(ev){
    //Mudando o qyue irá mopstrar
    divAboutme.style.display = "none";
    divExperience.style.display = "none";
    divPortfolio.style.display = "block";
    divTech.style.display = "none";

    removeActive();

    //Alterando a cor de fundo
    pagPortfolio.classList.add('active');
});

pagTech.addEventListener('click', function(ev){
    //Mudando o qyue irá mopstrar
    divAboutme.style.display = "none";
    divExperience.style.display = "none";
    divPortfolio.style.display = "none";
    divTech.style.display = "block";

    removeActive();

    //Alterando a cor de fundo
    pagTech.classList.add('active');
});

function removeActive(){
    let active = document.getElementsByClassName('active');
    active[0].classList.remove('active');
}