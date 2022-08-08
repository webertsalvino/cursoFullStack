const NOTAS = [5,8,9,2.6];

function media(vetor = []) {

    var soma = 0;
    
    for (var contador = 0; contador < vetor.length; contador++){
        soma += vetor[contador];
}
    return soma / vetor.length
}
console.log('Notas:',NOTAS);
console.log('Média',media(NOTAS));
