var salarios = [1500.35, 4838.70, 10525.14, 3250.90, 8512.24];
var totalFolha = 0;
var indice = 0;
var menorSalario = salarios[0];
var maiorSalario = salarios[0];
var mediaSalario = 0;

do {
    totalFolha = totalFolha + salarios[indice];
    indice++
    
    if (maiorSalario < salarios[indice]) {
        maiorSalario = salarios[indice];
    }

    if (menorSalario > salarios[indice]){
        menorSalario = salarios[indice];
    }

    if (salarios.length > 0) {
        mediaSalario = (totalFolha / salarios.length).toFixed(2)
    }

} while (indice <= salarios.length - 1)

console.log('Total funcionários é',salarios.length)
console.log('Total da folha é',totalFolha);
console.log('Maior salário é',maiorSalario);
console.log('Menor salário é',menorSalario);
console.log('Média salarial é:', mediaSalario);