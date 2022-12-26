var sensorWeb = [[-250, -445], [-200, -445], [-150, -445], [-100, -445], [-50, -445], [0, -445], [50, -445], [100, -445], [150, -445], [200, -445], [-250, -370], [-200, -370], [-150, -370], [-100, -370], [-50, -370], [0, -370], [50, -370], [100, -370], [150, -370], [200, -370], [-250, -295], [-200, -295], [-150, -295], [-100, -295], [-50, -295], [0, -295], [50, -295], [100, -295], [150, -295], [200, -295], [-250, -220], [-200, -220], [-150, -220], [-100, -220], [-50, -220], [0, -220], [50, -220], [100, -220], [150, -220], [200, -220], [-250, -145], [-200, -145], [-150, -145], [-100, -145], [-50, -145], [0, -145], [50, -145], [100, -145], [150, -145], [200, -145], [-250, -70], [-200, -70], [-150, -70], [-100, -70], [-50, -70], [0, -70], [50, -70], [100, -70], [150, -70], [200, -70], [-250, 5], [-200, 5], [-150, 5], [-100, 5], [-50, 5], [0, 5], [50, 5], [100, 5], [150, 5], [200, 5], [-250, 80], [-200, 80], [-150, 80], [-100, 80], [-50, 80], [0, 80], [50, 80], [100, 80], [150, 80], [200, 80], [-250, 155], [-200, 155], [-150, 155], [-100, 155], [-50, 155], [0, 155], [50, 155], [100, 155], [150, 155], [200, 155], [-250, 230], [-200, 230], [-150, 230], [-100, 230], [-50, 230], [0, 230], [50, 230], [100, 230], [150, 230], [200, 230], [-250, 305], [-200, 305], [-150, 305], [-100, 305], [-50, 305], [0, 305], [50, 305], [100, 305], [150, 305], [200, 305], [-250, 380], [-200, 380], [-150, 380], [-100, 380], [-50, 380], [0, 380], [50, 380], [100, 380], [150, 380], [200, 380]];

