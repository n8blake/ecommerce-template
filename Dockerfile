# Test web app that returns the name of the host/pod/container servicing req
# Linux x64
FROM node:current-alpine

LABEL org.opencontainers.image.title="ecommerce-template" \
      org.opencontainers.image.description="An e-commerce template app" \
      org.opencontainers.image.authors="@n8blake"

# Create directory in container image for app code
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/data

# Copy app code (.) to /usr/src/app in container image
COPY . /usr/src/app

# Set working directory context
WORKDIR /usr/src/app

# Install dependencies from packages.json
RUN npm install

# Command for container to execute
ENTRYPOINT [ "node", "server.js" ]