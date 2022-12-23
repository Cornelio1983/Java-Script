//importando a biblioteca 'prompt-sync'
const prompt = require('prompt-sync')();

//criando a constante teto de aposentadoria
const tetoMinimo = 1212;
const tetoMaximo = 7087.22;

//criando variáveis para implementacao do código
var idade = parseInt(prompt('Digite sua idade: '));
var tempo = parseInt(prompt('Digite seu tempo de serviço: '));
var salario = parseFloat(prompt('Digite o valor do seu salário: '));

// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar
if (idade >= 65 || tempo >= 30 || (idade >= 60 && tempo >= 25)) {
    console.log('Você pode se aposentar!');

    // Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)
    if (tempo > 20) {
        aposentadoria = salario * 0.80;

    } else if (tempo <= 20) {
        aposentadoria = salario * 0.60;
    }

    // Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)

    if (aposentadoria > tetoMaximo) {
        aposentadoria = tetoMaximo;
    } else if (aposentadoria < tetoMinimo) {
        aposentadoria = tetoMinimo;
    } else {
        aposentadoria = aposentadoria;
    }
    console.log('O valor de sua aposentadoria é de: R$', aposentadoria);
} else {
    console.log('Você não pode se aposentar neste momento!');
}