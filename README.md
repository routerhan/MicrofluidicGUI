# Microfluidic Property Prediction GUI

<img width="1770" height="951" alt="image" src="https://github.com/user-attachments/assets/dccb8564-3758-46d0-a368-5d90e351ea28" />


A comprehensive graphical user interface (GUI) application for predicting material properties of microfluidic channel designs using deep learning, with integrated 3D mesh generation capabilities.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)

## 🎯 Overview

This application combines interactive pattern selection, deep learning-based property prediction, and 3D mesh generation into a single integrated GUI. It allows users to:

- Design microfluidic channel patterns through an interactive 9×3 grid interface
- Predict 12 material properties (mechanical and thermal) using a trained deep learning model
- Generate and visualize 3D STL meshes from the designed patterns
- Export 3D models for additive manufacturing

## ✨ Features

### 1. Interactive Pattern Selection
- **9×3 Grid Interface**: Click and drag to select points across 9 rows and 3 columns
- **Flow Path Visualization**: Real-time visualization of the generated flow path
- **Pattern Validation**: Ensures proper selection order (bottom to top)

### 2. Material Property Prediction
- **12 Properties Predicted**:
  - **Mechanical Properties**: E11, YS11, v11, E22, YS22, v22
  - **Thermal Properties**: k11, k22, k33, CTE11, CTE22, CTE33
- **Deep Learning Model**: Uses a trained neural network (CombinedNet) for predictions
- **Channel Parameters**: Configurable depth, width, and spacing

### 3. 3D Mesh Generation
- **Automatic Mesh Generation**: Converts 2D patterns into 3D voxel volumes
- **Interactive Preview**: Embedded 3D viewer with rotation, zoom, and pan
- **Detailed Visualization**: Popup window with multiple view modes (solid, wireframe, combined)
- **STL Export**: Save generated meshes for 3D printing or CAD software

### 4. User Interface
- **Dual-Panel Layout**: Input section (left) and output section (right)
- **Real-time Updates**: Instant visualization and prediction updates
- **Intuitive Controls**: Clear buttons and organized property displays

## 📦 Requirements

### Python Version
- Python 3.8 or higher

### Dependencies
See `requirements.txt` for the complete list. Key dependencies include:

- **GUI Framework**: `tkinter` (usually included with Python)
- **Deep Learning**: `torch` (PyTorch)
- **Image Processing**: `PIL` (Pillow), `numpy`
- **3D Visualization**: `vispy`, `trimesh`
- **Geometric Operations**: `shapely`
- **Data Processing**: `joblib`, `matplotlib`
- **3D Mesh Processing**: `trimesh`

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd DevGUI
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Verify Installation
Ensure all required files are present:
- `MicrofluidicGUI_v4.py` - Main GUI application
- `iGenerator.py` - Flow path generator and DL predictor
- `MeshGenerator.py` - 3D mesh generation module
- `Repository/` - Contains model files and utilities

### 4. Required Repository Files
The `Repository/` folder must contain:
- `best_model_TRCodev2GA.pth` - Trained deep learning model
- `best_scaler_TRCodev2GA.pkl` - Data scaler for normalization
- `DLModel.py` - Neural network architecture
- `pointinterpreter.py` - Point coordinate interpreter
- `cnums_lookup.py` - Channel number lookup table
- `vox2STL.py` - Voxel to STL converter

## 💻 Usage

### Starting the Application

```bash
python MicrofluidicGUI_v4.py
```

### Workflow

1. **Select Pattern Points**
   - Click and drag on the 9×3 grid to select points
   - Points must be selected from bottom to top (row 1 → row 9)
   - Up to 2 points per row allowed

2. **Set Channel Parameters**
   - Enter values for:
     - **Channel Depth**: Default 0.16
     - **Channel Width**: Default 0.4
     - **Channel Space**: Default 0.4

3. **Generate Flow Pattern**
   - Click "Generate Flow Pattern" to visualize the flow path
   - The pattern will appear in the right visualization panel

4. **Predict Properties**
   - Click "Start Predict" to run the deep learning model
   - Results will appear in the output section:
     - Mechanical properties (E11, YS11, v11, E22, YS22, v22)
     - Thermal properties (k11, k22, k33, CTE11, CTE22, CTE33)

