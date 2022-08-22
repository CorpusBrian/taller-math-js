const btn =document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    // (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if (!price || !discount) {
        pResult.innerText = 'Por favor llena el formulario!';
    } else {
        const newPrice = (price * (100 - discount)) / 100;

        pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
    } 

    if (discount > 100) {
        pResult.innerText = 'El descuento no puede ser mayor a 100%';
    }

}