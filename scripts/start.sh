#!/usr/bin/env bash

set -e

path=$(dirname "$0")
"${path}/typescript-json-schema.sh"

ts-node app/main.ts
