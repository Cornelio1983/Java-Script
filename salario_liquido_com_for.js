//Programa para calcular salário líquido de 03 pessoas
//Será considerando também a renda de seus dependentes
//Após essas bases se fará o desconto do IR
//Para esses calculos usaremos o laço FOR

//Importando a biblioteca 'prompt-sync'
const prompt = require('prompt-sync')();

//Implementando o laço for
for (pessoa = 1; pessoa <= 4; pessoa++) {
    //mostrando na tela a ordem algébrica das pessoas
    console.log('Pessoa', pessoa);

    //criando variaveis para solicitar dados
    var nomePessoa = prompt('Digite seu nome: ');
    var salarioBruto = parseFloat(prompt('Digite seu salário bruto: R$'));
    var dependentes = parseInt(prompt('Digite a quantidade de dependentes: '));

    //captando renda dos dependentes
    for (qtdaDependentes = 1; qtdaDependentes <= dependentes; qtdaDependentes++) {
        //captando renda dos dependentes
        var rendaDependentes = parseFloat(prompt('Digite o valor da renda do dependente: R$'));
        //somando renda dos dependentes com a renda do arrimo de família
        salarioBruto = salarioBruto + rendaDependentes;
    }
    //criando variavel para descobrir a renda per capta
    var rendaPercapta = (salarioBruto / (dependentes + 1));
    //implementando condição para calculo do IR
    if (rendaPercapta >= 500) {
        if (salarioBruto >= 0 && salarioBruto <= 1903.98) {
            //calculo do IR - alíquota de 5%
            var aliquota = 0.05;
            var ir = salarioBruto * aliquota;
        } else if (salarioBruto <= 2826.65) {
            //calculo do IR - aliquota de 7.5%
            var aliquota = 0.075;
            var ir = salarioBruto * aliquota;
        } else {
            //calculo do IR - alíquota de 15%¨
            var aliquota = 0.15;
            var ir = salarioBruto * aliquota;
        }
        //criando variavel para calculo do salario liquido
        var salarioLiquido = (salarioBruto - ir);
        //mostrando na tela a aliquota do IR
        console.log('Sua alíquota do IR foi: ', aliquota * 100, '%');
        //mostrando o valor do IR descontado
        console.log('O IRRF foi de: R$', ir);
        //mostrando na tela o salário liquido
        console.log('O salário líquido é: R$', salarioLiquido.toFixed(2));
    } else {
        //caso a renda percapta seja menor que 500 o IR não será descontando
        var ir = 0;
        //imprimir mensagem explicativa casa a pessoa não tenha base de calculo do IR;
        console.log('Você não tem base salarial para descontar IRRF!');
    }
    //imprimindo salto de linha a cada pessoa
    console.log('\n');
}