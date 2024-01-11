'use strict';
async function cambiarColor() {
    try {
        const response = await fetch('https://www.thecolorapi.com/random');
        const data = await response.json();
    
        const colorAleatorio = data.name.value;
        const colorHex = data.hex.value;
    
        document.body.style.backgroundColor = colorHex;
        document.getElementById('mensaje').textContent = `Color actual: ${colorAleatorio}`;
      } catch (error) {
        console.error('Error al obtener el color:', error);
      }
  }