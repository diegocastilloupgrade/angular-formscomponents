#Práctica

## Formularios

Uso de formularios: Creación de un formulario con:
-Campos de texto, 
-Campos numericos
-Validaciones

## Servicios
Creamos el servicio:
-Creamos la carpeta services dentro de app
-Creamos el servicio, en este caso lo llamaremos rickandmorty:
--ng g service rickandmorty
-Lo aplicamos en providers en el **app.module.ts**
### En rickandmorty.service.ts:
-Importamos el **HttpClient** para poder hacer una llamada.
--import { HttpClient } from '@angular/common/http';
-Nos traemos un Observable de rxjs
dentro de la classe RickandmortyService creamos una variable de tipo string que es igual a la variable de la api de donde sacaremos los datos.
-Para poder hacer una petición http necesito almacenar en mi constructor el httpclient
-Creamos una función **getCharacters()** de tipo *Observable* que me haga un get http a esa url. Esta fución retornará una llamada get a *characterURL*
-Hacemos una interfaz charactersInterface.ts para saber como será el personaje que nos vamos a traer
-Nos vamos al **listadedatos.components.ts** para trabajar con lo que nos llegue.
-Creamos la lista (un array) de personajes que serán del tipo *Characterinterface* y en principio vacio
-Nos traemos el servicio RickandmortyService para poder inyectar al array los valores
-En cuanto arranque *ngOnInit()* la aplicación quiero que haga lo siguiente:
--Ejecutamos la función getCharacters() y lo que nos devuelve es un *observable*