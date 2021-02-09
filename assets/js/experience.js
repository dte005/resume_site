const exps = [
    {
        "empresa": "DGT",
        "jobDescription": "Desenvolvedor Pleno em Javascript",
        "inicio": "08/02/2021",
        "final": "08/02/2021",
        "funcaoInicial": "Desenvolvedor pleno",
        "atual": true,
        "funcaoFinal": "Desenvolvedor Pleno",
        "projetos": [
            {
            "nome": "Projeto 1",
            "tecnologias": ["CSS", "HTML", "JS"],
            "descricao": "Projeto voltado para o desenvovlvimento de resolução de problemas do cliente"
            }
        ],
        "tecnologias": ["HTML", "CSS", "Javascript"]
    },
    {
        "empresa": "Wartsila",
        "jobDescription": "Supervisor de automação responsável pela porra toda",
        "inicio": "08/02/2021",
        "final": "08/02/2021",
        "funcaoInicial": "Supervisor de automação",
        "atual": false,
        "funcaoFinal": "Supervisor de automação",
        "projetos": [
            {
            "nome": "Projeto 1",
            "tecnologias": ["CSS", "HTML", "JS"],
            "descricao": "Projeto voltado para o desenvovlvimento de resolução de problemas do cliente"
            },
            {
            "nome": "Projeto 2",
            "tecnologias": ["CSS", "HTML", "JS"],
            "descricao": "Projeto voltado para o desenvovlvimento de resolução de problemas do cliente"
            }
        ],
        "tecnologias": ["HTML", "CSS", "Javascript"]
    }
]

const exp = document.getElementById('experience');
const expCard = document.getElementById('exp-card');

//Lendo as experiências
exps.forEach(hit=>{
    let novo = expCard.cloneNode(true);
    //Carregando as informações
    let span = novo.getElementsByClassName('info-form');
    span[0].innerHTML = hit.empresa;
    span[1].innerHTML = hit.inicio;
    span[2].innerHTML = hit.final;
    span[3].innerHTML = hit.funcaoInicial;
    span[4].checked = hit.atual

    //Carregando a descricao
    let descr = novo.getElementsByClassName('descr')[0];
    descr.innerHTML = hit.jobDescription;

    //Carregando os projetos
    let list = novo.getElementsByClassName('projetos-list')[0];
    hit.projetos.forEach(proj=>{
        let item = document.createElement('li');
        item.innerHTML = proj.nome;
        list.append(item);
    })

    novo.classList.remove('d-none');
    exp.append(novo);
});