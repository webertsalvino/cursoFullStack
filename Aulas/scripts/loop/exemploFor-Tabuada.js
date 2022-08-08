const numero = 100.835;

for (var tabuada =1; tabuada <= 10; tabuada++){
    console.log(tabuada.toString()
                .concat('x')
                .concat(numero.toString())
                .concat(' = ')
                .concat((tabuada * numero).toFixed(2))
                );
}