#!/usr/bin/env bash

if [[ ! -d app ]]; then
  echo "ERROR: directory 'app' does not exist"
  exit 1
fi

if ! type -a typescript-json-schema > /dev/null 2>&1; then
  echo "ERROR: typescript-json-schema binary not available"
  exit 1
fi

while read -r file; do
  echo "clean: ${file}"
  rm -rf "${file}"
done < <(find ./app -name '*-tjs.schema.json')

while read -r file; do
  new_file="${file//-tjs.ts/-tjs.schema.json}"
  echo "create: ${new_file}"
  typescript-json-schema "${file}" "*" --required -o "${new_file}"
done < <(find ./app -name '*-tjs.ts')
