let n1=parseInt(prompt("Ingrese el primer número"));
let n2=parseInt(prompt("Ingrese el segundo número"));
let opc=0;

do{
    console.log("[1] Sumar");
    console.log("[2] Restar");
    console.log("[3] Multiplicar");
    console.log("[4] Dividir")
    opc=parseInt(prompt("Seleccione una opción"))
}while(opc<1|opc>4);

switch (opc){
    case 1:
        console.log(n1+n2);
        break;
    case 2:
        console.log(n1-n2);
        break;
    case 3:
        console.log(n1*n2);
        break;
    case 4:
        console.log(n1/n2);
        break;            
}