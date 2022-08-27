const btn =document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;
    let newPrice = 0;

    if (!price || !coupon) {
        pResult.innerText = 'Por favor llena el formulario!';
        return;
    }

    let allCoupons = [ {description: 'holidays', discount: 15},
        {description: 'firstpurchase', discount: 25},
        {description: 'blackfriday', discount: 30},
        {description: 'supersales', discount: 40}
    ];

    for (let i = 0; i < allCoupons.length; i++) {
            coupon == allCoupons[i].description ? (
            newPrice = (price * (100 - allCoupons[i].discount)) / 100,
            pResult.innerText = 'El nuevo precio con descuento es $' + newPrice,
            i += allCoupons.length
        ) : pResult.innerText = 'El cupón no es válido';
    }
}