'use strict';

let expresion = '';

function agregarCaracter(caracter) {
  expresion += caracter;
  document.getElementById('resultado').value = expresion;
}

function limpiar() {
  expresion = '';
  document.getElementById('resultado').value = expresion;
}

function calcular() {
  try {
    const resultado = eval(expresion);
    document.getElementById('resultado').value = resultado;
    expresion = resultado.toString();
  } catch (error) {
    document.getElementById('resultado').value = 'Error';
    expresion = '';
  }
}
