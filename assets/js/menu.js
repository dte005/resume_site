const hamb = document.getElementById('hamb');
const menuCel= document.getElementById('menu-cel');

//Link
const pagAboutmeCel = document.getElementById('pagAboutmeCel');
const pagExperienceCel = document.getElementById('pagExperienceCel');
const pagPortfolioCel = document.getElementById('pagPortfolioCel');
const pagTechCel = document.getElementById('pagTechCel');

hamb.addEventListener('click', function(e){
    if(Array.from(menuCel.classList).includes('d-none')){
        menuCel.classList.remove('d-none');
    }else{
        menuCel.classList.add('d-none');
    }
});

//Listeners dos botões
pagAboutmeCel.addEventListener('click', function(ev){
    //Mudando o que irá mostrar
    divAboutme.style.display = "block";
    divExperience.style.display = "none";
    divPortfolio.style.display = "none";
    divTech.style.display = "none";

    removeActive();

    //Alterando a cor de fundo
    pagAboutmeCel.classList.add('active');
    pagAboutme.classList.add('active');
});

pagExperienceCel.addEventListener('click', function(ev){
    //Mudando o qyue irá mopstrar
    divAboutme.style.display = "none";
    divExperience.style.display = "block";
    divPortfolio.style.display = "none";
    divTech.style.display = "none";

    removeActive();

    //Alterando a cor de fundo
    pagExperienceCel.classList.add('active');
    pagExperience.classList.add('active');
});

pagPortfolioCel.addEventListener('click', function(ev){
    //Mudando o qyue irá mopstrar
    divAboutme.style.display = "none";
    divExperience.style.display = "none";
    divPortfolio.style.display = "block";
    divTech.style.display = "none";

    removeActive();

    //Alterando a cor de fundo
    pagPortfolioCel.classList.add('active');
    pagPortfolio.classList.add('active');
});

pagTechCel.addEventListener('click', function(ev){
    //Mudando o qyue irá mopstrar
    divAboutme.style.display = "none";
    divExperience.style.display = "none";
    divPortfolio.style.display = "none";
    divTech.style.display = "block";

    removeActive();

    //Alterando a cor de fundo
    pagTechCel.classList.add('active');
    pagTech.classList.add('active');
});