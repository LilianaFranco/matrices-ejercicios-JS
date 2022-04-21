let arrayMatriz = []
let arrayX = [1 , 2, 3]
let arrayY = [4, 5, 6]
let arrayZ = [7, 8, 9]

arrayMatriz[0] =  arrayX;
arrayMatriz[1] = arrayY
arrayMatriz[2] = arrayZ

console.table(arrayMatriz)

// Función para imprimir filas de una matriz
function imprimirFilaMatriz (array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        
    }
}

imprimirFilaMatriz(arrayMatriz)

//Función para imprimir solo las columnas de una matriz

function imprimirColumnaMatriz (array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[j][i]);
        }
        
    }
}

imprimirColumnaMatriz(arrayMatriz)

// Función para  sumar todos los numeros de una matriz.

function sumarMatriz (array){
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            suma += array[i][j];
        }
        
    }
    return suma
}

console.log(sumarMatriz(arrayMatriz))

//Función para crear matrices cuadradas

function crearMatrizCuadrada(numero){
    let matriz= []
    let filas = []
    let conteo = 1;
    for (let i = 0; i < numero; i++) {
        for (let j = 0; j < numero; j++) {
            filas.push(conteo++)
        }
        matriz.push(filas)
        filas = []
    }
    return matriz
}

console.table(crearMatrizCuadrada(10))

//Función para sumar la diagonal principal

let matrizCuadrada = crearMatrizCuadrada(10);

function sumarDiagonalPrincipal(matriz){
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma +=matriz[i][i];
    }
    return suma
}

console.log(sumarDiagonalPrincipal(matrizCuadrada))

//Función para sumar la diagonal secundaria

function sumarDiagonalSecundaria(matriz){
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][matriz.length-(1+i)];
    }
    return suma
}

console.log(sumarDiagonalSecundaria(matrizCuadrada))