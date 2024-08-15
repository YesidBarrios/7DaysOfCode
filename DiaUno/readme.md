# Día 1: Comparación de Variables en JavaScript 📅

## ¡Llegó la hora! Vas a comenzar tu jornada en el **#7DaysOfCode** 😉

Este primer día es muy importante. Al final de él, tendrás un nuevo conocimiento que es esencial para los próximos desafíos.

Existe una situación muy común para quienes usan JavaScript: problemas con los tipos de variables al comparar los valores de dos variables entre sí. ¡A mí me ha pasado mucho!

En lenguajes de programación compilados, como Java y C#, este problema se detecta en tiempo de compilación, y tienes un aviso claro del error mientras desarrollas el código.

En JavaScript, estos errores pasan desapercibidos, ya que el código no pasa por un compilador. Es decir, los errores solo aparecen en tiempo de ejecución.

La parte más confusa para quienes están comenzando a aprender lógica con JavaScript es la operación de igualdad entre valores. Dependiendo de cómo escribas tu código, JavaScript hará una conversión de tipo a un tipo booleano de manera implícita (automática), y esto afectará a variables que eran Strings, Numbers, Object, etc.

Esto causa algunos comportamientos extraños, como todos estos ejemplos a continuación que retornan `true`:

```javascript
console.log(false == '0');
console.log(null == undefined);
console.log(" \t\r\n" == 0);
console.log(' ' == 0); 
```



'Lo cual no tiene necesariamente mucho sentido.'

'(Puedes probar todo esto yendo a tu navegador, haciendo clic con el botón derecho, eligiendo la opción “Inspeccionar” y la pestaña “Consola”. En esa pestaña, basta con copiar y pegar cada una de las líneas anteriores para confirmar que todas realmente retornan true).'

## El Reto

Por lo tanto, tu tarea de hoy es reescribir el código a continuación para que imprima la información de manera correcta, que tenga sentido y sin errores:

```javascript
let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';

if (COMPARAR numeroUn y stringUn) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}

if (COMPARAR numeroTreinta y stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}

if (COMPARAR numeroDiez y stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}
```

## CONSEJO
También puedes utilizar el navegador para ejecutar este programa, si aún no tienes familiaridad con editores de código como Visual Studio Code.

Para hacerlo, como mencioné antes, basta con hacer clic con el botón derecho del mouse en cualquier página, seleccionar la opción “Inspeccionar”, ir a la pestaña “Consola” y escribir tu código. ¡Muy simple, verdad?

Si deseas cambiar los nombres de las variables y los valores, siéntete libre de hacerlo. Pero nunca imprimas algo que no sea verdadero, ¿eh?

css