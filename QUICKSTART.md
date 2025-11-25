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

### For Darwin user (MacOS)
Since pyopengltk does not supported `darwin` platform, to check the complete GUI.
You need to build/run linux container and use VNC to see GUI.

1. Build image:
```bash
podman build -t mf-gui .
```

2. Run container:
```bash
podman run --rm -it \
  -p 5901:5901 \
  -v "$(pwd)":/app \
  -w /app \
  mf-gui
```

- 預設 VNC 密碼：vncpass（可用 -e VNC_PASSWORD=自訂密碼 覆寫）
- 預設解析度：1600x900（可用 -e VNC_GEOMETRY=1920x1080 覆寫）
- 容器會啟動 VNC server 並跑 MicrofluidicGUI_v4.py。

3. 在 macOS 安裝/使用任意 VNC 客戶端，例如：

- 內建「螢幕共享」（Screen Sharing）：按 ⌘+Space 搜尋 螢幕共享 或 Screen Sharing
- RealVNC Viewer、TigerVNC Viewer 等第三方客戶端皆可。

4. 在 VNC 客戶端中連線：
主機：localhost
連接埠：5901
若客戶端要輸入完整位址，可寫成 localhost (line 5901) 或 `vnc://localhost:5901`。
輸入密碼：預設是 vncpass，如果你在 podman run 時用 `-e VNC_PASSWORD=yourpass`，則輸入你的密碼。
連線成功後，會看到容器內的 Linux 桌面（fluxbox），`MicrofluidicGUI_v4.py` 應該已自動開啟

這樣 macOS 只是在 VNC 視窗內顯示和操作 GUI，實際的 Tk/pyopengltk/Vispy 都在容器（Linux）裡執行，不受 macOS 限制。

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

