---
# Proyecto: Calculadora Básica con Bootstrap 5

Este proyecto consiste en una **página web responsiva** que implementa una **calculadora básica** utilizando **HTML, CSS, JavaScript y Bootstrap 5.0.2**.  
Su diseño moderno y funcional demuestra la correcta aplicación de los componentes de Bootstrap, junto con buenas prácticas de programación y organización de archivos.

---

## Objetivo
Desarrollar una calculadora funcional que permita realizar operaciones aritméticas básicas (suma, resta, multiplicación y división), aplicando los fundamentos del **desarrollo web moderno** con Bootstrap y JavaScript.

---

## Estructura del Proyecto
PRY_CALCULADORA_BASICA/
│
├── public/
│ ├── css/
│ │ └── estilos.css # Estos son los estilos personalizados para la calculadora.
│ │
│ ├── js/
│ │ └── main.js # Es la lógica funcional y la interacción con el usuario.
│ │
│ └── vendor/
│   └── bootstrap-5.0.2-dist/ # Son las librerías CSS y JS de Bootstrap 5
├── calculadora.html # Es la estructura principal de la página
---

## Tecnologías Utilizadas
- **HTML5:** Estructura del documento y componentes visuales.  
- **CSS3:** Estilos personalizados, diseño adaptable y efectos de interacción.  
- **JavaScript (ES6):** Lógica de cálculo, validación de entradas y eventos de teclado.  
- **Bootstrap 5.0.2:** Framework para la creación de interfaces responsivas y modernas.

---

## Descripción del Funcionamiento

### `calculadora.html`
Define la estructura visual del proyecto:
- Utiliza una **card** de Bootstrap para contener la calculadora.  
- Incluye un **display** para mostrar los valores y resultados.  
- Organiza los **botones numéricos y operadores** en filas con el sistema de grillas de Bootstrap.  
- Se puede operar tanto con **clics** como con el **teclado**.

### `main.js`
Contiene toda la lógica de la calculadora:
- Escucha los eventos del teclado (keydown) para permitir ingreso directo.  
- Controla los números, operadores, borrado, y cálculo con validaciones.  
- Implementa funciones modulares como:
  - appendNumber(number) → Añade números al display.  
  - appendOperator(operator) → Inserta operadores aritméticos.  
  - clearDisplay() → Limpia todo el contenido.  
  - backspace() → Elimina el último carácter.  
  - calculate() → Evalúa la expresión matemática y muestra el resultado.  
  - updateDisplay() → Actualiza el valor mostrado en pantalla.

### `estilos.css`
Define el diseño visual:
- Fondo suave y centrado con flexbox.  
- **Sombras, bordes redondeados y efectos hover** en botones.  
- Botones diferenciados por tipo (numéricos, operadores, igual).  
- Ajustes responsivos para pantallas pequeñas.  
- Animaciones suaves y accesibilidad con foco (outline).

---

## Características Principales
- Interfaz **intuitiva y responsiva** (adaptada a móviles y escritorio).  
- Soporte completo para **uso con teclado**.  
- Validación de operadores consecutivos y decimales múltiples.  
- Manejo de errores durante las operaciones.  
- Separación clara entre lógica, estilo y estructura (arquitectura **HTML–CSS–JS**).  
- Uso de **Bootstrap 5** para mantener consistencia visual.

---

## Instrucciones de Uso
1. Clonar o descargar el repositorio.  
2. Mantener la estructura de carpetas intacta:  
   public/css, public/js, public/vendor.  
3. Abrir el archivo **calculadora.html** en un navegador moderno.  
4. Operar con el teclado o los botones en pantalla.  
5. Personalizar estilos en estilos.css y funciones en main.js si se desea extender el proyecto.

---
Aplicación Tecnologías Web
## Integrantes
**Briggette Floril**
**Abigail Reyes**  
**Felix Narvaéz**  
**Katherine Vargas**  
**Sebastian Sandoval**  

---
