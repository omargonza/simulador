/*const COTIZACION_DOLAR = 140;
const COTIZACION_DOLAR_ILEGAL = 280;
const COTIZACION_DOLAR_TURISTA = 240;
const cotizarDolar =(pesos) => pesos / COTIZACION_DOLAR;
const cotizarPesos =(dolar) => dolar * COTIZACION_DOLAR;
let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - DOLARESS A PESOS \n 2 - PESOS A DOLAR");
let valor = prompt("VALOR");
switch(seleccion){
    case "1":
         alert(cotizarPesos(valor));
         break;

    case "2":
         alert (cotizarDolar(valor));
         break;
    default:
         break;     
         const DOLARES = [{id:1, COTIZACION_DOLAR_ILEGAL:280},
                            {id:2, COTIZACION_DOLAR:140},
                             {id:3, COTIZACION_DOLAR_TURISTA:}];



         for (const DOLARES of DOLARES) {
          console.log(DOLARES.id);
          console.log(DOLARES.DOLARES);
         }        
         
    

*//*

const COTIZACION_DOLAR = 140;
const COTIZACION_DOLAR_ILEGAL = 280;
const COTIZACION_DOLAR_TURISTA = 240;
const cotizarDolar =(pesos) => pesos / COTIZACION_DOLAR;
const cotizarPesos =(dolar) => dolar * COTIZACION_DOLAR;
let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - DOLARESS A PESOS \n 2 - PESOS A DOLAR");
let valor = prompt("VALOR");
switch(seleccion){
    case "1":
         alert(cotizarPesos(valor));
         break;
    case "2":
         alert (cotizarDolar(valor));
         break;
    default:
         break;     
        

         
}
const DOLARES = [{tipo:"blue",valor:280},
{tipo:"oficial",valor:140},
{tipo:"turista",valor:240}];
for (const dolar of DOLARES) {
console.log(dolar.valor);
 console.log(dolar.DOLARES);
}     */  /*




function convertir(dolarOficial, dolarBlue, dolarTurista) {
     this.dolarOficial=dolarOficial;
     this.dolarBlue=dolarBlue;
     this.dolarTurista=dolarTurista;
     let valore = parseInt(document.getElementById("valor").value);
     let resultado =0;
     let dolarOficial =140;
     let dolarBlue =290;
     let dolarTurista =240;
     if(document.getElementById("uno, dos, tres").Checked){
          resultado = valore / convertir;
          alert("El cambio de Pesos a Dolar oficial es: $" + resultado)
     }
}

*/

class Dolar {
     constructor(tipo, valor) {
          this.tipo = tipo;
          this.valor = valor;
     }
}


let dolarOficial = new Dolar("Oficial", 140);
let dolarBlue = new Dolar("Blue", 290);
let dolarTurista = new Dolar("Turista", 240);

const Dolares = [dolarOficial, dolarBlue, dolarTurista]

function convertir(valor) {
     let resultado = 0;
     const arrayValores = Dolares.map(dolar => dolar.valor)
     valor = parseInt(document.getElementById("valor").value);
     if (document.getElementById('uno').checked)
     {
          console.log(arrayValores[0])
          resultado = valor / arrayValores[0];
          console.log(resultado)
          alert("el cambio a Dolar oficial es: $" + resultado.toFixed(2));

     }
     if (document.getElementById('dos').checked)
      {
          resultado = valor / arrayValores[1];
          console.log(resultado)
          alert("el cambio a Dolar Blue es: $" + resultado.toFixed(2));

     }
     if (document.getElementById('tres').checked) {
          resultado = valor / arrayValores[2];
          console.log(resultado)
          alert("el cambio a Dolar Turista es: $" + resultado.toFixed(2));
     } else {
          alert("introduzca un valor");
     }

}
