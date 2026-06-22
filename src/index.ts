import { calculateSubtotal, calculateIVA, calculateTotal } from './calculator.js';

// --- DATOS DE PRUEBA (Simulaci�n de carrito de compras) ---
const cartCase1: number[] = [150.00, 45.50, 89.99, 12.25];
const cartCase2: number[] = [1200.00, 350.00];

const IVA_RATE = 12; // Tasa del 12% est�ndar

// --- EJECUCI�N DE PRUEBAS ---
function runInvoiceSimulation(cartNumber: number, products: number[]): void {
    console.log(`--- SIMULACI�N DE COMPRA: Caso ${cartNumber} ---`);
    console.log(`Productos en el carrito: Q${products.join(', Q')}`);
    
    const subtotal = calculateSubtotal(products);
    const iva = calculateIVA(subtotal, IVA_RATE);
    const total = calculateTotal(subtotal, iva);
    
    console.log(`Subtotal: Q${subtotal.toFixed(2)}`);
    console.log(`IVA (${IVA_RATE}%):  Q${iva.toFixed(2)}`);
    console.log(`Total:    Q${total.toFixed(2)}\n`);
}

// Ejecutar los casos de prueba
runInvoiceSimulation(1, cartCase1);
runInvoiceSimulation(2, cartCase2);
