# ==========================================================================================
# Function      : Microfluidic GUI - For Property Prediction
# Develop by    : Muhammad Firman Friyadi / LAiMM Lab
# Code Update   : Updated on Nov 8 - Finished at Nov 19, 2025
# Notes         : This GUI is for property prediction using the deep learning model.
# ==========================================================================================
# Description:
#   This integrated GUI combines pattern selection (from PointSelectorApp_v3)
#   with property prediction (from MicrofluidicGUI_v2).
#   
#   Features:
#   - Interactive 9x3 pattern selection interface for flow path design
#   - Flow path visualization with pattern overlay
#   - Channel parameter inputs
#   - 12 material property predictions using deep learning
#   - 3D mesh generation and visualization
#
# ==========================================================================================

# ==========================================================================================
# SECTION 1: CONFIGURE REPOSITORY PATH
# ==========================================================================================
import os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
script_dir = os.path.dirname(os.path.abspath(__file__))


# ==========================================================================================
# SECTION 2: IMPORT LIBRARIES
# ==========================================================================================
# Image processing
import numpy as np
from PIL import Image

# Plotting and visualization
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from matplotlib.figure import Figure

# 3D Visualization
import vispy
import vispy.scene
vispy.use(app='tkinter')

# GUI
import tkinter as tk
from tkinter import messagebox, filedialog

# Point interpretation
from Repository.pointinterpreter import INTERPRETER

# Import separated modules
from MeshGenerator import MeshGenerator3D, MeshViewerPopup
from iGenerator import iGenerator

