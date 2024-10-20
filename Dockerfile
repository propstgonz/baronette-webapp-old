# Usar una imagen base de Apache
FROM httpd:2.4

# Definir el directorio de trabajo dentro del contenedor
WORKDIR /usr/local/apache2/htdocs

# Copiar los archivos estáticos de la aplicación web al directorio root de Apache
COPY ./index.html /usr/local/apache2/htdocs/index.html
COPY ./conf-user-panel.html /usr/local/apache2/htdocs/conf-user-panel.html
COPY ./founders.html /usr/local/apache2/htdocs/founders.html
COPY ./isolibrary.html /usr/local/apache2/htdocs/isolibrary.html
COPY ./login.html /usr/local/apache2/htdocs/login.html
COPY ./main_downloads.html /usr/local/apache2/htdocs/main_downloads.html
COPY ./NDS-ROMS.html /usr/local/apache2/htdocs/NDS-ROMS.html
COPY ./post-register.html /usr/local/apache2/htdocs/post-register.html
COPY ./virtual-lab.html /usr/local/apache2/htdocs/virtual-lab.html
COPY ./register.html /usr/local/apache2/htdocs/register.html
COPY ./utilitieslibrary.html /usr/local/apache2/htdocs/utilitieslibrary.html
COPY ./assets/ /usr/local/apache2/htdocs/assets/
COPY ./scripts/ /usr/local/apache2/htdocs/scripts/

# Copiar la configuración de Apache para habilitar HTTP y HTTPS
COPY ./assets/conf/ssl.conf /usr/local/apache2/conf/extra/ssl.conf
COPY ./assets/conf/my-httpd.conf /usr/local/apache2/conf/httpd.conf

# Habilitar el módulo SSL y proxy para el manejo de peticiones API
RUN apt-get update && apt-get install -y \
    openssl \
    && apt-get clean

# Generar certificados SSL autofirmados
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /usr/local/apache2/conf/server.key \
    -out /usr/local/apache2/conf/server.crt \
    -subj "/C=US/ST=California/L=San Francisco/O=MyCompany/CN=localhost"

# Exponer los puertos HTTP (80) y HTTPS (443)
EXPOSE 80 443
