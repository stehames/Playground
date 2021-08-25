let dia = "sexta"
let resultado = dia == "domingo"?"Vou a praia":"Fico em casa";
console.log(resultado);

switch(dia) { 
    case "segunda": 
        console.log("Vou tomar cafe");
        break;
    case "quarta": 
        console.log("Vou no cinema");
        break;
    default:
        console.log("Eu não vou fazer nada")
}