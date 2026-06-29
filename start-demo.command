#!/bin/bash
# ==== Campero Course Platform — one-click demo launcher (macOS) ====
# If double-clicking does nothing, run once in Terminal:  chmod +x start-demo.command
cd "$(dirname "$0")"
PORT=8099
echo ""
echo "  Campero Course Platform demo"
echo "  Starting a local server on http://localhost:$PORT ..."
echo "  (Keep this window open during the demo. Press Ctrl+C to stop.)"
echo ""

if command -v python3 >/dev/null 2>&1; then
  ( sleep 2; open "http://localhost:$PORT/" ) &
  python3 -m http.server "$PORT"
elif command -v npx >/dev/null 2>&1; then
  ( sleep 2; open "http://localhost:$PORT/" ) &
  npx --yes serve -l "$PORT"
else
  echo "  Could not find Python 3 or Node. Install Python 3, then run this again."
  read -n 1 -s -r -p "  Press any key to close."
fi
