from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload():
    try:
        name = request.form['name']
        age = request.form['age']
        file = request.files['file']
        
        # Save file (optional)
        file.save(f"./uploads/{file.filename}")
        
        return jsonify({"message": f"Data submitted successfully: {name}, {age}"})
    except Exception as e:
        return jsonify({"message": "Error processing request"}), 500

if __name__ == '__main__':
    app.run(debug=True)
