# Usar una imagen base de Apache
FROM nginx:stable-bullseye-perl

COPY html /usr/share/nginx/html
COPY assets /usr/share/nginx/assets
COPY scripts /usr/share/nginx/scripts
