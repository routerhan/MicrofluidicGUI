#!/usr/bin/env bash
set -e

# Configure VNC (pre-create password files to avoid interactive prompts)
export DISPLAY=${DISPLAY:-:1}
HOME="${HOME:-/root}"
VNC_DIR="$HOME/.vnc"
TIGER_DIR="$HOME/.config/tigervnc"
VNC_PASSWD_FILE="$VNC_DIR/passwd"

rm -rf "$VNC_DIR" "$TIGER_DIR"
mkdir -p "$VNC_DIR" "$TIGER_DIR"
echo "${VNC_PASSWORD:-vncpass}" | vncpasswd -f > "$VNC_PASSWD_FILE"
chmod 600 "$VNC_PASSWD_FILE"
cp "$VNC_PASSWD_FILE" "$TIGER_DIR/passwd"

# Minimal xstartup to launch a window manager
cat > "$VNC_DIR/xstartup" <<'EOF'
#!/bin/sh
xrdb $HOME/.Xresources
fluxbox &
EOF
chmod +x "$VNC_DIR/xstartup"

# Clean old server if exists
vncserver -kill "$DISPLAY" >/dev/null 2>&1 || true

# Start VNC server
vncserver "$DISPLAY" \
  -geometry "${VNC_GEOMETRY:-1600x900}" \
  -depth 24 \
  -localhost no \
  -PasswordFile "$VNC_PASSWD_FILE" \
  -SecurityTypes VncAuth

# Run GUI (expects project at /app)
cd /app
python MicrofluidicGUI_v4.py
