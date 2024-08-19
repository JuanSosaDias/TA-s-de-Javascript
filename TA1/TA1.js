function repeatString() {
    const texto = document.getElementById('texto').value;
    const repeticiones =parseInt(document.getElementById('repeticiones').value);
    const resultado = document.getElementById('resultado');

    for (let index = 0; index < repeticiones; index++) {
        const p = document.createElement('p');
        p.textContent=texto;
        resultado.appendChild(p);
    }

}

function reverseString () {
    const texto = document.getElementById('texto').value;
    const resultado = document.getElementById('resultado');

    const p = document.createElement('p');
    for (let i=texto.length-1; i>=0; i--) {
        p.textContent += texto[i];
    }
    resultado.appendChild(p);
}

function removeFromArray () {
    const arreglo = document.getElementById('arreglo').value.split(',');
    let item = document.getElementById('elemento').value;
    let resultado = document.getElementById('resultado');

    const arrayFiltrado = arreglo.filter((element)=>element.trim()!==item);

    const p = document.createElement('p');
    p.textContent= arrayFiltrado.join(', ');
    resultado.appendChild(p);
    console.log(p.textContent);
}

function getOdds (){
    let arreglo = document.getElementById('arreglo').value.split(',').map(Number);
    let resultado = document.getElementById('resultado');
    
    const arrayFiltrado = arreglo.filter(numero => numero % 2 !== 0);

    const p = document.createElement('p');

    arrayFiltrado.forEach(numero => {
        p.textContent += numero + ", " ;
        p.style.color = 'purple';
        p.style.fontSize = '16px';
    });
    resultado.appendChild(p);

    function duplicates(){
        let arreglo = document.getElementById('duplicados').value.split(',').map(Number);
        let resultado2 = document.getElementById('resultado2');
        const duplicados = {};
        
        arreglo.forEach(numero => {
            if (duplicados[numero]) {
                duplicados[numero]++;
            } else {
                duplicados[numero] = 1;
            }
        });
    
        Object.keys(duplicados).forEach(numero => {
            if (duplicados[numero] > 1) { 
                const h4 = document.createElement('h4');
                const p = document.createElement('p');
                
                h4.textContent = `Numero duplicado: ${numero}`;
                p.textContent = `Repeticiones: ${duplicados[numero]}`;
                
                resultado2.appendChild(h4);
                resultado2.appendChild(p);
            }
        });
    }
}