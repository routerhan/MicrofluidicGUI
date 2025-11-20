# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-19

### Added
- Initial release of Microfluidic Property Prediction GUI
- Interactive 9×3 pattern selection interface
- Flow path visualization with real-time updates
- Deep learning-based property prediction (12 properties)
- 3D mesh generation from 2D patterns
- Interactive 3D mesh viewer with multiple view modes
- STL export functionality
- Modular code structure (separated into iGenerator.py and MeshGenerator.py)
- Comprehensive documentation (README, QUICKSTART, SETUP guides)
- GitHub workflow for CI/CD
- Contributing guidelines

### Features
- **Pattern Selection**: Click-and-drag interface for selecting points on 9×3 grid
- **Property Prediction**: 
  - Mechanical properties: E11, YS11, v11, E22, YS22, v22
  - Thermal properties: k11, k22, k33, CTE11, CTE22, CTE33
- **3D Mesh Generation**: Automatic conversion of patterns to 3D STL meshes
- **3D Visualization**: 
  - Embedded preview viewer
  - Detailed popup viewer with multiple view modes
  - Interactive rotation, zoom, and pan

### Technical Details
- Python 3.8+ compatibility
- PyTorch-based deep learning model
- Vispy for 3D visualization
- Trimesh for mesh processing
- Modular architecture for maintainability

### Documentation
- README.md with comprehensive project overview
- QUICKSTART.md for quick setup guide
- SETUP.md with detailed installation instructions
- CONTRIBUTING.md for contribution guidelines
- LICENSE file (MIT License)

---

## Future Releases

### Planned Features
- [ ] Batch processing capabilities
- [ ] Export to additional 3D formats (OBJ, PLY)
- [ ] Mesh smoothing options
- [ ] Parameter optimization suggestions
- [ ] History/undo functionality
- [ ] Save/load pattern configurations
- [ ] Performance improvements for large meshes

### Known Issues
- None reported yet

---

## Version History

- **v1.0.0** (2025-11-19): Initial public release

