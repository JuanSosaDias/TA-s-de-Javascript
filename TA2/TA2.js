function sumAll() {
    const a = document.getElementById('a').ariaValueMax;
    const b = document.getElementById('b').ariaValueMax;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');

    let suma = 0;
    for(let i = a; i<=b; i++){
        suma += i;
    }
    p.textContent= `Suma total entre ${a} y ${b}= ${suma}`;
    resultado.appendChild(p);
}
/* ---------------------------------------------------------- */
function convertToCelsius(){
    const Farenheit = Number(document.getElementById('TF').value);
    const resultado = document.getElementById('resultado1');
    resultado.innerHTML = '';
    let celsius = (Farenheit-32)/1.8;
    
    const p = document.createElement('p');
    p.textContent = `${Farenheit} grados Farenheit, equivalen a ${celsius.toFixed(1)} grados Celsius`;//con toFixed() se redondearía a una cifra despues de la coma
    resultado.appendChild(p);
}

function convertToFarenheit(){
    const tempEnCelsius = Number(document.getElementById('TC').value);
    const resultado = document.getElementById('resultado2');
    resultado.innerHTML = '';
    let farenheit = (1.8 * tempEnCelsius)+32;
    
    const p = document.createElement('p');
    p.textContent = `${tempEnCelsius} grados Celsius, equivalen a ${farenheit.toFixed(1)} grados Farenheit`;//con toFixed() se redondearía a una cifra despues de la coma
    resultado.appendChild(p);
}

/* ---------------------------------------------------------- */
function leapYears() {
    const año = Number(document.getElementById('').value);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let bisiesto = false;
    if (año%100===0 && año%400===0) {
        bisiesto = true;
    }

    const p = document.createElement('p');
    p.textContent = 'El año ${año} es bisisesto? : ${bisiesto}';
    resultado.appendChild(p);
}

/* ---------------------------------------------------------- */
