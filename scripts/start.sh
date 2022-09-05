#!/usr/bin/env bash

path=$(dirname "$0")
"${path}/typescript-json-schema.sh"

ts-node app/main.ts
