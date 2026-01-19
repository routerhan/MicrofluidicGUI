FROM python:3.10-slim

# System dependencies for numpy, pytorch, etc.
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    libgl1 libglib2.0-0 curl && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Python dependencies first (cache layer)
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . /app

# Download model if it's missing or is just an LFS pointer (< 1KB)
# Using GitHub LFS media endpoint to download the actual file
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

# Expose port (Zeabur will use PORT env var)
EXPOSE 8004

# Start the web backend - use PORT env var if set, otherwise default to 8004
CMD ["sh", "-c", "uvicorn backend.main:app --host 0.0.0.0 --port ${PORT:-8004}"]
