

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
          alert("Valor del Dolar Oficial 140, el cambio de moneda es: $" + resultado.toFixed(2));

     }
     if (document.getElementById('dos').checked)
      {
          resultado = valor / arrayValores[1];
          console.log(resultado)
          alert("Valor del Dolar Blue es 290, el cambio de moneda es: $" + resultado.toFixed(2));

     }
     if (document.getElementById('tres').checked) {
          resultado = valor / arrayValores[2];
          console.log(resultado)
          alert("Valor del Dolar Turista es 240, el cambio de moneda es: $" + resultado.toFixed(2));
     } else {
          alert("GRACIAS POR ELEGIRNOS!!");
     }

}
