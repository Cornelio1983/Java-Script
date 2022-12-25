//3° EXERCICIO PRÁTICO DO CURSO REPROGRAME-SE
//Módulo Java Script

//Objetivo:

//imprimir na tela 20 primeiros numeros
//elevar cada um ao quadrado
//exibir a sequencia de numeros
//exibir a soma de pares e impares

//Metodo utilizado: FOR

//********************************************

//criando variavel para somar numeros pares e impares
let somaPar = 0;
let somaImpar = 0;
let somaGeral = 0;

//implementando laço através do FOR
for (let numero = 1; numero <= 20; numero++) {
    //criando variavel para guardar o quadrado do número
    quadrado = numero ** 2;
    //mostrando na tela o quadrado dos 20 primeiros números
    console.log(quadrado);
    //implementando comando de decisao p/ somar par ou impar
    if (quadrado % 2 == 0) {
        //variavel que guarda soma dos quadrados pares
        somaPar += quadrado;
    } else {
        //variavel que guarda soma dos quadrados impares
        somaImpar += quadrado;
    }
    if (quadrado = numero ** 2) {
        somaGeral += quadrado;
    }
}
//imprimindo na tela soma dos quadrados pares
console.log('A soma dos números pares é: ', somaPar);
//imprimindo na tela soma dos quadrado impares
console.log('A soma dos números impares é: ', somaImpar);
//imprimindo na tela a soma geral dos quadrados
console.log('A soma geral dos quadrados é: ', somaGeral);