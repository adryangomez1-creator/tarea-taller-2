/**
 * Calcula el subtotal de una compra sumando una lista de montos base.
 * Utiliza un ciclo tradicional para recorrer cada precio.
 */
export function calculateSubtotal(prices: number[]): number {
    // 1. Creamos una variable "alcancía" que empieza en 0 para guardar la suma total
    let sumaAcumulada: number = 0;

    // 2. Usamos un ciclo clásico 'for' para revisar los precios de la lista uno por uno
    for (let i = 0; i < prices.length; i++) {
        // En cada vuelta del ciclo, tomamos el precio actual de la posición 'i'
        let precioActual: number = prices[i];
        
        // Lo sumamos a nuestra alcancía
        sumaAcumulada = sumaAcumulada + precioActual;
    }

    // 3. Cuando el ciclo termina de revisar toda la lista, devolvemos el resultado final
    return sumaAcumulada;
}

/**
 * Calcula el valor del impuesto (IVA) a pagar.
 */
export function calculateIVA(subtotal: number, taxRatePercentage: number = 12): number {
    // 1. Convertimos el porcentaje (ej: 12) a su forma decimal (ej: 0.12)
    let factorImpuesto: number = taxRatePercentage / 100;

    // 2. Multiplicamos el subtotal por ese factor para obtener el valor neto del impuesto
    let resultadoIVA: number = subtotal * factorImpuesto;

    // 3. Devolvemos el dinero exacto que se debe pagar de IVA
    return resultadoIVA;
}

/**
 * Combina el subtotal y el IVA para obtener el total final de la compra.
 */
export function calculateTotal(subtotal: number, iva: number): number {
    // 1. Sumamos el costo de los productos más el impuesto calculado
    let granTotal: number = subtotal + iva;

    // 2. Devolvemos la suma definitiva
    return granTotal;
}