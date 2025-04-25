let nota1 = 40;
let nota2 = 60;
let nota3 = 60;
let nota4 = 100;
let media;

media = (nota1+nota2+nota3+nota4)/4;

console.log("Média:", media);

if (media>=60){
    console.log("Aprovado");
}
else if (media<40){
    console.log("Reprovado");
}
else {
    console.log("Recuperação");
}