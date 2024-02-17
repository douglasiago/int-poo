import modificador from "./modificador.js";

console.log(modificador);

var ingredientes = ['mel', 'água', 'sal', 'mostarda'];
var resultadoCapitalizado = modificador.capitalizar(ingredientes);
var resultadoOrdenado = modificador.ordenar(resultadoCapitalizado);
var resultadoCaixaAlta = modificador.caixaAlta(ingredientes);

console.log(resultadoCapitalizado);
console.log(resultadoOrdenado);
console.log(resultadoCaixaAlta);
