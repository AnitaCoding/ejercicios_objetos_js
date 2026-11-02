function Persona(nombre, apellido, direccion){
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion

    this.getinfo = function (){
        return `Me llamo ${this.nombre} ${this.apellido} y vivo en ${this.direccion}`
    }

    this.getDirection = function (numero){
        return `Vivo en la calle ${this.direccion} en el número ${numero}`
    }
}

let persona1 = new Persona('Carmen', 'Ramírez', 'Madrid')

console.log(persona1.getinfo())
console.log(persona1.getDirection(13))

