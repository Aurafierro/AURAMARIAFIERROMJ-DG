
// 
/*
condiciones de verdad 
 y= &&  cumle las dos condiciones
|| = se cumple alguna de las dos condiciones
*/
function checkAge(age)//invica a la funcion
 {
    //debugger=detener el programa
    //anciano
    //joven
    //mediana edad
    let mensaje;

    if (age <= 18) {
        mensaje = "eres joven";
    } else if (age >= 50) {
        mensaje = "eres anciano";
    } else {
        mensaje = "eres mayor";
    }

    return mensaje;
}

// hacer una funcion de devolcver un numero impar o par

function numeros(numero){
 let operacion;

 // mood = el resto de una division
 if (numero % 2 ==0) {
    operacion= "el número es par";


 }else{
    
        operacion=" el número es impar";
    
 }
 return operacion;
}
/*
declaraciones repetitivas
arreglo tipo de variable que guarda varias cosas en nuestras
variables.

*/

function lisNumbers(){
    let numbers = [1,2,3,4]
    for(let i=1; i <=5; i++){
        numbers.push(i);
    }
    return numbers;
}

//ciclo del  1 al 50 y que solamente sume los numeros pares

function lisNumbers(){
   
    let sumarPares=0;
    //inicializar i=1

    for(i=1; i <=50; i++){
        if (i % 2 ==0) { 
      
            //
        sumarPares += i; 
    }
    
}
console.log(sumarPares)
}

//arreglos
function sumaArray(arr){
    //sumar todas las psocisiones del arreglo
    let sum =0;
   // for (let i =0 )
    }

    //metodos de arrglos .map() 
    // JSON JAVASCRIPT, OBJRCT
    //JSON ES U TIPO DE DATOS QUE SE MANEJA LA CUAL SE 
    // GUARDA INFORMACIÓN DE LO QUE NOSOTROS LE DEFINAMOS.
    let name 
    let age
    let city
    function getPersonInfo(){

        //esto es un JSON VACIO
        const  person ={
            name: "Juuan",
            age:25,
            city :"Madrid"
        };
        return JSON.stringify(person,nul,2); 
    }
    //VARIALBLE Y CONDICIONES, CICLOS, FUNCIONES, ARREGLOS Y JSON
    //PROCESAR LA INFORMACIÓN DE UN ESTUDIANTE, LA FUNCION VA A TENER 
    //TRES ARGUMENTOS o tres parametros , Y VA HACER CUATRO COSAS, VA A DETERMINAR S I ES MAYOR DE EDAD,
    //DESPUES CALULAR EL PRIMEDIO DE SUS CALIFICACIONES,  DESPUES DETERMINAR LA NOTA FINAL
    //DEVOLVER UN OBJETO JSON  DE TOD LA INFORMACIÓN DEL ESTUDIANTE.

    /*
     crear funcio que procese la información de un estudiante
     debe tener 3 parametros o tres argumentos
     determinar si su edad es mayor de 18 o no
     calcular el promedio de calificaciones
     determinar el rango de la calificación final
     devolver un objeto json con la información
    */
   
   function solverGrande(){
    function gradeLevel(score){
        if(score>=90)return "A";
        if(score>=80)return "B";
        if(score>=70)return "C";
        if(score>=60)return "D";
    }
   }
     
     const calificacion= [28,30,100,25,70,80]
    function solveProcessStudentData(nombre, edad,calificacion){
 
        const esMayorDeEdad = edad > 18;
        let promedio;
        let sumaCalificaciones
     

        for ( let i = 0; i < calificacion.length; i++){
            sumaCalificaciones+=calificacion[1];
        }
         
        promedio= sumaCalificaciones/ calificacion.length

        const rangoPromedio =gradeLevel(promedio)
       

         // Crear el objeto JSON con la información
    const informaciónEstudiante = {
        nombre: nombre,
        edad: esMayorDeEdad,
         calificacion: rangoPromedio,
        
    };

    return informaciónEstudiante;
}
console.log(solveProcessStudentData("Daniela",27,calificacion))

    
