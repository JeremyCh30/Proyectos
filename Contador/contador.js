'use strict';

let contador = 0;
const contadorNumeroElement = document.getElementById('numeroContador');

//funcion en flecha que indica que si el numero es totalmente igual a 0 va a añadirle una clase que se llame cero si no es asi y es mayor a cero le añadira una clase que se llame positivo y de lo contrario entonces añadira una clase que se llame negativo, esto para luego añadir el color en css
  function actualizarColor() {
    contadorNumeroElement.className = contador === 0 ? 'cero' : (contador > 0 ? 'positivo' : 'negativo');
    }

//funcion para disminuir, cuando se presione el boton que lleva esta funcion en html, se descontara un numero del contador y luego se añadira en el html y se le añade al funcion de actualizar color para que el css con muestre el color
  function disminuir() {
    contador--;
    contadorNumeroElement.textContent = contador;
    actualizarColor();
  }
//funcion para reiniciar, cuando se presione el boton que lleva esta funcion en html, se reiniciara el contador en 0 y luego se añadira en el html y se le añade al funcion de actualizar color para que el css con muestre el color 
  function reiniciar() {
    contador = 0;
    contadorNumeroElement.textContent = contador;
    actualizarColor();
  }

  //funcion para incrementar, cuando se presione el boton que lleva esta funcion en html, se aumentara un numero del contador y luego se añadira en el html y se le añade al funcion de actualizar color para que el css con muestre el color
  function incrementar() {
    contador++;
    contadorNumeroElement.textContent = contador;
    actualizarColor();
  }

window.onload = reiniciar;