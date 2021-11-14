# TP Final - Desarrollo backend con Node.js

Queremos un sistema ABM (Alta - baja - modificación) que nos permita administrar películas, para lo cual vamos a desarrollar una API con las siguientes características:

Se espera que la API cuente con sus diferentes capas de código separadas y ordenadas y que cada paso cumpla con las validaciones y manejo de errores correspondientes.

## Modelos:

### [](https://gist.github.com/doomling/9fe8cf6418f4e8dee99bf67fd2300330#movie)Movie

- name
 - category 
 - image (nombre del archivo que subimos al servidor)
 - type (pelicula o serie) 

### [](https://gist.github.com/doomling/9fe8cf6418f4e8dee99bf67fd2300330#user)User

- name
- password 
- isAdmin default false

Las imágenes del modelo movie se tienen que subir efectivamente al servidor y guardar dentro de la carpeta /uploads

# [](https://gist.github.com/doomling/9fe8cf6418f4e8dee99bf67fd2300330#rutas)Rutas

A nivel rutas el esquema es el siguiente:

MOVIES

[GET] /movies -> Muestra un array con todas las películas. Solo se puede acceder autenticado

[GET] /movies/:id -> Muestra la información de una película especīfica. Solo se puede acceder autenticado

[POST] /movies -> Sirve para crear una película en la base de datos. Necesita estar autenticado y ser admin para que se ejecute

[PUT] /movies/edit/:id -> Sirve para modificar una película en la base de datos. Necesita estar autenticado y ser admin para que se ejecute

[DELETE] /movies/delete/:id -> Sirve para borrar una película de la base de datos. Necesita estar autenticado y ser admin para que se ejecute

USERS

[GET] /users -> Muestra una lista de usuarios, no tiene restricciones de acceso

[GET] /users/:id -> Muestra la información de un usuario particular, no tiene restricciones de acceso

[POST] /users -> Sirve para crear un usuario en la base de datos, no tiene restricciones de acceso

[PUT] /users/edit/:id -> Sirve para modificar un usuario en la base de datos. Necesita estar autenticado y ser admin para que se ejecute

[DELETE] /users/delete/:id -> Sirve para borrar un usuario de la base de datos. Necesita estar autenticado y ser admin para que se ejecute