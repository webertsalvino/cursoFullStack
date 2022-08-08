//Declaração de variáveis já atribuindo valores
var num01 = 100;
var num02 = 200;
var num03 = 0;
var strNum01 = "100";
var strNum02 = "200";
var strNum03 = "0";


//Comparação simples
console.log("Comparação simples:");
console.log(num01 > num02);
console.log(num01 >= strNum01);
console.log(num01 >= strNum02);

//Comparação de conteudo e valores
console.log("Comparação de conteudo e valores:");
console.log(num01 == strNum01);
console.log(num01 === strNum01);

//Comparação de conteudo e valores com conversão
console.log("Comparação de conteudo e valores com conversão:");
console.log(num01 == strNum01);
console.log(num01 === parseFloat(strNum01));
console.log(num01 === parseInt(strNum01));

