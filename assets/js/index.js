// Link pagination
const pagAboutme = document.getElementById('pagAboutme');
const pagExperience = document.getElementById('pagExperience');
const pagTech = document.getElementById('pagTech');

//Divs - páginas a carregar
const divAboutme = document.getElementById('aboutme');
const divExperience = document.getElementById('experience');
const divTech = document.getElementById('tech');

//Variáveis da páginas
const nome = document.getElementById('nome');
const email = document.getElementById('email');

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

    getExperiences();
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
        if(element.id !== "nav-home-tab" && element.id !== "nav-home"){
            element.classList.remove('active');
        }
    });
}

//Realizando o login e em seguida chama o readUser
signin();

function readUser(token){
    const url="https://resume-nodejs-mysql.herokuapp.com/user/1";
    return fetch(url, {headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + token}})
    .then(result=>{
        return result.json();
    })
    .then(data=>{
        nome.innerHTML = data.firstName + " " + data.lastName;
        email.innerHTML = data.email;
        let urlData="https://resume-nodejs-mysql.herokuapp.com/technologies/user/1";
        return fetch(urlData, {headers: {"Content-Type": "application/json"}})
    })
    .then(result=>{
        return result.json()
    })
    .then(result=>{
        console.log(result);
        const divTec = document.getElementById('tecnologias');

        result.forEach(tec=>{
            const div = document.createElement('div');
            div.classList.add('tecnologias');
            div.innerHTML = tec.name;
            divTec.append(div);
        });
        spinner.style.display = "none";
        return result;
    });
}