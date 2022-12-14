var sensorWeb = [[-250, -445], [-200, -445], [-150, -445], [-100, -445], [-50, -445], [0, -445], [50, -445], [100, -445], [150, -445], [200, -445], [-250, -370], [-200, -370], [-150, -370], [-100, -370], [-50, -370], [0, -370], [50, -370], [100, -370], [150, -370], [200, -370], [-250, -295], [-200, -295], [-150, -295], [-100, -295], [-50, -295], [0, -295], [50, -295], [100, -295], [150, -295], [200, -295], [-250, -220], [-200, -220], [-150, -220], [-100, -220], [-50, -220], [0, -220], [50, -220], [100, -220], [150, -220], [200, -220], [-250, -145], [-200, -145], [-150, -145], [-100, -145], [-50, -145], [0, -145], [50, -145], [100, -145], [150, -145], [200, -145], [-250, -70], [-200, -70], [-150, -70], [-100, -70], [-50, -70], [0, -70], [50, -70], [100, -70], [150, -70], [200, -70], [-250, 5], [-200, 5], [-150, 5], [-100, 5], [-50, 5], [0, 5], [50, 5], [100, 5], [150, 5], [200, 5], [-250, 80], [-200, 80], [-150, 80], [-100, 80], [-50, 80], [0, 80], [50, 80], [100, 80], [150, 80], [200, 80], [-250, 155], [-200, 155], [-150, 155], [-100, 155], [-50, 155], [0, 155], [50, 155], [100, 155], [150, 155], [200, 155], [-250, 230], [-200, 230], [-150, 230], [-100, 230], [-50, 230], [0, 230], [50, 230], [100, 230], [150, 230], [200, 230], [-250, 305], [-200, 305], [-150, 305], [-100, 305], [-50, 305], [0, 305], [50, 305], [100, 305], [150, 305], [200, 305], [-250, 380], [-200, 380], [-150, 380], [-100, 380], [-50, 380], [0, 380], [50, 380], [100, 380], [150, 380], [200, 380]];

