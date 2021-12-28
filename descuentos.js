// //VIDEOS 10,11,12 DEL TALLER//
// //ESTA FUNCIÓN NOS CALCULA EL PRECIO FINAL A PAGAR//
// function calcularPrecioConDescuento (precio, descuento) {
//     const precioConDescuento = precio - (precio*(descuento / 100));
//     return "usted debe pagar $" + precioConDescuento;
// }

// function onClickButtonPriceDiscount() {
//     //OBTENER EL VALOR INGRESADO EN INPUTPRICE//
//     const inputPrice = document.getElementById("inputPrice");
//     const value = inputPrice.value;
//
//     //OBTENER EL VALOR INGRESADO EN INPUTDISCOUNT//
//     const inputDiscount = document.getElementById("inputDiscount");
//     const discount = inputDiscount.value;
//
//     const precioConDescuento = calcularPrecioConDescuento(value, discount);
//    
//     //PARA IMPRIMIR EL RESULTADO EN HTML//
//     const resultP = document.getElementById("ResultP");
//     resultP.innerText = "usted debe pagar $" + precioConDescuento;
// }

//VIDEO 13 DEL TALLER DESAFÍO//
//ESTA FUNCIÓN NOS CALCULA EL PRECIO FINAL A PAGAR//
function calcularPrecioConDescuento(precio, descuento) {
    const precioConDescuento = precio - (precio * (descuento / 100));
    return "usted debe pagar $" + precioConDescuento;
}

//ARRAY CUPONES//
const coupons = [
    "tienda1",
    "tienda2",
    "tienda3",
]
function onClickButtonPriceDiscount() {
    //OBTENER EL VALOR INGRESADO EN INPUTPRICE//
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    //OBTENER EL VALOR DE DESCUENTO//
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch (true) {
        case couponValue === coupons[0]: descuento = 15;
            break;
        case couponValue === coupons[1]: descuento = 30;
            break;
        case couponValue === coupons[2]: descuento = 25;
            break;
        default: alert("el cupón ingresado no es valido"); 
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    //PARA IMPRIMIR EL RESULTADO EN HTML//
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "usted debe pagar $" + precioConDescuento;
}





// const porcentajeDelPrecioConDescuento = 100 - descuento;

//DECLARACION DE VARIABLES//
// const precioOriginal = 100;
// const descuento = 15;

//PARA IMPRIMIR TODAS LAS VARIABLES//
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeDelPrecioConDescuento,
//     precioConDescuento,
// })
