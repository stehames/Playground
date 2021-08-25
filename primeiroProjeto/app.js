const fs = require('fs');

let moment = require('moment');

const superheroes = require('./superheroes');
const series = require('./series');

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8');
let data = moment().format("MMM do YY");

console.log(superheroes);
console.log(series);