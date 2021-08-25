//modo declarativo



function somar(a,b){
    //codigo
    let numero = 32;
    console.log(numero);
    console.log("Estou somando...")
    return a + b; 
    
}


let resultadoSoma = somar(1,2);
console.log(resultadoSoma);

//modo expressão
const multiplicar = function(a, b){
    //codigo
    console.log("Estou multiplicando");
    return a * b;
}
console.log(multiplicar(2,10));
