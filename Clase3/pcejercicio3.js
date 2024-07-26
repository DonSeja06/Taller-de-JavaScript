function contarvocales(textou){
    let contadorvocales=0;
    for (let i=0; i<textou.length;i++){
        let caracterr=textou[i];
        switch (caracterr){
            case "a":
                contadorvocales++;
                break;
            case "e": 
                contadorvocales++;
                break;
            case "i": 
                contadorvocales++;
                break;
            case "o": 
                contadorvocales++;
                break;             
            case "u": 
                contadorvocales++;
                break; 
        }
    }
    return contadorvocales;
}

let textoi=prompt("Ingrese un texto")
textoi=textoi.toLowerCase();

console.log(contarvocales(textoi));
