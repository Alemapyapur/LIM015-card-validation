# CARDVALID WEB

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Checklist](#8-checklist)

***

## 1. Resumen del proyecto

CrediCard Web, es una aplicación web que le permitira al
usuario validar el número de una tarjeta de crédito. Además, tiene la
funcionalidad para ocultar todos los dígitos de una tarjeta menos
los últimos cuatro.

* Investigación UX:
  1. Explicar quiénes son los usuarios y los objetivos en relación con el
    producto.
  2. Explicar cómo el producto soluciona los problemas/necesidades de dichos
    usuarios.
  3. Luego colocarás la foto de tu primer prototipo en papel.
  4. Agregar un resumen del feedback recibido indicando las mejoras a realizar.
  5. Imagen del prototipo final.


![](src/img/cardvalid.png)

## 2. Objetivos de aprendizaje

Se aprendera, a construir una aplicación web que interactuará
con lx usuarix final a través del navegador, utilizando HTML, CSS y JavaScript
como tecnologías.
* Usa solo caracteres numéricos (dígitos) en la tarjeta a validar [0-9].
* La lógica del proyecto debe estar implementada completamente en JavaScript.

### HTML y CSS

* [X] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM

* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [X] Manipulación de strings.
* [X] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de bucles (for | for..in | for..of | while)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Declaración correcta de variables (const & let)

### Testing

* [X] [Testeo unitario.]

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [X] Uso de comandos de git (add | commit | pull | status | push)
* [X] Manejo de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [X] Crear prototipos para obtener feedback e iterar.
* [X] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)

### Interfaz de usuario (UI)

La interfaz permitir al usuario:

* Insertar el número que queremos validar.
* Ver el resultado si es válido o no.
* Ocultar todos los dígitos de su número de tarjeta menos los últimos
4 caracteres.
* No debe poder ingresar un campo vacío.

![](src/img/cardvalid-valida.png)

![](src/img/cardvalid-invalida.png)

#### Visualmente (HTML y CSS)

Deberás maquetar de forma exacta el prototipo final que hiciste en la herramienta
de diseño de prototipos que escogiste utilizando HTML y CSS. En este momento elegirás
los colores, tipo de fuente, etc a usar.

![](src/img/cardvalid.png)

##### `src/validator.js`

Acá escribirás las funciones necesarias para que el usuario pueda verificar la
tarjeta de crédito y ocultar los dígitos de su número de tarjeta.
Esta función debe ser pura e independiente del DOM.

Para esto debes implementar el **objeto `validator`**, el cual ya se encuentra
_exportado_ en el _boilerplate_. Este objeto (`validator`) contiene
dos métodos (`isValid` y `maskify`):

* **`validator.isValid(creditCardNumber)`**: `creditCardNumber` es un `string`
con el número de tarjeta que se va a verificar. Esta función debe retornar un
`boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).

* **`validator.maskify(creditCardNumber)`**: `creditCardNumber` es un `string` con
el número de tarjeta y esta función debe retornar un `string` donde todos menos
los últimos cuatro caracteres sean reemplazados por un numeral (`#`) o 🐱.
Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún
cuando el `string` sea de menor longitud.

    Ejemplo de uso

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```

##### `test/validator.spec.js`

En este archivo tendrás que completar las pruebas unitarias de las funciones
`validator.isValid(creditCardNumber)` y `validator.maskify(creditCardNumber)`
implementadas en `validator.js` utilizando [Jest](https://jestjs.io/es-ES/).
Tus pruebas unitarias deben dar un 70% en _coverage_ (cobertura),
_statements_ (sentencias), _functions_ (funciones) y _lines_ (líneas); y un
mínimo del 50% de _branches_ (ramas).

```text
 PASS  test/validator.spec.js
  validator
    √ debería ser un objeto (5 ms)
    validator.isValid
      √ debería ser una función
      √ debería retornar true para "4083952015263" (1 ms)
      √ debería retornar true para "79927398713" (1 ms)
      √ debería retornar false para "1234567890" (1 ms)
    validator.maskify
      √ debería ser una función (1 ms)
      √ Debería retornar "############5616" para "4556364607935616" (1 ms)
      √ Debería retornar "1" para "1"
      √ Debería retornar "######orld" para "helloworld" (1 ms)

--------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------|---------|----------|---------|---------|-------------------
All files     |   96.15 |    90.91 |     100 |   95.83 |
 validator.js |   96.15 |    90.91 |     100 |   95.83 | 7
--------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        7.056 s, estimated 15 s
Ran all test suites.
```


***

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

En esta versión Hacker edition puedes además de validar si el número de la
tarjeta es válida, mostrar la [franquicia](https://es.wikipedia.org/wiki/N%C3%BAmero_de_tarjeta_bancaria) de la tarjeta (ej: Visa, MasterCard, etc)
usando estas [reglas de validación](https://stevemorse.org/ssn/cc.html).

***


***
### Achicando el gran problema en problemas más pequeños

Un "superpoder" que esperamos puedas desarrollar durante el bootcamp es el de definir "mini-proyectos" que te acerquen paso a paso a la solución del "gran proyecto". Es el equvalente a comenzar armando esquinas o bordes del rompecabezas/puzzle sin saber necesariamente cómo encajarán al final. Déjate llevar y explora. Estas son algunas sugerencias:

**"validar" que el input sea numérico**
Crea una interfaz simple con 1 caja de texto y un botón. Si escribo algo en la caja de texto 1 y le doy click al botón, quiero que valide que sea sólo números y que no esté vacío.

**"validar" si la tarjeta de crédito es válida**
Cuando de clic en el botón, debe indicarnos si la tarjeta es válida o no.

**"mostrar" sólo los últimos 4 números**  =
Cuando de clic en el botón, sólo deben ser visibles los últimos 4 número, es decir, debe ocultar los otros números (ej: si escribo 12304589, debe salir después ####4589).

![](src/img/cardvalid-valida.png)

![](src/img/cardvalid-invalida.png)
## 8. Checklist

* [X] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [ ] `README.md` (o otro archivo) contiene tu plan de acción - Objetivos que prioritizaste este proyecto.
* [ ] Usa VanillaJS.
* [X] No utiliza `this`.
* [X] Implementa `validator.isValid`.
* [X] Implementa `validator.maskify`.
* [X] Pasa linter con configuración provista.
* [X] Pasa pruebas unitarias.
* [X] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [X] Interfaz permite escribir un número para ser validado.
* [X] Interfaz muestra el resultado de la validación correctamente.
* [X] Interfaz oculta todos los números escritos excepto los 4 últimos




