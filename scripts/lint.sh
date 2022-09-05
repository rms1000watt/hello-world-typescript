#!/usr/bin/env bash

path=$(dirname "$0")
"${path}/typescript-json-schema.sh"

eslint . --ext .ts -c .eslintrc
