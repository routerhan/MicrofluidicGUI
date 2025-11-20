# Quick Start Guide

Get up and running with the Microfluidic Property Prediction GUI in minutes!

## Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

## Installation Steps

### 1. Clone or Download the Repository
```bash
git clone <repository-url>
cd DevGUI
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

**Note**: If you encounter issues with `pyopengltk`, you may need to install it separately:
```bash
pip install pyopengltk
```

### 3. Verify Installation
Check that all required files are present:
- ✅ `MicrofluidicGUI_v4.py`
- ✅ `iGenerator.py`
- ✅ `MeshGenerator.py`
- ✅ `Repository/best_model_TRCodev2GA.pth`
- ✅ `Repository/best_scaler_TRCodev2GA.pkl`

### 4. Run the Application
```bash
python MicrofluidicGUI_v4.py
```

## First Steps

1. **Select Points**: Click and drag on the 9×3 grid (left panel) to select points
   - Start from the bottom (row 1) and work upward
   - You can select up to 2 points per row

2. **Set Parameters**: Enter channel parameters:
   - Channel Depth: `0.16`
   - Channel Width: `0.4`
   - Channel Space: `0.4`

3. **Generate Pattern**: Click "Generate Flow Pattern"
   - The flow path will appear in the visualization panel

4. **Predict Properties**: Click "Start Predict"
   - Results will appear in the output section (right panel)

5. **Generate 3D Mesh**: Click "Generate 3D Mesh"
   - Preview appears below the buttons
   - Use "Display 3D Mesh" for detailed view
   - Use "Save STL" to export

## Troubleshooting

### Application Won't Start
- Check Python version: `python --version` (should be 3.8+)
- Verify dependencies: `pip list | grep torch`
- Check for error messages in terminal

### Model Not Loading
- Ensure `Repository/best_model_TRCodev2GA.pth` exists
- Check file permissions
- Verify PyTorch is installed: `python -c "import torch; print(torch.__version__)"`

### 3D Viewer Not Working
- Install `pyopengltk`: `pip install pyopengltk`
- Update graphics drivers
- Try running with administrator privileges

### Import Errors
- Ensure you're in the correct directory
- Check that all Python files are present
- Verify `Repository/` folder structure

## Need Help?

- Check the [README.md](README.md) for detailed documentation
- Review [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines
- Open an issue on GitHub for bug reports or questions

## Example Workflow

```
1. Select points: 1A → 2B → 3C → 4A → 5B → 6C → 7A → 8B → 9C
2. Set parameters: Depth=0.16, Width=0.4, Space=0.4
3. Click "Generate Flow Pattern"
4. Click "Start Predict"
5. Review predicted properties
6. Click "Generate 3D Mesh"
7. Click "Display 3D Mesh" to view in detail
8. Click "Save STL" to export
```

Happy designing! 🎉

