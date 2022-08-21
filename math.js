console.group('Cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado ** 2;

function calcularCuadrado(lado){
    return {
        perimetro: lado * 4,
        area: lado * lado,
    };
}

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

console.groupEnd('Cuadrado');

console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura){
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    };
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});

console.groupEnd('Triangulo');

console.group('Circle');

const radioCircle = 3;
const diametroCircle = radioCircle * 2;

const circunferencia = diametroCircle * Math.PI.toFixed(3);
const areaCircle = (radioCircle ** 2) * Math.PI.toFixed(3);

console.log({
    radioCircle,
    diametroCircle,
    circunferencia,
    areaCircle,
});

function calcularCircle(radio){
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);
    
    return {
        circunferencia: diametro * Math.PI.toFixed(3),
        area: radioAlCuadrado * Math.PI.toFixed(3),
    }
}

console.groupEnd('Circle');