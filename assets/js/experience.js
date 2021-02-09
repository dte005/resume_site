const exps = [
    {
        "empresa": "DGT",
        "imagem": "https://media-exp1.licdn.com/dms/image/C4D0BAQE8I5Ja1LhlgA/company-logo_200_200/0/1545915893521?e=2159024400&v=beta&t=1nJ65K2a1JpFIkx8anPZgGbG-OTKp4ZUYiLRQgr0MRI",
        "jobDescription": "Desenvolver soluções em automatização de processos corporativos através de ferramentas em BPMN e também entregar soluções web que agreguem valor aos processos automatizados. <p>Através do javascript e frameworks de mercado atendemos as demandas dos nossos clientes.",
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
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-kkZVC7kQK0hKUVsZk4qVxfAS2vTZNmQ-Q&usqp=CAU",
        "jobDescription": "Responsável pelo comissionamento de motores navais, assim como, prestar atendimento pós venda.<p> Desenvolver soluções emm automações industrial utilizando controladores lógicos e atuadores.<p> Prover relatórios de serviços completos para análise de garantia.",
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
        const div = document.createElement('div');
        div.classList.add('tecnologias');
        div.innerHTML = proj.nome;
        div.dataset.id = proj.nome;
        div.style.cursor = "pointer";
        div.addEventListener('click', function(ev){
            console.log(ev.target.dataset.id);
        })
        list.append(div);
    })

    let imagem = novo.getElementsByClassName('projetos-img')[0];
    imagem.src = hit.imagem;
    
    novo.classList.remove('d-none');
    exp.append(novo);
});