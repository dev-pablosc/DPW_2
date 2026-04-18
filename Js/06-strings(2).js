// mas metodos 

let producto = '    TV de 40"  ';
console.log(producto);

// Eliminar espacios en blanco
// espacios del inicio
console.log(producto.trimStart());
// espacios del final
console.log(producto.trimEnd());
// todos los espacions
console.log(producto.trim());
producto = producto.trim();

// REEMPLAZAR
console.log(producto);
let producto2 = producto.replace('"', ' Pulgadas');
console.log(producto2);

// EXTRAER caracteres de un texto con slide
console.log("===========metodo slide==========");
console.log(producto.slice(0, 4));
console.log(producto.slice(5, 8));

console.log(producto.indexOf('40')); // emcuentra la posicion del caracter
console.log(producto.slice(producto.indexOf('40'),(producto.indexOf('"'))+1));

console.log(producto.slice(3, 1)); // esto es un error


// lo mismo pero con metodo SUBSTRING
console.log(producto.substring(0,4));
console.log(producto.substring(3,1)); // a diferencia de slice este si resuelve

// metodo   UNA SOLA letra charAt
console.log(producto.charAt(0))
console.log(producto.slice(0, 1))

// dividir uns string com SPLIT()
let palabra = 'Este str se divide por el espacio';
console.log(palabra)
console.log(palabra.split(' '));

let dividido = palabra.split(' ');
console.log(dividido[6])


// repetir un str con REPEAT()
const texto = 'Descuento '.repeat(3.8);
console.log(texto)

console.log(`este producto: ${producto}, esta en: ${texto}`)
