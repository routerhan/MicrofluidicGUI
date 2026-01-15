FROM python:3.10-slim

# System dependencies for numpy, pytorch, etc.
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        libgl1 libglib2.0-0 git git-lfs && \
    rm -rf /var/lib/apt/lists/* && \
    git lfs install

WORKDIR /app

# Install Python dependencies first (cache layer)
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copy project files (Git LFS files should be pulled by build context)
COPY . /app

# Expose port
EXPOSE 8004

# Start the web backend
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8004"]
