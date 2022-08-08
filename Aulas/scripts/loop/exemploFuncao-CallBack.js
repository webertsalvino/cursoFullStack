const NOTAS = [5,8,9,2.6];

function media(vetor = []) {

    var soma = 0;
    
    vetor.forEach( (valorAtual) => {

        console.log(valorAtual)

        soma += valorAtual

    })

    return soma / vetor.length
}

console.log('Notas:',NOTAS);
console.log('Média',media(NOTAS));