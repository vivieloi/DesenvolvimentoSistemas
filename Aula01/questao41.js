// Variáveis
let peso = 100;
let pesoGordo = peso * 0.15;
let pesoMagro = peso * 0.20;

let pesoGanho = peso + pesoGordo;
let pesoPerdido = peso - pesoMagro;

console.log("Peso (engordar): " + pesoGanho);
console.log("Peso (emagrecer): " + pesoPerdido);
