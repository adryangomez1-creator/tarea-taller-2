Proyecto: Calculadora de Ventas con TypeScript

Este proyecto simula el carrito de compras de una tienda usando Node.js, pnpm y TypeScript. Suma una lista de precios, calcula el IVA y da el total final.


Organizacion del codigo (Modulos)

El codigo esta ordenado en dos archivos dentro de la carpeta src:

* src/calculator.ts: Aqui esta toda la logica matematica. Son funciones puras que reciben numeros y devuelven resultados, listas para usarse en cualquier otro lado en el futuro.
* src/index.ts: Es el punto de entrada. Importa las funciones, genera datos de prueba (carritos de ejemplo con decimales) y muestra los resultados ordenados en la consola.


Como funcionan las funciones (Lógica Tradicional)

Para que el codigo sea super entendible, se hizo de la forma clasica sin usar funciones resumidas raras:

1. calculateSubtotal
Recibe un arreglo con los precios de los productos. Usa un ciclo for tradicional para recorrer la lista uno por uno e ir sumando cada monto en una variable acumuladora que empieza en cero. Al final devuelve esa suma.

2. calculateIVA
Recibe el subtotal anterior. Multiplica ese monto por el factor del impuesto (por defecto 12%, es decir, 0.12) para obtener el valor neto del IVA a pagar.

3. calculateTotal
Recibe el subtotal y el IVA calculado. Hace una suma directa de ambos valores para consolidar el monto total definitivo que paga el cliente.


Conclusiones de las pruebas

* El programa se ejecuto correctamente usando pnpm start.
* Los calculos fueron exactos tanto para precios enteros como decimales.
* La estructura modular y el uso de un ciclo for tradicional garantizan que el codigo sea limpio, seguro y facil de mantener.
