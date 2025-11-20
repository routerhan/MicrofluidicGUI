# Contributing to Microfluidic Property Prediction GUI

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in the Issues section
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs. actual behavior
   - System information (OS, Python version)
   - Screenshots if applicable

### Suggesting Features

1. Check existing issues for similar suggestions
2. Create a new issue with:
   - Clear description of the feature
   - Use case and benefits
   - Possible implementation approach (if you have ideas)

### Pull Requests

1. **Fork the Repository**
   ```bash
   git clone <your-fork-url>
   cd DevGUI
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make Changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed
   - Test your changes thoroughly

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
   - Use clear, descriptive commit messages
   - Reference issue numbers if applicable

5. **Push and Create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```
   - Create a pull request on GitHub
   - Provide a clear description of changes
   - Reference related issues

## Development Guidelines

### Code Style

- Follow PEP 8 Python style guide
- Use meaningful variable and function names
- Add docstrings to classes and functions
- Keep functions focused and modular

### Testing

- Test new features before submitting
- Test edge cases and error handling
- Ensure GUI functionality works as expected
- Test with different Python versions if possible

### Documentation

- Update README.md if adding new features
- Add comments for complex algorithms
- Document any new dependencies
- Update docstrings for new functions/classes

## Project Structure

- `MicrofluidicGUI_v4.py` - Main GUI application
- `iGenerator.py` - Flow path and DL prediction
- `MeshGenerator.py` - 3D mesh generation
- `Repository/` - Model files and utilities

## Questions?

Feel free to open an issue for questions or clarifications. We're happy to help!

Thank you for contributing! 🎉

