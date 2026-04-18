// else if 
let age = prompt('Introduzca su edad');
console.log(typeof age)
age = Number(age)
console.log(typeof age)

if(age > 18){
    console.log('puede votar')
} else if( age < 0 ) {
    console.log('numero no valido')
}else {
    console.log('menor de edad')
}