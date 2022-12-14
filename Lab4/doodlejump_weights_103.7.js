var sensorWeb = [[-250, -445], [-200, -445], [-150, -445], [-100, -445], [-50, -445], [0, -445], [50, -445], [100, -445], [150, -445], [200, -445], [-250, -370], [-200, -370], [-150, -370], [-100, -370], [-50, -370], [0, -370], [50, -370], [100, -370], [150, -370], [200, -370], [-250, -295], [-200, -295], [-150, -295], [-100, -295], [-50, -295], [0, -295], [50, -295], [100, -295], [150, -295], [200, -295], [-250, -220], [-200, -220], [-150, -220], [-100, -220], [-50, -220], [0, -220], [50, -220], [100, -220], [150, -220], [200, -220], [-250, -145], [-200, -145], [-150, -145], [-100, -145], [-50, -145], [0, -145], [50, -145], [100, -145], [150, -145], [200, -145], [-250, -70], [-200, -70], [-150, -70], [-100, -70], [-50, -70], [0, -70], [50, -70], [100, -70], [150, -70], [200, -70], [-250, 5], [-200, 5], [-150, 5], [-100, 5], [-50, 5], [0, 5], [50, 5], [100, 5], [150, 5], [200, 5], [-250, 80], [-200, 80], [-150, 80], [-100, 80], [-50, 80], [0, 80], [50, 80], [100, 80], [150, 80], [200, 80], [-250, 155], [-200, 155], [-150, 155], [-100, 155], [-50, 155], [0, 155], [50, 155], [100, 155], [150, 155], [200, 155], [-250, 230], [-200, 230], [-150, 230], [-100, 230], [-50, 230], [0, 230], [50, 230], [100, 230], [150, 230], [200, 230], [-250, 305], [-200, 305], [-150, 305], [-100, 305], [-50, 305], [0, 305], [50, 305], [100, 305], [150, 305], [200, 305], [-250, 380], [-200, 380], [-150, 380], [-100, 380], [-50, 380], [0, 380], [50, 380], [100, 380], [150, 380], [200, 380]];

