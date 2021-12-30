
//RESOLVER EL EJERCICIO CON UN LISTADO FIJO
//ARRAY
// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ];

//CICLO FOR
// let sumaLista1 = 0;
// for(var i = 0; i < lista1.length; i++){
//     sumaLista1 = sumaLista1 + lista1[i];
// }
// const promedioLista1 = sumaLista1/ lista1.length;

//SOLUCIÓN CON UN LISTADO CUALQUIERA
// function calcularMediaAritmetica (lista) {
//     let sumaLista = 0;
//     for(let i = 0; i < lista.length; i++) {
//         sumaLista = sumaLista + lista[i];
//     }
//     const promedioLista = sumaLista / lista.length;
//     return promedioLista;
// }

//SOLUCIÓN CON MÉTODO REDUCE
function calcularMediaAritmetica (lista) {
   const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
   )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}