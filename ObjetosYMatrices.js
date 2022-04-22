/*Ejercicio 1: Crear una función que ordene la estructura definida en el archivo final.js 
según la propiedad legajo de forma ascendente.*/

const alumnos = [
    {
        id: 0,
        nombre: "Leandro",
        apellido: "Borrelli",
        legajo: 20210308,
        notas: [],
    },
    {
        id: 1,
        nombre: "Esteban",
        apellido: "Piazza",
        legajo: 20210211,
        notas: [],
    },
    {
        id: 2,
        nombre: "Martin",
        apellido: "Cejas",
        legajo: 20210218,
        notas: [],
    },
    {
        id: 3,
        nombre: "Karina",
        apellido: "Borgna",
        legajo: 20210516,
        notas: [],
    },
    {
        id: 5,
        nombre: "Javier",
        apellido: "Riera",
        legajo: 20220125,
        notas: [],
    },
];

function ordenarAsc(array){
    let objetoTemporal
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j].legajo > array[j + 1].legajo){
                objetoTemporal = array[j]
                array[j] = array[j + 1]
                array[j + 1] = objetoTemporal
            }
        }
    }
};
console.log('---Ejercicio 1: legajo antes:---')
console.log(alumnos)
ordenarAsc(alumnos)
console.log('---legajo después:---')
console.log(alumnos)

/* Ejercicio 2: Dado el siguiente objeto...*/

alumno = {
    id: 5,
    nombre: 'Javier',
    apellido: 'Riera',
    legajo: 20220125,
    notas: [10, 9, 8, 7, 9]  
};

/*Crear un método que retorne el promedio de notas. (*) */
console.log('---Ejercicio 2: El objeto dado:---')
console.log(alumno)

let  calcularPromedioNotas =function(){
    let resultado = 0
    for(let i = 0; i < this.notas.length; i++){
        resultado += this.notas[i]
    }
    return resultado / this.notas.length
}

alumno.promedioNotas = calcularPromedioNotas
console.log(`El promedio de ${alumno.nombre} ${alumno.apellido} es: ${alumno.promedioNotas()}`)

/*Crear una función que ordene las notas del alumno de forma descendente.*/

function ordenarNotas(objeto){
    let temporal;
    for(let i = 0; i < objeto.notas.length; i++){
        for(let j = 0; j < objeto.notas.length -1; j++){
            if(objeto.notas[j] < objeto.notas[j + 1]){
                temporal = objeto.notas[j]
                objeto.notas[j] = objeto.notas[j + 1]
                objeto.notas[j + 1] = temporal
            }
        }
    }
    return objeto
}

console.log('---Ejercicio 3: Dado el siguiente objeto:---')
console.log(alumno)
let alumnoOrdenado = ordenarNotas(alumno)
console.log('---Se muestra el objeto ordenado:----')
console.log(alumnoOrdenado)

/* Ejercicio 3: Crear una matriz cuadrada por medio de una función*/

function crearMatriz(numero){
    let matriz = []
    let fila = []
    for (let i = 0; i < numero; i++) {
        for (let j = 0; j < numero; j++) {
            fila.push(Math.floor(Math.random() * 50))
        }
        matriz.push(fila)
        fila = []
    }
    return matriz
}
console.log('-----Ejercicio 4: Creación matriz 3 por 3:------');
let matrizTresPorTres = crearMatriz(3)
console.table(matrizTresPorTres);

/*Crear una función que retorne la suma de todos los numeros dentro de la matriz que sean multiplos de 3 */

let multiplosDeTres = (matriz) => {
    let sumaMultiplosTres = 0
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] % 3 === 0){            
                sumaMultiplosTres += matriz[i][j]
            }
        }
    }
    return sumaMultiplosTres
};
console.log('-----Suma de todos los múltiplos de 3:------');
multiplosDeTres(matrizTresPorTres)
console.log(multiplosDeTres(matrizTresPorTres));

/* Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es par. */

let sumaPares = (matriz) => {
    let suma = 0
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            suma += matriz[i][j]
        }
    }
    let resultadoSumaPares = suma % 2 === 0 ? true : false
    return resultadoSumaPares
};
console.log('-----¿La suma de los volares de la matriz es par?:------');
sumaPares(matrizTresPorTres)
console.log(sumaPares(matrizTresPorTres));

/* Crear una función que retorne la suma de las diagonales de la matriz. */

function sumarDiagonales(matriz){
    let sumaPrincipal = 0;
    let sumaSecundaria = 0;
    for (let i = 0; i < matriz.length; i++) {
        sumaPrincipal += matriz[i][i]
        sumaSecundaria += matriz[i][matriz.length-(1+i)]
    }
    return sumaPrincipal + sumaSecundaria
}
console.log('-----Suma de diagonales:------');
sumarDiagonales(matrizTresPorTres)
console.log(sumarDiagonales(matrizTresPorTres));

