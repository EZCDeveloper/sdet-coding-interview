1. Clonar el repositorio: https://github.com/ycl-xepelin/sdet-coding-interview
2. Crear una rama que se llame sdet-test
(En caso que no tenga GIT instalado, se le puede pasar el proyecto .zip)

3. Ejecutar el comando npm install para descargar las dependencias 

4. Ejecutar el comando npm run test1 buscar donde se encuentra el error y corregirlo. 

    Resultado esperado: No se debe presentar ningún error en la consola y se debe desplegar un object con datos.

5. Automatizar una prueba de API con Axios. 
En el archivo 2-prueba-api.ts use lo siguiente:

        BASE URL: https://fakestoreapi.com
        ENDPOINT: /auth/login
        USER: mor_2314
        PASSWORD: 83r5^_

        Payload:
        {
        username: '',
        password: '',
        }

    a. Definir el BASE_URL, USER y PASSWORD en el archivo .env para usarlo en el test.

    b. Crear una función asíncrona enviando un POST request con Axios. 
        Syntaxis: axios.post(<api endpoint>, <payload>)

    c. Imprimir el "token" desde el response data con console.log

    d. Comparar el status code del response que sea igual a 200 usando expect.

6. Buscar todos los posibles refactors y mejoras de 3-prueba-refactor.ts

    Resultado esperado:  Existen al menos 15 mejoras en este código.

7. Automatizar una prueba Web con la página de Google. 
Los detalles se encuentran en el archivo cypress/e2e/cypress-interview.cy.js

	Resultado esperado:  Se debe poder ejecutar la prueba automatizada de forma exitosa.

8. Completar la prueba 4-prueba-general.ts