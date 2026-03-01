#!/usr/bin/env bash
set -euo pipefail

if rg -n "^(<<<<<<<|=======|>>>>>>>)" \
  --glob '!node_modules/**' \
  --glob '!.git/**' \
  --glob '!package-lock.json' \
  .; then
  echo "❌ Se encontraron marcadores de conflicto de merge en el repositorio."
  exit 1
fi

echo "✅ No se encontraron marcadores de conflicto de merge."
