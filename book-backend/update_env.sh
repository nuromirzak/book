#!/bin/bash

ENV_FILE=".env.production"

if [ "$1" ]; then
  ENV_FILE="$1"
fi

if [ ! -f "$ENV_FILE" ]; then
  echo "$ENV_FILE file not found!"
  exit 1
fi

while IFS= read -r line || [[ -n "$line" ]]; do
  echo "Processing: $line"
  [[ -z "$line" || "$line" =~ ^# ]] && continue

  IFS='=' read -r key value <<< "$line"

  [[ -z "$key" || -z "$value" ]] && continue

  fly secrets set "$key=$value" --stage
done < "$ENV_FILE"