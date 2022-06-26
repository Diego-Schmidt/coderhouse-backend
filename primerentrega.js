// Creamos la clase Usuario
class Usuario {
    constructor(nombre,apellido,libros,mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
}
// Método para obtener el nombre completo del Usuario
    getFullName(){
        return `El nombre y apellido de ${this.nombre} es: ${this.nombre} ${this.apellido}`;  
    }

// Método para agregar una mascota a la lista de mascotas del usuario
    addMascota(a){
    this.mascotas.push(a);
    console.log(`Agregada mascota ${a} a la lista de ${this.nombre}`);    
    }
// Método para obtener la cantidad de mascotas del usuario
    countMascotas(){
       let mascoPl = (this.mascotas.length > 1) ? 'mascotas' : 'mascota';
       return `El usuario ${this.nombre} tiene ${this.mascotas.length} ${mascoPl}`;
          
 }
// Método para agregar un libro a la lista de libros del usuario    
    addBook(titulo, autor) {
        console.log(`Agregado libro ${titulo} a la lista de libros del usuario ${this.nombre}`);
        this.libros.push({nombre: titulo, autor: autor});
    }
// Método para obtener la lista de libros favoritos del usuario
    getBookNames() {
        return `Esta es la lista de libros favoritos de ${this.nombre}: ${this.libros.map( (libro) => libro.nombre)}`;
    }
}

// Constante declarando las propiedades del usuario Juan, nombre, apellido, libros y mascotas
const Juan = new Usuario('Juan','Schmidt',[{nombre: "El monstruo subatómico", autor: "Isaac Asimov"} , {nombre: "20 mil leguas de viaje submarino" , autor: "Julio Verne"}],['cata','Paco']);

// Aplicamos todos los métodos 

// Pedimos el nombre completo del usuario Juan usando el método getFullName y lo mostramos en un console.log
console.log(Juan.getFullName());
// Pedimos la lista completa de libros favoritos del usuario Juan usando el método getBookNames y lo mostramos en un console.log
console.log(Juan.getBookNames());
// Agregamos un libro a la lista de libros favoritos del usuario Juan usando el método addBook y volvemos a pedir la lista de libros favoritos del usuario usando el método getBookNames
Juan.addBook("El Silmarilion", "J. R. R. Tolkien");
console.log(Juan.getBookNames());
// Pedimos la cantidad de mascotas del usuario Juan usando el método countMascotas y lo mostramos en un console.log
console.log(Juan.countMascotas());
// Agregamos una mascota a la lista de mascotas de Juan y volvermos a pedir la cantidad de mascotas del usuario Juan usando el método countMascotas y la mostramos en un console.log
Juan.addMascota("Rintintin");
console.log(Juan.countMascotas());
