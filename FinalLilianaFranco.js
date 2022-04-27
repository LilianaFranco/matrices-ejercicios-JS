/* Ejercicio 1
    a. ¿Qué tipo de dato contiene la variable ‘alumnos’?
        R: La variable alumnos es una estructura de datos tipo array. Dicho array está conformado
        por un tipo de dato llamado objeto. Se puede identificar que los elementos son de tipo objeto por las llaves
        que los delimitan y las propiedades.
    ¿Qué propiedades tiene la estructura definida en el archivo final.js? 
        R: Las propiedades que incluyen son Id, nombre, apellido, legajo y notas.
*/

/* Crear una función que ordene la estructura definida
    en el archivo final.js según la propiedad legajo de forma ascendente. (*) */

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
    
console.log('-------- Arreglo de alumnos desordenado: --------')
console.log(alumnos)
    
function ordenarArregloAscendente(arreglo){
    let temporal
    for(let i = 0; i < arreglo.length; i++){
        for(let j = 0; j < arreglo.length - 1; j++){
            if(arreglo[j].legajo > arreglo[j + 1].legajo){
                temporal = arreglo[j]
                arreglo[j] = arreglo[j + 1]
                arreglo[j + 1] = temporal
            }
        }
    }
};
    
ordenarArregloAscendente(alumnos)
console.log('-------- Arreglo de alumnos ordenado: --------')
console.log(alumnos)

/* Ejericio 2.A
    a. Crear un método que retorne el promedio de notas. (*)
*/

let alumno = {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [10,9,8,7,9]
}

let calcularPromedioNotas = function(){
    let suma = 0
    for(let i = 0; i < this.notas.length; i++){
        suma += this.notas[i]
    }
    return suma / this.notas.length
}

console.log('-------- Objeto alumno sin método: --------')
console.log(alumno)
alumno.promedioNotas = calcularPromedioNotas
console.log('-------- Objeto alumno con método: --------')
console.log(alumno)
console.log('-------- Resultado del promedio del alumno: --------')

console.log(`El promedio de ${alumno.nombre} ${alumno.apellido} es: ${alumno.promedioNotas()}`)

/* Ejericio 2.B
    b. Crear una función que ordene las notas del alumno de forma descendente. (*)
*/

function ordenarNotasDesc(objeto){
    let temporal
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

console.log('-------- Objeto alumno notas desordenadas: --------')
console.log(alumno)
ordenarNotasDesc(alumno)
console.log('-------- Objeto alumno notas ordenadas de forma descendente --------')
console.log(alumno)


/* Ejercicio 3
    a. Crea una matriz de 3x3, cuadrada, con números enteros positivos en cada una de sus posiciones.
*/

function crearMatriz(numero){
    let matriz = []
    let fila = []
    for (let i = 0; i < numero; i++) {
        for (let j = 0; j < numero; j++) {
            fila.push(Math.floor(Math.random() * 30))
        }
        matriz.push(fila)
        fila = []
    }
    return matriz
}
console.log('-------- Matriz de 3 por 3 --------')
let matrizTresPorTres = crearMatriz(3)
console.table(matrizTresPorTres);

/* Ejercicio 3
    b. Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 3.
*/

function sumaMultiplosDeTres(matriz){
    let suma = 0
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] % 3 === 0){            
                suma += matriz[i][j]
            }
        }
    }
    return suma
}

let sumaMultiplos = sumaMultiplosDeTres(matrizTresPorTres)
console.log('-------- Suma de múltiplos de 3 --------')
console.table(`La suma de los multiplos de tres dentro de la matriz es ${sumaMultiplos}`);

/* Ejercicio 3
    c. Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es par.
*/

function esParLaSuma(matriz){
    let suma = 0
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            suma += matriz[i][j]
        }
    }
    console.log('-------- Suma de matriz --------')
    console.log(`La suma de los elementos de la matriz es ${suma}.`)
    let resultadoSumaPares = suma % 2 === 0 ? true : false
    return resultadoSumaPares
}

let sumaEsPar = esParLaSuma(matrizTresPorTres)
sumaEsPar == false ? respuesta = "no es par" : respuesta = "es par" 
console.table(`La suma de los elementos de la matriz ${respuesta}.`)

/* Ejercicio 3
    d. Crear una función que retorne la suma de las diagonales de la matriz.
*/

function sumarDiagonales(matriz){
    let sumaPrincipal = 0;
    let sumaSecundaria = 0;
    for (let i = 0; i < matriz.length; i++) {
        sumaPrincipal += matriz[i][i]
        sumaSecundaria += matriz[i][matriz.length-(1+i)]
    }
    return sumaPrincipal + sumaSecundaria
}

let sumaDiagonales = sumarDiagonales(matrizTresPorTres)
console.log('-------- Suma de matriz --------')
console.table(`La suma de ambas diagonales de la matriz es ${sumaDiagonales}.`)