const spinner = document.getElementById('spinner');

//Funcão que realiza o login do unico usuário e recupera o token
function signin(){
    let url = "https://resume-nodejs-mysql.herokuapp.com/signin";
    let data = {"email": "danieldts2013@gmail.com", "password": "123456"};
    spinner.style.display = "flex";
    fetch(url, {method: 'POST', headers: {'Content-type': 'application/json'}, body: JSON.stringify(data)})
    .then(result=>{
        return result.json();
    })
    .then(data=>{
        if(data.token){
            window.localStorage.setItem('jwt', JSON.stringify(data.token));
            return readUser(data.token);
        }else{
            throw new Error("Não foi possível recupera o usuário");
        }
    })
    .then(result=>{
        console.log("Done");
    })
    .catch(error=>{
        console.log(error);
    });
}

//Funcao que retorna o valor do token
function readToken(){
    return window.localStorage.getItem('jwt') ? JSON.parse(window.localStorage.getItem("jwt")) : false;
}