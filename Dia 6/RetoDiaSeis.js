let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let verduras = [];
let pregunta = prompt(
  "¿Deseas agregar un alimento a tu lista de compras? (si/no)"
).toLowerCase();

while (pregunta === "si") {
  let alimento = prompt("¿Qué alimento deseas agregar a tu lista de compras? ");
  let categoria = prompt(
    "¿En qué categoría encaja este alimento? selecciona un número =>\n" +
    "1: frutas\n" +
    "2: lacteos\n" +
    "3: congelados\n" +
    "4: dulces\n" +
    "5: verduras"
  );
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
    alert("Categoría no válida. Por favor, intenta de nuevo.");
  }

  pregunta = prompt(
    "¿Deseas agregar otro alimento a tu lista de compras? (si/no) o (eliminar) un alimento de la lista?"
  ).toLowerCase();

  if (pregunta === "eliminar") {
    /* El método join() convierte todos los elementos de un array en una cadena de texto. 
    En este caso, join(", ") une los elementos del array usando una coma y un espacio como separador.*/
    alert(`Lista de alimentos: 
- Frutas: ${frutas.join(", ")}
- Lácteos: ${lacteos.join(", ")}
- Congelados: ${congelados.join(", ")}
- Dulces: ${dulces.join(", ")}
- Verduras: ${verduras.join(", ")}`);

    let alimento = prompt(
      "¿Qué alimento deseas eliminar de tu lista de compras?"
    );
    let categoria = prompt(
        "¿En qué categoría encaja este alimento? selecciona un número =>\n" +
        "1: frutas\n" +
        "2: lacteos\n" +
        "3: congelados\n" +
        "4: dulces\n" +
        "5: verduras"
      );

     /* frutas.indexOf(alimento) obtiene el índice de alimento en frutas
       y  elimina 1 elemento en la posición obtenida.. */
    if (categoria === "1" && frutas.includes(alimento)) {
      frutas.splice(frutas.indexOf(alimento), 1);
    } else if (categoria === "2" && lacteos.includes(alimento)) {
      lacteos.splice(lacteos.indexOf(alimento), 1);
    } else if (categoria === "3" && congelados.includes(alimento)) {
      congelados.splice(congelados.indexOf(alimento), 1);
    } else if (categoria === "4" && dulces.includes(alimento)) {
      dulces.splice(dulces.indexOf(alimento), 1);
    } else if (categoria === "5" && verduras.includes(alimento)) {
      verduras.splice(verduras.indexOf(alimento), 1);
    } else {
      alert("¡No fue posible encontrar el elemento en la lista!");
    }
  }
  pregunta = prompt(
    "¿Deseas agregar otro alimento a tu lista de compras? (si/no) o (eliminar) un alimento de la lista?"
  ).toLowerCase();
}

alert(`Lista de alimentos:
- Frutas: ${frutas.join(", ")}
- Lácteos: ${lacteos.join(", ")}
- Congelados: ${congelados.join(", ")}
- Dulces: ${dulces.join(", ")}
- Verduras: ${verduras.join(", ")}`);