let numerosPares = [2, 4, 6, 8, 10];

//MAP
let numerosParesDobro = numerosPares.map(function(valor){
    return valor * 2;
}
)

console.log(numerosParesDobro)

//FILTER
let numerosFiltrados = numerosPares.filter(function(valor){
    return valor > 10;
})

console.log(numerosFiltrados)

//REDUCE
let somaPares = numerosPares.reduce(function(acum, valor){
    return acum + valor;
})
console.log(somaPares)

//FOREACH
numerosPares.forEach(function(valor, indice){
    console.log("o indice "+indice + " tem o valor: "+valor);
})