
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let verduras = [];
let pregunta = prompt( "¿Deseas agregar un alimento a tu lista de compras? (si/no)").toLowerCase();

while (pregunta === "si") {
  let alimento = prompt("¿Qué alimento deseas agregar a tu lista de compras?");
  let categoria = prompt( "¿En qué categoría se encaja ese alimento? selecciona un numero ➡ (1: frutas, 2: lacteos, 3: congelados, 4: dulces, 5: verduras)");
  if (categoria === "1") {
    frutas.push(alimento);
  } else if (categoria === "2") {
    lacteos.push(alimento);
  } else if (categoria === "3") {
    congelados.push(alimento);
  } else if (categoria === "4") {
    dulces.push(alimento);
  } else if (categoria === "5") {
    verduras.push(alimento);
  } else {
    console.log("Categoría no válida. Por favor, intenta de nuevo.");
  }

  pregunta = prompt("¿Deseas agregar otro alimento a tu lista de compras? (si/no)").toLowerCase();
}

console.log("Lista de compras:");
console.log("- Frutas:", frutas);
console.log("- Lácteos:", lacteos);
console.log("- Congelados:", congelados);
console.log("- Dulces:", dulces);
console.log("- Verduras:", verduras);
