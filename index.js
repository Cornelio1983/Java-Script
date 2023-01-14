// Funcao para calcular o IMC de uma pessoa
// Critérios: a funcao deve receber o peso e a altura de uma pessoa e retornar o IMC

// Criando a funcao para calcular IMC
function calcular_IMC(peso, altura) {
    // declarando variavel IMC
    let IMC;
    // criando equacao para calcular valor do IMC
    IMC = peso / (altura * altura);
    // funcao para retornar o valor do IMC
    return IMC;
}

// Criando funcao para verificar situacao da pessoa relacionado ao IMC
function verificar_situacao(IMC) {
    // declarando variavel auxiliar
    let situacao;

    // implementando condicao para verificar situacao

    if (IMC < 18.5) {
        // se IMC menor que 18.5, retornar situacao 1
        situacao = 1;
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        // se IMC maior que 18.5 e menor que 24.9, retornar situacao 2
        situacao = 2;
    } else if (IMC > 24.9 && IMC <= 29.9) {
        // se IMC maior que 24.99 e menor que 29.9, retornar situacao 3
        situacao = 3;
    } else {
        // se IMC diferente das situações anteriores, retornar situacao 4
        situacao = 4;
    }
    // metodo para retorar situcao encontrada
    return situacao;
}

// Funcao (procedimento) para exibir descricao de cada situacao
function exibir_descricao_da_situacao(situacao) {
    if (situacao == 1) {
        console.log('Você está abaixo do peso ideal!');
    } else if (situacao == 2) {
        console.log('Parabéns, você em seu peso normal!');
    } else if (situacao == 3) {
        console.log('Você está com sobrepeso!');
    } else {
        console.log('Obesidade!');
    }
}

// Chamando bilioteca prompt-sync
const prompt = require('prompt-sync')();

// Implementando laço para captar dados das pessoa
for (let i = 1; i < 6; i++) {
    // imprimindo controle de pessoas
    console.log('PESSOA ', i);
    // declarando variaveis para captar dados de cinco pessoas
    let nome = prompt('Digite seu nome: ');
    let peso = parseFloat(prompt('Digite seu peso (kg): '));
    let altura = parseFloat(prompt('Digite sua altura (Metros): '));
    // declarando variavel IMC par chamar funcao que calcula o seu valor
    let IMC = calcular_IMC(peso, altura);
    // declarando variavel local para chamar funcao que verifica situação do IMC
    let situacao = verificar_situacao(IMC);
    //console.log(situacao)
    // chamando funcao para exibir situacao
    exibir_descricao_da_situacao(situacao);
    // imprimir salto de linha entre uma pessoa e outra
    console.log('\n');
}
