// agregar valores (3)
const semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
console.log(semana.length);

// agregar por indice
// si existe se actualiza
// si no se agrega
//semana[0] = 'DIAS'
semana[5] = 'Sabado'
console.log(semana)

// agregar al final -> PUSH
semana.push('final')
console.log(semana)

// agregar al inicio -> unshift
semana.unshift('inicio')
console.log(semana)