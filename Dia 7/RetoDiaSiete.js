let salir = false;
alert("Hola, bienvenido a la calculadora");

while (!salir) {
  let operacion = prompt(
    "Ingrese la operación que desea realizar, elija su símbolo:\n Para Sumar: + \n Para Restar: - \n Para Multiplicar: * \n Para Dividir: / \n Para Salir: s"
  );

  if (operacion === "s") {
    alert("Hasta la próxima");
    salir = true;
  } else {
    let valor1 = parseInt(prompt("Ingrese el primer valor"));
    let valor2 = parseInt(prompt("Ingrese el segundo valor"));

    switch (operacion) {
      case "+":
        suma(valor1, valor2);
        break;
      case "-":
        resta(valor1, valor2);
        break;
      case "*":
        multiplicacion(valor1, valor2);
        break;
      case "/":
        division(valor1, valor2);
        break;
      default:
        alert("Operación no válida");
        break;
    }
  }
}

function suma(a, b) {
  alert(`El resultado es: ${a + b}`);
}

function resta(a, b) {
  alert(`El resultado es: ${a - b}`);
}

function multiplicacion(a, b) {
  alert(`El resultado es: ${a * b}`);
}

function division(a, b) {
  if (b === 0) {
    alert("No se puede dividir por cero");
  } else {
    alert(`El resultado es: ${a / b}`);
  }
}