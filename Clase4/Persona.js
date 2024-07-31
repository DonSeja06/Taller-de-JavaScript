class Persona {
    constructor(nombre, edad, genero, tamaño) {
      this.nombre = nombre;
      this.edad = edad;
      this.genero = genero;
      this.tamaño= tamaño;
    }
  
    setTamaño(tamaño){
      this.tamaño= tamaño;
    }
    getTamaño(){
      return this.tamaño;
    }
    setNombre(nombre){
      this.nombre= nombre;
    }
  
    setEdad(edad){
      this.edad= edad;
    }
  
    setGenero(genero){
      this.genero= genero;
    }
  
    getNombre(){
      return this.nombre;
    }
  
    getEdad(){
      return this.edad;
    }
  
    getGenero(){
      this.genero;
    }
  
    mostrarInfo(){
      console.log("Nombre: "+this.nombre+" Edad:"+this.edad+" Género: "+this.genero+" Tamaño: "+this.tamaño);
    }
  }
  let nombre= prompt("Ingresa tu nombre: ");
  let edad = parseInt(prompt("Ingresa la edad de la primera persona:"));
  let nombre2= prompt("Ingreas el nombre 2: ");
  let edad2 = parseInt(prompt("Ingresa la edad de la segunda persona:"));
  let persona1= new Persona(nombre,edad,'M',1.70);
  let persona2= new Persona(nombre2,edad2,'M',1.80);
  
  persona1.mostrarInfo();
  persona2.mostrarInfo();
  persona2.setNombre("Leonardo")
  persona2.setEdad(21)
  persona1.setEdad(26);
  console.log("La edad actualizada es: "+persona1.getEdad());
  console.log("La edad actualizada es: "+persona2.getEdad());
  console.log("El nombre actualizado es: "+persona2.getNombre());
  
  
  class Estudiante extends Persona{
      constructor(nombre, edad, genero,tamaño, carrera){
          super(nombre, edad, genero,tamaño);
          this.carrera= carrera;
      }
      setCarrera(carrera){
          this.carrera=carrera;
      }
      getCarrrera(){
          return this.carrera
      }
  
      mostrarInfo(){
          console.log("Nombre: "+this.nombre+" Edad:"+this.edad+" Género: "+this.genero+" Tamaño: "+this.tamaño+" Carrera: "+this.carrera);
      }
  }
  
  let estudiante1= new Estudiante('Ana',19,'F',1.68,'Ing.Industrial');
  estudiante1.mostrarInfo();
  estudiante1.setCarrera("Medicina");
  console.log("La carrera actualizada es: "+estudiante1.getCarrrera());