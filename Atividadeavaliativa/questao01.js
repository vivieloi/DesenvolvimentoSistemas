function anoNovo (minutos){
    let segundo = minutos * 60;
    // aq seria a conversão de minuto para segundos
    for (let i = segundo; i >=0; i--){
        // aq fala q enquanto i (no caso o segundo) for maior ou igual a 0 ele continua exibindo oq está no console log, no caso os segundos e em ordem decrescente, por isso o --
        console.log("Faltam " + i + " segundos");
        if (i == 0) {
            // aq serve de parada, ou seja, se 1 for = 0, quando o contador chegar em 0 ele vai"parar", e exibir oq está no console log
            console.log(" Feliz ano novo")
        }
    }
}
anoNovo(1)