var W = [[0.61, -0.35, -0.46, 0.83, 0.43], [-0.24, -1.34, 1.61, 1.15, 2.0], [0.85, 0.31, -1.2, -0.5, -0.05], [-0.02, -0.36, -0.69, 0.36, -1.27], [0.21, -0.08, -1.64, 0.54, -0.24], [-0.01, -1.19, 0.07, -0.45, 2.97], [0.7, -2.1, 0.19, 0.3, 0.6], [-0.69, -0.07, 1.21, -0.49, 0.01], [-0.15, 1.27, 0.0, -0.74, -0.43], [-0.09, 0.77, 1.86, 1.51, -1.33], [0.05, 2.37, -0.91, -0.99, -0.12], [-0.67, -0.25, 0.75, -0.72, 0.69], [1.85, -0.51, -0.64, -0.28, 0.83], [-1.5, 0.68, -0.74, -0.73, -0.41], [-0.12, 0.7, -1.65, -0.72, 1.12], [0.26, -0.77, 2.06, 0.06, 0.75], [-1.2, 0.08, 1.63, -0.12, 0.67], [-2.24, -0.25, 0.0, 0.13, 0.34], [-0.18, -0.66, -0.47, -2.38, -0.37], [-1.42, 1.25, 1.63, -0.51, -0.81], [-1.8, 0.12, -1.19, -1.25, 0.4], [-1.69, -0.34, 0.91, -2.41, -1.78], [1.11, -0.5, -0.32, 1.17, 0.62], [1.11, 0.46, 0.96, 1.66, 1.68], [-1.13, 0.4, 0.17, 0.96, -0.54], [-0.31, -0.28, -0.46, 0.69, -0.44], [-0.16, 0.32, 1.01, -0.3, -0.24], [-0.42, -0.71, 0.8, 0.88, 0.43], [-2.99, -1.0, 0.12, 1.69, -0.18], [1.6, 1.22, -0.9, 0.57, -1.11], [2.29, 0.0, -0.27, 0.1, 0.36], [-1.07, -0.1, -0.19, -0.45, 2.25], [-2.13, 0.82, 1.0, -0.56, 0.51], [-1.02, -1.46, -0.62, -0.67, 0.99], [1.22, 0.1, -0.32, -1.03, -1.46], [-0.85, -0.28, -0.99, -0.68, 0.59], [0.5, -0.35, 0.07, -1.87, -1.09], [-3.05, 0.27, 0.35, -1.24, 0.58], [-0.85, 0.04, -0.45, -1.33, -0.5], [1.53, -0.04, 1.45, 2.2, 1.17], [0.67, 1.29, 0.94, -0.64, -0.16], [0.21, 0.22, -1.05, -0.05, 0.28], [-2.46, 1.39, 0.54, -1.44, 0.25], [0.65, -0.35, -0.85, -0.08, 0.55], [1.63, -1.61, 1.34, -2.49, 0.33], [-1.65, 1.88, -0.22, 0.1, 0.09], [-1.21, 0.19, 0.18, -0.17, -2.13], [0.16, -1.25, 0.8, -0.31, -0.06], [-0.45, 0.08, -0.51, -0.43, 0.09], [-1.7, 0.66, 0.42, -0.01, 2.23], [1.17, 0.57, -0.11, 0.25, -1.05], [-2.36, 0.72, 0.13, 2.47, 0.65], [-0.65, -2.24, -0.47, -0.4, -1.06], [0.09, -0.27, -0.21, -1.65, -0.18], [0.0, -0.15, 1.32, -0.17, 0.26], [-0.77, 0.69, -1.46, 0.3, 0.46], [-0.25, 0.17, -1.07, -0.63, -0.38], [-0.23, -1.69, -0.13, 0.55, 0.29], [-0.1, -1.01, -0.73, -0.68, -0.92], [-0.86, -1.44, -0.72, -0.26, 0.29], [0.04, 0.19, 1.09, 0.14, 0.74], [1.54, 0.36, -0.23, 1.8, 0.79], [0.7, -1.61, 1.18, 1.82, 1.22], [-1.1, -1.22, -0.2, -1.23, 1.97], [-0.14, 0.17, 0.87, -2.84, 0.68], [-0.43, 0.92, -0.55, -0.86, 0.69], [-0.01, 0.69, 0.1, 1.93, 0.33], [-1.58, -0.79, -0.35, 0.14, 0.98], [-0.52, -1.89, 1.65, -0.73, 0.3], [1.22, -1.72, -0.1, -0.83, -0.38], [-0.41, 1.06, -0.54, 0.06, -0.77], [0.86, 0.33, 0.3, -1.21, 1.44], [0.39, 1.3, 0.48, 0.64, -1.88], [-0.24, 1.51, 0.64, 0.45, -0.51], [0.0, 1.37, -0.15, 0.13, 0.02], [0.33, 0.8, 0.52, -0.33, -0.81], [1.92, 1.18, -2.32, -0.13, -0.19], [-1.95, -0.02, -0.41, 0.71, -1.64], [-0.38, 1.0, -0.24, 0.92, -2.16], [-1.03, 0.37, 0.78, -0.05, 0.02], [0.14, 0.15, 0.3, 0.74, 0.99], [0.45, 0.77, 1.86, -0.37, 1.94], [0.14, 1.11, -1.25, 0.84, -0.01], [0.55, 0.48, -1.97, 0.21, -1.66], [-0.79, 0.58, -0.78, -1.05, -0.24], [-0.04, -0.36, -1.07, -0.53, -0.09], [1.46, 0.45, -1.61, 1.25, -1.33], [1.6, -0.23, 1.08, -1.2, -0.81], [-0.35, 0.26, -1.38, -2.45, -0.71], [0.83, -1.77, -0.71, -1.16, -0.73], [0.31, 0.25, -0.19, 0.84, 1.23], [0.03, -0.24, 2.27, 2.11, 2.01], [-2.07, -1.22, 0.63, -0.13, 1.19], [0.08, -0.2, 0.7, 1.27, -0.41], [-0.11, -0.65, 0.12, -1.12, 0.14], [-0.41, 0.0, 0.05, 0.34, -0.8], [-0.96, -1.12, 0.31, -0.08, 1.25], [-0.45, -0.42, -0.64, -0.06, 0.23], [-0.05, -1.77, 0.54, -1.47, 0.04], [-1.37, 0.4, -1.23, 1.18, -0.13], [1.25, 0.52, -0.28, -0.85, -0.12], [0.0, -0.22, -0.05, 2.42, -0.41], [0.39, -0.74, 0.49, 1.04, -0.7], [-0.35, 0.12, -0.01, -0.4, 1.12], [0.23, -0.71, 0.77, -0.08, 0.91], [-0.51, -1.18, -0.55, 0.15, 1.25], [-1.02, 0.24, 0.52, -0.36, 0.82], [1.03, -1.11, 0.75, -1.5, -0.16], [-0.07, 0.15, -0.19, -1.54, 1.41], [-0.07, -1.51, -0.08, -0.24, 0.65], [-1.05, 0.15, 1.44, 2.4, 0.37], [0.65, 0.74, -2.03, -1.06, -0.56], [-0.17, -1.46, 0.92, -1.0, 0.35], [0.89, 1.2, 2.35, -0.31, 1.58], [-0.12, -0.7, -0.44, 0.03, -0.08], [-1.68, -0.81, -0.74, -1.44, 0.19], [0.38, -1.62, -0.99, -0.76, 0.46], [-0.14, 0.19, 2.19, -0.63, -0.44], [0.16, 0.27, 0.03, 0.95, -2.87], [1.3, -0.2, 0.45, 0.6, -0.67], [-1.35, 0.38, 0.47, -2.84, -0.4], [0.04, -0.97, 1.28, 0.61, 1.76], [1.1, 0.98, 0.51, -0.95, 0.75]];

var W2 = [[0.42, -0.53, -0.14], [1.28, -0.64, -0.45], [-0.5, 0.78, -2.91], [-0.05, 1.94, -0.46], [-0.85, 0.44, -0.48]];
