function adicionarHttp(url) {
    return "http://" + url
    // escreva seu código aqui

}
let array = [];
let lista = ["www.google.com","www.yahoo.com"];
function processar(lista, adicionarHttp){
    // escreva seu código aqui
   
    for(let i = 0; i<lista.length; i++){
        array.push(adicionarHttp(lista[i]))
    }
    
    return array;

}