var W = [[-1.56, -0.08, 1.54, 0.68, 0.46], [-0.4, 0.37, -0.09, 1.1, 1.73], [-0.91, -0.56, -0.48, -2.23, -0.02], [-0.03, 1.01, 1.07, -1.57, 0.08], [0.07, -0.81, -0.47, -1.35, 0.0], [-0.39, 0.02, 0.24, 1.0, -1.38], [1.02, -0.12, -1.37, 0.39, 0.87], [-1.75, 1.05, -0.27, 0.34, 0.0], [-0.7, 1.35, 0.17, 2.31, -0.8], [0.97, -2.47, -1.69, 0.44, -2.18], [1.11, -0.57, -0.06, -1.03, -0.06], [-0.72, 0.54, 0.36, 0.82, -0.41], [0.54, -0.24, 1.38, -0.25, 0.94], [-0.39, -0.91, 0.96, 2.62, -1.32], [0.24, 2.85, 2.33, 0.09, 0.54], [0.86, -1.09, -1.1, -2.22, -0.36], [0.06, 1.11, -0.1, 0.36, -0.36], [-0.58, 1.55, 0.07, 0.54, 1.88], [0.08, -1.19, -1.08, -0.93, -1.14], [-0.8, 0.99, -0.26, 0.84, 0.1], [0.07, -0.35, 1.06, 0.08, -0.74], [0.77, -0.13, -0.1, 1.23, 0.03], [0.93, -1.32, 0.26, 0.62, -0.32], [1.8, 0.07, -0.11, -1.35, -1.4], [2.32, 0.41, 0.03, -0.2, -1.62], [-0.11, 1.21, 1.06, 0.49, -0.13], [0.24, -1.39, 1.51, -0.28, 0.79], [1.41, 0.99, -1.5, 2.05, -0.11], [-1.93, 0.77, -0.07, -0.17, 0.59], [0.36, -0.19, -0.01, 0.64, 0.7], [-0.64, -1.04, 0.29, 0.88, -1.68], [-0.35, 0.16, -0.02, 1.38, 1.81], [2.08, 0.37, -0.33, -0.71, -1.97], [-2.51, 1.09, 0.97, -0.58, -0.23], [-0.18, 1.95, -0.04, 0.15, 1.66], [0.23, -1.17, 1.98, 1.02, 2.38], [0.41, 0.96, -0.28, -1.26, 0.71], [-0.5, 1.17, -1.71, 0.62, 0.38], [-1.14, -2.64, -0.5, -0.55, 0.63], [0.47, -0.97, 1.24, 1.51, -0.72], [0.08, -1.94, -1.2, 0.57, -2.49], [-0.34, -0.71, 0.63, 0.05, -1.46], [-1.86, -0.7, 1.68, 0.05, -1.09], [-0.46, 0.97, -0.81, -1.3, 0.49], [0.97, 1.06, -0.56, -0.26, -0.79], [-2.74, -0.75, -0.5, -0.45, -0.27], [1.0, -1.09, 1.62, 0.22, 0.08], [-1.43, -0.28, -0.19, -0.43, -0.03], [-0.46, -0.22, 0.61, 0.12, 0.25], [-0.41, 0.9, -0.04, -0.99, 0.02], [-0.57, 0.19, -0.52, 1.84, -0.07], [0.1, 0.81, -0.48, 0.02, 0.07], [0.06, -0.85, 0.31, 0.49, 1.11], [0.03, -1.21, 0.18, 0.85, -0.74], [-0.07, 0.33, 1.41, 0.05, 1.24], [0.35, -1.33, -0.29, 0.62, -0.02], [1.88, -0.01, 2.17, -0.13, -0.99], [-0.96, -1.88, 1.7, 0.2, -0.91], [1.0, -0.89, -0.49, 0.13, 0.04], [-0.17, 1.04, 0.71, 0.09, 1.31], [-0.05, -2.12, -1.59, -0.42, -1.14], [-0.05, -0.45, 0.24, -0.89, 2.1], [-0.8, 0.43, -0.97, 0.86, -0.99], [1.27, -1.44, -0.92, -1.18, -0.34], [1.42, 1.63, 1.28, 0.51, -2.09], [1.58, 0.54, 0.9, -0.12, -0.09], [0.05, 1.58, 0.58, 0.25, 2.61], [1.46, 1.75, -0.15, 0.58, -0.99], [-0.73, 0.27, 0.12, 0.39, 1.81], [-1.15, -0.47, 0.52, -0.66, 1.23], [1.15, 1.02, 0.24, 0.26, 0.87], [0.05, -0.94, -1.67, 0.16, 0.97], [-0.17, -0.62, 0.38, 0.5, -0.27], [2.07, 0.64, -0.63, -0.38, -0.6], [-1.12, 1.5, 0.25, 0.64, 0.86], [-1.2, -0.13, -0.64, -0.82, -0.78], [0.39, 0.23, -0.16, 0.22, 0.08], [-0.19, 1.36, 0.81, 1.31, 1.22], [0.25, -0.31, 0.26, 0.0, 0.68], [-0.85, 0.38, -1.21, 0.08, -0.72], [0.53, -0.79, 0.57, -1.05, 0.41], [1.53, -1.01, -0.73, 0.01, 0.13], [1.02, 2.35, -1.39, 0.19, -0.68], [-2.05, 0.32, 1.1, -0.44, -0.12], [0.23, -1.39, 0.3, -0.7, 1.51], [0.65, -1.32, 0.24, 0.0, 0.48], [-0.11, -1.5, 0.78, -0.05, -2.81], [0.62, 0.86, -1.01, 0.42, 0.12], [-1.42, 1.13, 0.52, -1.72, -1.68], [-0.4, -1.27, 1.23, -0.1, -0.26], [1.47, -1.02, -0.14, 1.11, -0.63], [-1.0, -2.02, 0.46, 0.56, 0.24], [-1.29, 0.46, -0.06, 0.64, 1.47], [0.45, 0.62, -0.45, 0.43, 0.29], [-1.69, -0.25, -0.63, 0.77, 0.04], [0.46, -0.12, 0.76, 0.39, 0.59], [0.17, -0.98, -1.8, 1.13, 0.22], [-0.9, -0.02, -0.05, -1.45, 0.28], [-0.71, 0.39, 1.53, -0.53, -0.33], [-0.13, -0.92, 0.41, 0.24, -0.19], [0.24, -0.41, 1.11, 0.84, 2.18], [0.56, -0.23, 0.28, 0.91, 0.36], [-0.46, -2.57, 0.8, 0.69, -1.25], [0.08, -2.47, -1.41, -1.05, 0.59], [0.43, 1.39, 0.0, -0.42, 1.33], [0.07, 0.47, -0.45, -2.21, 0.09], [-0.23, 0.01, -0.53, -0.38, -0.33], [1.46, 0.19, -1.55, -1.08, -0.1], [0.31, 1.08, 0.52, 1.54, -1.64], [-2.59, -0.28, 1.17, -0.81, -1.57], [0.98, 1.17, -0.01, 0.75, -0.39], [-0.08, 0.41, 0.55, 1.28, -0.9], [0.28, -0.31, -0.58, 1.95, -0.28], [-0.41, 1.14, -2.1, 1.14, -0.2], [0.97, 1.6, -0.01, 0.63, 0.74], [0.9, -0.08, 2.0, 1.05, -0.65], [0.87, 2.35, -0.34, -1.37, -0.46], [1.57, 1.03, -0.41, -0.08, -0.5], [1.47, 0.75, 2.17, 1.76, -0.87], [1.02, 1.71, -1.44, 0.95, -0.72], [-1.67, 1.07, -0.36, 0.13, -1.42], [0.73, -1.13, 0.97, -0.03, -0.1], [0.09, -0.68, 0.01, -0.08, 1.1]];

var W2 = [[-0.99, 0.86, 0.68], [1.13, 0.41, 0.64], [0.03, 0.16, 0.53], [1.25, 1.87, -0.71], [-1.38, 0.07, 0.26]];
