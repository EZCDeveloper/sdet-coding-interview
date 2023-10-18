1.	Clonar este repositorio: "https://github.com/ycl-xepelin/sdet-coding-interview"

2.	Crear una rama que se llame "sdet-test"

3.	Descargar las dependencias con el comando "npm install"

4.	Ejecutar 1-prueba-uno.ts con el comando "npm run test1" y buscar donde esta el error

5.	Implementar la 2-prueba-dos.ts usando lo siguiente:

        BASE URL: https://fakestoreapi.com
        Endpoint: /auth/login
        USER: mor_2314
        PASSWORD: 83r5^_

        Payload:
        {
        username: '',
        password: '',
        }

    a. Definir el Base URL, USER y PASSWORD al archivo .env y usarlo en el test.
    b. Crear una funcion async enviando un POST request con Axios. 
       Syntaxis: axios.post(endpoint, payload)
    c. Imprimir con un console.log el "token" desde el response data.
    d. Comparar el status code del response que sea igual a 200 usando expect.

6. Buscar todos los posibles refactors y mejoras de 3-prueba-refactor.ts

7. Automatizar la pagina de Google con una prueba sencilla. Revisar los detalles en cypress/e2e/cypress-interview.cy.js

8. Completar la prueba 4-prueba-general.ts