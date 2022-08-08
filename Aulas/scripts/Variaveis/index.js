// Declaração das variáveis

var nome = "";
var sobrenome = "";
var anoNascto = 0;
var anoAtual = 0;
var idade = 0;
var nomeCompleto = ""
var fraseFinal = "";


//Alimentação das variáveis
nome = "Webert";
sobrenome = "Salvino";
anoNascto = 1982;
anoAtual = 2022;
idade = anoAtual - anoNascto;

//Usando XXXX
nomeCompleto = nome + " " + sobrenome;
fraseFinal = nome.concat(" ").concat(sobrenome);
fraseFinal = fraseFinal + " nascido em " + anoNascto;


//Exibir na tela
console.log("Var nome:",nome);
console.log("Var sobrenome:",sobrenome);
console.log("Var nomeCompleto:",nomeCompleto);
console.log("Var fraseFinal:",fraseFinal);
console.log(fraseFinal,"portanto tem",idade, "anos de idade");