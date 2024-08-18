
let elegir = prompt("¿Qué camino quieres seguir?, ¿front-end o back-end?").toLowerCase();

let tecnologia = "";

if (elegir === "front-end") {
  tecnologia = prompt("¿Quieres aprender React o Vue?").toLowerCase();
} else if (elegir === "back-end") {
  tecnologia = prompt("¿Quieres aprender C# o Java?").toLowerCase();
} else {
  alert("Por favor, elige 'front-end' o 'back-end'.");
}

let especializarse = prompt("¿En que Area quieres especializarte: (front-end/back-end) o ser full stack?").toLowerCase();

if (especializarse === "front-end" || especializarse === "back-end") {
  alert(`¡Excelente! que buneo que quieras especializarte en ${especializarse}`);
} else if (especializarse === "full stack") {
  alert("¡Genial! Ser full stack te abrirá muchas puertas.");
} else {
  alert("Por favor, elige 'front-end', 'back-end' o 'full stack'.");
}

let continuar = true;
while (continuar) {
  let otrasTecnologias = prompt("¿Qué otras tecnologías te gustaría aprender? (Escribe 'no' para terminar)").toLowerCase();
  
  if (otrasTecnologias === "no") {
    continuar = false;
  } else {
    alert(`¡Interesante! Aprender  ${otrasTecnologias}  es una excelente idea.`);
  }
}
