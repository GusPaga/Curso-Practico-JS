function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
//ARRAY EJEMPLO
const lista1 = [
    400000000,
    500,
    800,
    300,
    200,
    100,
];
console.log(lista1);

//ORDENAR LISTA CON CICLO FOR
let listaOrdenada = [];
for(let i = 0; i < lista1.length; i++) {
    if(lista1[i] > listaOrdenada) {
        listaOrdenada = lista1[i];
    } 
    console.log ( "{LÍNEA 27 " + listaOrdenada);
}
//ORDENAR CON MÉTODO ".sort" N°1
lista1.sort(function(a,b){
    return a - b;
})
console.log("LÍNEA 33 " + lista1);
    
//ORDENAR CON MÉTODO ".sort" N°2
lista1.sort((a,b) => a - b);
console.log( "LÍNEA 37 " + lista1);






const mitadLista1 = parseInt(lista1.length / 2);
function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let mediana;

if (esPar(lista1.length)) {
    const elemento1 = mitadLista1 - 1;
    const elemento2 = mitadLista1;
    promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]
    );
    mediana = promedioElemento1y2;

} else {
    mediana = lista1[mitadLista1];
}
 