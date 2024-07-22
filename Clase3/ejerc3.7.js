function factorial(num){
    let fact=1;
    for (let i=1; i<=num;i++){
        fact=fact*i;
    }
    return fact;
}

let n = parseInt(prompt("Ingrese el número del que desea calcular el factorial:"));
console.log(factorial(n));