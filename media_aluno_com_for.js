//MEDIA ALUNO

//Chamando modulo prompt-sync
const prompt = require('prompt-sync')();

//Implementando o laço atraves do FOR
//Será solicitado 03 notas do aluno p/ calculo da média

//Titulo do Programa
console.log('>>>>> Calcular Média do Aluno <<<<<');

//A contagem da sequencia será iniciada com 1
//
for (i = 1; i <= 3; i++) {

    //Enumerando os alunos
    console.log('Aluno', i)

    //Criando variaveis para captação de dados do aluno
    var nomeAluno = prompt('Digite o nome do aluno: ');
    var primeiraNota = parseFloat(prompt('Digite a primeira nota: '));
    var segundaNota = parseFloat(prompt('Digite a segunda nota do aluno: '));
    var terceiraNota = parseFloat(prompt('Digite a terceira nota do aluno: '));

    //Constate para calculo da média
    const mediaAluno = ((primeiraNota + segundaNota + terceiraNota) / 3).toFixed(2);

    //Implementando lógica para dizer se o aluno foi aprovado
    if (mediaAluno >= 6) {
        console.log('Sua média foi: ', mediaAluno);
        console.log('Parabéns, você foi aprovado!', '\n');
    } else if (mediaAluno < 6 && mediaAluno >= 4.5) {
        console.log('Sua média foi: ', mediaAluno);
        console.log('Aluno(a) de prova final!', '\n');
    } else {
        console.log('Sua média foi: ', mediaAluno);
        console.log('Aluno(a) reprovado!', '\n');
    }
}