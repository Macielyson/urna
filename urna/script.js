// controle de tudo que tem na tela

// variaveis de controle de interface
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

// variaves de cotrole de ambiente / começar com as etapas
let etapaAtual = 0;

//para preencher oss numeros
let numero = '';





// funçoes de ambiente


function comecarEtapa() {

    let etapa = etapas[etapaAtual];
    let numerosHtml = '';

    for (let i = 0; i < etapa.numeros; i++) {
        //ele adiciona o pisca no primeiro elemento
        if (i === 0) {
            numerosHtml += '<div class="numero pisca"></div>';
        } else {
            numerosHtml += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numerosHtml;
};

function atualizaInterface() {
    // aqui ele vai atualiza r as inforaçoes do cadidatos
    alert('Finalizou!!!')
}

function clicou(n) {

    let elNumero = document.querySelector('.numero.pisca');
    // se estiver selecionado
    if (elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        // verifica se tem mais algum elemento
        if (elNumero.nextElementSibling !== null) {
            //adiciona a classs no proximo elemento
            // nextElementSibling => procura o proximo elemento
            elNumero.nextElementSibling.classList.add('pisca');
        } else {

            atualizaInterface();
        }
    }
};
function branco() {
    alert('Clicou em Branco');
};
function corrige() {
    alert('Clicou em corrige');

};
function confirma() {
    alert('Clicou em confirma'); s

};

comecarEtapa();
