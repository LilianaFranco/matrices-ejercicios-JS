let lista = [2, 5, 7, 12, 15, 21];


let buscar = 21;

const busqueda = (array, elemento) => {

let izquierda = 0; // 6
let derecha = array.length - 1; // 5

    while (izquierda <= derecha) {
        let medio = Math.floor((izquierda + derecha) / 2); // 5
        if (array[medio].edad === elemento) { // 21 === 22
            return medio
        }
        
        if (array[medio] > elemento) { // 21 > 22
            derecha = medio - 1;
        } else { // 21< 22
            izquierda = medio + 1; 
        }
    }
return "el elemento buscado no se encontro";
};

console.log(busqueda(lista, buscar))


console.log( lista.indexOf(21) )


//Ejercicio
//Dada la siguiente colección:

let personas = [
    {
    id: 1,
    nombre: "Ale",
    edad: 15
    },
    {
    id: 2,
    nombre: "Javi",
    edad: 83
    },
    {
    id: 3,
    nombre: "Luis",
    edad: 26
    },
    {
    id: 4,
    nombre: "Dan",
    edad: 16
    },
    {
    id: 5,
    nombre: "Tito",
    edad: 22
    },
    {
    id: 6,
    nombre: "Marina",
    edad: 76
    },
    {
    id: 7,
    nombre: "Susy",
    edad: 35
    },
    {
    id: 8,
    nombre: "John",
    edad: 25
    },
]

/* Ordenar la colección de menor a mayor utilizando bubble sort.
Crear una función que te permita imprimir por consola el nombre correspondiente a la siguientes edades:
25
76
16
15
*/

function ordenarAsc(array){
    let objetoTemporal
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j].edad > array[j + 1].edad){
                objetoTemporal = array[j]
                array[j] = array[j + 1]
                array[j + 1] = objetoTemporal
            }
        }
    }
};

ordenarAsc(personas)
console.log(personas)

//Para buscar a las personas, utilizar el algoritmo de búsqueda binaria.

console.log(busqueda(personas, 25)) 
console.log(busqueda(personas, 76)) 
console.log(busqueda(personas, 16)) 
console.log(busqueda(personas, 15)) 



