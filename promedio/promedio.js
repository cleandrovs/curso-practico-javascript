const lista1 = [
    100,
    200,
    300,
    500
];

let lista =[] ;
function agregarDato(){
        
    const input = Number( document.getElementById('datoArray').value);
    var listaNueva= lista.push(input);
    var resultadoLista = document.getElementById('resultadoLista');
    resultadoLista.innerText='Los datos ingresados son: ' + lista+ ' si es correcto proceda a calclular la media aritmerica';
}
    

function calcularMediaAritmetica (){
    /* let sumaLista = 0;

    for (let i= 0;i<lista.length;i++){
        sumaLista = sumaLista + lista[i];
    
    } */

    //manera alternativa para calcular la media con las opciones de array
    console.group('elementos de la lista')
    console.log('los datos de la lista son: '+lista);
    const sumaLista= lista.reduce(
        function (valorAcumulado = 0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    ); // el metodo .reduce suma todos los valores de un array
    console.log('suma de todos los elementos de la lista son: '+sumaLista);
    console.log('el tamaño de la lista es: '+lista.length)
    console.groupEnd();
    const promedioLista = sumaLista/lista.length;
    //return promedioLista;
    const resultadoMedia = document.getElementById('resultadoMedia');
    resultadoMedia.innerText='El resultado de la media es: '+promedioLista;
}