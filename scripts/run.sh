#!/bin/bash

knex migrate:latest
knex seed:run

pm2 start --no-daemon
