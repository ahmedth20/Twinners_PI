from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO
import joblib
import pandas as pd

app = Flask(__name__)

# ✅ Activer CORS correctement avant tout le reste
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

# ✅ Initialiser SocketIO après CORS
socketio = SocketIO(app, cors_allowed_origins="*")

# Charger le modèle et l'encodeur
model = joblib.load('emergency_model.pkl')
label_encoder = joblib.load('label_encoder.pkl')

@app.route('/', methods=['GET'])
def index():
    return "Bienvenue sur l'API de prédiction !"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    df = pd.DataFrame([data])
    prediction = model.predict(df)
    emergency_level = label_encoder.inverse_transform(prediction)[0]
    return jsonify({'emergencyLevel': emergency_level})

if __name__ == '__main__':
    socketio.run(app, port=5001)
