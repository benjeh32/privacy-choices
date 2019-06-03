# Base image is the latest httpd alpine
FROM httpd:alpine

# Copy in built web files
COPY ./build/ /usr/local/apache2/htdocs/