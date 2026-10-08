FROM node:24-bookworm-slim@sha256:d6aa754f16b3197301076f047b5def2f02ea1dbbc2ca920407d46d7ec7f87b20
WORKDIR /app
COPY --chown=node:node layout.json art.svg server.mjs ./
USER node
EXPOSE 8080
CMD ["node", "server.mjs"]
