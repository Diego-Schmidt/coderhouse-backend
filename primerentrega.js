// Primera entrega del curso Backend de CoderHouse - Desafío Clases
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
        console.log('\x1b[33m%s\x1b[0m',`-----> Ejecutando método para obtener el nombre completo del usuario ${this.nombre} <-----`);
        return `El nombre y apellido del usuario ${this.nombre} es: ${this.nombre} ${this.apellido}`;  
    }

// Método para agregar una mascota a la lista de mascotas del usuario
    addMascota(a){
    this.mascotas.push(a);
    console.log('\x1b[33m%s\x1b[0m',`-----> Ejecutando método para agregar mascota a la lista de mascotas del usuario ${this.nombre} <-----`);
    console.log(`Agregada mascota ${a} a la lista de ${this.nombre} ${this.apellido}`);    
    }
// Método para obtener la cantidad de mascotas del usuario
    countMascotas(){
       let mascoPl = (this.mascotas.length > 1) ? 'mascotas' : 'mascota';
       console.log('\x1b[33m%s\x1b[0m',`-----> Ejecutando método para contar la cantidad de mascotas del usuario ${this.nombre} <-----`);
       return `El usuario ${this.nombre} ${this.apellido} tiene ${this.mascotas.length} ${mascoPl}`;
          
 }
// Método para agregar un libro a la lista de libros del usuario    
    addBook(titulo, autor) {
        console.log('\x1b[33m%s\x1b[0m',`-----> Ejecutando método para agregar un libro a la lista de libros del usuario ${this.nombre} <-----`);
        console.log(`Agregado libro ${titulo} a la lista de libros del usuario ${this.nombre}`);
        this.libros.push({nombre: titulo, autor: autor});
    }
// Método para obtener la lista de libros favoritos del usuario
    getBookNames() {
        console.log('\x1b[33m%s\x1b[0m',`-----> Ejecutando método para obtener la lista de libros favoritos del usuario ${this.nombre} <-----`);
        return `Esta es la lista de libros favoritos de ${this.nombre}: ${this.libros.map( (libro) => libro.nombre)}`;
    }
}

// Constante declarando las propiedades del usuario Juan, nombre, apellido, libros y mascotas
const Juan = new Usuario('Juan','Schmidt',[{nombre: "El monstruo subatómico", autor: "Isaac Asimov"} , {nombre: "20 mil leguas de viaje submarino" , autor: "Julio Verne"}],['cata','Paco']);

// Aplicamos todos los métodos 
// Indicamos el inicio de los procesos
console.log('\x1b[36m%s\x1b[0m', "Inicio de ejecución de los métodos de la clase Usuario para el desafío Clases");
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
console.log('\x1b[36m%s\x1b[0m',"Fin de ejecución del desafío Clases, saludos a todos :D");