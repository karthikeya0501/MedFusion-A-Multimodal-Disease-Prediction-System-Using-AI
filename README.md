# MedFusion: Pneumonia Detection Using Deep Learning

## Introduction
MedFusion is an AI-powered application developed to detect pneumonia from chest X-ray images using deep learning techniques. The system leverages a trained TensorFlow/Keras model and provides an interactive interface using Gradio, allowing users to easily upload images and receive predictions.

This project demonstrates how machine learning can be applied to healthcare problems and how models can be deployed for real-time usage with minimal setup.

---

## Objective
The primary objective of this project is to build a system that:
- Detects pneumonia from chest X-ray images
- Provides quick and reliable predictions
- Demonstrates deployment of AI models using a simple interface
- Serves as an educational tool for understanding medical AI systems

---

## Problem Statement
Pneumonia is a serious lung infection that can be life-threatening if not diagnosed early. Traditional diagnosis requires expert analysis of chest X-rays, which may not always be readily available.

This project aims to:
- Assist in preliminary diagnosis
- Reduce analysis time
- Provide AI-based support tools for healthcare

---

## Solution Overview
The system allows users to upload a chest X-ray image. The image is processed and passed through a trained deep learning model, which predicts whether the image indicates pneumonia or not.

### Workflow
1. User uploads a chest X-ray image
2. Image is resized to match model input size
3. Pixel values are normalized
4. Image is passed to the trained model
5. Model outputs prediction probability
6. Result and confidence score are displayed

---

## Key Features
- User-friendly interface using Gradio
- Real-time image prediction
- Confidence score output
- Lightweight and easy to deploy
- Works on local system and Kaggle environment

---

## Technology Stack

### Machine Learning
- TensorFlow / Keras
- NumPy
- PIL (Python Imaging Library)

### Interface
- Gradio (interactive UI for ML models)

### Development
- Python
- VS Code (development environment)

---

## Project Structure

MedFusion/
│── app.py # Gradio application
│── model.keras # Trained deep learning model
│── classification.ipynb # Model training notebook
│── requirements.txt # Dependencies
│── README.md # Project documentation
│── results/
│ ├── confusion_matrix.png
│ ├── accuracy_plot.png
│ └── sample_output.png


---

## Installation Guide

### Step 1: Clone Repository

git clone https://github.com/your-username/MedFusion.git

cd MedFusion


### Step 2: Install Dependencies

pip install -r requirements.txt


---

## Running the Application

Run the application using:


python app.py


Gradio will generate a local URL:


http://127.0.0.1:7860


Open it in your browser to use the application.

---

## Model Details
- Framework: TensorFlow / Keras
- Model Type: Convolutional Neural Network (CNN)
- Input Size: 224x224 pixels
- Output: Binary classification
  - NORMAL
  - PNEUMONIA

### Preprocessing Steps
- Resize image to 224x224
- Normalize pixel values (0–1 scaling)
- Convert to array format
- Expand dimensions for model input

---

## Prediction Logic

```python
def predict_pneumonia(img):
    img = img.resize((224,224))
    img = np.array(img)/255
    img = np.expand_dims(img, axis=0)

    prediction = model.predict(img)

    if prediction[0][0] > 0.5:
        return "PNEUMONIA DETECTED"
    else:
        return "NORMAL"
``` id="ye5ok6"

---

## Model Evaluation
The model performance is evaluated using standard metrics:

- Accuracy
- Precision
- Recall
- F1-score
- Confusion Matrix

These metrics help in understanding the effectiveness of the model.

---

## Results
(Add your screenshots here)

- Confusion Matrix visualization
- Accuracy graph
- Sample predictions

---

## Use Cases
- Educational demonstrations of AI in healthcare
- Medical image classification research
- Prototype for AI-assisted diagnosis systems
- Student projects and academic research

---

## Advantages
- Easy to use interface
- Fast prediction results
- Lightweight deployment
- No complex backend required
- Works in notebook environments

---

## Limitations
- Limited to pneumonia detection only
- Depends on dataset quality
- Not suitable for clinical use without validation
- No patient data storage
- No multi-modal input support yet

---

## Future Enhancements
- Multi-disease detection system
- Integration with Flask for full web application
- User authentication and patient history
- Explainable AI (Grad-CAM heatmaps)
- Mobile application support

---

## Disclaimer
This project is intended for educational and research purposes only.  
It should not be used as a substitute for professional medical advice or diagnosis.

---

## Author
Gadi Raghunadha Karthikeya
Kona Yeswanth

---

## License
This project is licensed under the MIT License.

