#!/usr/bin/env bash
set -euo pipefail

BASE_REF="${GITHUB_BASE_REF:-}"

if [[ -z "$BASE_REF" ]]; then
  echo "⚠️ GITHUB_BASE_REF no está definido. Omitiendo check de mergeabilidad (no es PR en CI)."
  exit 0
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  echo "⚠️ Remote 'origin' no configurado. No se puede validar mergeabilidad en este entorno."
  exit 0
fi

echo "🔎 Validando mergeabilidad contra origin/${BASE_REF}..."
git fetch --no-tags --depth=1 origin "${BASE_REF}"

set +e
git merge --no-commit --no-ff FETCH_HEAD >/tmp/merge-check.log 2>&1
MERGE_EXIT=$?
set -e

if [[ $MERGE_EXIT -ne 0 ]]; then
  echo "❌ Este branch NO es mergeable limpio con origin/${BASE_REF}."
  echo "Archivos en conflicto detectados:"
  git diff --name-only --diff-filter=U || true
  git merge --abort || true
  exit 1
fi

git merge --abort || true
echo "✅ Branch mergeable limpiamente con origin/${BASE_REF}."
