const readlineSync = require(`readline-sync`);
const { generarNumeroAleatorio, verificarAdivinanza } = require("./adivinanza");

const obtenerNumeroUsuario = () => {
  return parseFloat(readlineSync.question(`Ingrese un numero: `));
  
};

const juegoAdivinanza = () => {
  const numeroSecreto = generarNumeroAleatorio();
  let numeroAdivinado = 0;

  console.log("¡Bienvenido a Adivina el número secreto!");
  console.log(`El Numero Secreto es:${numeroSecreto}`);
  console.log("Intenta adivinar el número del 1 al 100.\n");

  while (numeroAdivinado !== numeroSecreto) {
    numeroAdivinado = obtenerNumeroUsuario();
    if (!isNaN(numeroAdivinado)) {
      verificarAdivinanza(numeroSecreto, numeroAdivinado)
    }
    else{
      console.log(`Por favor, ingrese un numero valido.`);
    }
    
  }
};
juegoAdivinanza();
