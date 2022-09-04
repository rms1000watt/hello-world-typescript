#!/usr/bin/env bash

while read -r file; do
  echo "clean: ${file}"
  rm -rf "${file}"
done < <(find ./app -name '*-tjs.schema.json')

while read -r file; do
  new_file="${file//-tjs.ts/-tjs.schema.json}"
  echo "create: ${new_file}"
  typescript-json-schema "${file}" Pizza --required -o "${new_file}"
done < <(find ./app -name '*-tjs.ts')

ts-node app/main.ts
