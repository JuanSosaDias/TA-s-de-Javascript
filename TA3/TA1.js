function generatePassword() {
    let largoIngresado = Number(document.getElementById('largo').value);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    const p = document.createElement('p');

    if (largoIngresado < 8 ) {
        p.textContent = 'La contraseña debe tener al menos 8 dígitos.';
        resultado.appendChild(p);
    } else {
        const mayus = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        const min = 'abcdefghijklmnñopqrstuvwxyz';
        const numeros = '0123456789';
        const simbolos = '!@#$%^&*()_+~`|}{:;?><,./-=[]';

        // Concatenar todos los posibles caracteres (Esto lo tendría que camibar me parece)
        const caracteres = mayus + min + numeros + simbolos;

        let password = '';

        for (let i = 0; i < largoIngresado; i++) {
            const indiceRandom = Math.floor(Math.random() * caracteres.length);
            password += caracteres[indiceRandom];
        }

        p.textContent = `Su contraseña es: ${password}`;
        resultado.appendChild(p);
    }
}
/*---------------------------------------------------------------------------------------------------*/

/*Me ayudé con ChatGPT*/

function findTheOldest(people) {
    return people.reduce((oldest, person) => {
        const ageOldest = oldest.age || oldest.edad;
        const ageCurrent = person.age || person.edad;
        return ageCurrent > ageOldest ? person : oldest;
    }, people[0]);
}

function mostrarPersonaMasVieja() {
    const people = [
        { nombre: 'Juan', edad: 45 },
        { nombre: 'Ana', edad: 67 },
        { nombre: 'Luis', edad: 34 },
        { nombre: 'María', edad: 71 }
    ];

    const personaMasVieja = findTheOldest(people);
    const resultadoDiv = document.getElementById('resultado');
    
    resultadoDiv.innerHTML = `La persona más vieja es ${personaMasVieja.nombre} con ${personaMasVieja.edad} años.`;
}
/*--------------------------------------------------------------------------------------------------- */