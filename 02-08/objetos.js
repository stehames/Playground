let carro = {
    nome: "Fox",
    ano: 2012,
    ligar: function(){
        console.log("O carro "+this.nome+" está ligado")
    }
}
carro.ligar()

function Carro(nomeCarro, anoCarro){
    this.nome = nomeCarro;
    this.ano = anoCarro;
}

let civic = new Carro("Civic", "2019");
let gol = new Carro("Gol", "2017");

console.log(civic)
console.log(gol)