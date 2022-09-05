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
  grep_out=$(grep "^export interface .* {" "${file}")
  if [[ $(echo "${grep_out}" | wc -l) -gt 1 ]]; then
    echo "ERROR: > 1 'export interface' value found for file: ${file}"
    exit 1
  fi

  schema_type=$(echo "${grep_out}" | cut -d' ' -f3)

  new_file="${file//-tjs.ts/-tjs.schema.json}"
  echo "handling: new_file=${new_file} schema_type=${schema_type}"
  typescript-json-schema "${file}" "${schema_type}" --required -o "${new_file}"
done < <(find ./app -name '*-tjs.ts')
