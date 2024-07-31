function sumarElementos(vector){
    let suma=0;
    for(let i=0; i<vector.length;i++){
        suma+=vector[i];
    }
    return suma;
}

let num = [1,9,8,2];
console.log(sumarElementos(num));