# Servicio de Front-End para la aplicación web Baronette
- [Servicio de Front-End para la aplicación web Baronette](#servicio-de-front-end-para-la-aplicación-web-baronette)
- [Introducción](#introducción)
- [HTML5, CSS3 y Javascript](#html5-css3-y-javascript)
  - [HTML5](#html5)
  - [CSS3](#css3)
  - [Javascript](#javascript)
- [Estructura de la página web](#estructura-de-la-página-web)
  - [Estructura general](#estructura-general)
  - [login.html](#loginhtml)
  - [register.html](#registerhtml)
  - [index.html](#indexhtml)
    - [Barra de navegación superior](#barra-de-navegación-superior)
    - [Cuerpo de la página](#cuerpo-de-la-página)
    - [Barra de navegación lateral](#barra-de-navegación-lateral)
    - [Pie de página](#pie-de-página)
    - [Documentos html que heredan la estructura de template.html](#documentos-html-que-heredan-la-estructura-de-templatehtml)
- [Estilos](#estilos)
- [Ejecuciones](#ejecuciones)
  - [Interacciones visuales](#interacciones-visuales)
  - [Interacciones con la API](#interacciones-con-la-api)
- [Despliegue](#despliegue)
- [Resumen](#resumen)
- [Fuentes](#fuentes)

---
# Introducción

Básicamente este proyecto surgió como un trabajo académico, y en este documento está todo lo necesario para poder desplegarlo e editar en él.
Está pensado para poder expandirlo con el tiempo, añadiendo más funciones, ya que el proyecto inicial está demasiado verde.

En este documento solamente encontrarás el esqueleto web, el resto de componentes de la aplicación web se encuentran en sus respectivos repositorios.

---
# HTML5, CSS3 y Javascript
Este proyecto usa principalmente estos lenguajes, y están organizados según la siguiente estructura.
```
baronette-webapp/
├── html/
│   ├── assets/
│   |   ├── css/................. Aquí se almacenan los archivos CSS, necesarios para los estilos de las páginas
│   |   ├── docs/................ Aquí se almacenan algunos documentos de texto necesarios
│   |   ├── fonts/............... Aquí se almacenan fuentes de texto
│   |   ├── images/.............. Aquí imágenes que vaya a utilizar la página web
│   │   └── downloads/........... Aquí se guardan las subcarpetas con los archivos disponibles en las páginas de descarga
│   │
│   ├── scripts/
│   |   ├── login.js............. Scripts del archivo login.html
│   |   ├── main.js.............. Scripts estandarizados que se usan en (casi) todas las páginas y añade sus funciones. Si no has iniciado sesión, te enviará a login.html
│   |   ├── register.js.......... Scripts que se comunida con la BBDD para registrar usuarios en el servidor
│   │   └── settings.js.......... Scripts para conf-user-panel.html, en los cuales registra los cambios que haga el usuario o administrador
│   │
│   ├── index.html............... Página principal y de bienvenida.
│   ├── founders.html............ Página donde se muestran los colaboradores de la página
│   ├── conf-user-panel.html..... Página de configuración del usuario y donde se ubica el panel de administración
│   ├── login.html............... Página de inicio de sesión, en caso de no tener cuenta, te redirige a register.html
│   ├── register.html............ Página de registro de cuenta, en el cual el alta de la cuenta es manual
│   ├── post-register.html....... Página que sale tras registrarte de forma exitosa
│   ├── virtual-lab.html......... Página de pruebas de código pública, usualmente con minijuegos u otras utilidades
│   ├── main_downloads.html...... Hub de descarga
│   ├── isolibrary.html.......... Librería de descarga de archivos ISO
│   ├── utilitieslibrary.html.... Librería de descarga de programas útiles
│   └── NDS-ROMS.html............ Librería de descarga de ROMs para la NDS
│   
├── docker-compose.yml........... Configuración de Docker para levantar la web
├── Dockerfile................... Archivo Docker para crear la imagen de la API
├── .gitignore................... Archivo de configuración para ignorar ciertos archivos al subirlos a GitHub
├── .dockerignore................ Archivo de configuración para ignorar ciertos archivos al compilarlos en un contenedor Docker
├── LICENSE...................... Archivo que indica la licencia que tiene este proyecto
└── template.html................ Archivo plantilla que debe seguir la web
```
---
## HTML5

Los archivos HTML que en este proyecto usan la 5ª versión global, los cuales son en sí las páginas de la web, están ubicadas en el directorio principal dentro de la carpeta "html". 
Estos archivos están estandarizados ya que siguen una plantilla llamada "template.html" ubicada en raíz del documento web. Para hacer cualquier cambio de diseño, habría que modificar
la plantilla y exportar los cambios a las demás páginas.

## CSS3
Los archivos CSS que en este proyecto usan la 3ª versión global, que son las encargadas del diseño y colores de la web, están ubicadas en html/assets/css.
El archivo de configuración global es main.css, mientras que los otros es para darle estilo a ciertas partes de páginas no estandarizadas
(como las páginas de descarga)

## Javascript

Los archivos .js que utiliza el proyecto se ubican en /html/scripts, que son los encargados de darle la funcionalidad a la página. 
El archivo principal de scripts es main.js, la cual le da funciones a la mayor parte de las páginas. Hay otros archivos que se encargan
del login o de las comunicaciones con las BBDD,

# Estructura de la página web

Toda la web se estructura tras una plantilla, llamada "template.html" ubicada en raíz, en la cual marca el diseño que debe de seguir la página.
Todas las páginas de contenido deberán de seguir la plantilla, excepto en casos especiales de ser necesario por el bien del diseño.

### Barra de navegación superior

La **barra de navegación superior** es un componente crucial del diseño de la página web, ya que permite a los usuarios acceder de manera rápida y sencilla a las diferentes secciones y funcionalidades de la aplicación. Esta barra es persistente en todas las páginas principales del sitio web y cumple las siguientes funciones:

1. **Navegación entre páginas**: Contiene enlaces a las principales secciones de la web, como la página de inicio, el perfil del usuario, la página de descargas y otros apartados relevantes. Estos enlaces permiten un acceso rápido y eficiente a las secciones más importantes del sitio.

2. **Cambio de modo oscuro/claro**: Incluye un botón que permite al usuario alternar entre los modos oscuro y claro, ajustando automáticamente el esquema de colores de la página según las preferencias del usuario. Esto mejora la accesibilidad y personalización de la experiencia de navegación.

3. **Logo y nombre de la aplicación**: El logo y el nombre de la aplicación están presentes en la barra, generalmente ubicados en el lado izquierdo. Esto ayuda a mantener la identidad de la marca visible en todo momento, y el logo puede funcionar como un enlace que redirige a la página de inicio.

4. **Menú desplegable**: La barra de navegación superior puede transformarse es un menú desplegable. Este menú se despliega al hacer clic en el ícono izquierdo correspondiente, permitiendo que los enlaces de navegación sigan siendo accesibles sin ocupar demasiado espacio en la pantalla.

### Cuerpo de la página

El **cuerpo de la página** es la sección principal donde se presenta el contenido dinámico de la aplicación. Tras copiar la estructura base definida en la plantilla `template.html`, el cuerpo se sitúa debajo del comentario "Inserta aquí el contenido" (en la línea 57 actualmente). Es el espacio destinado para mostrar textos, imágenes, widgets, formularios u otros elementos interactivos específicos de cada página.

Este espacio está diseñado para ser flexible y adaptarse a distintos tipos de contenido sin alterar la estructura global del sitio web. Cada subpágina tiene su propio contenido único, pero la organización y el diseño del cuerpo de la página siguen reglas claras para mantener la coherencia visual y funcional entre las diferentes secciones del sitio.

El **cuerpo** también está estructurado para permitir fácil integración de bibliotecas o elementos multimedia como gráficos, galerías de imágenes, o bloques de descarga, con un estilo unificado que se hereda de los archivos CSS globales.

### Compatibilidad con dispositivos móviles

El cuerpo de la página ha sido diseñado con un enfoque **responsive**, lo que garantiza su excelente compatibilidad con teléfonos móviles y otros dispositivos de pantallas pequeñas. El diseño fluye de manera natural en diferentes resoluciones, ajustando elementos como el tamaño de las fuentes, la disposición de los menús y la organización del contenido. Esto asegura que el usuario pueda navegar cómodamente desde cualquier dispositivo sin comprometer la funcionalidad o la apariencia visual de la página. La implementación de un diseño adaptable, junto con el uso de CSS y JavaScript modernos, asegura que la experiencia sea intuitiva y visualmente agradable tanto en escritorios como en móviles.

### Barra de navegación lateral

La **barra de navegación lateral** complementa la barra de navegación superior al ofrecer enlaces directos a las páginas y secciones adicionales de la aplicación. Esta barra permite a los usuarios acceder a diferentes partes del sitio de manera rápida y sencilla, sin necesidad de regresar a la barra de navegación principal. Entre los elementos destacados de la barra lateral se incluye un **widget de Discord**, que proporciona un acceso directo a la comunidad del proyecto. La barra lateral está diseñada para ser intuitiva y accesible, contribuyendo a una experiencia de navegación fluida y eficiente.


### Pie de página

El **pie de página** es un elemento estándar en el diseño de la página web, que proporciona información relevante y enlaces útiles para los usuarios. Este componente se encuentra en la parte inferior de cada página y contiene varios elementos clave:

1. **Información de derechos de autor y licencia**: El pie de página incluye un mensaje sobre la licencia MIT, indicando que todos los derechos están reservados. Esta información es crucial para asegurar la protección de los derechos de autor del proyecto.

2. **Enlaces útiles**: Se presenta una lista de enlaces que permiten a los usuarios acceder rápidamente a recursos importantes, como el repositorio de GitHub del proyecto, información adicional sobre la licencia MIT, detalles de contacto y fuentes del trabajo. Estos enlaces facilitan la navegación y la obtención de información relacionada con la aplicación.

3. **Mapa integrado**: Un elemento destacado del pie de página es un **mapa de Google** embebido, que proporciona una representación visual de una ubicación específica. Este mapa no solo añade un valor visual, sino que también puede ser útil para mostrar la ubicación de una entidad asociada al proyecto o simplemente como un recurso adicional para los usuarios.

El pie de página está diseñado para ser estético y funcional, manteniendo la coherencia con el resto del diseño de la página y asegurando que la información más importante esté siempre al alcance de los usuarios.

### Documentos html que heredan la estructura de template.html

Todos los documentos de esta web siguen una plantilla llamada "template.html", que es la base del diseño de la web.

Los siguientes documentos son los que usan esta plantilla:

# Estilos

Los documentos de estilado se reducen en un par, siendo uno usado en multiples htmls, principalmente todos los que tengan que ver con la pagina en si,
siendo este el archivo "main.css". El archivo "downloadbox.css" se utiliza para darle el estilado a las cajas de descargas de las paginas.
Las páginas de inicio de sesion, registro, y demas utilizan otros archivos css, siendo estos "register.css" y "login.css", los cuales se separan del css
principal por completo.

El estilado consiste en una cabezera, un cuerpo, y un footer. La cabezera y el footer se comparten entre todas las páginas.
La cabezera consiste en un boton para desplegar un menu en la izquierda de la página, el nombre y logo de la página, y un botón para cambiar el modo
oscuro y el modo claro.
El cuerpo es lo que mas cambia en cada subpágina, siendo el contenido ordenado y estilado.
El footer consiste únicamente en la acreditación de derechos, y un mapa de google maps.

El estilado de la página esta pensado para cualquier tamaño razonable de pantalla.

# Ejecuciones

La sección de **Ejecuciones** se refiere al comportamiento dinámico de la aplicación web durante su funcionamiento. Incluye cómo el código interactúa con los elementos del front-end, cómo responde a las acciones de los usuarios, y cómo maneja las conexiones con el back-end y las APIs.

La ejecución del código se divide principalmente en dos áreas clave: **interacciones visuales** y **interacciones con la API**.


## Interacciones visuales

Las interacciones visuales se refieren a los cambios en la interfaz de usuario que ocurren en respuesta a las acciones del usuario, como hacer clic, desplazarse o interactuar con elementos de la página. Este proyecto implementa interacciones visuales utilizando transiciones suaves y efectos de resaltado que mejoran la experiencia del usuario sin sobrecargar el rendimiento de la página.

Algunos ejemplos de interacciones visuales incluyen:

- **Hover sobre botones y enlaces**: Al pasar el cursor sobre botones o enlaces, estos cambian de color, tamaño o estilo para indicar que son interactivos.
- **Modos de color (claro/oscuro)**: Los usuarios pueden alternar entre los modos claro y oscuro mediante un botón en la barra de navegación superior, lo que cambia el esquema de colores de la página para adaptarse a la preferencia de visualización del usuario.
- **Animaciones de despliegue de menús**: Los menús de navegación lateral y superior se despliegan o contraen con una animación suave, brindando un feedback visual claro sobre el estado del menú.
- **Cajas de diálogo y mensajes de error**: Las notificaciones o mensajes emergentes aparecen con una ligera animación para captar la atención del usuario, mejorando la accesibilidad y la claridad.

Estas interacciones están diseñadas para ser accesibles y usables en dispositivos con diferentes tamaños de pantalla, garantizando que los usuarios tengan una experiencia coherente sin importar cómo accedan a la aplicación.

## Interacciones con la API

Este front-end está diseñado para interactuar con una API. A través de peticiones, los scripts de la web se comunican con el back-end para registrar usuarios, realizar autenticaciones o cargar información dinámica, entre otras funcionalidades.

# Despliegue

El despliegue de esta aplicación web se realiza de manera sencilla y eficiente mediante Docker. Docker permite encapsular todas las dependencias y configuraciones necesarias en contenedores, lo que facilita la portabilidad y escalabilidad del proyecto sin preocuparse por las diferencias en los entornos de desarrollo o producción.

### Pasos para el despliegue:

1. **Requisitos previos**: 
   - Asegúrate de tener Docker y Docker Compose instalados en tu sistema.
   - Si aún no los tienes, puedes descargarlos desde la [página oficial de Docker](https://www.docker.com/products/docker-desktop).

2. **Archivo `docker-compose.yml`**:
   Este archivo define los servicios necesarios para ejecutar la aplicación, las redes y los volúmenes compartidos. Al ejecutar Docker Compose, este archivo coordina el levantamiento de los contenedores necesarios para que la aplicación funcione.

3. **Archivo `Dockerfile`**:
   Define la imagen Docker para la aplicación, que incluye las dependencias necesarias para el front-end. Este archivo permite construir la imagen base a partir de la cual se ejecutará la aplicación.

4. **Comandos de despliegue**:
   Una vez clonado el repositorio, navega a la raíz del proyecto donde están ubicados los archivos `Dockerfile` y `docker-compose.yml`. A continuación, ejecuta el siguiente comando para desplegar la aplicación:

   ```bash
   docker-compose up --build

# Resumen

Este proyecto consiste en el **desarrollo del front-end para la aplicación web Baronette**, una plataforma diseñada inicialmente como parte de un trabajo académico, pero con potencial para expandirse y añadir nuevas funcionalidades en el futuro. El objetivo principal es proporcionar una interfaz web interactiva, moderna y modular que se comunica con un backend a través de APIs, y que es fácilmente desplegable gracias al uso de Docker.

La aplicación está construida utilizando tecnologías estándar de desarrollo web como **HTML5, CSS3 y JavaScript**. Está organizada de manera eficiente para facilitar la escalabilidad, con una estructura clara de archivos y directorios. El diseño y la funcionalidad del sitio web se estandarizan mediante una plantilla HTML (`template.html`), que asegura que las páginas compartan la misma estructura y estilo.

### Características principales del proyecto:
- **Estructura modular**: El proyecto está bien organizado con archivos separados para HTML, CSS, y JavaScript, lo que facilita su mantenimiento y expansión.
- **Interfaz de usuario moderna**: La aplicación implementa una serie de **interacciones visuales**, como animaciones y efectos al pasar el cursor sobre los elementos, transiciones entre modos oscuro y claro, y menús desplegables que mejoran la experiencia de usuario.
- **Autenticación y gestión de usuarios**: La aplicación incluye funcionalidades para el **registro e inicio de sesión de usuarios**, conectándose con la API para autenticar credenciales y gestionar cuentas de usuario.
- **Despliegue simple con Docker**: El proyecto está preparado para ser fácilmente desplegado en cualquier entorno compatible utilizando Docker. Esto garantiza que el entorno de desarrollo sea consistente en diferentes plataformas, simplificando tanto la instalación como la ejecución.
- **Soporte para descargas**: Varias páginas del sitio están dedicadas a ofrecer archivos descargables, como software, ROMs de NDS, y archivos ISO, organizados en bibliotecas y presentados de manera visualmente atractiva.

### Tecnologías clave utilizadas:

- **HTML5 y CSS3** para la estructura y el diseño de la interfaz.
- **JavaScript** para manejar la lógica y las interacciones del lado del cliente.
- **Docker** para empaquetar y desplegar la aplicación de manera rápida y eficiente.

Este proyecto es ideal para aquellos que buscan un punto de partida sólido para crear una aplicación web completa, con un diseño estandarizado, fácil de expandir, y con un despliegue que utiliza las mejores prácticas actuales.

# Fuentes
1. **Documentación técnica**: Se incluyen enlaces a la documentación oficial de tecnologías y herramientas utilizadas en el proyecto, como [HTML5](https://developer.mozilla.org/es/docs/Web/HTML), [CSS3](https://developer.mozilla.org/es/docs/Web/CSS) y [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript). Esto permite a los desarrolladores y usuarios interesados acceder a recursos adicionales para profundizar en el aprendizaje de estas tecnologías.

2. **Frameworks y bibliotecas**: 
   - **[Bootstrap](https://getbootstrap.com/)**: Framework CSS utilizado para crear un diseño responsivo y estético.
   - **[jQuery](https://jquery.com/)**: Biblioteca de JavaScript que facilita la manipulación del DOM y la gestión de eventos.

3. **Tutoriales y guías**: Se citan tutoriales y guías en línea que han sido útiles para comprender mejor ciertos aspectos del desarrollo web, como los de [W3Schools](https://www.w3schools.com/) y [freeCodeCamp](https://www.freecodecamp.org/).

4. **Comunidad y foros**: 
   - **[Stack Overflow](https://stackoverflow.com/)**: Plataforma de preguntas y respuestas donde se han encontrado soluciones a problemas específicos durante el desarrollo.
   - **[GitHub](https://github.com/)**: Repositorio de código donde se han consultado ejemplos y prácticas recomendadas por otros desarrolladores.

5. **Referencias académicas**: Libros y artículos sobre desarrollo web, diseño de interfaces y usabilidad que han proporcionado un contexto teórico y práctico para la implementación del proyecto.
---
