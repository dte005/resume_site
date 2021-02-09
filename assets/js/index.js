// Link pagination
const pagAboutme = document.getElementById('pagAboutme');
const pagExperience = document.getElementById('pagExperience');
const pagTech = document.getElementById('pagTech');

//Divs - páginas a carregar
const divAboutme = document.getElementById('aboutme');
const divExperience = document.getElementById('experience');
const divTech = document.getElementById('tech');

//Listeners dos botões
pagAboutme.addEventListener('click', function(ev){
    //Mudando o que irá mostrar
    divAboutme.style.display = "block";
    divExperience.style.display = "none";
    divTech.style.display = "none";

    removeActive();

    //Alterando a cor de fundo
    pagAboutme.classList.add('active');
    pagAboutmeCel.classList.add('active');
});

pagExperience.addEventListener('click', function(ev){
    //Mudando o qyue irá mopstrar
    divAboutme.style.display = "none";
    divExperience.style.display = "block";
    divTech.style.display = "none";

    removeActive();

    //Alterando a cor de fundo
    pagExperience.classList.add('active');
    pagExperienceCel.classList.add('active');
});

pagTech.addEventListener('click', function(ev){
    //Mudando o qyue irá mopstrar
    divAboutme.style.display = "none";
    divExperience.style.display = "none";
    divTech.style.display = "block";

    removeActive();

    //Alterando a cor de fundo
    pagTech.classList.add('active');
    pagTechCel.classList.add('active');
});

function removeActive(){
    let active = document.getElementsByClassName('active');
    Array.from(active).forEach(element=>{
        element.classList.remove('active');
    })
}

const tecs = ["Javascrip", "CSS", "NodeJS", "HTML", "Heroku", "GIT", "GitHub"];
const divTec = document.getElementById('tecnologias');

tecs.forEach(tec=>{
    const div = document.createElement('div');
    div.classList.add('tecnologias');
    div.innerHTML = tec;
    divTec.append(div);
})