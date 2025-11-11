// Variables globales
let displayValue = '';
let lastResult = null;
let newNumber = true;

// Elemento del display
const display = document.getElementById('display');

// Agrega el evento de escucha del teclado cuando se carga el documento
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', handleKeyPress);
});

/**
 * Maneja los eventos del teclado
 * @param {KeyboardEvent} event - El evento del teclado
 */
function handleKeyPress(event) {
    // Previene el comportamiento por defecto para evitar doble entrada
    event.preventDefault();

    const key = event.key;

    // Números y punto decimal
    if (/^[0-9.]$/.test(key)) {
        appendNumber(key);
    }
    // Operadores
    else if (['+', '-', '*', '/'].includes(key)) {
        appendOperator(key);
    }
    // Enter o igual para calcular
    else if (key === 'Enter' || key === '=') {
        calculate();
    }
    // Retroceso para borrar último carácter
    else if (key === 'Backspace') {
        backspace();
    }
    // Escape para limpiar
    else if (key === 'Escape') {
        clearDisplay();
    }
}

/**
 * Añade un número al display
 * @param {string} number - El número a añadir
 */
function appendNumber(number) {
    // Si es un nuevo número después de una operación, limpia el display
    if (newNumber && number !== '.') {
        displayValue = '';
        newNumber = false;
    }
    
    // Evita múltiples puntos decimales
    if (number === '.' && displayValue.includes('.')) {
        return;
    }
    
    displayValue += number;
    updateDisplay();
}

/**
 * Añade un operador al display
 * @param {string} operator - El operador a añadir
 */
function appendOperator(operator) {
    // Si hay un resultado previo, se usa como primer operando
    if (lastResult !== null && newNumber) {
        displayValue = lastResult.toString();
    }
    
    // Evita operadores consecutivos
    if (['+', '-', '*', '/'].includes(displayValue.slice(-1))) {
        displayValue = displayValue.slice(0, -1);
    }
    
    displayValue += operator;
    newNumber = false;
    updateDisplay();
}

/**
 * Limpia el display y reinicia los valores
 */
function clearDisplay() {
    displayValue = '';
    lastResult = null;
    newNumber = true;
    updateDisplay();
}

/**
 * Elimina el último carácter del display
 */
function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

/**
 * Calcula el resultado de la expresión
 */
function calculate() {
    try {
        // Evalúa la expresión matemática
        lastResult = eval(displayValue);
        
        // Formatea el resultado
        if (Number.isFinite(lastResult)) {
            displayValue = lastResult.toString();
        } else {
            throw new Error('Resultado inválido');
        }
    } catch (error) {
        displayValue = 'Error';
        lastResult = null;
    }
    
    newNumber = true;
    updateDisplay();
}

/**
 * Actualiza el valor mostrado en el display
 */
function updateDisplay() {
    display.value = displayValue || '0';
}

