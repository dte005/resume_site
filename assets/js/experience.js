// const exps = [
//     {
//         "id": 1,
//         "empresa": "DGT",
//         "imagem": "update ",
//         "jobDescription": "Desenvolver soluções em automatização de processos corporativos através de ferramentas em BPMN e também entregar soluções web que agreguem valor aos processos automatizados. <p>Através do javascript e frameworks de mercado atendemos as demandas dos nossos clientes.",
//         "inicio": "08/02/2021",
//         "final": "08/02/2021",
//         "funcaoInicial": "Desenvolvedor pleno",
//         "atual": true,
//         "funcaoFinal": "Desenvolvedor Pleno",
//         "type": "p",
//         "link": "Xxxx",
//         "projetos": [
//             {
//             "id": 1,
//             "nome": "Projeto 1",
//             "tecnologias": ["CSS", "HTML", "JS"],
//             "descricao": "Projeto 1 da primeira experiência",
//             "funcionalidades": "Login e etc"
//             }
//         ],
//         "tecnologias": ["HTML", "CSS", "Javascript"]
//     },
//     {
//         "id": 2,
//         "empresa": "Wartsila",
//         "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-kkZVC7kQK0hKUVsZk4qVxfAS2vTZNmQ-Q&usqp=CAU",
//         "jobDescription": "Responsável pelo comissionamento de motores navais, assim como, prestar atendimento pós venda.<p> Desenvolver soluções emm automações industrial utilizando controladores lógicos e atuadores.<p> Prover relatórios de serviços completos para análise de garantia.",
//         "inicio": "08/02/2021",
//         "final": "08/02/2021",
//         "funcaoInicial": "Supervisor de automação",
//         "atual": false,
//         "funcaoFinal": "Supervisor de automação",
//         "type": "p",
//         "link": "Xxxx",
//         "projetos": [
//             {
//             "id": 1,
//             "nome": "Projeto 1",
//             "tecnologias": ["CSS", "HTML", "JS"],
//             "descricao": "Projeto 1 da segunda experiência",
//             "funcionalidades": "Login e etc"
//             },
//             {
//             "id": 2,
//             "nome": "Projeto 2",
//             "tecnologias": ["CSS", "HTML", "JS"],
//             "descricao": "Projeto 2 da segunda experiência",
//             "funcionalidades": "Login e etc"
//             }
//         ],
//         "tecnologias": ["HTML", "CSS", "Javascript"]
//     },
//     {
//         "id": 3,
//         "empresa": "Veiga de Almeida",
//         "imagem": "",
//         "jobDescription": "Projeto de desenvolvimento da monografia em python com DJango",
//         "inicio": "08/02/2021",
//         "final": "08/02/2021",
//         "funcaoInicial": "",
//         "atual": false,
//         "funcaoFinal": "",
//         "type": "e",
//         "link": "Xxxx",
//         "projetos": [],
//         "tecnologias": ["HTML", "CSS", "Javascript"]
//     }
// ]

const exp = document.getElementById('experience-item');
const expCard = document.getElementById('exp-card');
const expE = document.getElementById('experience-e-item');
const expCardE = document.getElementById('exp-e-card');

function getExperiences(){
    let url = "https://resume-nodejs-mysql.herokuapp.com/experiences/user/1";
    fetch(url, {headers: {'Content-Type': 'application/json'}})
    .then(result=>{
        return result.json();
    })
    .then(result=>{
        console.log(result.result);
        //Apagando dados anteriores
        exp.innerHTML = "";
        expE.innerHTML = "";
        //Lendo experiências
        result.result.forEach(hit=>{
            console.log(hit);
            if(!hit.type){
                let novo = expCard.cloneNode(true);
                //Carregando as informações
                let span = novo.getElementsByClassName('info-form');
                span[0].innerHTML = hit.company;
                span[1].innerHTML = hit.startDate;
                span[2].innerHTML = hit.finalDate;
                span[3].innerHTML = hit.startOccupation;
                span[4].checked = hit.current
            
                //Carregando a descricao
                let descr = novo.getElementsByClassName('descr')[0];
                descr.innerHTML = hit.description;
            
                //Carregando os projetos
                let list = novo.getElementsByClassName('projetos-list')[0];
                hit.Projects.forEach(proj=>{
                    const div = document.createElement('div');
                    div.classList.add('tecnologias');
                    div.innerHTML = (proj.name).toLowerCase();
                    div.dataset.id = hit.id;
                    div.dataset.proj = proj.id;
                    div.style.cursor = "pointer";
                    div.addEventListener('click', function(ev){
                        let exp = result.result.filter(hit=>hit.id === parseInt(ev.target.dataset.id))[0];
                        let proj = exp.Projects.filter(hit=>hit.id === parseInt(ev.target.dataset.proj))[0];
                        //Recuperando a div dentro da janela
                        const projCard = document.getElementById('projeto-item');
                        let span = projCard.getElementsByClassName('info-proj');
                        let divTechs = document.getElementById('proj-techs');
                        span[0].innerHTML = proj.name;
                        span[1].innerHTML = proj.description;
                        divTechs.innerHTML = "";
                        proj.technologies.forEach(tech=>{
                            let divTech = document.createElement('div');
                            divTech.classList.add('tecnologias');
                            divTech.innerHTML = (tech.name).toLowerCase();
                            divTechs.append(divTech);
                        })
                        span[3].innerHTML = proj.features ? proj.features : "Funcionalidades não listadas";
                    })
                    list.append(div);
                })
            
                let imagem = novo.getElementsByClassName('projetos-img')[0];
                if(hit.imageUrl){
                    imagem.src = hit.imageUrl;
                }
                
                novo.classList.remove('d-none');
                exp.append(novo);
            }else{ //Carregando projeto educacionais
                let novo = expCardE.cloneNode(true);
                //Carregando as informações
                let span = novo.getElementsByClassName('info-e-form');
                span[0].innerHTML = hit.company;
                span[1].innerHTML = hit.startDate;
                span[2].innerHTML = hit.finalDate;
            
                //Carregando a descricao
                let descr = novo.getElementsByClassName('descr')[0];
                descr.innerHTML = hit.description;
                
                novo.classList.remove('d-none');
                expE.append(novo);
            }
        });
    })
    .catch(err=>{
        console.log(err);
    })
}

