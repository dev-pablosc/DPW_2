// recorrer (3)
const semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
console.log(semana);

// metodo length comienza en 1
console.log(semana.length)

// recorrer iterando con for
for(let i=0; i<semana.length; i++){
    console.log(semana[i])
}

// forEach
semana.forEach(v => {
    console.log(v)
})

//for of
for(valor of semana ){
    console.log(valor)
}