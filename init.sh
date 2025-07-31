#!/usr/bin/env bash

# Timestamp function for cross-platform compatibility
ts() { date -u +"%Y-%m-%dT%H:%M:%SZ"; }

show_help() {
  cat <<EOF
Usage: $(basename "$0") [-d <target-dir>] --go-module <module-name>

Options:
  -d <target-dir>   Target directory to initialize (default: current directory)
  --go-module NAME  Go module name (required)
  -h, --help        Show this help message and exit

Examples:
  $(basename "$0") --go-module github.com/user/project
  $(basename "$0") -d /tmp/newproj --go-module github.com/user/project
EOF
}

# Show help if requested or no args
if [[ $# -eq 0 ]]; then
  show_help
  exit 0
fi

# Parse arguments
go_module_name=""
target_dir="$PWD"
while [[ $# -gt 0 ]]; do
  case "$1" in
    -d)
      shift
      target_dir="$1"
      ;;
    --go-module)
      shift
      go_module_name="$1"
      ;;
    -h|--help)
      show_help
      exit 0
      ;;
    *)
      echo "[$(ts)] [ERROR] Unknown argument: $1" >&2
      show_help
      exit 1
      ;;
  esac
  shift
done

if [[ -z "$go_module_name" ]]; then
  echo "[$(ts)] [ERROR] --go-module flag is required." >&2
  show_help
  exit 1
fi

# Create target directory if it doesn't exist
if [[ ! -d "$target_dir" ]]; then
  echo "[$(ts)] [INFO] Creating target directory: $target_dir"
  mkdir -p "$target_dir" || { echo "[$(ts)] [ERROR] Failed to create target directory."; exit 1; }
fi

# Convert target_dir to absolute path
if [[ "$target_dir" != /* ]]; then
  target_dir="$(cd "$target_dir" && pwd)"
fi

# The directory where the script is located (for skeleton reference)
script_dir="$(cd "$(dirname "$0")" && pwd)"
skeleton_dir="$script_dir/skeleton"

project_dir="$target_dir"
echo "[$(ts)] [INFO] Working in target directory: $project_dir"

# Function to check for conflicts in the target directory
precheck_skeleton_conflicts() {
  conflicts=()
  for item in "$skeleton_dir"/* "$skeleton_dir"/.*; do
    name=$(basename "$item")
    # Skip '.' and '..'
    [[ "$name" == "." || "$name" == ".." ]] && continue
    if [[ -e "$project_dir/$name" ]]; then
      conflicts+=("$name")
    fi
  done
  if [[ ${#conflicts[@]} -gt 0 ]]; then
    echo "[$(ts)] [ERROR] Initialization aborted!" >&2
    echo "[$(ts)] The following items from skeleton/ already exist in the target directory and would be overwritten:" >&2
    for conflict in "${conflicts[@]}"; do
      echo "[$(ts)]   - $conflict" >&2
    done
    echo "[$(ts)] Please remove or rename these items before running this script again." >&2
    return 1
  else
    echo "[$(ts)] [INFO] No conflicts detected. Safe to copy skeleton contents."
    return 0
  fi
}

# Function to copy skeleton contents (excluding .eslintignore and tsconfig.json)
copy_skeleton_contents() {
  echo "[$(ts)] [INFO] Copying skeleton contents (excluding .eslintignore and tsconfig.json) to $project_dir..."
  rsync -a --exclude='.eslintignore' --exclude='tsconfig.json' "$skeleton_dir"/ "$project_dir/"
  echo "[$(ts)] [INFO] Skeleton contents copied."
  # Escape slashes for sed
  go_module_escaped=$(printf '%s' "$go_module_name" | sed 's/[\&/]/\\&/g')
  # Detect OS for sed compatibility
  echo "[$(ts)] [INFO] Replacing {GO_MODULE_NAME} in Go files..."
  if [[ "$(uname)" == "Darwin" ]]; then
    find "$project_dir" -type f -name '*.go' ! -path "*/skeleton/*" -exec sed -i '' "s/{GO_MODULE_NAME}/$go_module_escaped/g" {} +
  else
    find "$project_dir" -type f -name '*.go' ! -path "*/skeleton/*" -exec sed -i "s/{GO_MODULE_NAME}/$go_module_escaped/g" {} +
  fi
  echo "[$(ts)] [INFO] Replaced {GO_MODULE_NAME} with $go_module_name in all copied Go files (excluding skeleton directory)."
}

readiness_check() {
  local missing=()
  for cmd in rsync sed npm go; do
    if ! command -v "$cmd" >/dev/null 2>&1; then
      missing+=("$cmd")
    fi
  done
  if [[ ${#missing[@]} -gt 0 ]]; then
    echo "[$(ts)] [ERROR] The following required commands are missing:" >&2
    for cmd in "${missing[@]}"; do
      echo "[$(ts)]   - $cmd" >&2
    done
    echo "[$(ts)] Please install all missing commands before running this script again." >&2
    exit 1
  fi
}

# Run precheck only
echo "# precheck_skeleton_conflicts"
precheck_skeleton_conflicts || exit 1

cd "$project_dir"
echo "# npm create vite@latest frontend -- --template react-ts"
npm create vite@latest frontend -- --template react-ts || { echo "[$(ts)] [ERROR] Vite project creation failed."; exit 1; }

echo "# cd frontend"
cd "$project_dir/frontend" || { echo "[$(ts)] [ERROR] Could not enter frontend directory."; exit 1; }

echo "# npm install -D @types/node @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto react-router-dom lucide lucide-react react-markdown"
npm install -D @types/node @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto react-router-dom lucide lucide-react react-markdown || { echo "[$(ts)] [ERROR] NPM install failed."; exit 1; }

echo "# echo '/* App Component CSS */' > src/App.css"
echo '/* App Component CSS */' > src/App.css || { echo "[$(ts)] [ERROR] Could not create src/App.css."; exit 1; }

echo "# echo '/* Global Site CSS */' > src/index.css"
echo '/* Global Site CSS */' > src/index.css || { echo "[$(ts)] [ERROR] Could not create src/index.css."; exit 1; }

echo "# rm -rf public/vite.svg"
rm -rf public/vite.svg || { echo "[$(ts)] [ERROR] Could not remove public/vite.svg."; exit 1; }

echo "# cd $project_dir"
cd "$project_dir" || { echo "[$(ts)] [ERROR] Could not return to project root."; exit 1; }

echo "# copy_skeleton_contents"
copy_skeleton_contents || exit 1

echo "# go mod init $go_module_name (if needed)"
if [[ ! -f "$project_dir/go.mod" ]]; then
  go mod init "$go_module_name" || { echo "[$(ts)] [ERROR] go mod init failed."; exit 1; }
  echo "[$(ts)] [INFO] Go module initialized."
else
  echo "[$(ts)] [INFO] go.mod already exists. Skipping go mod init."
fi

echo "# go mod tidy"
go mod tidy || { echo "[$(ts)] [ERROR] go mod tidy failed."; exit 1; }

echo "[$(ts)] [STEP] Initialization complete."
# Delete the script's own directory upon completion (self-cleanup)
# This is dangerous, but possible.
# rm -rf "$script_dir"
