import socketio

sio = socketio.Client()

@sio.event
def connect():
    print('Connected to node server')

@sio.event
def event(message):
    print(f'Command received from socket io server: ', message);

sio.connect('http://localhost:3000')
sio.wait()


# This is the Python Application