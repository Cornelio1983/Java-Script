//MOSTAR DIVISORES NUMERO A NUMERO
//LAÇO ANINHADO - FOR

//implementando o laço
for (i = 1; i <= 10; i++) {
    //imprimindo valor de i na tela
    console.log('Divisores do n°', i, ': ');
    //implemntando laço aninhado
    for (j = 1; j <= i; j++) {
        //implementando condicao
        if (i % j == 0) {
            //imprimindo valor do divisor na tela
            console.log(j);
        }
    }
}