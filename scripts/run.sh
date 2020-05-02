#!/bin/bash

knex migrate:latest
echo "Migrated"

knex seed:run
echo "Seeded"

pm2 start --no-daemon
