# Mini-clon Z09 — Dockerfile plantilla.
# Docker DEFERRED por recursos del custodio (addenda orquestador).
# Instala contribs 0.3.x desde Verdaccio en build (sin npm install manual en runtime).

# Pin = versión exacta del VPS (compose usa :latest; OCI label NODE_RED_VERSION=v5.0.1
# al corte GO-4 2026-07-21; digest amd64 sha256:ca13faf3f558…).
ARG NODERED_BASE_IMAGE=nodered/node-red:5.0.1
FROM ${NODERED_BASE_IMAGE}

USER root
RUN apk add --no-cache bash

COPY nodered/settings.js /data/settings.js
COPY nodered/install-contribs.mjs /opt/aleph/node-red/install-contribs.mjs
COPY nodered/node-red-contribs.json /opt/aleph/node-red/node-red-contribs.json
COPY nodered/.npmrc.example /data/.npmrc

RUN mkdir -p /data/projects /opt/aleph/node-red \
    && chown -R node-red:node-red /data /opt/aleph

USER node-red
WORKDIR /data

RUN npm config set fund false \
    && npm config set audit false \
    && node /opt/aleph/node-red/install-contribs.mjs /opt/aleph/node-red/node-red-contribs.json

EXPOSE 1880 3010
