alert(
  "Hola, Juguemos a adivinar el número secreto, para ello te dare tres intentos"
);
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

for (let i = 1; i <= 3; i++) {
  let numeroUsuario = parseInt(prompt(`Intento ${i}: Introduce un número entre 1 y 10`));
  if (numeroUsuario === numeroSecreto) {
    alert("¡Felicidades! Has acertado el número");
    break;
  } else if (numeroUsuario > numeroSecreto) {//para hacerlo entretenido, doy pistas, asi como en el curso.
    alert("El número secreto es menor");
  } else {
    alert("El número secreto es mayor");
  }

  if (i === 3) {alert(`Lo siento, has acabado tus intentos. El número secreto era: ${numeroSecreto}`);
  }
}
