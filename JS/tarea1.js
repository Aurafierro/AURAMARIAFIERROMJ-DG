/*

Hola, les dejo la tarea si la pueden resolver se bien, si no avancen hasta donde puedan

Crea una función processEmployeeData que tome un objeto JSON que represente a un empleado (incluyendo nombre, edad, salario, y un arreglo de calificaciones de desempeño).
 La función debe:

Determinar si el empleado es elegible para un bono, que se otorga si el salario es menor o igual a $50,000.
Calcular el promedio de las calificaciones de desempeño.
Determinar el rango de desempeño basado en el promedio de calificaciones utilizando la siguiente escala:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
Devolver un nuevo objeto JSON que incluya el nombre del empleado, si es elegible para el bono, su promedio de calificaciones, y su rango de desempeño.
Requisitos:

La función debe usar condicionales para determinar la elegibilidad para el bono y el rango de desempeño.
La función debe recorrer el arreglo de calificaciones para calcular el promedio.
El resultado debe ser un objeto JSON bien formateado.
*/

const empleado = {
    nombre:"Aura",
    edad: 1,
    salario:100,
    calificaciones:[1,2,3,4,5]

  }
function  processEmployeeData (empleado){
 const bono=empleado.salario<=50000;
 
 let promedioFinal = 0;
 for (let i = 0; i < empleado.calificaciones.length; i++) {
    promedioFinal += empleado.calificaciones[i];
 }
 const promeidio=promedioFinal / empleado.calificaciones.length;
 let rango;
if (promeidio>=90){ 
    rango="A"
}else if (promeidio<=80){
    rango="B"
}else if (promeidio<=70){
  rango="C"
}else if (promeidio<=60){
 rango = "D"
}else{
    rango="F"
}
return{

    nombre: empleado.nombre,
    bono: bono,
    promedioFinal: promeidio,
    rango: rango
}
  
}console.log(processEmployeeData(empleado));