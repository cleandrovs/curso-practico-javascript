const lista1 = [
    800,
    4000000,
    300,
    100,
    500
];

var Lista =[];
function agregarDato(){
  const input = Number( document.getElementById('datoArray').value);
  var listaNueva= Lista.push(input);
  var resultadoLista = document.getElementById('resultadoLista');
  resultadoLista.innerText='Los datos ingresados son: ' + Lista+ ' si es correcto proceda a calclular la media aritmerica';

  const lista1Ordenada = Lista.sort((a,b)=> a-b);
  var listaOrdenada = document.getElementById('listaOrdenada');
  listaOrdenada.innerText='Los datos ordenados son los siguientes: '+ lista1Ordenada;
}

function calcularMediana(){
  function calcularMediaaritmetica() {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }
  
    const sumaLista = Lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / Lista.length;
  
    return promedioLista;
  }

  const mitaLista1 = parseInt(Lista.length/2);

  var resultadoMediana = document.getElementById('resultadoMediana');
  let mediana;

  function esPar(numerito){
    if(numerito % 2===0){
        return true;
    }else{
        return false;
    }
  }
  if (esPar(Lista)){
  const elemento1= lista1Ordenada[mitaLista1];
  const elemento2= lista1Ordenada[mitaLista1-1]

  const promedioelemento1y2 = calcularMediaaritmetica([elemento1,elemento2])

  mediana = promedioelemento1y2;
    resultadoMediana.innerText='La mediana es: '+mediana;
  }else{
  mediana=Lista[mitaLista1];
    resultadoMediana.innerText= 'la mediana es: '+mediana;
  }
}