var W = [[-1.56, -0.09, 1.55, 0.69, 0.45], [-0.41, 0.32, -0.07, 1.05, 1.68], [-0.87, -0.55, -0.52, -2.26, 0.7], [-0.04, 1.04, 1.04, -1.5, 0.08], [0.13, -0.82, -0.46, -1.41, -0.01], [-0.43, 0.0, 0.19, 1.03, -1.35], [1.05, -0.08, -1.39, 0.37, 0.85], [-1.71, 1.1, -0.24, 0.31, -0.07], [-0.63, 1.34, 0.19, 2.32, -0.76], [0.98, -2.52, -1.71, 0.4, -2.17], [1.12, -0.56, -0.14, -1.02, 0.0], [-0.79, 0.57, 0.32, 0.76, -0.39], [0.55, -0.24, 1.38, -0.21, 0.93], [-0.42, -0.92, 0.96, 2.61, -1.33], [0.25, 2.8, 2.36, 0.13, 0.57], [0.84, -1.07, -1.12, -2.19, -0.39], [0.04, 1.13, -0.11, 0.36, -0.32], [-0.55, 1.62, 0.07, 0.52, 1.86], [0.07, -1.22, -1.08, -0.9, -1.1], [-0.93, 0.99, -0.26, 0.81, 0.14], [0.09, -0.33, 1.05, 0.07, -0.73], [0.77, -0.14, -0.08, 1.28, -0.02], [0.9, -1.39, 0.28, 0.73, -0.3], [1.8, 0.11, -0.11, -1.3, -1.34], [2.31, 0.49, 0.06, -0.2, -1.59], [-0.04, 1.17, 1.03, 0.42, -0.16], [0.25, -1.4, 1.51, -0.25, 0.78], [1.46, 1.03, -1.46, 2.02, -0.07], [-1.95, 0.87, -0.01, -0.12, 0.59], [0.35, -0.18, 0.04, 0.57, 0.67], [-0.6, -1.02, 0.3, 0.89, 0.48], [-0.32, 0.19, -0.06, 1.46, 1.81], [2.05, 0.34, -0.37, -0.71, -1.99], [-2.48, 1.1, 0.94, -0.58, -0.14], [-0.18, 1.91, -0.03, 0.18, 1.63], [0.18, -1.18, 1.94, 1.03, 2.39], [0.41, 0.92, -0.31, -1.24, 0.7], [-0.5, 1.19, -1.67, 0.6, 0.39], [-1.14, -2.59, -0.5, -0.53, 0.61], [0.46, -0.97, 1.2, 1.48, -0.72], [0.12, -1.98, -1.23, 0.59, -2.59], [-0.32, -0.63, 0.63, 0.09, -1.44], [-1.75, -0.7, 1.66, 0.04, -1.09], [-0.47, 0.95, -0.84, -1.31, 0.5], [0.96, 1.03, -0.57, -0.3, -0.83], [-2.76, -0.71, -0.45, -0.51, -0.35], [0.97, -1.04, 1.65, 0.22, 0.12], [-1.37, -0.28, -0.19, -0.41, -0.03], [-0.5, -0.27, 0.55, 0.15, 0.21], [-0.48, 0.94, -0.01, -0.93, 0.01], [-0.57, 0.18, -0.52, 1.78, -0.08], [0.1, 0.77, -0.42, -0.01, 0.0], [0.05, -0.87, 0.33, 0.54, 1.08], [-0.01, -1.23, 0.17, 0.86, -0.75], [-0.08, 0.36, 1.43, 0.05, 1.27], [0.34, -1.32, -0.27, 0.59, -0.02], [1.88, -0.06, 2.15, -0.06, -1.05], [-0.92, -1.91, 1.7, 0.11, -0.94], [1.02, -0.91, -0.52, 0.14, 0.0], [-0.12, 1.02, 0.74, 0.0, 1.29], [-0.07, -2.09, -1.53, -0.36, -1.19], [-0.05, -0.5, 0.2, -0.9, 2.17], [-0.83, 0.44, -0.93, 0.9, -1.01], [1.2, -1.38, -0.94, -1.21, -0.34], [1.49, 1.62, 1.3, 0.5, -2.11], [1.51, 0.49, 0.78, -0.07, -0.09], [0.05, 1.57, 0.65, 0.26, 2.61], [1.44, 1.74, -0.14, 0.58, -1.0], [-0.75, 0.23, 0.1, 0.44, 1.83], [-1.18, -0.47, 0.57, -0.68, 1.21], [1.1, 1.07, 0.31, 0.24, 0.85], [0.02, -0.91, -1.61, 0.15, 0.94], [-0.16, -0.71, 0.38, 0.53, -0.26], [2.06, 0.63, -0.61, -0.39, -0.6], [-1.1, 1.51, 0.25, 0.63, 0.87], [-1.22, -0.2, -0.66, -0.8, -0.79], [0.37, 0.23, -0.16, 0.18, 0.02], [-0.22, 1.43, 0.83, 1.32, 1.26], [0.22, -0.3, 0.19, -0.1, 0.64], [-0.89, 0.33, -1.1, 0.12, -0.66], [0.52, -0.76, 0.58, -1.03, 0.43], [1.51, -1.0, -0.73, 0.01, 0.15], [0.97, 2.35, -1.39, 0.19, -0.68], [-2.06, 0.35, 1.12, -0.4, -0.22], [0.22, -1.4, 0.38, -0.6, 1.55], [0.62, -1.28, 0.23, 0.03, 0.49], [-0.04, -1.53, 0.75, -0.11, -2.81], [0.62, 0.86, -1.09, 0.4, 0.16], [-1.37, 1.08, 0.55, -1.7, -1.68], [-0.35, -1.29, 1.19, -0.06, -0.31], [1.44, -1.08, -0.13, 1.21, -0.59], [-0.99, -1.99, 0.48, 0.47, 0.21], [-1.29, 0.46, -0.06, 0.66, 1.5], [0.47, 0.65, -0.45, 0.41, 1.36], [-1.64, -0.13, -0.65, 0.77, 0.02], [0.55, -0.12, 0.78, 0.41, 0.64], [0.17, -0.98, -1.78, 1.13, 0.31], [-0.88, -0.05, 0.0, -1.44, 0.34], [-0.61, 0.29, 1.54, -0.52, -0.39], [-0.11, -0.95, 0.36, 0.21, -0.15], [0.22, -0.42, 1.1, 0.8, 2.19], [0.52, -0.17, 0.33, 0.92, 0.33], [-0.49, -2.51, 0.74, 0.69, -1.26], [0.2, -2.4, -1.39, -1.03, 0.53], [0.39, 1.41, 0.0, -0.37, 1.26], [0.06, 0.48, -0.45, -2.2, 0.06], [-0.12, 0.02, -0.56, -0.4, -0.36], [1.46, 0.16, -1.43, -1.08, -0.01], [0.25, 1.02, 0.5, 1.5, -1.68], [-2.54, -0.25, 1.21, -0.77, -1.55], [0.91, 1.18, -0.06, 0.77, -0.41], [-0.08, 0.41, 0.52, 1.28, -0.94], [0.25, -0.3, -0.55, 1.88, -0.25], [-0.43, 1.1, -2.11, 1.15, -0.21], [0.95, 1.52, -0.02, 0.61, -1.16], [0.88, 0.01, 1.95, 1.01, -0.71], [0.88, 2.36, -0.35, -1.36, -0.44], [1.55, 1.04, -0.45, -0.08, -0.48], [1.46, 0.76, 2.17, 1.74, -0.86], [1.0, 1.77, 1.56, 0.93, -0.74], [-1.68, 1.03, -0.41, 0.12, -1.48], [0.74, -1.06, 0.92, -0.04, -0.09], [0.13, -0.58, -0.04, -0.03, 1.13]];

var W2 = [[-0.96, 0.83, 0.61], [1.1, 0.42, 0.65], [0.0, 0.09, 0.47], [1.25, 1.87, -0.76], [-1.37, 0.01, 0.23]];