// De esta manera se instancia el objeto dentro de alumne, solo puede haber uno.
const alumne={
    nombre:"Jose",
    apellido:"Medina",
    edad:23,
    sumar: function(){
        return this.edad+1
    },
    getname: function(){
        return this.nombre
    }
}
console.log(alumne.sumar())
console.log(alumne.getname())



// De esta manera se instancia el objeto como atributo de alumne, puede haber varios.

function Alumne(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sumar = function() {
        return this.edad + 1;
    };
    this.getname = function() {
        return this.nombre;
    };
}

function imprimirAlumno(alumno) {
    console.log(`Nombre: ${alumno.getname()}, Apellido: ${alumno.apellido}, Edad: ${alumno.edad}, Edad + 1: ${alumno.sumar()}`);
}

const arrayAlumnos = [];

const alumno1 = new Alumne("Jose", "Medina", 23);
const alumno2 = new Alumne("Pere", "Roca", 23);

arrayAlumnos.push(alumno1);
arrayAlumnos.push(alumno2);

for (const alumno of arrayAlumnos) {
    imprimirAlumno(alumno);
}




// Constructor
function Alumne({ nombre, apellido, edad }) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sumar = function () {
        return this.edad + 1;
    };
    this.getname = function () {
        return this.nombre;
    };
}

// Función para crear un nuevo alumno
function crearAlumno(alumnoInfo) {
    return new Alumne(alumnoInfo);
}

// Función para imprimir los valores de un alumno
function imprimirAlumno(alumno) {
    console.log(`Nombre: ${alumno.getname()}, Apellido: ${alumno.apellido}, Edad: ${alumno.edad}, Edad + 1: ${alumno.sumar()}`);
}

// Array para almacenar los objetos alumnos
const arrayAlumnos = [];

// Crear alumnos y añadirlos al array
arrayAlumnos.push(crearAlumno({ nombre: "Jose", apellido: "Medina", edad: 23 }));
arrayAlumnos.push(crearAlumno({ nombre: "Pere", apellido: "Roca", edad: 23 }));

// Imprimir los valores de los alumnos automáticamente usando un bucle
for (const alumno of arrayAlumnos) {
    imprimirAlumno(alumno);
}
