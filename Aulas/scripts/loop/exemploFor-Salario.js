var salarios = [1500.35, 4838.70, 10525.14, 3250.90];
var contador = 0;
var totalFolha = 0;

while (contador <=3) {
    totalFolha = totalFolha + salarios[contador];
    contador ++;
}

console.log('Valor total da folha é',totalFolha);