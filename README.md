# curso-ionic-ejercicio05-login
Soluciones de los ejercicios de los temas 5 y 10 del curso de Ionic

## Soluciones

- Solcuión ejercicio Tema 5: https://github.com/trainingit-Ionic/ejercicio-tema-5-carherco/commit/f0896061d3a61771bc636ff8a1cfca7bc482c0d5
- Solución ejercicio Tema 10: https://github.com/trainingit-Ionic/ejercicio-tema-5-carherco/commit/49c7477ce846da1f36338dc8621db7b09f8362c3

## Enunciado ejercicio Tema 5

Se parte de una app que tiene las siguientes páginas:

- Home
- Gestión de clientes
- Gestión de proveedores
- Gestión de pedidos
- Gestión de facturas

Y un servicio AuthService con los siguientes métodos ya implementados:

- login()
- logout()
- isLogged()
- getLastLoginErrorMessage()

Se pide: 

1) Crear una página de login utilizando componentes de interfaz de Ionic. (Recomendaciones: ion-card, ion-input, ...). En vez de una página de login, podría ser una modal que aparezca sobre la página de home (ion-modal)
  - La página de login debe mostrar algún elemento de feedback para indicar al usuario que se están verificando las credenciales. (Recomendación: ion-loading, ion-spinner...)
  - Si las credenciales no son correctas, se mostrará un mensaje al usuario. (Recomendaciones: ion-toast, ion-alert, ...)
2) Crear un menú lateral que solamente sea accesible después de haber hecho login correctamente. Este menú debe permitir acceder a todas las páginas de gestión.
3) Crear algún mecanismo para "salir" de la parte privada (hacer logout). Al hacer logout el sistema te llevará a la página Home.

**NO se debe modificar el servicio AuthService.**

## Enunciado ejercicio Tema 10

Modifica el servicio AuthService del ejercicio 5 para que utilice IonicStorage en vez de localstorage.

Entrega el ejercicio con un commit en el proyecto del ejercicio 5.
