//CÓDIGO DEL CUADRADO//
console.group("Cuadrado");
/* const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCadrado = ladoCuadrado * 4;
console.log("el perímetro del cuadrado mide: " + perimetroCadrado + "cm"); */

function perimetroCuadrado(lado) {
    return (lado * 4);
};
perimetroCuadrado();

/* const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el área del cuadrado mide: " + areaCuadrado + "cm^2"); */

function areaCuadrado(lado) {
    return (lado * lado);
};
areaCuadrado();
console.groupEnd;

//CÓDIGO DEL TRIÁNGULO//
console.group("Triángulo");
/* const ladoTriángulo1 = 6;
const ladoTriángulo2 = 6;
const baseTriángulo = 4;
const alturaTriángulo = 5.5;

console.log(
    "los lados del Triángulo miden: " 
    + ladoTriángulo1 + "cm, " 
    + ladoTriángulo2 + "cm, " 
    + baseTriángulo + "cm"
);
console.log("la altura del Triángulo es " + alturaTriángulo + "cm");

const perimetroTriangulo = ladoTriángulo1 + ladoTriángulo2 + baseTriángulo;
console.log("el perímetro del triángulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (alturaTriángulo * baseTriángulo) / 2;
console.log("el área del Triángulo mide: " + areaTriangulo + "cm^2"); */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
perimetroTriangulo();

function areaTriangulo(altura, base) {
    return (base * altura) / 2;
}
areaTriangulo();

console.groupEnd;

//CÓDIGO DEL CÍRCULO//

console.group("Círculo");

/* const radioCirculo = 4;
console.log("el rádio del Círculo mide: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("el diámetro del Círculo mide: " + diametroCirculo + "cm");

const Pi = Math.PI;

const perimetroCirculo = Pi * diametroCirculo;
console.log("el perímetro del Círculo mide: " + perimetroCirculo + "cm");

const areaCirculo = Pi * (radioCirculo * radioCirculo);
console.log("el área del Círculo mide: " + areaCirculo + "cm^2"); */

const Pi = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
};

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return Pi * diametro;
}
perimetroCirculo();

function areaCirculo(radio) {
    return Pi * (radio * radio);
}
areaCirculo();

console.groupEnd;



//INTERACUAMOS CON HTML//
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}



/* function calcularAltura(lado1, lado2, base) {
    if(lado1 === lado2 && lado1 != base){
        alert("La altura del Triágulo Isoceles es: " + (Math.sqrt((lado1 * lado1) + (base * base)))+ " cm" )
    } else {
        alert("NO ES ISOCELES!!")
    }
} */