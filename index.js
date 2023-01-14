// Algoritmo para receber dez alturas de dez alunos
// Critérios: exibir para cada aluno quantos são menores que ele

// Chamando a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Declarando variável vetorial para guardar valores das alturas
var alturas = [];
// Declarando variavel para guardar menor altura
var menorAltura = [3];
// Declarando variável para guardar maior altura 
var maiorAltura = [];

// Implementar a entrada de dados
for (var i = 0; i <= 9; i++) {
    // mostra posicao do aluno dentro do array
    console.log('Posicao do aluno no vetor Altura: ', i);
    // solicitando altura do aluno
    alturaAluno = parseFloat(prompt('Digite a altura do aluno: '));
    // guardando todas as alturas no vetor alturas
    alturas.push(alturaAluno);
    // saltando um linha
    console.log('\n');
    // Implementar o processamento de dados
    for (var j = 0; j <= 9; j++) {
        // implementando condicao para encontrar menor altura
        if (alturas[i] < menorAltura) {
            // guardando a menor altura na variavel menorAltura
            menorAltura = alturas[i];
        // implementando condicao pra encontrar maior altura
        } else if (alturas[i] > maiorAltura) {
            // guardando maior altura na variavels maiorAltura
            maiorAltura = alturas[i];
        }
    }
}
// imprimindo array colecao de alturas
console.log('Coleção Array de alturas: ', alturas);
// mostrando a menor altura
console.log('A menor altura é: ', menorAltura);
// mostrando a maior altura
console.log('A maior altura é: ', maiorAltura);
// imprimindo um salto de linha
console.log('\n');