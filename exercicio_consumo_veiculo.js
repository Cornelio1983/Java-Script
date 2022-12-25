//ALGORITIMO PARA MOSTRAR CONSUMO DO VEICULO

//utlizando a biblioteca 'prompt-sync'
const prompt = require('prompt-sync')();

//criando variaveis
let modeloCarro = prompt('Digite o modelo do carro: ');
let percurso = parseFloat(prompt('Digite o percurso em Km: '));
let qtdaCombustivel = parseFloat(prompt('Digite a quantidade de litros de combustível: '));
let consumoCarro = percurso / qtdaCombustivel;

//mostrando na tela a autonomia do veículo
console.log('O consumo do carro ', modeloCarro, 'é de ', consumoCarro.toFixed(2), 'litros.');