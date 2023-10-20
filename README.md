## Prueba de Codificación para Sr. QA Engineer

Tiempo estimado: 60 minutos

### REQUISITOS
1. Clonar el repositorio: https://github.com/ycl-xepelin/sdet-coding-interview
2. Crear una rama que se llame sdet-test/{su nombre}
3. Ejecutar el comando npm install para descargar las dependencias.

### PRUEBA 1 - ANÁLISIS DE ERROR Y SOLUCIÓN DE PROBLEMAS

- Ejecutar el comando `npm run test1` y buscar donde se encuentran los errores, para
luego corregirlo.

<u>Resultado esperado</u>:
No se debe presentar ningún error y se espera desplegar un número 200 en la consola.

### PRUEBA 2 - PRUEBA DE API Y AUTOMATIZACIÓN

Automatizar una prueba de API con Axios.
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

    Syntaxis: axios.post({api endpoint}, {payload})

b. Imprimir el `token` desde el response data

c. Comparar el status code del response igual a `200`

Una vez finalizado, ejecute el comando `npm run test2`

<u>Resultado esperado</u>: Se debe ejecutar la prueba con éxito y cumpliendo las condiciones
a, b, y c.

### PRUEBA 3 - REFACTORIZACIÓN DE CÓDIGO

- Buscar todos las refactorizaciones y mejoras posibles de `3-prueba-refactor.ts`

<u>Resultado esperado</u>: Existen al menos 15 mejoras en este código.

### PRUEBA 4 - WEB TESTING
- Automatizar una prueba Web con la página de Google.

Los detalles se encuentran en el archivo `cypress/e2e/cypress-interview.cy.js`

Una vez finalizado, ejecute el comando `npm start` para ejecutar el test.

<u>Resultado esperado</u>: Se debe poder ejecutar la prueba automatizada de forma exitosa.

### PRUEBA 5 - LÓGICA Y ALGORITMO

Completar la prueba `4-prueba-general.ts`

    a. Debes ordenar los números de menor a mayor.

    b. No deben venir números duplicados.

Una vez finalizado, ejecute el comando `npm run test4`

<u>Resultado esperado</u>: [ 1, 2, 9, 10, 16, 98 ]

### CONCLUSIÓN
Para terminar, sube tus cambios al branch generado y crear un Pull Request.