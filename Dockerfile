FROM python:3.10-slim

ENV DEBIAN_FRONTEND=noninteractive

# System dependencies: Tk, OpenGL, VNC server, lightweight WM
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        python3-tk tk-dev \
        libgl1 libglu1-mesa libgl1-mesa-dri \
        libglib2.0-0 libxrender1 libxext6 libsm6 \
        tigervnc-standalone-server tigervnc-common tigervnc-tools \
        fluxbox xauth && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Python dependencies first (cache layer)
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . /app

# Environment defaults for VNC
ENV DISPLAY=:1
ENV VNC_PASSWORD=vncpass
ENV VNC_GEOMETRY=1600x900

# Use bash to run start.sh (works even if bind-mounted without +x)
CMD ["bash", "/app/start.sh"]
