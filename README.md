# Servicio de Front-End para la aplicación web Baronette
- [Servicio de Front-End para la aplicación web Baronette](#servicio-de-front-end-para-la-aplicación-web-baronette)
- [Introducción](#introducción)
- [HTML5, CSS3 y Javascript](#html5-css3-y-javascript)
  - [HTML5](#html5)
  - [CSS3](#css3)
  - [Javascript](#javascript)
- [Estructura de la página web](#estructura-de-la-página-web)
  - [login.html](#loginhtml)
  - [register.html](#registerhtml)
  - [index.html](#indexhtml)
    - [Barra de navegación superior](#barra-de-navegación-superior)
    - [Cuerpo de la página](#cuerpo-de-la-página)
    - [Barra de navegación lateral](#barra-de-navegación-lateral)
    - [Pie de página](#pie-de-página)
    - [Documentos html que heredan la estructura de index.html](#documentos-html-que-heredan-la-estructura-de-indexhtml)
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

Esta barra básicamente es la manera principal de poder navegar por las diversas páginas
que contiene la web.

### Cuerpo de la página

Tras copiar la plantilla, en la línea 57 (actualmente) abajo de un comentario de "Inserta aquí el contenido" es donde debe ir el resto del contenido,
ya sean imágenes, texto, widgets, entre otros, sin excepciones. 

### Barra de navegación lateral

Esta barra contiene los links directos a las páginas, además de un widget de Discord, el cual
se podría remover en caso de necesitar espacio para más links.

### Pie de página

El pie de página está estandarizado para contener contacto, link al github, información sobre la licencia y un mapa, ya que es un requisito de
entrega.

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



## Interacciones visuales



## Interacciones con la API
```javascript
const variable = 3;
```
---

# Despliegue

El despliegue de esta web es muy simple, ya que sólo necesita docker...

# Resumen

Este proyecto es de libre uso siempre que no se use de forma comercial, es fácilmente editable y desplegable en Docker, el resto de la documentación sobre la
API y la base de datos están en sus respectivos repositorios.

# Fuentes
Fuentes a las que recurrí para diseñar el html y css de este proyecto.
---