5. **Generate 3D Mesh**
   - Click "Generate 3D Mesh" to create a 3D model
   - The mesh preview will appear below the buttons
   - Use "Display 3D Mesh" for detailed visualization
   - Use "Save STL" to export the mesh

### Keyboard Shortcuts
- **Mouse Drag**: Select and connect points in the pattern grid
- **3D Viewer**: 
  - **Left Click + Drag**: Rotate mesh
  - **Right Click + Drag**: Pan view
  - **Scroll Wheel**: Zoom in/out

## 📁 Project Structure

```
DevGUI/
├── MicrofluidicGUI_v4.py    # Main GUI application
├── iGenerator.py              # Flow path generator and DL predictor
├── MeshGenerator.py          # 3D mesh generation and visualization
├── Repository/               # Model files and utilities
│   ├── best_model_TRCodev2GA.pth      # Trained DL model
│   ├── best_scaler_TRCodev2GA.pkl      # Data scaler
│   ├── DLModel.py            # Neural network architecture
│   ├── pointinterpreter.py   # Point coordinate interpreter
│   ├── cnums_lookup.py       # Channel number lookup
│   ├── vox2STL.py            # Voxel to STL converter
│   └── *.png                  # Template mask images
├── requirements.txt          # Python dependencies
├── README.md                 # This file
├── .gitignore                # Git ignore rules
└── LICENSE                   # License file
```

## 📚 Documentation

### Main Classes

#### `MicrofluidicGUI`
Main GUI application class that handles:
- Pattern selection interface
- Flow path visualization
- Property prediction coordination
- 3D mesh generation UI

#### `iGenerator`
Flow path generation and deep learning prediction:
- `plot_flow_path()`: Generates flow path visualization
- `get_prediction()`: Runs DL model for property prediction
- `process_image()`: Preprocesses images for model input

#### `MeshGenerator3D`
3D mesh generation from image slices:
- `generate_mesh()`: Main mesh generation function
- `build_microfluidic_geometry()`: Constructs 3D geometry from slices
- `generate_upper_image()`: Creates upper layer with inlet/outlet holes
- `generate_bottom_image()`: Creates solid bottom layer

#### `MeshViewerPopup`
3D mesh visualization popup window:
- Interactive 3D viewing with Vispy
- Multiple view modes (solid, wireframe, combined)
- Preset camera views (XY, XZ, YZ)

### Configuration

Key constants can be modified in the respective modules:

**In `iGenerator.py`:**
- `XGRID`, `YGRID`: Pattern coordinate system
- `PATTERN_FIGSIZE`, `PATTERN_DPI`: Pattern generation settings

**In `MeshGenerator.py`:**
- `Y_COOR`: Inlet/outlet vertical position
- `HOLE_RADIUS`: Inlet/outlet hole size
- `BORDER_WIDTH`: White border width for middle layer

## 🔧 Troubleshooting

### Common Issues

1. **Import Errors**
   - Ensure all dependencies are installed: `pip install -r requirements.txt`
   - Check Python version: `python --version` (should be 3.8+)

2. **Model Not Found**
   - Verify `Repository/best_model_TRCodev2GA.pth` exists
   - Check file paths are correct

3. **3D Visualization Not Working**
   - Install `pyopengltk` for Vispy Tkinter backend: `pip install pyopengltk`
   - Ensure graphics drivers are up to date

4. **Mesh Generation Fails**
   - Check that pattern has been generated first
   - Verify image buffer is not corrupted

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Muhammad Firman Friyadi** - *LAiMM Lab*
  - Initial development and integration
  - Code updated: Nov 8 - Nov 19, 2025

## 🙏 Acknowledgments

- **LAiMM Lab** - Laboratory for Advanced Materials and Manufacturing
- **Michael Hsu, LAMM/MIT, 2021** - Voxel to STL conversion utilities
- Deep learning model training and development team

## 📧 Contact

For questions or support, please open an issue on GitHub or contact the development team.

---

**Note**: This software is provided as-is for research and educational purposes. Ensure all model files and dependencies are properly installed before use.

# MicrofluidicGUI
# MicrofluidicGUI
# MicrofluidicGUI
# MicrofluidicGUI
