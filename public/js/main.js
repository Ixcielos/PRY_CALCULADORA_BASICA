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
