const btn =document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if (!price || !coupon) {
        pResult.innerText = 'Por favor llena el formulario!';
        return;
    }

    let discount = 0;

    const allCoupons = [ {name: 'holidays', discount: 15},
        {name: 'firstpurchase', discount: 25},
        {name: 'blackfriday', discount: 30},
        {name: 'supersales', discount: 40}
    ];

    const couponInArray = allCoupons.find(function (couponElement) { // {name, dicount}
        return couponElement.name == coupon;
    });  

    if (couponInArray) {
        discount = couponInArray.discount;
    } else {
        pResult.innerText = 'El cupón no es válido';
        return;
    }

    console.log({
        coupon,
        discount,
        couponInArray,
        allCoupons,
    });

    const newPrice = (price * (100 - discount)) / 100;
    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}