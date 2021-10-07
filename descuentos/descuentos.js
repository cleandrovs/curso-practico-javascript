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
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.options[inputDiscount.selectedIndex].text;

    /* const coupon =[
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
    } */
    const coupon =[{
        name:'blackFriday',
        discount: 15
    },
    {
        name:'cyberMonday',
        discount:20
    },
    {
        name:'diaSinIva',
        discount:30
    }]

    const isCuponValid= function (coupon){
        return coupon.name === discountValue;
    }

    const userCupon = coupon.find(isCuponValid);

    if(!userCupon){
        alert('El cúpon :' + userCupon +' no es válido');
    } else{
        const descuento = userCupon.discount
        var precioDescuento = calcularPrecioConDescuento(inputPrice,descuento);
        var resultP = document.getElementById("ResultP");
        resultP.innerText= "El precio con descuento son: "+precioDescuento; 
    }

   
}


/* console.log({
    precioOriginal,
    porcentajePrecioConDescuento,
    descuento,
    precioConDescuento
}) */