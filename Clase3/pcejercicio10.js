function revertirCadena(cadena){
    inv = cadena.split('').reverse().join();
    return inv;
}

let texto = prompt ("Ingrese la cadena a invertir: ");

console.log("Cadena invertida: ",revertirCadena(texto));