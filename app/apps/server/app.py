from flask import Flask
app = Flask(__name__, static_folder='../client/dist', static_url_path="/")

@app.route('/api/foo')
def foo():
    return 'foo!'

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return app.send_static_file("index.html")
