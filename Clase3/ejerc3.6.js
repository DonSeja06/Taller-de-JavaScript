function invertirCadena(cadena){
    inv = cadena.split('').reverse().join();
    return inv;
}

let cadena = prompt ("Ingrese la cadena a invertir: ");

console.log("Cadena invertida: ",invertirCadena(cadena));