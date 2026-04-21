// eliminar valores (2)
const semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
console.log(semana.length);


// eliminar al final -> POP
semana.pop('final')
console.log(semana)

// agregar al inicio -> shift
semana.shift('inicio')
console.log(semana)

// eliminar desde una posicion especifica
carrito.splice(1,1) // a diferencia de str aqui se pone cuantos se quiere eliminar en el segundo indice
console.table(semana)


// CLEAR, borrar el contenido
myArray = []
myArray.length = 0 // alternativa