// agregar nuevos Valores (3)
const semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
console.log(semana.length);

// agregando por indice, tambien actualiza, valido pero necesario saber el legth del array
semana[0] = 'Lunes';
semana[5]= 'sabado';

console.log(semana);

// agregar al Final -> PUSH
semana.push('Domingo');

// agregar al Princio ->unshift
semana.unshift('LUNES');
console.log(semana);


// METODOS
// agregar al Final -> PUSH
semana.push('Jueves');

// agregar al Princio ->unshift
semana.unshift('LUNES');