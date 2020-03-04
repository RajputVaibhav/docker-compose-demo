from flask import Flask, send_from_directory
from flask import url_for
from flask_cors import CORS

app = Flask(__name__, static_url_path='/static')
CORS(app)

@app.route('/file')
def sendfile():
    return "<a href=%s>file</a>" % url_for('static', filename='shared.txt')

@app.route('/')
def sendtext():
    return send_from_directory('static', filename='shared.txt')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050)