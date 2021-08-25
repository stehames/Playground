let frutas = ["maça", "banana", "uva"];

let frutas2 = ["laranja", "abacate", "goiaba"];

let listaCompleta = [...frutas, ...frutas2];

console.log(listaCompleta)

let pessoa = {
    nome:"Stephanie",
    idade: 27
}

let infoPessoal = {
    tel: 991124657,
    rg: 12423212,
    ...pessoa
}

let pessoaCompleta = {
    endereco: "Rua dos Bobos",
    ...infoPessoal
}

console.log(pessoaCompleta)

function letras(...params){
    console.log(params[1])
}

letras("a", "b", "c")