#!/usr/bin/env bash
set -euo pipefail

BASE_BRANCH="${1:-main}"
STRATEGY="${RESOLVE_STRATEGY:-ours}" # ours | theirs

FILES=(
  "src/app/(tabs)/_layout.tsx"
  "src/app/(tabs)/feed.tsx"
  "src/app/(tabs)/index.tsx"
  "src/app/(tabs)/two.tsx"
  "src/constants/Colors.ts"
)

if [[ "$STRATEGY" != "ours" && "$STRATEGY" != "theirs" ]]; then
  echo "❌ RESOLVE_STRATEGY debe ser 'ours' o 'theirs'."
  exit 1
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  echo "❌ Remote 'origin' no configurado. Configúralo y vuelve a ejecutar."
  exit 1
fi

echo "🔄 Fetch origin/${BASE_BRANCH}..."
git fetch origin "$BASE_BRANCH"

echo "🔀 Merge --no-commit origin/${BASE_BRANCH}..."
set +e
git merge --no-commit --no-ff "origin/${BASE_BRANCH}"
MERGE_EXIT=$?
set -e

if [[ $MERGE_EXIT -eq 0 ]]; then
  echo "✅ Merge limpio. No se requirió resolución automática."
  git commit -m "merge: sync branch with ${BASE_BRANCH}" || true
  exit 0
fi

echo "🧩 Resolviendo conflictos de tabs con estrategia '${STRATEGY}'..."
for file in "${FILES[@]}"; do
  if git ls-files -u -- "$file" | grep -q .; then
    if [[ "$STRATEGY" == "ours" ]]; then
      git checkout --ours -- "$file"
    else
      git checkout --theirs -- "$file"
    fi
    git add "$file"
    echo "  - resuelto: $file"
  fi
done

if git diff --name-only --diff-filter=U | grep -q .; then
  echo "❌ Quedan conflictos sin resolver."
  git diff --name-only --diff-filter=U
  exit 1
fi

git commit -m "merge: auto-resolve tab conflicts against ${BASE_BRANCH} (${STRATEGY})"
echo "✅ Conflictos resueltos y commit creado."
