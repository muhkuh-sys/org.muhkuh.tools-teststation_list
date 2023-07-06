FROM ubuntu:22.04
LABEL Description="The teststation list with an NGINX server."
LABEL org.opencontainers.image.source https://github.com/muhkuh-sys/org.muhkuh.tools-teststation_list

# Install the nginx server.
RUN DEBIAN_FRONTEND=noninteractive apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install --assume-yes nginx-core libnginx-mod-nchan

# Install the webpage.
COPY targets/www /var/www/

# Install the NGINX configuration.
COPY nginx/teststations /etc/nginx/sites-enabled/

# Disable the default page.
RUN rm -f /etc/nginx/sites-enabled/default

# Expose the ports for the PUB service.
EXPOSE 8080
# Expose the ports for the webpage.
EXPOSE 80

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]
