## Aplicación Móvil Dummy Marcket 

### Descripción 📄

Esta es una aplicación móvil de E-ecommerce llamada Dummy Marcket con el objetivo de probar el framework de Ionic y el consumo de APIS REST en el lado del frontend. Tiene algunas funcionalidades basicas como login, registrar usuario, listar productos, buscar productos, etc.

### Tecnologías ⚙️

- Angular 15
- Ionic 6
- HTML
- SASS
- TypeScript

### Entorno de Desarrollo

Para poder correr esta aplicación, necesitas tener instalado el entorno de ejecución NodeJS, tener tambien instalado el CLI de Angular y Angular/Ionic,

```bash
node --version

npm  --version

ng version

ionic --version
```

> [!NOTE]
> Si no tienes estas herramientas instaladas en tu equipo dejo los links de las paginas para poder instalarlas **[NodeJS](https://nodejs.org/en/download/prebuilt-installer/current)**, **[Angular](https://angular.dev/installation)**, **[Ionic](https://ionicframework.com/docs/intro/cli)**.

### Instalación de Dependencias 📁

Antes de correr el servidor de desarrollo para ver la aplicación móvil, tenemos que instalar las librerias necesarias para su correcto funcionamiento:

```bash
git clone https://github.com/Pipe930/Dummy-Marcket-Ionic.git
cd Dummy-Marcket-Ionic

npm install
```

Con esto, se creara la carpeta `node_modules` y se instalaran las dependencias del proyecto

### Ejecutar Servidor ✅

Ya con las dependecias instaladas, ahora podemos ejecutar el servidor de desarrollo para poder visualizar la aplicación, con el siguiente comando ejecutamos el servidor de desarrollo:

```bash
ionic serve
```

Para ver la aplicación en formato de celular, ejecuta el siguiente comando:

```bash
ionic serve -l
```

Listo!, ya tienes mi aplicación ejecutando en tu equipo.
