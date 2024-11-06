const caixaprincipal=document.querySelector(".caixa-principal");
const caixaperguntas=document.querySelector(".caixa-perguntas");
const caixaalternativas=document.querySelector(".caixa-alternativas");
const caixaresultado=document.querySelector(".caixa-resultado");
const textoresultado=document.querySelector(".texto-resultado");

const pergunta = [
    {
        enunciado: "assim que sai da escola se depara com uma nova tecnologia",
    alternativas:[
        "isso e assustador!",
        "isso e maravilhoso!"
    ]
},   
{
    enunciado:"com a descoberta desta tecnologia, chamada inteligencia artificial",
    alternativas:[
        "utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explorar um pouco mais sobre esse assunto.",
        "escrever o trabalho com base nas conversas que teve com os colegas"
    ]
},
{
    enunciado:"após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa do trabalho",
    alternativas:
     "defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas",
     "me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importancia de proteger os trbalhadores"
   
},
{ 
    enunciado:"ao final da discussão, voce precisou criar uma imagem no computador",
    alternativas:[
        "criar uma imagem utilizando uma plataforma de designer como o paint.",
        "criar uma imagem utilizando um gerador de imagem de IA."
    ]
},
{ 
    enunciado:"voce tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho esta um pouco atrasado.",
    alternativas: [
        "escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso nao e um problema utilizar o texto inteiro.",
        "o chat pode ser uma tecnologia muito avaçada, mas e preciso manter muita atenção pois toda maquina errada pode acabar com seus arquivos. "
    ]
 },
];

let atual = 0,
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual]
    caixaperguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}Alternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaalternativas.appendChild(botaoAlternativas);
    }
}


function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botao
mostraPergunta();

  