# ==========================================================================================
# SECTION 3: Microfluidic GUI CLASS
# ==========================================================================================
class MicrofluidicGUI:
    """
    Integrated GUI combining pattern selection and property prediction.
    """
    
    def __init__(self, root):
        """Initialize the GUI application."""
        self.root = root
        self.root.title("Microfluidic Property Prediction GUI")
        self.root.configure(bg='#f5f5f5')
        
        # Define the 12 material properties to predict
        self.property_names = [
            'E11', 'YS11', 'v11',  # Properties 1-3 (Mechanical)
            'E22', 'YS22', 'v22',  # Properties 4-6 (Mechanical)
            'k11', 'k22', 'k33',   # Properties 7-9 (Thermal)
            'CTE11', 'CTE22', 'CTE33'  # Properties 10-12 (Thermal)
        ]
        
        # Property descriptions/notes
        self.property_notes = {
            'E11': 'Young\'s Modulus (X)',
            'YS11': 'Yield Strength (X)',
            'v11': 'Poisson\'s Ratio (X)',
            'E22': 'Young\'s Modulus (Y)',
            'YS22': 'Yield Strength (Y)',
            'v22': 'Poisson\'s Ratio (Y)',
            'k11': 'Thermal Conductivity (X)',
            'k22': 'Thermal Conductivity (Y)',
            'k33': 'Thermal Conductivity (Z)',
            'CTE11': 'Thermal Expansion (X)',
            'CTE22': 'Thermal Expansion (Y)',
            'CTE33': 'Thermal Expansion (Z)' 
        }
        
        # Initialize iGenerator (will be created when inputs are provided)
        self.igen = None
        self.current_predictions = None
        self.current_flow_path_points = None
        self.current_img_buf = None
        
        # 3D Mesh generation state
        self.current_3d_mesh = None
        
        # Pattern selection state
        self.selected_points = {i: [] for i in range(1, 10)}  # Up to 2 points per row
        self.pattern_points = {}
        self.pattern_selection_order = []
        self.drawing_line = None
        self.is_drawing = False
        
        # Canvas dimensions - larger for flow path visualization
        self.canvas_width = 350
        self.canvas_height = int(self.canvas_width * (36.0 / 22.5))  # 792 pixels
        
        # Create and display all GUI widgets
        self.create_widgets()

    def create_widgets(self):
        """Create and layout all GUI widgets."""
        # Main title
        title_label = tk.Label(
            self.root, 
            text="Microfluidic Property Prediction", 
            font=('Arial', 16, 'bold'), 
            bg='#f5f5f5', 
            fg='black'
        )
        title_label.pack(pady=10)
        
        # Main container with two sections
        main_frame = tk.Frame(self.root, bg='#f5f5f5')
        main_frame.pack(fill=tk.BOTH, expand=True, padx=10, pady=10)
        
        # Left section - User Input
        self.input_section(main_frame)
        
        # Right section - User Output
        self.output_section(main_frame)

    def input_section(self, parent):
        """Create the User Input section (left side of GUI)."""
        # User Input frame with border
        input_frame = tk.Frame(parent, bg='#f5f5f5', relief=tk.RIDGE, bd=2)
        input_frame.pack(side=tk.LEFT, fill=tk.BOTH, expand=True, padx=(0, 5))
        
        # Section title
        input_title = tk.Label(
            input_frame, 
            text="User Input", 
            font=('Arial', 16, 'bold'),
            bg='#f5f5f5', 
            fg='red'
        )
        input_title.pack(pady=5)
        
        # Create horizontal container for pattern selection and flow visualization
        pattern_viz_frame = tk.Frame(input_frame, bg='#f5f5f5')
        pattern_viz_frame.pack(pady=5, padx=10, fill=tk.BOTH, expand=True)

        # Use grid with weights to control relative sizes
        pattern_viz_frame.grid_columnconfigure(0, weight=1)  # Pattern frame gets 1 part
        pattern_viz_frame.grid_columnconfigure(1, weight=2)  # Viz frame gets 2 parts (1:2 ratio)
        
        # ===== Left: Pattern Selection Interface =====
        pattern_frame = tk.Frame(pattern_viz_frame, bg='#f5f5f5')
        pattern_frame.pack(side=tk.LEFT, fill=tk.BOTH, expand=True, padx=(0, 5))
        pattern_frame.config(width=100)
        
        pattern_title = tk.Label(
            pattern_frame,
            text="Point Selection (9 Rows x 3 Columns)",
            font=('Arial', 14, 'bold'),
            bg='#f5f5f5',
            fg='black'
        )
        pattern_title.pack(pady=2)
        
        instruction_label = tk.Label(
            pattern_frame,
            text="Draw from bottom to top (row 1→9): Click and drag to connect points (up to 2 per row)",
            font=('Arial', 10),
            bg='#f5f5f5',
            fg='gray'
        )
        instruction_label.pack(pady=2)
        
        # Pattern selection canvas container
        pattern_container = tk.Frame(pattern_frame, bg='#f5f5f5')
        pattern_container.pack(pady=0, padx=0, fill=tk.Y, expand=True)
        
        self.pattern_canvas = tk.Canvas(
            pattern_container,
            bg='#ffffff',
            width=300,
            height=300,
            highlightthickness=2,
            highlightbackground='#000000'
        )
        self.pattern_canvas.pack(fill=tk.BOTH, expand=True)
        
        # Pattern selection settings - increased proportionally
        self.pattern_dot_radius = 14
        self.pattern_dot_spacing_x = 65
        self.pattern_dot_spacing_y = 55
        self.pattern_start_x = None
        self.pattern_start_y = None
        
        # Bind mouse events
        self.pattern_canvas.bind("<Button-1>", self.on_pattern_click)
        self.pattern_canvas.bind("<B1-Motion>", self.on_pattern_drag)
        self.pattern_canvas.bind("<ButtonRelease-1>", self.on_pattern_release)
        self.pattern_canvas.bind("<Configure>", self.on_canvas_resize)
        
        # Initialize pattern selection
        self.root.after(100, self.init_pattern_selection)
        
        # ===== Right: Flow Path Visualization =====
        viz_frame = tk.Frame(pattern_viz_frame, bg='#f5f5f5')
        viz_frame.pack(side=tk.RIGHT, fill=tk.BOTH, expand=True, padx=(5, 0))
       
        viz_title = tk.Label(
            viz_frame,
            text="Flow Path Visualization",
            font=('Arial', 14, 'bold'),
            bg='#f5f5f5',
            fg='black'
        )
        viz_title.pack(pady=2)

        instruction_label = tk.Label(
            viz_frame,
            text="The flow path is visualized in the right side of the screen.",
            font=('Arial', 10),
            bg='#f5f5f5',
            fg='gray'
        )
        instruction_label.pack(pady=2)
        
        # Flow path visualization canvas container - matching pattern selection frame
        plot_frame = tk.Frame(viz_frame, bg='#f5f5f5')
        plot_frame.pack(pady=0, padx=0, fill=tk.BOTH, expand=True)
        
        # Create a container frame with white background and black border (matching pattern canvas)
        pattern_container = tk.Frame(plot_frame, bg='#ffffff', highlightthickness=2, highlightbackground='#000000')
        pattern_container.pack(expand=True, fill=tk.BOTH)
        
        # Create matplotlib figure for flow path
        dpi = 150
        fig_width = self.canvas_width / dpi
        fig_height = self.canvas_height / dpi
        
        self.fig_input = Figure(
            figsize=(fig_width, fig_height), 
            facecolor='#ffffff', 
            dpi=dpi
        )
        self.fig_input.subplots_adjust(left=0, right=1, top=1, bottom=0, wspace=0, hspace=0)
        self.ax_input = self.fig_input.add_subplot(111, facecolor='#ffffff')
        self.ax_input.set_facecolor('#ffffff')
        self.ax_input.axis('off')

        self.canvas_input = FigureCanvasTkAgg(self.fig_input, pattern_container)
        self.canvas_input.get_tk_widget().config(
            width=self.canvas_width, 
            height=self.canvas_height
        )
        # Center the canvas in the container frame
        self.canvas_input.get_tk_widget().pack(anchor='center', expand=True)
        self.canvas_input.draw()
        
        # ===== Channel Parameters and Action Buttons (All in One Line) =====
        params_button_frame = tk.Frame(input_frame, bg='#f5f5f5')
        params_button_frame.pack(pady=10, padx=10, fill=tk.X)
        
        # Left side: Channel Parameters
        params_frame = tk.Frame(params_button_frame, bg='#f5f5f5')
        params_frame.pack(side=tk.LEFT, fill=tk.X, expand=True, padx=(0, 10))
        
        params_title = tk.Label(
            params_frame,
            text="Channel Parameters:",
            font=('Arial', 14, 'bold'),
            bg='#f5f5f5',
            fg='black'
        )
        params_title.pack(anchor='w', pady=2)
        
        self.input_vars = {}
        input_labels = ['Channel Depth:', 'Channel Width :', 'Channel Space :']
        defaults = ['0.16', '0.4', '0.4']
        
        for label, default in zip(input_labels, defaults):
            row_frame = tk.Frame(params_frame, bg='#f5f5f5')
            row_frame.pack(fill=tk.X, pady=2)
            
            tk.Label(
                row_frame, 
                text=label, 
                bg='#f5f5f5', 
                font=('Arial', 14),
                width=15, 
                anchor='w'
            ).pack(side=tk.LEFT, padx=2)
            
            entry = tk.Entry(
                row_frame, 
                bg='#90EE90',
                fg='black', 
                font=('Arial', 14),
                width=20, 
                justify='center'  # Center the parameter value
            )
            entry.insert(0, default)
            entry.pack(side=tk.LEFT, padx=2)
            self.input_vars[label] = entry
        
        # Right side: Action Buttons (in same line)
        button_frame = tk.Frame(params_button_frame, bg='#f5f5f5')
        button_frame.pack(side=tk.RIGHT, padx=(10, 0))
        
        generate_btn = tk.Button(
            button_frame,
            text="Generate Flow Pattern",
            bg='#90EE90',
            fg='black',
            font=('Arial', 14, 'bold'),
            command=self.generate_flow_pattern,
            relief=tk.RAISED,
            padx=12,
            pady=6
        )
        generate_btn.pack(side=tk.LEFT, padx=3)
        
        clear_btn = tk.Button(
            button_frame,
            text="Clear",
            bg='#FFB6C1',
            fg='black',
            font=('Arial', 14, 'bold'),
            command=self.clear_selection,
            relief=tk.RAISED,
            padx=12,
            pady=6
        )
        clear_btn.pack(side=tk.LEFT, padx=3)
        
        predict_btn = tk.Button(
            button_frame,
            text="Start Predict", 
            bg='#90EE90',
            fg='black',
            font=('Arial', 14, 'bold'),
            command=self.start_prediction,
            relief=tk.RAISED, 
            padx=12,
            pady=6
        )
        predict_btn.pack(side=tk.LEFT, padx=3)

    def output_section(self, parent):
        """Create the User Output section (right side of GUI)."""
        output_frame = tk.Frame(parent, bg='#f5f5f5', relief=tk.RIDGE, bd=2)
        output_frame.pack(side=tk.RIGHT, fill=tk.BOTH, expand=True, padx=(5, 0))
        
        output_title = tk.Label(
            output_frame, 
            text="User Output", 
            font=('Arial', 14, 'bold'),
            bg='#f5f5f5', 
            fg='red'
        )
        output_title.pack(pady=5)
        
        # Main container for output fields
        output_fields_frame = tk.Frame(output_frame, bg='#f5f5f5')
        output_fields_frame.pack(pady=10, padx=10, fill=tk.BOTH, expand=True)
        
        self.output_vars = {}
        current_row = 0
        
        # ===== Mechanical Properties Section =====
        mech_header = tk.Label(
            output_fields_frame,
            text="Mechanical Properties",
            font=('Arial', 14, 'bold'),
            bg='#f5f5f5',
            fg='#0066CC'
        )
        mech_header.grid(row=current_row, column=0, columnspan=3, pady=(0, 10), sticky='w')
        current_row += 1
        
        # Mechanical properties: E11, YS11, v11, E22, YS22, v22
        mech_properties = ['E11', 'YS11', 'v11', 'E22', 'YS22', 'v22']
        num_cols = 3
        
        for idx, prop_name in enumerate(mech_properties):
            row = current_row + (idx // num_cols) * 3
            col = idx % num_cols
            
            # Property label
            label_text = f"{prop_name}:"
            label = tk.Label(
                output_fields_frame, 
                text=label_text, 
                bg='#f5f5f5', 
                fg='black', 
                font=('Arial', 12, 'bold'),
                width=15, 
                anchor='w'
            )
            label.grid(row=row, column=col, padx=5, pady=(2, 0), sticky='w')
            
            # Property note/description (below label)
            note = tk.Label(
                output_fields_frame,
                text=self.property_notes[prop_name],
                bg='#f5f5f5',
                fg='gray',
                font=('Arial', 8),
                anchor='w',
                wraplength=150
            )
            note.grid(row=row+1, column=col, padx=5, pady=(0, 2), sticky='w')
            
            # Value entry
            entry = tk.Entry(
                output_fields_frame, 
                bg='#90EE90',
                fg='black',
                font=('Arial', 14), 
                width=15,
                justify='center',
                relief=tk.SOLID, 
                bd=1,
                state='readonly'
            )
            entry.grid(row=row+2, column=col, padx=5, pady=2, sticky='ew')
            self.output_vars[prop_name] = entry
        
        current_row += (len(mech_properties) // num_cols) * 3 + 3
        
        # ===== Thermal Properties Section =====
        thermal_header = tk.Label(
            output_fields_frame,
            text="Thermal Properties",
            font=('Arial', 14, 'bold'),
            bg='#f5f5f5',
            fg='red'
        )
        thermal_header.grid(row=current_row, column=0, columnspan=3, pady=(10, 10), sticky='w')
        current_row += 1
        
        # Thermal properties: k11, k22, k33, CTE11, CTE22, CTE33
        thermal_properties = ['k11', 'k22', 'k33', 'CTE11', 'CTE22', 'CTE33']
        
        for idx, prop_name in enumerate(thermal_properties):
            row = current_row + (idx // num_cols) * 3
            col = idx % num_cols
                    
            # Property label
            label_text = f"{prop_name}:"
            label = tk.Label(
                        output_fields_frame, 
                text=label_text, 
                        bg='#f5f5f5', 
                        fg='black', 
                font=('Arial', 14, 'bold'),
                width=15, 
                        anchor='w'
                    )
            label.grid(row=row, column=col, padx=5, pady=(2, 0), sticky='w')
            
            # Property note/description (below label)
            note = tk.Label(
                output_fields_frame,
                text=self.property_notes[prop_name],
                bg='#f5f5f5',
                fg='gray',
                font=('Arial', 8),
                anchor='w',
                wraplength=150
            )
            note.grid(row=row+1, column=col, padx=5, pady=(0, 2), sticky='w')
            
            # Value entry
            entry = tk.Entry(
                output_fields_frame, 
                bg='#90EE90',
                        fg='black',
                font=('Arial', 14), 
                        width=15, 
                justify='center',
                        relief=tk.SOLID, 
                        bd=1,
                state='readonly'
                    )
            entry.grid(row=row+2, column=col, padx=5, pady=2, sticky='ew')
            self.output_vars[prop_name] = entry
        
        # Update current_row after thermal properties
        current_row += (len(thermal_properties) // num_cols) * 3 + 3
        
        for col in range(num_cols):
            output_fields_frame.columnconfigure(col, weight=1)
        
        # ===== 3D Mesh Generation Section (Under Properties) =====
        mesh_header = tk.Label(
            output_fields_frame,
            text="3D Mesh Generation",
            font=('Arial', 14, 'bold'),
            bg='#f5f5f5',
            fg='red'
        )
        mesh_header.grid(row=current_row, column=0, columnspan=3, pady=(20, 10), sticky='')
        current_row += 1
        
        # Mesh generation buttons frame (centered)
        mesh_button_frame = tk.Frame(output_fields_frame, bg='#f5f5f5')
        mesh_button_frame.grid(row=current_row, column=0, columnspan=3, pady=5, padx=5, sticky='')
        current_row += 1
        
        generate_mesh_btn = tk.Button(
            mesh_button_frame,
            text="Generate 3D Mesh",
            bg='#90EE90',
            fg='black',
            font=('Arial', 14, 'bold'),
            command=self.generate_3d_mesh,
            relief=tk.RAISED,
            padx=8,
            pady=4
        )
        generate_mesh_btn.pack(side=tk.LEFT, padx=3)
        
        display_mesh_btn = tk.Button(
            mesh_button_frame,
            text="Display 3D Mesh",
            bg='#87CEEB',
            fg='black',
            font=('Arial', 14, 'bold'),
            command=self.display_3d_mesh_popup,
            relief=tk.RAISED,
            padx=8,
            pady=4
        )
        display_mesh_btn.pack(side=tk.LEFT, padx=3)
        
        save_mesh_btn = tk.Button(
            mesh_button_frame,
            text="Save STL",
            bg='#FFD700',
            fg='black',
            font=('Arial', 14, 'bold'),
            command=self.save_3d_mesh,
            relief=tk.RAISED,
            padx=8,
            pady=4
        )
        save_mesh_btn.pack(side=tk.LEFT, padx=3)
        
        # Small 3D mesh preview display
        mesh_preview_container = tk.Frame(output_fields_frame, bg='#f5f5f5')
        mesh_preview_container.grid(row=current_row, column=0, columnspan=3, pady=5, padx=5, sticky='nsew')
        output_fields_frame.grid_rowconfigure(current_row, weight=1)
        mesh_preview_container.config(height=300)
        current_row += 1
        
        mesh_preview_frame = tk.Frame(mesh_preview_container, bg='#e8e8e8', bd=2)
        mesh_preview_frame.pack(fill=tk.BOTH, expand=True, padx=0, pady=0)
        mesh_preview_frame.config(height=300)
        
        self.use_vispy_preview = True
        self.mesh_preview_vispy_canvas = None
        self.mesh_preview_vpview = None
        
        self.mesh_preview_vispy_canvas = vispy.scene.SceneCanvas(
            keys='interactive', 
            show=False,
            parent=mesh_preview_frame, 
            bgcolor='white'
        )
        self.mesh_preview_vispy_canvas.native.pack(side=tk.TOP, fill=tk.BOTH, expand=True)
        self.mesh_preview_vpview = self.mesh_preview_vispy_canvas.central_widget.add_view(bgcolor='white')
        self.mesh_preview_vispy_canvas.show()
        
        # Initialize mesh generator
        self.mesh_gen = MeshGenerator3D(slices_folder="slices")
        self.current_3d_mesh = None
    
    # ===== Pattern selection Methods =====
    def on_canvas_resize(self, event):
        """Handle canvas resize to recenter the grid."""
        if self.pattern_points:
            self.init_pattern_selection()
    
    def init_pattern_selection(self):
        """Initialize the pattern selection grid with 9 rows x 3 columns, centered."""
        current_selections = {}
        for point_name, point_data in self.pattern_points.items():
            if point_data.get('is_selected', False):
                current_selections[point_name] = True
        
        self.pattern_canvas.delete("all")
        self.pattern_points = {}
        self.pattern_canvas.update_idletasks()
        
        canvas_width = self.pattern_canvas.winfo_width()
        canvas_height = self.pattern_canvas.winfo_height()
        
        if canvas_width <= 1:
            canvas_width = 250
        if canvas_height <= 1:
            canvas_height = 400
        
        num_cols = 3
        num_rows = 9
        grid_width = (num_cols - 1) * self.pattern_dot_spacing_x
        grid_height = (num_rows - 1) * self.pattern_dot_spacing_y
        
        center_x = canvas_width / 2
        center_y = canvas_height / 2
        self.pattern_start_x = center_x - grid_width / 2
        self.pattern_start_y = center_y - grid_height / 2
        
        col_map = {'A': 0, 'B': 1, 'C': 2}
        
        for row_idx, row_num in enumerate(range(9, 0, -1)):
            for col_letter in ['A', 'B', 'C']:
                col_idx = col_map[col_letter]
                point_name = f"{row_num}{col_letter}"
                
                x = self.pattern_start_x + col_idx * self.pattern_dot_spacing_x
                y = self.pattern_start_y + row_idx * self.pattern_dot_spacing_y
                
                dot_id = self.pattern_canvas.create_oval(
                    x - self.pattern_dot_radius, y - self.pattern_dot_radius,
                    x + self.pattern_dot_radius, y + self.pattern_dot_radius,
                    fill='#e0e0e0', outline='#333333', width=2,
                    tags=('dot', point_name)
                )
                
                label_id = self.pattern_canvas.create_text(
                    x, y, text=col_letter,
                    font=('Arial', 11, 'bold'), fill='#666666',
                    tags=('label', point_name)
                )
                
                self.pattern_points[point_name] = {
                    'x': x, 'y': y, 'dot_id': dot_id, 'label_id': label_id,
                    'is_selected': False, 'row': row_num, 'col': col_letter
                }
        
        if current_selections:
            for point_name in current_selections:
                if point_name in self.pattern_points:
                    point_data = self.pattern_points[point_name]
                    point_data['is_selected'] = True
                    row_num = point_data['row']
                    col_letter = point_data['col']
                    if col_letter not in self.selected_points[row_num]:
                        self.selected_points[row_num].append(col_letter)
                    if point_name not in self.pattern_selection_order:
                        self.pattern_selection_order.append(point_name)
            self.update_pattern_display()
    
    def get_point_at_position(self, x, y):
        """Find which point (if any) is at the given position."""
        for point_name, point_data in self.pattern_points.items():
            px, py = point_data['x'], point_data['y']
            distance = ((x - px) ** 2 + (y - py) ** 2) ** 0.5
            if distance <= self.pattern_dot_radius * 1.5:
                return point_name
        return None
    
    def on_pattern_click(self, event):
        """Handle mouse click on pattern selection canvas."""
        point_name = self.get_point_at_position(event.x, event.y)
        if point_name:
            self.is_drawing = True
            self.select_point_from_pattern(point_name, event.x, event.y)
    
    def on_pattern_drag(self, event):
        """Handle mouse drag on pattern selection canvas."""
        if not self.is_drawing:
            return
        
        point_name = self.get_point_at_position(event.x, event.y)
        if point_name:
            point_data = self.pattern_points[point_name]
            if not point_data['is_selected']:
                self.select_point_from_pattern(point_name, event.x, event.y)
        else:
            if self.pattern_selection_order:
                last_point = self.pattern_points[self.pattern_selection_order[-1]]
                if self.drawing_line:
                    self.pattern_canvas.delete(self.drawing_line)
                self.drawing_line = self.pattern_canvas.create_line(
                    last_point['x'], last_point['y'], event.x, event.y,
                    fill='#4CAF50', width=4, tags='connection'
                )
    
    def on_pattern_release(self, event):
        """Handle mouse release on pattern selection canvas."""
        self.is_drawing = False
        if self.drawing_line:
            self.pattern_canvas.delete(self.drawing_line)
            self.drawing_line = None
    
    def select_point_from_pattern(self, point_name, mouse_x=None, mouse_y=None):
        """Select a point from the pattern selection interface."""
        if point_name not in self.pattern_points:
            return
        
        point_data = self.pattern_points[point_name]
        row_num = point_data['row']
        col_letter = point_data['col']
        current_selections = self.selected_points[row_num]
        
        if col_letter in current_selections:
            # Deselecting - allowed
            current_selections.remove(col_letter)
            point_data['is_selected'] = False
            self.pattern_selection_order = [p for p in self.pattern_selection_order if p != point_name]
            self.update_pattern_display()
        else:
            # Selecting a new point
            if len(current_selections) < 2:
                # Check if selection follows the correct order (row 1 to 9, bottom to top)
                if len(self.pattern_selection_order) > 0:
                    # Get the last selected point's row
                    last_point_name = self.pattern_selection_order[-1]
                    last_point_data = self.pattern_points[last_point_name]
                    last_row_num = last_point_data['row']
                    
                    # Rule: New point must be from a row that is greater than or equal to the last row
                    # (moving upward from row 1 to row 9, bottom to top)
                    if row_num < last_row_num:
                        messagebox.showwarning(
                            "Invalid Selection Order",
                            f"Pattern must be drawn from bottom to top (row 1 to row 9).\n"
                            f"Last selected point was from row {last_row_num}.\n"
                            f"You cannot select from row {row_num} (going backwards).\n"
                            f"Please select from row {last_row_num} or higher."
                        )
                        return
                
                # Selection order is valid, proceed with selection
                current_selections.append(col_letter)
                point_data['is_selected'] = True
                self.pattern_selection_order.append(point_name)
                self.update_pattern_display()
                
                if len(self.pattern_selection_order) > 1:
                    prev_point_name = self.pattern_selection_order[-2]
                    prev_point = self.pattern_points[prev_point_name]
                    self.pattern_canvas.create_line(
                        prev_point['x'], prev_point['y'],
                        point_data['x'], point_data['y'],
                        fill='#4CAF50', width=5, tags='connection'
                    )
            else:
                messagebox.showwarning(
                    "Maximum Selection",
                    f"Row {row_num} already has 2 points selected.\nPlease deselect one before selecting another."
                )
    
    def update_pattern_display(self):
        """Update the visual display of the pattern selection."""
        self.pattern_canvas.delete('connection')
        
        for point_name, point_data in self.pattern_points.items():
            if point_data['is_selected']:
                self.pattern_canvas.itemconfig(
                    point_data['dot_id'],
                    fill='#4CAF50', outline='#2E7D32', width=3
                )
                self.pattern_canvas.itemconfig(
                    point_data['label_id'],
                    fill='#ffffff', font=('Arial', 12, 'bold')
                )
            else:
                self.pattern_canvas.itemconfig(
                    point_data['dot_id'],
                    fill='#e0e0e0', outline='#333333', width=2
                )
                self.pattern_canvas.itemconfig(
                    point_data['label_id'],
                    fill='#666666', font=('Arial', 11, 'bold')
                )
        
        for i in range(len(self.pattern_selection_order) - 1):
            point1_name = self.pattern_selection_order[i]
            point2_name = self.pattern_selection_order[i + 1]
            point1 = self.pattern_points[point1_name]
            point2 = self.pattern_points[point2_name]
            
            self.pattern_canvas.create_line(
                point1['x'], point1['y'], point2['x'], point2['y'],
                fill='#4CAF50', width=5, tags='connection'
            )
    
    def clear_selection(self):
        """Clear all selected points."""
        for row_num in range(1, 10):
            self.selected_points[row_num] = []
        
        self.pattern_selection_order = []
        
        for point_name, point_data in self.pattern_points.items():
            point_data['is_selected'] = False
        
        self.update_pattern_display()
        self.current_flow_path_points = None
        self.current_img_buf = None

    # ===== Point Interpretation and Flow Path Generation =====
    def interpret_points(self, xbasic, ybasic):
        """Interpret selected points using INTERPRETER from pointinterpreter.py."""
        points = []
        
        # Add inlet point
        inlet_expr = INTERPRETER['i1']
        inlet_expr_eval = inlet_expr.replace('xbasic', str(xbasic)).replace('ybasic', str(ybasic))
        inlet_coord = eval(inlet_expr_eval)
        points.append(inlet_coord)
        
        # Add selected points in the order they were drawn
        for point_name in self.pattern_selection_order:
            if point_name in INTERPRETER:
                point_expr = INTERPRETER[point_name]
                point_expr_eval = point_expr.replace('xbasic', str(xbasic)).replace('ybasic', str(ybasic))
                point_coord = eval(point_expr_eval)
                points.append(point_coord)
        
        # Add outlet point
        outlet_expr = INTERPRETER['o1']
        outlet_expr_eval = outlet_expr.replace('xbasic', str(xbasic)).replace('ybasic', str(ybasic))
        outlet_coord = eval(outlet_expr_eval)
        points.append(outlet_coord)
        
        return points

    def generate_flow_pattern(self):
        """Generate and display the flow path based on selected points."""
        try:
            # Get channel parameters
            try:
                cdepth = float(self.input_vars['Channel Depth:'].get().strip() or '0.16')
                cwidth = float(self.input_vars['Channel Width :'].get().strip() or '0.4')
                cspace = float(self.input_vars['Channel Space :'].get().strip() or '0.4')
            except ValueError:
                messagebox.showerror("Input Error", "Please enter valid numerical values for channel parameters.")
                return
            
            # Check if any points are selected
            selected_count = sum(len(v) for v in self.selected_points.values())
            if selected_count == 0:
                messagebox.showwarning("No Selection", "Please select at least one point before generating the flow path.")
                return
            
            # Initialize or update iGenerator
            if (self.igen is None or 
                self.igen.cdepth != cdepth or 
                self.igen.cwidth != cwidth or 
                self.igen.cspace != cspace):
                self.igen = iGenerator(cdepth, cwidth, cspace)
            
            # Calculate xbasic and ybasic
            Cnums = self.igen.get_cnums()
            xbasic = ((cwidth * Cnums) + (cspace * Cnums)) * 10
            ybasic = ((cwidth * Cnums) + (cspace * Cnums)) * 10
            
            # Interpret selected points
            selected_points = self.interpret_points(xbasic, ybasic)
            self.current_flow_path_points = selected_points
            
            # Generate flow path visualization
            variables = self.igen.variables
            img_input_buf = self.igen.plot_flow_path(
                selected_points,
                distance=variables['LSpace'],
                linewidths=variables['LWidth']
            )
            self.current_img_buf = img_input_buf
            
            # Display the flow path
            self.update_flow_path_plot(selected_points, img_input_buf)
            
            messagebox.showinfo("Success", f"Flow path generated successfully!\n{selected_count} points selected.")
            
        except Exception as e:
            messagebox.showerror("Error", f"An error occurred during flow path generation:\n{str(e)}")
            import traceback
            traceback.print_exc()
    
    def update_flow_path_plot(self, points, img_buf):
        """Update the flow path visualization plot with new image data and overlay."""
        self.ax_input.clear()
        self.ax_input.set_facecolor('#ffffff')
        self.ax_input.axis('off')
        
        img_buf.seek(0)
        img = Image.open(img_buf)
        img_array = np.array(img.convert('RGB'))
        
        img_height, img_width = img_array.shape[:2]
        
        # Display the image
        self.ax_input.imshow(
            img_array, 
            origin='upper', 
            cmap='gray',
            extent=[0, img_width, img_height, 0]
        )
        
        
        # Maintain figure size
        self.canvas_input.get_tk_widget().config(
            width=self.canvas_width, 
            height=self.canvas_height
        )
        
        dpi = self.fig_input.dpi
        self.fig_input.set_size_inches(
            self.canvas_width / dpi, 
            self.canvas_height / dpi
        )
        
        self.canvas_input.draw()

    def start_prediction(self):
        """Handle the prediction process when 'Start Predict' button is clicked."""
        try:
            # Get input values
            try:
                cdepth_text = self.input_vars['Channel Depth:'].get().strip()
                cwidth_text = self.input_vars['Channel Width :'].get().strip()
                cspace_text = self.input_vars['Channel Space :'].get().strip()
                
                cdepth = float(cdepth_text) if cdepth_text else 0.16
                cwidth = float(cwidth_text) if cwidth_text else 0.4
                cspace = float(cspace_text) if cspace_text else 0.4
            except Exception as e:
                raise ValueError(f"Invalid input values: {e}")

            # Check if flow path has been generated
            if self.current_flow_path_points is None:
                messagebox.showwarning(
                    "No Flow Path", 
                    "Please generate a flow path first by selecting points and clicking 'Generate Flow Pattern'."
                )
                return

            # Initialize or update iGenerator
            if (self.igen is None or 
                self.igen.cdepth != cdepth or 
                self.igen.cwidth != cwidth or 
                self.igen.cspace != cspace):
                self.igen = iGenerator(cdepth, cwidth, cspace)
                
                # Regenerate flow path with new parameters
                Cnums = self.igen.get_cnums()
                xbasic = ((cwidth * Cnums) + (cspace * Cnums)) * 10
                ybasic = ((cwidth * Cnums) + (cspace * Cnums)) * 10
                self.current_flow_path_points = self.interpret_points(xbasic, ybasic)
                
                variables = self.igen.variables
                self.current_img_buf = self.igen.plot_flow_path(
                    self.current_flow_path_points,
                    distance=variables['LSpace'],
                    linewidths=variables['LWidth']
                )
            
            # Prepare parameters and get prediction
            nparams = [cdepth, cwidth, cspace]
            
            # Get prediction using the selected flow path points
            predictions, dl_input_img, img_input_buf, selected_points = \
                self.igen.get_prediction(self.current_flow_path_points, nparams)
            
            self.current_predictions = predictions
            
            # Update output fields
            for i, prop_name in enumerate(self.property_names):
                if i < len(predictions):
                    entry = self.output_vars[prop_name]
                    entry.config(state='normal')
                    entry.delete(0, tk.END)
                    entry.insert(0, f"{predictions[i]:.6f}")
                    entry.config(state='readonly')
            
            # Update flow path visualization
            self.update_flow_path_plot(selected_points, img_input_buf)
            
            messagebox.showinfo("Success", "Prediction completed successfully!")
            
        except ValueError as e:
            messagebox.showerror("Input Error", f"Please enter valid numerical values.\n{str(e)}")
        except Exception as e:
            messagebox.showerror("Error", f"An error occurred during prediction:\n{str(e)}")
            import traceback
            traceback.print_exc()
    
    # ===== 3D Mesh Generation Methods =====
    def generate_3d_mesh(self):
        """Generate 3D mesh from current flow path slices."""
        if self.mesh_gen is None:
            messagebox.showerror("Error", "3D mesh generation is not available. Please check Repository/vox2STL.py")
            return
        
        # Check if pattern has been generated
        inlet_pos = None
        outlet_pos = None
        
        if self.current_img_buf is None:
            response = messagebox.askyesno(
                "No Pattern Generated", 
                "No flow pattern has been generated yet.\n\n"
                "Would you like to:\n"
                "- 'Yes': Generate mesh using template images\n"
                "- 'No': Cancel and generate a pattern first"
            )
            if not response:
                return
            # Use template images if user chooses to proceed
            middle_image_buf = None
        else:
            # Use generated pattern for middle region
            middle_image_buf = self.current_img_buf
            # Reset buffer position to beginning
            middle_image_buf.seek(0)
            
            # Calculate inlet/outlet positions from pattern if available
            if self.current_flow_path_points is not None and len(self.current_flow_path_points) > 0:
                # Get first point (inlet) and last point (outlet)
                inlet_pos = self.current_flow_path_points[0]  # (x, y) in pattern coordinates
                outlet_pos = self.current_flow_path_points[-1]  # (x, y) in pattern coordinates
        
        try:
            # Fixed parameters (no user input needed)
            upper_thickness = 4
            middle_thickness = 4
            bottom_thickness = 4
            apply_smoothing = False
            output_filename = "Microfluidic_Geometry"
            
            message_text = "Generating 3D mesh from slices..."
            if middle_image_buf is not None:
                message_text += "\nUsing generated pattern for middle region."
            else:
                message_text += "\nUsing template images."
            message_text += "\nThis may take a moment."
            
            messagebox.showinfo("Generating", message_text)
            self.root.update()
            
            # Generate mesh with custom middle image and inlet/outlet positions if available
            mesh, volume = self.mesh_gen.generate_mesh(
                upper_thickness, middle_thickness, bottom_thickness,
                apply_smoothing, output_filename, save_stl=False,
                middle_image_buf=middle_image_buf,
                inlet_pos=inlet_pos,
                outlet_pos=outlet_pos
            )
            
            self.current_3d_mesh = mesh
            
            # Update preview immediately and force GUI refresh
            self.update_mesh_preview(mesh)
            self.root.update_idletasks()
            self.root.update()
            
            success_msg = "3D mesh generated successfully!"
            if middle_image_buf is not None:
                success_msg += "\n\nUsed your generated pattern for the middle region."
            success_msg += "\n\nThe mesh is now displayed in the preview below."
            messagebox.showinfo("Success", success_msg)
            
        except FileNotFoundError:
            error_msg = ("Image files not found.\n\nPlease ensure the following files exist in the 'slices' folder:\n"
                        "- Microfluidic_Upper.png\n"
                        "- Microfluidic_Bottom.png\n\n"
                        "(Middle region uses your generated pattern if available)")
            messagebox.showerror("File Not Found", error_msg)
        except Exception as e:
            messagebox.showerror("Error", f"An error occurred during mesh generation:\n{str(e)}")
    
    def update_mesh_preview(self, mesh):
        """Update the small 3D mesh preview display using Vispy (interactive)."""
        if mesh is None:
            return
        
        try:
            if self.use_vispy_preview and self.mesh_preview_vispy_canvas is not None:
                # Clear previous view
                if self.mesh_preview_vpview is not None:
                    self.mesh_preview_vpview.parent = None
                self.mesh_preview_vpview = self.mesh_preview_vispy_canvas.central_widget.add_view(bgcolor='white')
                
                # Get mesh data
                vertices = mesh.vertices.astype('float32')
                faces = mesh.faces.astype('uint32')
                
                # Add mesh visual
                mesh_visual = vispy.scene.visuals.Mesh(
                    vertices=vertices, 
                    faces=faces,
                    shading='smooth', 
                    color='lightblue'
                )
                self.mesh_preview_vpview.add(mesh_visual)
                
                # Set up camera for interactive viewing
                self.mesh_preview_vpview.camera = vispy.scene.TurntableCamera(parent=self.mesh_preview_vpview.scene)
                self.mesh_preview_vpview.camera.set_range()
                
                # Force canvas update
                self.mesh_preview_vispy_canvas.show()
                self.mesh_preview_vispy_canvas.update()
            
        except Exception as e:
            import traceback
            traceback.print_exc()
    
    def display_3d_mesh_popup(self):
        """Open popup window for detailed 3D mesh visualization."""
        if self.current_3d_mesh is None:
            messagebox.showwarning("No Mesh", "Please generate a 3D mesh first before displaying.")
            return
        
        try:
            MeshViewerPopup(self.root, self.current_3d_mesh)
        except Exception as e:
            messagebox.showerror("Error", f"Error opening mesh viewer:\n{str(e)}")
    
    def save_3d_mesh(self):
        """Save the current 3D mesh as STL file."""
        if self.current_3d_mesh is None:
            messagebox.showwarning("No Mesh", "Please generate a 3D mesh first before saving.")
            return
        
        try:
            file_path = filedialog.asksaveasfilename(
                defaultextension=".stl",
                filetypes=[("STL files", "*.stl"), ("All files", "*.*")],
                initialfile="Microfluidic_Geometry",
                title="Save STL File"
            )
            
            if file_path:
                self.current_3d_mesh.export(file_path)
                messagebox.showinfo("Success", f"STL file saved successfully!\n\n{file_path}")
        except Exception as e:
            messagebox.showerror("Save Error", f"Error saving STL file:\n{str(e)}")

# ==========================================================================================
# SECTION 4: MAIN FUNCTION
# ==========================================================================================
def main():
    """Main function to start the GUI application."""
    root = tk.Tk()
    root.geometry("1600x900")
    
    app = MicrofluidicGUI(root)
    root.mainloop()

# ==========================================================================================
# ENTRY POINT
# ==========================================================================================
if __name__ == "__main__":
    main()