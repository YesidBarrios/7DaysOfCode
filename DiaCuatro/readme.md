# Día 4 - Adivina el Número

Hola,

¡Has llegado a un nuevo día de #7DaysOfCode!

¿Y el desafío de ayer? ¿Lograste resolverlo? Como siempre, al final del correo te dejaré la solución que yo utilizaría.

¿Alguna vez has jugado a adivinar el número en el que tu amigo o amiga estaba pensando? Hoy volverás a tu infancia y harás exactamente eso. ¡Pero ahora, el juego será contra la propia computadora!

Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7).

A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará. Si te equivocas, te dará 2 intentos más.

Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.

Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.

## CONSEJO

Piensa muy bien en qué estructura de repetición utilizarás para hacer que tu programa se ejecute hasta que se agoten las 3 oportunidades o hasta que la persona acierte el número.

Recuerda que siempre puedes personalizar tu programa como desees.

No olvides compartirlo en tu GitHub y en tus redes sociales con el hashtag #7DaysOfCode.

### EXTRA

Échale un vistazo a este site para aprender más sobre estructuras de repetición.

Para hacer que la propia máquina elija el número a adivinar, puedes utilizar algo llamado `Math.random()`.

Para ello, utiliza el siguiente código:

```javascript
Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)
```

Donde, por supuesto, tendrás que cambiar los valores de mínimo y máximo por los límites inferior y superior, respectivamente.

#7DaysOfCode

#7DaysOfCode - Lógica JS 4/7: Mas loops y randomización