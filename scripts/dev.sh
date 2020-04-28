#!/bin/bash

docker image build -t bit-api .

docker container run \
  --env SERVER_PORT=80 \
  --env SERVER_HOST=0.0.0.0 \
  --env DATABASE_FILE=/data/bit/db.sqlite \
  --publish 3000:80 \
  --volume bit-volume:/data/bit \
  bit-api