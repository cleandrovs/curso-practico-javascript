let Lista =[] ;
function agregarDato(){
        
    const input = Number( document.getElementById('datoArray').value);
    var listaNueva= Lista.push(input);
    var resultadoLista = document.getElementById('resultadoLista');
    resultadoLista.innerText='Los datos ingresados son: ' + Lista+ ' si es correcto proceda a calclular la media aritmerica';
}
    

function calcularMediaAritmetica (){
    /* let sumaLista = 0;

    for (let i= 0;i<lista.length;i++){
        sumaLista = sumaLista + lista[i];
    
    } */

    //manera alternativa para calcular la media con las opciones de array
    console.group('elementos de la lista')
    console.log('los datos de la lista son: '+Lista);
    const sumaLista= Lista.reduce(
        function (valorAcumulado = 0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    ); // el metodo .reduce suma todos los valores de un array
    console.log('suma de todos los elementos de la lista son: '+sumaLista);
    console.log('el tamaño de la lista es: '+Lista.length)
    console.groupEnd();
    const promedioLista = sumaLista/Lista.length;
    //return promedioLista;
    const resultadoMedia = document.getElementById('resultadoMedia');
    resultadoMedia.innerText='El resultado de la media es: '+promedioLista;
}

/* const lista1 = [
    100,
    200,
    500,
    4000000
];

function calcularMediaaritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }
  
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
  }

const mitaLista1 = parseInt(lista1.length/2);

let mediana;

function esPar(numerito){
    if(numerito % 2===0){
        return true;
    }else{
        return false;
    }
}
if (esPar(lista1)){
const elemento1= lista1[mitaLista1];
const elemento2= lista1[mitaLista1-1]

const promedioelemento1y2 = calcularMediaaritmetica([elemento1,elemento2])

mediana = promedioelemento1y2;
}else{
 mediana=lista1[mitaLista1];
} */