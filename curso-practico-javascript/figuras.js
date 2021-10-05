//código del cuadrado
console.group('cuadrados');
//const ladoCuadrado = 5;
//console.log('los lados del cuadrado son: '+ladoCuadrado+'cm');

function perimetroCuadrado (lado){ 
   return lado* 4;
}

//console.log('el Perimetro del cuadrado es: ' + perimetroCuadrado+'cm');

function areaCuadrado(lado){
   return lado*lado;
} 

//console.log('El área del Cuadrado es: '+ areaCuadrado+'cm2');
console.groupEnd();
//código del triangulo
console.group('triangulos');
//const ladoTriangulo1=6;
//const ladoTriangulo2=6;
//const baseTraingulo=4;
//const alturaTriangulo = 5.5;
//console.log('los lados del triangulo son: '+ladoTriangulo1+'cm, '+ladoTriangulo2+'cm, '+baseTraingulo+'cm');
//console.log('La altura del triangulo es: '+alturaTriangulo+'cm');
function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}
//console.log('El perimetro del Triangulo es: '+perimetroTriangulo);
function areaTriangulo (base,altura){
    return (base*altura)/2;
};
//console.log('El área del Triangulo es: '+areaTriangulo+'cm2');
console.groupEnd();
//código del circulo
/* console.group('circulos');
const PI = Math.PI;
console.log('el valor de pi es: '+PI);
const radioCirculo= 4; */
function diametroCirculo(radio){
    return radio *2;
};
/* console.log('El diametro del circulo es: '+diametroCirculo+'cm');
const circunferenciaCirculo= diametroCirculo*PI;
console.log('El perimetro del circulo es: '+circunferenciaCirculo+'cm'); */
function perimetroCirculo(radio){
 const diametro= diametroCirculo(radio);
 return diametro*(Math.PI)
}

function areaCirculo(radio){
   return (radio*radio)*(Math.PI);
}
//const areaCirculo= (radioCirculo*radioCirculo)*PI;
//console.log('El area del circulo es: '+areaCirculo+'cm2');
//console.groupEnd();
