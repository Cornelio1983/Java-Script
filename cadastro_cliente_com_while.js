//CADASTRO DE CLIENTE - USANDO O WHILE

//Chamando a biblioteca prompt-sync
const prompt = require('prompt-sync')();

//Criando variável de controle
var novoCliente = 1;
var ordemdeCadastro = 1;

//Implementando logica

while (novoCliente == 1) {

    //imprimindo título do programa
    console.log('>>>>>Cadastro de Cliente<<<<<');

    //condição para sair do programa
    console.log('Digite 0 para sair do programa');
    console.log('Digite 1 para cadastrar novo cliente');

    //novo cliente
    var novoCliente = prompt('Cadastrar novo cliente: ');

    if (novoCliente == 0) {

        //mensagem avisando que está saindo do sistema
        console.log('Saindo do sistema...');

        //sair do sistema
        break;

    } else if (novoCliente == 1) {

        //imprimindo numero de ordem do cliente
        console.log('Cliente', ordemdeCadastro);

        //criando variaveis para captação de dados
        var nomeCliente = prompt('Digite o nome do cliente: ');
        var contatoCliente = prompt('Digite o telefone do cliente: ');

        //incrementando ordem de cadastro do Cliente
        ordemdeCadastro++
    }
    //saltando uma linha caso haja um novo cadastro de cliente
    console.log('\n')
}