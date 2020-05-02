FROM node:alpine

WORKDIR /app

RUN apk add curl

RUN npm install -g pm2 knex

COPY package.json /app/package.json

RUN npm install --only=production

COPY ./ /app/

ENV DEBUG=app:*
ENV NODE_ENV=production
ENV DATABASE_FILE=/app/storage/db.sqlite

HEALTHCHECK --interval=60s --timeout=10s --start-period=5s --retries=3 CMD curl --fail "http://localhost:$SERVER_PORT/api/info/health" || exit 1

VOLUME /app/storage

CMD ["sh", "./scripts/run.sh"]
