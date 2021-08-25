let pessoa = ["Stephanie", 1.77, "Stephanie"];
console.log(pessoa);

//push
//adiciona no final do array
pessoa.push(27);
console.log(pessoa);

//pop
//retira o último elemento da array e retorna
let excluido = pessoa.pop(); 
console.log(excluido);

//unshift
//adiciona no começo da array
pessoa.unshift(27);
console.log(pessoa);

//shift
//retira o primeiro elemento da array e retorna
pessoa.shift();
console.log(pessoa);

//indexOf
//primeira ocorrencia
console.log(pessoa.indexOf("Stephanie"));

//lastIndexOf
//ultima ocorrencia
console.log(pessoa.lastIndexOf("Stephanie"));

//join
//transforma um array em uma string
console.log(pessoa.join(" | "));