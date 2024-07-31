function encontrarMayoryMenor(arr){
    let mayor = arr[0];
    let menor = arr[0];
    for (let i=1; i<arr.length;i++){
        if(arr[i]>mayor){
            mayor=arr[i];
        }
        if(arr[i]<menor){
            menor=arr[i];
        }
    }
    return {mayor, menor};
}

let numeros = [2,5,58,28,9];
console.log(encontrarMayoryMenor(numeros))