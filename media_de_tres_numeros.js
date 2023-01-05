const prompt = require("prompt-sync")();

// Leia os três números
var primeiro_numero = parseFloat(prompt('Digite o primeiro número: '));
var segundo_numero = parseFloat(prompt('Digite o segundo número: '));
var terceiro_numero = parseFloat(prompt('Digite o terceiro número: '));

// Calcule a soma e a média
var media = (primeiro_numero + segundo_numero + terceiro_numero) / 3;

// Mostre na tela o valor da soma e média
console.log('A média aritmética dos números é: ', media.toFixed(2));