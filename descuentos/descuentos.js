//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio* porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function verificationCoupon(){
    
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice").value;
    const inputDiscount = document.getElementById("InputDiscount").value;

    const coupon =[
        'Cesar_es_batman',
        'no_lo_digas',
        'es_un_secreto'
    ]

    let descuento;

    if(!coupon.includes(inputDiscount)){
        alert('El cúpon: '+inputDiscount+' no es váliso');
    }
    else if (inputDiscount=== 'Cesar_es_batman'){
        descuento= 15;
    }
    else if(inputDiscount==='no_lo_digas'){
        descuento=20;
    }
    else if(inputDiscount==='es_un_secreto'){
        descuento=30;
    }


    var precioDescuento = calcularPrecioConDescuento(inputPrice,descuento);
    var resultP = document.getElementById("ResultP");
    resultP.innerText= "El precio con descuento son: "+precioDescuento; 
}


/* console.log({
    precioOriginal,
    porcentajePrecioConDescuento,
    descuento,
    precioConDescuento
}) */