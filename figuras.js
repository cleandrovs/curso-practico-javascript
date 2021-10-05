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

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById('InputCuadrado') ;
    const value = input.value;
    console.log(typeof(input));
    const perimetro =perimetroCuadrado(value) ;
    document.getElementById('ResultadoPerimetroCuadrado').innerHTML='El perimetro del cuadrado es: '+perimetro;
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    const area = areaCuadrado(value);
    document.getElementById('ResultadoAreaCuadrado').innerHTML='El área del cuadrado es: '+area;
    alert(area);
}

function calcularPerimetroTriangulo (){
    const input1 = document.getElementById('LadoTriangulo');
    const input2 = document.getElementById('LadosTriangulo');
    const input3 = document.getElementById('BaseTriangulo');

    const lad1T= parseInt(input1.value);
    const lad2T= parseInt(input2.value);
    const baseT= parseInt(input3.value);
    console.log(typeof(input3));

    const perimetroT = parseInt(perimetroTriangulo(lad1T,lad2T,baseT));
    document.getElementById('ResultadoPerimetroTriangulo').innerHTML='El perímetro del triangulo es: '+perimetroT;
    
}

function calcularAreaTriangulo(){
    const input4 = document.getElementById('BaseTriangulo');
    const input5 = document.getElementById('AlturaTriangulo');

    const baseTr = input4.value;
    const alturaT= input5.value;

    const areaTr= areaTriangulo(baseTr,alturaT);
    document.getElementById('ResultadoAreaTriangulo').innerHTML='El área del triangulo es: '+areaTr;
    
}

function calcularPerimetroCirculo (){
    const input= document.getElementById('RadioCirculo');
    const value = input.value;
    const perimetroC = perimetroCirculo(value);
    document.getElementById('ResultadoPerimetroCirculo').innerHTML= perimetroC;
    alert('La circuferencia mide: '+perimetroC);
    
}

function calcularAreaCirculo(){
    const input= document.getElementById('RadioCirculo');
    const value = input.value;

    const areaC= areaCirculo(value);
    document.getElementById('ResultadoAreaCirculo').innerHTML= areaC;
    alert('El área del circulo es: '+areaC);
}