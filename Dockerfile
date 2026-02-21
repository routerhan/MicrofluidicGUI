### =========================
### Stage 1: Build Frontend
### =========================
FROM node:20-slim AS frontend-builder

WORKDIR /build

# Copy package files first for better caching
COPY package.json package-lock.json* ./
RUN npm install

# Copy frontend source and vite config
COPY frontend/ ./frontend/
COPY vite.config.js ./

# Build frontend - output will go to /build/static based on vite.config.js
RUN npm run build

# Verify the build output exists
RUN ls -la /build/static/ || echo "Static folder not found, checking alternatives..." && \
    ls -la /static/ 2>/dev/null || true

### =========================
### Stage 2: Python Backend
### =========================
FROM python:3.10-slim

# System dependencies (fontconfig & freetype for vispy fonts)
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    libgl1 libglib2.0-0 curl \
    fontconfig libfreetype6 libfontconfig1 && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Python dependencies first (cache layer)
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copy backend and other project files
COPY backend/ /app/backend/
COPY Repository/ /app/Repository/
COPY iGenerator.py MeshGenerator.py /app/

# Copy built frontend from Stage 1
# Try both possible locations
COPY --from=frontend-builder /build/static /app/static

# Download model if it's missing or is just an LFS pointer (< 1MB)
RUN MODEL_PATH="Repository/best_model_TRCodev2GA.pth" && \
    MODEL_SIZE=$(stat -c%s "$MODEL_PATH" 2>/dev/null || stat -f%z "$MODEL_PATH" 2>/dev/null || echo "0") && \
    echo "Current model file size: $MODEL_SIZE bytes" && \
    if [ "$MODEL_SIZE" -lt 1000000 ]; then \
    echo "Model file is missing or is LFS pointer, downloading from GitHub..." && \
    curl -L -o "$MODEL_PATH" \
    "https://media.githubusercontent.com/media/routerhan/MicrofluidicGUI/main/Repository/best_model_TRCodev2GA.pth" && \
    echo "Download complete. New size: $(stat -c%s "$MODEL_PATH" 2>/dev/null || stat -f%z "$MODEL_PATH") bytes"; \
    else \
    echo "Model file already present and valid"; \
    fi

# Verify static files exist
RUN echo "Checking static files..." && ls -la /app/static/ && ls -la /app/static/assets/ || true

# Expose port
EXPOSE 8004

# Start the web backend - use PORT env var if set, otherwise default to 8080 (Zeabur default)
CMD ["sh", "-c", "uvicorn backend.main:app --host 0.0.0.0 --port ${PORT:-8080}"]
