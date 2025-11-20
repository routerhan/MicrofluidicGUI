# Setup Instructions

Detailed setup instructions for different operating systems and environments.

## System Requirements

- **Operating System**: Windows, macOS, or Linux
- **Python**: 3.8 or higher
- **RAM**: 4GB minimum (8GB recommended)
- **Graphics**: OpenGL 3.3+ compatible graphics card (for 3D visualization)

## Installation Methods

### Method 1: Standard Installation (Recommended)

#### Windows
```powershell
# 1. Open PowerShell or Command Prompt
# 2. Navigate to the DevGUI folder
cd path\to\DevGUI

# 3. Create virtual environment (optional but recommended)
python -m venv venv
venv\Scripts\activate

# 4. Install dependencies
pip install -r requirements.txt

# 5. Run the application
python MicrofluidicGUI_v4.py
```

#### macOS / Linux
```bash
# 1. Open Terminal
# 2. Navigate to the DevGUI folder
cd path/to/DevGUI

# 3. Create virtual environment (optional but recommended)
python3 -m venv venv
source venv/bin/activate

# 4. Install dependencies
pip install -r requirements.txt

# 5. Run the application
python MicrofluidicGUI_v4.py
```

### Method 2: Using Conda

```bash
# 1. Create conda environment
conda create -n microfluidic-gui python=3.8
conda activate microfluidic-gui

# 2. Install PyTorch (if needed)
conda install pytorch torchvision -c pytorch

# 3. Install other dependencies
pip install -r requirements.txt

# 4. Run the application
python MicrofluidicGUI_v4.py
```

## Dependency Installation Details

### Core Dependencies

1. **PyTorch** (Deep Learning)
   ```bash
   # CPU version
   pip install torch torchvision
   
   # GPU version (CUDA)
   pip install torch torchvision --index-url https://download.pytorch.org/whl/cu118
   ```

2. **Vispy** (3D Visualization)
   ```bash
   pip install vispy
   pip install pyopengltk  # Required for Tkinter backend
   ```

3. **Trimesh** (3D Mesh Processing)
   ```bash
   pip install trimesh
   ```

### Optional Dependencies

- **Numba**: For performance optimization
  ```bash
  pip install numba
  ```

## Verification

After installation, verify everything works:

```python
# Test script (save as test_installation.py)
import sys
print(f"Python version: {sys.version}")

try:
    import torch
    print(f"✓ PyTorch: {torch.__version__}")
except ImportError:
    print("✗ PyTorch not found")

try:
    import vispy
    print(f"✓ Vispy: {vispy.__version__}")
except ImportError:
    print("✗ Vispy not found")

try:
    import trimesh
    print(f"✓ Trimesh: {trimesh.__version__}")
except ImportError:
    print("✗ Trimesh not found")

try:
    import tkinter
    print("✓ Tkinter available")
except ImportError:
    print("✗ Tkinter not available")

print("\nInstallation check complete!")
```

Run: `python test_installation.py`

## File Structure Verification

Ensure your `Repository/` folder contains:

```
Repository/
├── best_model_TRCodev2GA.pth      # Required: Trained model
├── best_scaler_TRCodev2GA.pkl      # Required: Data scaler
├── DLModel.py                       # Required: Model architecture
├── pointinterpreter.py              # Required: Point interpreter
├── cnums_lookup.py                  # Required: Lookup table
├── vox2STL.py                       # Required: STL converter
└── *.png                            # Optional: Template images
```

## Common Setup Issues

### Issue: Tkinter Not Available

**Windows**: Usually included with Python. If missing, reinstall Python with "tcl/tk" option.

**macOS**: 
```bash
brew install python-tk
```

**Linux (Ubuntu/Debian)**:
```bash
sudo apt-get install python3-tk
```

**Linux (Fedora)**:
```bash
sudo dnf install python3-tkinter
```

### Issue: PyOpenGL Errors

```bash
# Install system dependencies
# Ubuntu/Debian:
sudo apt-get install python3-opengl

# macOS:
brew install pyopengl

# Windows: Usually handled by pip
```

### Issue: Vispy Backend Errors

If you get errors about the Tkinter backend:

```python
# Try alternative backends in MicrofluidicGUI_v4.py
# Change line 42 from:
vispy.use(app='tkinter')
# To:
vispy.use(app='pyglet')  # or 'qt5', 'pyqt5'
```

### Issue: Model File Not Found

- Verify file exists: `Repository/best_model_TRCodev2GA.pth`
- Check file permissions
- Ensure you're running from the correct directory

## Development Setup

For developers who want to modify the code:

```bash
# 1. Clone repository
git clone <repository-url>
cd DevGUI

# 2. Create virtual environment
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# 3. Install development dependencies
pip install -r requirements.txt
pip install flake8 black  # Optional: code formatting tools

# 4. Verify setup
python MicrofluidicGUI_v4.py
```

## Docker Setup (Advanced)

If you prefer Docker:

```dockerfile
# Dockerfile
FROM python:3.8-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["python", "MicrofluidicGUI_v4.py"]
```

Build and run:
```bash
docker build -t microfluidic-gui .
docker run -it --rm -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix microfluidic-gui
```

## Next Steps

After successful setup:
1. Read [QUICKSTART.md](QUICKSTART.md) for basic usage
2. Review [README.md](README.md) for detailed documentation
3. Check [CONTRIBUTING.md](CONTRIBUTING.md) if you want to contribute

## Getting Help

If you encounter issues:
1. Check the error message carefully
2. Review this setup guide
3. Check [README.md](README.md) troubleshooting section
4. Open an issue on GitHub with:
   - Operating system
   - Python version
   - Error message
   - Steps to reproduce

