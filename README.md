# Poke-Houm en Next.js

## ¿Qué se hizo?

La aplicación consiste en recopilar datos de la api de Pokemon llamada “PokeApi” y mostrarlos de una forma atractiva visualmente, con estos datos se puede hacer lo siguiente:

1. Ver una cantidad de 50 elementos listados en la página principal
2. Al hacer click en algún elemento, este lo deriva a una página dinámica, la cual va a variar según el pokemon seleccionado, esta página mostrará datos del pokemon en específicado.
3. La web cuenta con un buscador para encontrar coincidencias por el nombre del pokemon
4. Además cuenta con un paginador con 5 secciones separados en 10 elementos cada uno.
5. Adicionalmente se le implementó un switch para alternar al modo oscuro
6. *El botón para ir a la página de Home se implementó en el Logo superior de Houm*

## ¿Qué se usó para construirla?

### Framework

Se construyó **Next.js**, un framework de **React**.

### Estilos

Para los estilos se ocupó “**styled jsx**” un elemento ya incorporado en la librería para aprovechar el uso estilos globales que este nos provee, una librería de React llamada “**NextUi**”.

### Typescript

Se usó **Typescript** para escribir el código, un lenguaje de programación fuertemente tipado que se basa en JavaScript.

### Estructura de código

Se utilizó **Eslint** y **prettier** para el orden y así asegurar un código ordenado y limpio.

### Deploy

LA aplicación fue deployada en Github y en Vercel, este puede verse en el siguiente link:

[Poke-app](https://poke-app-lac.vercel.app/)
