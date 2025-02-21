// Variáveis
let fatiaQueijo = 50; // 50g, cada fatia
let fatiaPresunto = 50; // 50g, cada fatia
let hamburguer = 100;  // 100g, cada unidade
// Entrada
let sanduichesAFazer = 5;
// Processamento
let quiloQueijo = (sanduichesAFazer * fatiaQueijo *2) /1000; // valor em grama 
let quiloPresunto = (sanduichesAFazer * fatiaPresunto) /1000;
let quiloHamburguer = (sanduichesAFazer * hamburguer) /1000;
// Saída
console.log("\t*** LANCHONETE ***");
console.log("Para" + sanduichesAFazer + "sanduíches é necessário: "); 
console.log("-" + quiloQueijo + "kg de queijo");
console.log("-" + quiloPresunto + "kg de presunto");
console.log("-" + quiloHamburguer + "kg de hamburguer"); 

