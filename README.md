# Prueba de Codificación

### REQUISITOS

1. Clonar el repositorio: https://github.com/ycl-xepelin/sdet-coding-interview

2. Crear una rama que se llame `sdet-test/{nombre}`

3. Ejecutar el comando `npm install` para descargar las dependencias 



### PRUEBA 1 - ANÁLISIS DE ERROR Y SOLUCIÓN DE PROBLEMAS (3 minutos)


- Ejecutar el comando `npm run test1` buscar donde se encuentra el error y corregirlo. 

Resultado esperado: No se debe presentar ningún error y se debe desplegar un objeto con datos en la consola.


### PRUEBA 2 - CONOCIMIENTO DE API Y AUTOMATIZACIÓN BÁSICA (10 minutos)

- Automatizar una prueba de API con Axios. 

En el archivo 2-prueba-api.ts use lo siguiente:

- BASE_URL: https://fakestoreapi.com
- ENDPOINT: /auth/login
- USER_TEST: mor_2314
- PASSWORD: 83r5^_
- Payload:
{
  username: '',
  password: '',
}


a. Crear una función asíncrona enviando un POST request con Axios. 

    Syntaxis:  axios.post({endpoint}, {payload})

b. Imprimir el "token" desde el response data

c. Comparar el status code del response igual a 200.

Una vez finalizado, ejecute el comando `npm run test2`


Resultado esperado: Se debe ejecutar la prueba con éxito y cumpliendo las condiciones a, b, y c.




### PRUEBA 3 - REFACTORIZACIÓN DE CÓDIGO (8 minutos)

- Buscar todos las refactorizaciones y mejoras posibles de 3-prueba-refactor.ts

Resultado esperado:  Existen al menos 15 mejoras en este código.




### PRUEBA 4 - WEB TESTING (10 mins)

- Automatizar una prueba Web con la página de Google. 
Los detalles se encuentran en el archivo cypress/e2e/cypress-interview.cy.js

	Una vez finalizado, ejecute el comando `npm start` para ejecutar el test.

	Resultado esperado:  Se debe poder ejecutar la prueba automatizada de forma exitosa.




### PRUEBA 5 - LÓGICA Y ALGORITMO (15 mins)


Completar la prueba 4-prueba-general.ts

a. Debes ordenar los números de menor a mayor.
b. No deben venir números duplicados.

Una vez finalizado, ejecute el comando `npm run test4`

Resultado esperado: [ 1, 2, 9, 10, 16, 98 ]

