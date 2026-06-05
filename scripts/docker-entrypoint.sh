#!/usr/bin/env bash
set -euo pipefail

mkdir -p "$DATA_DIR" "$EXTENSION_PATH"

Xvfb "$DISPLAY" -screen 0 "${SCREEN_WIDTH:-1600}x${SCREEN_HEIGHT:-900}x24" -ac +extension GLX +render -noreset &
fluxbox >/tmp/fluxbox.log 2>&1 &
x11vnc -display "$DISPLAY" -forever -shared -nopw -rfbport 5900 >/tmp/x11vnc.log 2>&1 &
websockify --web=/usr/share/novnc 7900 localhost:5900 >/tmp/novnc.log 2>&1 &

exec node /app/src/server.js
