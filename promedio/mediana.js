const lista1 = [
    800,
    4000000,
    300,
    100,
    500
];

const lista1Ordenada = lista1.sort((a,b)=> a-b);
console.log(lista1Ordenada); 

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
const elemento1= lista1Ordenada[mitaLista1];
const elemento2= lista1Ordenada[mitaLista1-1]

const promedioelemento1y2 = calcularMediaaritmetica([elemento1,elemento2])

mediana = promedioelemento1y2;
}else{
 mediana=lista1[mitaLista1];
}