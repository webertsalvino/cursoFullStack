var jogoVelha = [['X','O'],['X','O'],['X']];
var coluna1 = '';
var coluna2 = '';
var coluna3 = '';
var linha1 = '';
var linha2 = '';
var linha3 = '';
var diagonal1 = '';
var diagonal2 = '';

for (indice = 0; indice < jogoVelha.length;) {
    console.log('Indice:',indice,'Tamanho vetor:',jogoVelha[indice].length);

    for (indiceNovo = 0; indiceNovo < jogoVelha[indice].length;) {
            console.log(indiceNovo,' ',jogoVelha[indice][indiceNovo]);

            /*
            if (indiceNovo = 0) {
                coluna1 = coluna1 + jogoVelha[indice][indiceNovo];

            } else {
                
            }
            */
            indiceNovo ++;
        }
    indice ++;
}

console.log(coluna1);